import { createInsertSchema } from "drizzle-zod";
import {
  index,
  integer,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { questionReviewDecisionEnum } from "./question-enums";
import { questionsTable } from "./questions";
import { z } from "zod/v4";

export const questionReviewsTable = pgTable(
  "question_reviews",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    questionId: uuid("question_id")
      .notNull()
      .references(() => questionsTable.id, { onDelete: "cascade" }),
    revision: integer("revision").notNull(),
    reviewerUserId: text("reviewer_user_id").notNull(),
    decision: questionReviewDecisionEnum("decision").notNull(),
    notes: text("notes"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [
    index("question_reviews_question_revision_idx").on(
      table.questionId,
      table.revision,
      table.createdAt,
    ),
  ],
);

export const insertQuestionReviewSchema = createInsertSchema(
  questionReviewsTable,
).omit({ id: true, createdAt: true });
export type InsertQuestionReview = z.infer<typeof insertQuestionReviewSchema>;
export type QuestionReview = typeof questionReviewsTable.$inferSelect;
