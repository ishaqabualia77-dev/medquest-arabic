import { createInsertSchema } from "drizzle-zod";
import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { z } from "zod/v4";

export const examTracksTable = pgTable("exam_tracks", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  nameArabic: text("name_arabic").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const insertExamTrackSchema = createInsertSchema(examTracksTable).omit({
  createdAt: true,
  updatedAt: true,
});
export type InsertExamTrack = z.infer<typeof insertExamTrackSchema>;
export type ExamTrack = typeof examTracksTable.$inferSelect;
