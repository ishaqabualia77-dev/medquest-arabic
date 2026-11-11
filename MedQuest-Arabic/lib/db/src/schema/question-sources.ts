import { createInsertSchema } from "drizzle-zod";
import {
  index,
  integer,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { sourceVerificationStatusEnum } from "./question-enums";
import { z } from "zod/v4";

export const questionSourcesTable = pgTable(
  "question_sources",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    title: text("title").notNull(),
    citation: text("citation").notNull(),
    author: text("author"),
    edition: text("edition"),
    publisher: text("publisher"),
    publicationYear: integer("publication_year"),
    url: text("url"),
    verificationStatus: sourceVerificationStatusEnum("verification_status")
      .notNull()
      .default("unverified"),
    verifiedBy: text("verified_by"),
    verifiedAt: timestamp("verified_at", { withTimezone: true }),
    createdBy: text("created_by").notNull(),
    updatedBy: text("updated_by").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [index("question_sources_verification_status_idx").on(table.verificationStatus)],
);

export const insertQuestionSourceSchema = createInsertSchema(
  questionSourcesTable,
).omit({
  id: true,
  verificationStatus: true,
  verifiedBy: true,
  verifiedAt: true,
  createdBy: true,
  updatedBy: true,
  createdAt: true,
  updatedAt: true,
});
export type InsertQuestionSource = z.infer<typeof insertQuestionSourceSchema>;
export type QuestionSource = typeof questionSourcesTable.$inferSelect;
