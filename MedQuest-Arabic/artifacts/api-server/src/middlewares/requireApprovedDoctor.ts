import { getAuth } from "@clerk/express";
import type { RequestHandler } from "express";
import { eq } from "drizzle-orm";
import { db, doctorAccessRequestsTable } from "@workspace/db";

export const requireApprovedDoctor: RequestHandler = async (
  req,
  res,
  next,
): Promise<void> => {
  const userId = getAuth(req).userId;

  if (!userId) {
    res.status(401).json({ error: "Sign-in is required." });
    return;
  }

  try {
    const [request] = await db
      .select({
        status: doctorAccessRequestsTable.status,
      })
      .from(doctorAccessRequestsTable)
      .where(eq(doctorAccessRequestsTable.clerkUserId, userId))
      .limit(1);

    if (request?.status !== "approved") {
      res.status(403).json({
        error: "Doctor access has not been approved.",
        status: request?.status ?? "not_requested",
      });
      return;
    }

    res.locals.doctorUserId = userId;
    next();
  } catch (error) {
    req.log.error({ err: error, userId }, "Could not verify doctor access");
    res.status(503).json({ error: "Doctor access could not be verified." });
  }
};
