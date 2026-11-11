import { pgEnum } from "drizzle-orm/pg-core";

export const questionDifficultyEnum = pgEnum("question_difficulty", [
  "basic",
  "intermediate",
  "advanced",
]);

export const questionStatusEnum = pgEnum("question_status", [
  "draft",
  "approved",
  "rejected",
]);

export const sourceVerificationStatusEnum = pgEnum(
  "source_verification_status",
  ["unverified", "verified", "rejected"],
);

export const questionReviewDecisionEnum = pgEnum("question_review_decision", [
  "approved",
  "needs_changes",
  "rejected",
]);

export const questionBankAuditEntityTypeEnum = pgEnum(
  "question_bank_audit_entity_type",
  ["question", "source"],
);

export const questionBankAuditActionEnum = pgEnum(
  "question_bank_audit_action",
  [
    "created",
    "updated",
    "approved",
    "rejected",
    "changes_requested",
    "verified",
    "source_rejected",
    "approval_revoked",
  ],
);
