import { Router, type IRouter } from "express";
import { and, desc, eq } from "drizzle-orm";
import {
  ListQuestionBankAuditLogsQueryParams,
  ListQuestionBankAuditLogsResponse,
} from "@workspace/api-zod";
import { db, questionBankAuditLogsTable } from "@workspace/db";

const router: IRouter = Router();

router.get("/audit-logs", async (req, res): Promise<void> => {
  const parsed = ListQuestionBankAuditLogsQueryParams.safeParse(req.query);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const logs = await db
    .select()
    .from(questionBankAuditLogsTable)
    .where(
      and(
        parsed.data.entityType
          ? eq(questionBankAuditLogsTable.entityType, parsed.data.entityType)
          : undefined,
        parsed.data.entityId
          ? eq(questionBankAuditLogsTable.entityId, parsed.data.entityId)
          : undefined,
      ),
    )
    .orderBy(desc(questionBankAuditLogsTable.createdAt))
    .limit(parsed.data.limit ?? 50);

  res.json(ListQuestionBankAuditLogsResponse.parse(logs));
});

export default router;
