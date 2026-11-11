import { createInsertSchema } from "drizzle-zod";
import {
  index,
  integer,
  jsonb,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { examTracksTable } from "./exam-tracks";
import { questionDifficultyEnum, questionStatusEnum } from "./question-enums";
import { z } from "zod/v4";

export type QuestionOption = {
  id: string;
  text: string;
};

export const questionsTable = pgTable(
  "questions",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    examTrackId: text("exam_track_id")
      .notNull()
      .references(() => examTracksTable.id, { onDelete: "restrict" }),
    stem: text("stem").notNull(),
    options: jsonb("options").$type<QuestionOption[]>().notNull(),
    correctOptionId: text("correct_option_id").notNull(),
    difficulty: questionDifficultyEnum("difficulty").notNull(),
    topic: text("topic").notNull(),
    explanationBasic: text("explanation_basic").notNull(),
    explanationAdvanced: text("explanation_advanced").notNull(),
    status: questionStatusEnum("status").notNull().default("draft"),
    revision: integer("revision").notNull().default(1),
    createdBy: text("created_by").notNull(),
    updatedBy: text("updated_by").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [
    index("questions_track_status_difficulty_idx").on(
      table.examTrackId,
      table.status,
      table.difficulty,
    ),
    index("questions_topic_idx").on(table.topic),
  ],
);

export const insertQuestionSchema = createInsertSchema(questionsTable).omit({
  id: true,
  status: true,
  revision: true,
  createdBy: true,
  updatedBy: true,
  createdAt: true,
  updatedAt: true,
});
export type InsertQuestion = z.infer<typeof insertQuestionSchema>;
export type Question = typeof questionsTable.$inferSelect;
