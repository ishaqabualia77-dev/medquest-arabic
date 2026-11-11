import { Router, type IRouter } from "express";
import { asc } from "drizzle-orm";
import { ListExamTracksResponse } from "@workspace/api-zod";
import { db, examTracksTable } from "@workspace/db";

const router: IRouter = Router();

router.get("/exam-tracks", async (_req, res): Promise<void> => {
  const tracks = await db
    .select()
    .from(examTracksTable)
    .orderBy(asc(examTracksTable.id));

  res.json(ListExamTracksResponse.parse(tracks));
});

export default router;
