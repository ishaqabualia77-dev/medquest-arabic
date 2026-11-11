import { Router, type IRouter, type Response } from "express";
import { desc, eq, inArray } from "drizzle-orm";
import {
  CreateQuestionSourceBody,
  CreateQuestionSourceResponse,
  ListQuestionSourcesResponse,
  ReviewQuestionSourceBody,
  ReviewQuestionSourceParams,
  ReviewQuestionSourceResponse,
  UpdateQuestionSourceBody,
  UpdateQuestionSourceParams,
  UpdateQuestionSourceResponse,
} from "@workspace/api-zod";
import {
  db,
  questionBankAuditLogsTable,
  questionSourceLinksTable,
  questionSourcesTable,
  questionsTable,
} from "@workspace/db";

const router: IRouter = Router();

function getAdminUserId(res: Response): string {
  return res.locals.adminUserId as string;
}

router.get("/sources", async (_req, res): Promise<void> => {
  const sources = await db
    .select()
    .from(questionSourcesTable)
    .orderBy(desc(questionSourcesTable.createdAt));

  res.json(ListQuestionSourcesResponse.parse(sources));
});

router.post("/sources", async (req, res): Promise<void> => {
  const parsed = CreateQuestionSourceBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const adminUserId = getAdminUserId(res);
  const source = await db.transaction(async (tx) => {
    const [created] = await tx
      .insert(questionSourcesTable)
      .values({
        ...parsed.data,
        createdBy: adminUserId,
        updatedBy: adminUserId,
      })
      .returning();
    await tx.insert(questionBankAuditLogsTable).values({
      entityType: "source",
      entityId: created.id,
      action: "created",
      actorUserId: adminUserId,
      revision: null,
    });
    return created;
  });

  res.status(201).json(CreateQuestionSourceResponse.parse(source));
});

router.patch("/sources/:sourceId", async (req, res): Promise<void> => {
  const params = UpdateQuestionSourceParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const parsed = UpdateQuestionSourceBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  if (Object.keys(parsed.data).length === 0) {
    res.status(400).json({ error: "At least one source field is required." });
    return;
  }

  const adminUserId = getAdminUserId(res);
  const updated = await db.transaction(async (tx) => {
    const [source] = await tx
      .update(questionSourcesTable)
      .set({
        ...parsed.data,
        verificationStatus: "unverified",
        verifiedBy: null,
        verifiedAt: null,
        updatedBy: adminUserId,
        updatedAt: new Date(),
      })
      .where(eq(questionSourcesTable.id, params.data.sourceId))
      .returning();

    if (!source) {
      return undefined;
    }

    await tx.insert(questionBankAuditLogsTable).values({
      entityType: "source",
      entityId: source.id,
      action: "updated",
      actorUserId: adminUserId,
      revision: null,
    });

    const linkedQuestions = await tx
      .select({
        id: questionsTable.id,
        status: questionsTable.status,
        revision: questionsTable.revision,
      })
      .from(questionSourceLinksTable)
      .innerJoin(
        questionsTable,
        eq(questionSourceLinksTable.questionId, questionsTable.id),
      )
      .where(eq(questionSourceLinksTable.sourceId, source.id));
    const approvedQuestions = linkedQuestions.filter(
      (question) => question.status === "approved",
    );
    const questionIds = approvedQuestions.map((question) => question.id);
    if (questionIds.length > 0) {
      await tx
        .update(questionsTable)
        .set({
          status: "draft",
          updatedBy: adminUserId,
          updatedAt: new Date(),
        })
        .where(inArray(questionsTable.id, questionIds));
      await tx.insert(questionBankAuditLogsTable).values(
        approvedQuestions.map((question) => ({
          entityType: "question" as const,
          entityId: question.id,
          action: "approval_revoked" as const,
          actorUserId: adminUserId,
          revision: question.revision,
        })),
      );
    }

    return source;
  });

  if (!updated) {
    res.status(404).json({ error: "Question source not found." });
    return;
  }

  res.json(UpdateQuestionSourceResponse.parse(updated));
});

router.post(
  "/sources/:sourceId/verification",
  async (req, res): Promise<void> => {
    const params = ReviewQuestionSourceParams.safeParse(req.params);
    if (!params.success) {
      res.status(400).json({ error: params.error.message });
      return;
    }

    const parsed = ReviewQuestionSourceBody.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: parsed.error.message });
      return;
    }

    const adminUserId = getAdminUserId(res);
    const updated = await db.transaction(async (tx) => {
      const [source] = await tx
        .update(questionSourcesTable)
        .set({
          verificationStatus: parsed.data.verificationStatus,
          verifiedBy:
            parsed.data.verificationStatus === "verified" ? adminUserId : null,
          verifiedAt:
            parsed.data.verificationStatus === "verified" ? new Date() : null,
          updatedBy: adminUserId,
          updatedAt: new Date(),
        })
        .where(eq(questionSourcesTable.id, params.data.sourceId))
        .returning();

      if (!source || parsed.data.verificationStatus === "verified") {
        if (source) {
          await tx.insert(questionBankAuditLogsTable).values({
            entityType: "source",
            entityId: source.id,
            action: "verified",
            actorUserId: adminUserId,
            revision: null,
          });
        }
        return source;
      }

      await tx.insert(questionBankAuditLogsTable).values({
        entityType: "source",
        entityId: source.id,
        action: "source_rejected",
        actorUserId: adminUserId,
        revision: null,
      });

      const linkedQuestions = await tx
        .select({
          id: questionsTable.id,
          status: questionsTable.status,
          revision: questionsTable.revision,
        })
        .from(questionSourceLinksTable)
        .innerJoin(
          questionsTable,
          eq(questionSourceLinksTable.questionId, questionsTable.id),
        )
        .where(eq(questionSourceLinksTable.sourceId, source.id));
      const approvedQuestions = linkedQuestions.filter(
        (question) => question.status === "approved",
      );
      const questionIds = approvedQuestions.map((question) => question.id);
      if (questionIds.length > 0) {
        await tx
          .update(questionsTable)
          .set({
            status: "draft",
            updatedBy: adminUserId,
            updatedAt: new Date(),
          })
          .where(inArray(questionsTable.id, questionIds));
        await tx.insert(questionBankAuditLogsTable).values(
          approvedQuestions.map((question) => ({
            entityType: "question" as const,
            entityId: question.id,
            action: "approval_revoked" as const,
            actorUserId: adminUserId,
            revision: question.revision,
          })),
        );
      }

      return source;
    });

    if (!updated) {
      res.status(404).json({ error: "Question source not found." });
      return;
    }

    res.json(ReviewQuestionSourceResponse.parse(updated));
  },
);

export default router;
