import { Router, type IRouter } from "express";
import { requireApprovedDoctor } from "../../middlewares/requireApprovedDoctor";
import { requireQuestionBankAdmin } from "../../middlewares/requireQuestionBankAdmin";
import { asc, eq, or } from "drizzle-orm";
import { ListExamTracksResponse } from "@workspace/api-zod";
import { db, examTracksTable } from "@workspace/db";

const router: IRouter = Router();

router.get("/exam-tracks", requireApprovedDoctor, async (_req, res): Promise<void> => {
  const tracks = await db
    .select()
    .from(examTracksTable)
    .orderBy(asc(examTracksTable.id));

  res.json(ListExamTracksResponse.parse(tracks));
});

router.post("/exam-tracks", requireQuestionBankAdmin, async (req, res): Promise<void> => {
  const rawId = typeof req.body?.id === "string" ? req.body.id.trim().toLowerCase() : "";
  const name = typeof req.body?.name === "string" ? req.body.name.trim() : "";
  const nameArabic = typeof req.body?.nameArabic === "string" ? req.body.nameArabic.trim() : "";

  const slugId = (rawId || name)
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "");

  if (!slugId || !name || !nameArabic) {
    res.status(400).json({
      error: "يرجى إدخال الاسم الإنجليزي والاسم العربي ومعرّف صالح للمسار.",
    });
    return;
  }

  const existing = await db
    .select({ id: examTracksTable.id })
    .from(examTracksTable)
    .where(or(eq(examTracksTable.id, slugId), eq(examTracksTable.name, name)))
    .limit(1);

  if (existing.length > 0) {
    res.status(409).json({
      error: "يوجد مسار بنفس المعرّف أو الاسم الإنجليزي مسبقاً.",
    });
    return;
  }

  const [created] = await db
    .insert(examTracksTable)
    .values({
      id: slugId,
      name,
      nameArabic,
    })
    .returning();

  res.status(201).json(created);
});

export default router;
