import { createInsertSchema } from "drizzle-zod";
import {
  index,
  integer,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import {
  questionBankAuditActionEnum,
  questionBankAuditEntityTypeEnum,
} from "./question-enums";
import { z } from "zod/v4";

export const questionBankAuditLogsTable = pgTable(
  "question_bank_audit_logs",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    entityType: questionBankAuditEntityTypeEnum("entity_type").notNull(),
    entityId: uuid("entity_id").notNull(),
    action: questionBankAuditActionEnum("action").notNull(),
    actorUserId: text("actor_user_id").notNull(),
    revision: integer("revision"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [
    index("question_bank_audit_entity_idx").on(
      table.entityType,
      table.entityId,
      table.createdAt,
    ),
    index("question_bank_audit_actor_idx").on(
      table.actorUserId,
      table.createdAt,
    ),
  ],
);

export const insertQuestionBankAuditLogSchema = createInsertSchema(
  questionBankAuditLogsTable,
).omit({ id: true, createdAt: true });
export type InsertQuestionBankAuditLog = z.infer<
  typeof insertQuestionBankAuditLogSchema
>;
export type QuestionBankAuditLog =
  typeof questionBankAuditLogsTable.$inferSelect;
