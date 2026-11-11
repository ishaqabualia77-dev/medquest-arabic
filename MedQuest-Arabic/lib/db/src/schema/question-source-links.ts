import { createInsertSchema } from "drizzle-zod";
import { primaryKey, pgTable, timestamp, uuid } from "drizzle-orm/pg-core";
import { questionSourcesTable } from "./question-sources";
import { questionsTable } from "./questions";
import { z } from "zod/v4";

export const questionSourceLinksTable = pgTable(
  "question_source_links",
  {
    questionId: uuid("question_id")
      .notNull()
      .references(() => questionsTable.id, { onDelete: "cascade" }),
    sourceId: uuid("source_id")
      .notNull()
      .references(() => questionSourcesTable.id, { onDelete: "restrict" }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [primaryKey({ columns: [table.questionId, table.sourceId] })],
);

export const insertQuestionSourceLinkSchema = createInsertSchema(
  questionSourceLinksTable,
).omit({ createdAt: true });
export type InsertQuestionSourceLink = z.infer<
  typeof insertQuestionSourceLinkSchema
>;
export type QuestionSourceLink = typeof questionSourceLinksTable.$inferSelect;
