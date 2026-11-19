import { pgTable, text, timestamp, uniqueIndex, index } from "drizzle-orm/pg-core";

export const doctorAccessRequestsTable = pgTable(
  "doctor_access_requests",
  {
    id: text("id").primaryKey(),
    clerkUserId: text("clerk_user_id").notNull(),
    email: text("email").notNull(),
    fullName: text("full_name"),
    status: text("status").notNull().default("pending"),
    reviewedBy: text("reviewed_by"),
    reviewNote: text("review_note"),
    reviewedAt: timestamp("reviewed_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    uniqueIndex("doctor_access_requests_clerk_user_id_idx").on(table.clerkUserId),
    index("doctor_access_requests_status_idx").on(table.status),
  ],
);

export type DoctorAccessRequest = typeof doctorAccessRequestsTable.$inferSelect;
