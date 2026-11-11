import { Router, type IRouter } from "express";
import { and, desc, eq, inArray, sql } from "drizzle-orm";
import {
  ListStudentQuestionsQueryParams,
  ListStudentQuestionsResponse,
} from "@workspace/api-zod";
import {
  db,
  questionSourceLinksTable,
  questionSourcesTable,
  questionsTable,
} from "@workspace/db";

const router: IRouter = Router();

router.get("/questions", async (req, res): Promise<void> => {
  const parsed = ListStudentQuestionsQueryParams.safeParse(req.query);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const sourceExists = sql`exists (
    select 1
    from ${questionSourceLinksTable}
    inner join ${questionSourcesTable}
      on ${questionSourcesTable.id} = ${questionSourceLinksTable.sourceId}
    where ${questionSourceLinksTable.questionId} = ${questionsTable.id}
  )`;
  const unverifiedSourceExists = sql`exists (
    select 1
    from ${questionSourceLinksTable}
    inner join ${questionSourcesTable}
      on ${questionSourcesTable.id} = ${questionSourceLinksTable.sourceId}
    where ${questionSourceLinksTable.questionId} = ${questionsTable.id}
      and ${questionSourcesTable.verificationStatus} <> ${"verified"}
  )`;

  const questions = await db
    .select({
      id: questionsTable.id,
      examTrackId: questionsTable.examTrackId,
      stem: questionsTable.stem,
      options: questionsTable.options,
      difficulty: questionsTable.difficulty,
      topic: questionsTable.topic,
    })
    .from(questionsTable)
    .where(
      and(
        eq(questionsTable.status, "approved"),
        parsed.data.examTrackId
          ? eq(questionsTable.examTrackId, parsed.data.examTrackId)
          : undefined,
        parsed.data.difficulty
          ? eq(questionsTable.difficulty, parsed.data.difficulty)
          : undefined,
        sourceExists,
        sql`not ${unverifiedSourceExists}`,
      ),
    )
    .orderBy(desc(questionsTable.createdAt))
    .limit(parsed.data.limit ?? 50);

  if (questions.length === 0) {
    res.json(ListStudentQuestionsResponse.parse([]));
    return;
  }

  const citations = await db
    .select({
      questionId: questionSourceLinksTable.questionId,
      id: questionSourcesTable.id,
      title: questionSourcesTable.title,
      citation: questionSourcesTable.citation,
      author: questionSourcesTable.author,
      publicationYear: questionSourcesTable.publicationYear,
      url: questionSourcesTable.url,
    })
    .from(questionSourceLinksTable)
    .innerJoin(
      questionSourcesTable,
      eq(questionSourceLinksTable.sourceId, questionSourcesTable.id),
    )
    .where(
      and(
        inArray(
          questionSourceLinksTable.questionId,
          questions.map((question) => question.id),
        ),
        eq(questionSourcesTable.verificationStatus, "verified"),
      ),
    );

  const citationsByQuestion = new Map<
    string,
    Array<Omit<(typeof citations)[number], "questionId">>
  >();
  for (const { questionId, ...citation } of citations) {
    const sources = citationsByQuestion.get(questionId) ?? [];
    sources.push(citation);
    citationsByQuestion.set(questionId, sources);
  }

  res.json(
    ListStudentQuestionsResponse.parse(
      questions.map((question) => ({
        ...question,
        sources: citationsByQuestion.get(question.id) ?? [],
      })),
    ),
  );
});

export default router;
