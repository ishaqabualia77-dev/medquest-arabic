import { Router, type IRouter } from "express";
import { clerkClient, getAuth } from "@clerk/express";
import { randomUUID } from "node:crypto";
import { desc, eq } from "drizzle-orm";
import { db, doctorAccessRequestsTable } from "@workspace/db";
import { requireQuestionBankAdmin } from "../middlewares/requireQuestionBankAdmin";

const router: IRouter = Router();
const adminRouter: IRouter = Router();

// الطبيب: معرفة حالة طلبه
router.get("/me", async (req, res): Promise<void> => {
  const userId = getAuth(req).userId;

  if (!userId) {
    res.status(401).json({ error: "Sign-in is required." });
    return;
  }

  const [request] = await db
    .select()
    .from(doctorAccessRequestsTable)
    .where(eq(doctorAccessRequestsTable.clerkUserId, userId))
    .limit(1);

  res.json(request ?? { status: "not_requested" });
});

// الطبيب: تقديم طلب أو إعادة تقديم الطلب المرفوض
router.post("/request", async (req, res): Promise<void> => {
  const userId = getAuth(req).userId;

  if (!userId) {
    res.status(401).json({ error: "Sign-in is required." });
    return;
  }

  try {
    const user = await clerkClient.users.getUser(userId);
    const verifiedEmail = user.emailAddresses.find(
      (address) =>
        address.verification?.status === "verified" &&
        address.id === user.primaryEmailAddressId,
    ) ?? user.emailAddresses.find(
      (address) => address.verification?.status === "verified",
    );

    if (!verifiedEmail) {
      res.status(403).json({
        error: "A verified email address is required.",
      });
      return;
    }

    const email = verifiedEmail.emailAddress.toLowerCase();
    const fullName =
      [user.firstName, user.lastName].filter(Boolean).join(" ") || null;

    const [existing] = await db
      .select()
      .from(doctorAccessRequestsTable)
      .where(eq(doctorAccessRequestsTable.clerkUserId, userId))
      .limit(1);

    if (existing) {
      if (existing.status === "rejected") {
        const [updated] = await db
          .update(doctorAccessRequestsTable)
          .set({
            email,
            fullName,
            status: "pending",
            reviewedBy: null,
            reviewNote: null,
            reviewedAt: null,
            updatedAt: new Date(),
          })
          .where(eq(doctorAccessRequestsTable.clerkUserId, userId))
          .returning();

        res.json(updated);
        return;
      }

      res.json(existing);
      return;
    }

    const [created] = await db
      .insert(doctorAccessRequestsTable)
      .values({
        id: randomUUID(),
        clerkUserId: userId,
        email,
        fullName,
        status: "pending",
      })
      .returning();

    res.status(201).json(created);
  } catch (error) {
    req.log.error({ err: error, userId }, "Could not submit doctor access request");
    res.status(503).json({ error: "Could not submit access request." });
  }
});

// حماية جميع إجراءات المشرف
adminRouter.use(requireQuestionBankAdmin);

// المشرف: عرض طلبات الأطباء
adminRouter.get("/requests", async (_req, res): Promise<void> => {
  const requests = await db
    .select()
    .from(doctorAccessRequestsTable)
    .orderBy(desc(doctorAccessRequestsTable.createdAt));

  res.json(requests);
});

// المشرف: قبول أو رفض طلب
adminRouter.patch("/requests/:id/review", async (req, res): Promise<void> => {
  const { status, reviewNote } = req.body ?? {};

  if (status !== "approved" && status !== "rejected") {
    res.status(400).json({
      error: "Status must be approved or rejected.",
    });
    return;
  }

  if (reviewNote !== undefined && typeof reviewNote !== "string") {
    res.status(400).json({ error: "Review note must be text." });
    return;
  }

  const [updated] = await db
    .update(doctorAccessRequestsTable)
    .set({
      status,
      reviewNote: reviewNote?.trim() || null,
      reviewedBy: res.locals.adminUserId,
      reviewedAt: new Date(),
      updatedAt: new Date(),
    })
    .where(eq(doctorAccessRequestsTable.id, req.params.id))
    .returning();

  if (!updated) {
    res.status(404).json({ error: "Doctor request not found." });
    return;
  }

  res.json(updated);
});

router.use("/admin", adminRouter);

export default router;
