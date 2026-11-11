import { Router, type IRouter, type Response } from "express";
import { and, desc, eq, inArray } from "drizzle-orm";
import {
  CreateQuestionBody,
  CreateQuestionResponse,
  GetQuestionParams,
  GetQuestionResponse,
  ListQuestionReviewsParams,
  ListQuestionReviewsResponse,
  ListQuestionsQueryParams,
  ListQuestionsResponse,
  ReviewQuestionBody,
  ReviewQuestionParams,
  ReviewQuestionResponse,
  UpdateQuestionBody,
  UpdateQuestionParams,
  UpdateQuestionResponse,
} from "@workspace/api-zod";
import {
  db,
  questionBankAuditLogsTable,
  questionReviewsTable,
  examTracksTable,
  questionSourceLinksTable,
  questionSourcesTable,
  questionsTable,
} from "@workspace/db";

const router: IRouter = Router();

type QuestionRow = typeof questionsTable.$inferSelect;

function getAdminUserId(res: Response): string {
  return res.locals.adminUserId as string;
}

function validateAnswerOptions(
  options: Array<{ id: string; text: string }>,
  correctOptionId: string,
): string | undefined {
  const optionIds = options.map((option) => option.id);
  if (new Set(optionIds).size !== optionIds.length) {
    return "Option IDs must be unique.";
  }
  if (!optionIds.includes(correctOptionId)) {
    return "The correct option must exist in the options list.";
  }
  return undefined;
}

async function readQuestion(question: QuestionRow) {
  const links = await db
    .select({ sourceId: questionSourceLinksTable.sourceId })
    .from(questionSourceLinksTable)
    .where(eq(questionSourceLinksTable.questionId, question.id));

  return { ...question, sourceIds: links.map((link) => link.sourceId) };
}

async function validateTrackAndSources(
  examTrackId: string,
  sourceIds: string[],
): Promise<string | undefined> {
  const [track] = await db
    .select({ id: examTracksTable.id })
    .from(examTracksTable)
    .where(eq(examTracksTable.id, examTrackId))
    .limit(1);
  if (!track) {
    return "The selected exam track does not exist.";
  }

  if (new Set(sourceIds).size !== sourceIds.length) {
    return "Source IDs must be unique.";
  }

  const sources = await db
    .select({ id: questionSourcesTable.id })
    .from(questionSourcesTable)
    .where(inArray(questionSourcesTable.id, sourceIds));
  if (sources.length !== sourceIds.length) {
    return "Every question must reference existing sources.";
  }

  return undefined;
}

router.get("/questions", async (req, res): Promise<void> => {
  const parsed = ListQuestionsQueryParams.safeParse(req.query);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const questions = await db
    .select()
    .from(questionsTable)
    .where(
      and(
        parsed.data.examTrackId
          ? eq(questionsTable.examTrackId, parsed.data.examTrackId)
          : undefined,
        parsed.data.status
          ? eq(questionsTable.status, parsed.data.status)
          : undefined,
        parsed.data.difficulty
          ? eq(questionsTable.difficulty, parsed.data.difficulty)
          : undefined,
      ),
    )
    .orderBy(desc(questionsTable.updatedAt));

  const questionIds = questions.map((question) => question.id);
  const links =
    questionIds.length > 0
      ? await db
          .select()
          .from(questionSourceLinksTable)
          .where(inArray(questionSourceLinksTable.questionId, questionIds))
      : [];
  const sourceIdsByQuestion = new Map<string, string[]>();
  for (const link of links) {
    const ids = sourceIdsByQuestion.get(link.questionId) ?? [];
    ids.push(link.sourceId);
    sourceIdsByQuestion.set(link.questionId, ids);
  }

  res.json(
    ListQuestionsResponse.parse(
      questions.map((question) => ({
        ...question,
        sourceIds: sourceIdsByQuestion.get(question.id) ?? [],
      })),
    ),
  );
});

router.post("/questions", async (req, res): Promise<void> => {
  const parsed = CreateQuestionBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const optionError = validateAnswerOptions(
    parsed.data.options,
    parsed.data.correctOptionId,
  );
  if (optionError) {
    res.status(400).json({ error: optionError });
    return;
  }

  const sourceError = await validateTrackAndSources(
    parsed.data.examTrackId,
    parsed.data.sourceIds,
  );
  if (sourceError) {
    res.status(400).json({ error: sourceError });
    return;
  }

  const adminUserId = getAdminUserId(res);
  const question = await db.transaction(async (tx) => {
    const [created] = await tx
      .insert(questionsTable)
      .values({
        examTrackId: parsed.data.examTrackId,
        stem: parsed.data.stem,
        options: parsed.data.options,
        correctOptionId: parsed.data.correctOptionId,
        difficulty: parsed.data.difficulty,
        topic: parsed.data.topic,
        explanationBasic: parsed.data.explanationBasic,
        explanationAdvanced: parsed.data.explanationAdvanced,
        status: "draft",
        revision: 1,
        createdBy: adminUserId,
        updatedBy: adminUserId,
      })
      .returning();

    await tx.insert(questionSourceLinksTable).values(
      parsed.data.sourceIds.map((sourceId) => ({
        questionId: created.id,
        sourceId,
      })),
    );
    await tx.insert(questionBankAuditLogsTable).values({
      entityType: "question",
      entityId: created.id,
      action: "created",
      actorUserId: adminUserId,
      revision: created.revision,
    });

    return created;
  });

  res
    .status(201)
    .json(
      CreateQuestionResponse.parse({
        ...question,
        sourceIds: parsed.data.sourceIds,
      }),
    );
});

router.get("/questions/:questionId", async (req, res): Promise<void> => {
  const params = GetQuestionParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const [question] = await db
    .select()
    .from(questionsTable)
    .where(eq(questionsTable.id, params.data.questionId));
  if (!question) {
    res.status(404).json({ error: "Question not found." });
    return;
  }

  res.json(GetQuestionResponse.parse(await readQuestion(question)));
});

router.patch("/questions/:questionId", async (req, res): Promise<void> => {
  const params = UpdateQuestionParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const parsed = UpdateQuestionBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  if (Object.keys(parsed.data).length === 0) {
    res.status(400).json({ error: "At least one question field is required." });
    return;
  }

  const [current] = await db
    .select()
    .from(questionsTable)
    .where(eq(questionsTable.id, params.data.questionId));
  if (!current) {
    res.status(404).json({ error: "Question not found." });
    return;
  }

  const options = parsed.data.options ?? current.options;
  const correctOptionId =
    parsed.data.correctOptionId ?? current.correctOptionId;
  const optionError = validateAnswerOptions(options, correctOptionId);
  if (optionError) {
    res.status(400).json({ error: optionError });
    return;
  }

  const examTrackId = parsed.data.examTrackId ?? current.examTrackId;
  const sourceIds = parsed.data.sourceIds;
  const sourceError = await validateTrackAndSources(
    examTrackId,
    sourceIds ?? [],
  );
  if (sourceError && (parsed.data.examTrackId || sourceIds)) {
    res.status(400).json({ error: sourceError });
    return;
  }

  const questionFields = Object.fromEntries(
    Object.entries(parsed.data).filter(([key]) => key !== "sourceIds"),
  ) as Omit<typeof parsed.data, "sourceIds">;
  const adminUserId = getAdminUserId(res);
  const updated = await db.transaction(async (tx) => {
    const [question] = await tx
      .update(questionsTable)
      .set({
        ...questionFields,
        status: "draft",
        revision: current.revision + 1,
        updatedBy: adminUserId,
        updatedAt: new Date(),
      })
      .where(eq(questionsTable.id, current.id))
      .returning();

    if (sourceIds) {
      await tx
        .delete(questionSourceLinksTable)
        .where(eq(questionSourceLinksTable.questionId, current.id));
      await tx.insert(questionSourceLinksTable).values(
        sourceIds.map((sourceId) => ({
          questionId: current.id,
          sourceId,
        })),
      );
    }

    if (question) {
      await tx.insert(questionBankAuditLogsTable).values({
        entityType: "question",
        entityId: question.id,
        action: "updated",
        actorUserId: adminUserId,
        revision: question.revision,
      });
      if (current.status === "approved") {
        await tx.insert(questionBankAuditLogsTable).values({
          entityType: "question",
          entityId: question.id,
          action: "approval_revoked",
          actorUserId: adminUserId,
          revision: current.revision,
        });
      }
    }

    return question;
  });

  if (!updated) {
    res.status(404).json({ error: "Question not found." });
    return;
  }

  res.json(UpdateQuestionResponse.parse(await readQuestion(updated)));
});

router.get(
  "/questions/:questionId/reviews",
  async (req, res): Promise<void> => {
    const params = ListQuestionReviewsParams.safeParse(req.params);
    if (!params.success) {
      res.status(400).json({ error: params.error.message });
      return;
    }

    const [question] = await db
      .select({ id: questionsTable.id })
      .from(questionsTable)
      .where(eq(questionsTable.id, params.data.questionId));
    if (!question) {
      res.status(404).json({ error: "Question not found." });
      return;
    }

    const reviews = await db
      .select()
      .from(questionReviewsTable)
      .where(eq(questionReviewsTable.questionId, question.id))
      .orderBy(desc(questionReviewsTable.createdAt));

    res.json(ListQuestionReviewsResponse.parse(reviews));
  },
);

router.post(
  "/questions/:questionId/reviews",
  async (req, res): Promise<void> => {
    const params = ReviewQuestionParams.safeParse(req.params);
    if (!params.success) {
      res.status(400).json({ error: params.error.message });
      return;
    }

    const parsed = ReviewQuestionBody.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: parsed.error.message });
      return;
    }

    const [question] = await db
      .select()
      .from(questionsTable)
      .where(eq(questionsTable.id, params.data.questionId));
    if (!question) {
      res.status(404).json({ error: "Question not found." });
      return;
    }

    if (parsed.data.decision === "approved") {
      const sourceRows = await db
        .select({ verificationStatus: questionSourcesTable.verificationStatus })
        .from(questionSourceLinksTable)
        .innerJoin(
          questionSourcesTable,
          eq(questionSourceLinksTable.sourceId, questionSourcesTable.id),
        )
        .where(eq(questionSourceLinksTable.questionId, question.id));
      if (
        sourceRows.length === 0 ||
        sourceRows.some((source) => source.verificationStatus !== "verified")
      ) {
        res.status(409).json({
          error: "Every cited source must be verified before approval.",
        });
        return;
      }
    }

    const adminUserId = getAdminUserId(res);
    const review = await db.transaction(async (tx) => {
      const status =
        parsed.data.decision === "approved"
          ? "approved"
          : parsed.data.decision === "rejected"
            ? "rejected"
            : "draft";

      await tx
        .update(questionsTable)
        .set({ status, updatedBy: adminUserId, updatedAt: new Date() })
        .where(eq(questionsTable.id, question.id));

      const [createdReview] = await tx
        .insert(questionReviewsTable)
        .values({
          questionId: question.id,
          revision: question.revision,
          reviewerUserId: adminUserId,
          decision: parsed.data.decision,
          notes: parsed.data.notes ?? null,
        })
        .returning();

      await tx.insert(questionBankAuditLogsTable).values({
        entityType: "question",
        entityId: question.id,
        action:
          parsed.data.decision === "needs_changes"
            ? "changes_requested"
            : parsed.data.decision,
        actorUserId: adminUserId,
        revision: question.revision,
      });

      return createdReview;
    });

    res.status(201).json(ReviewQuestionResponse.parse(review));
  },
);

export default router;
