import { clerkClient, getAuth } from "@clerk/express";
import type { Request, RequestHandler } from "express";

function getConfiguredAdminEmails(): Set<string> {
  return new Set(
    (process.env.MEDQUEST_ADMIN_EMAILS ?? "")
      .split(",")
      .map((email) => email.trim().toLowerCase())
      .filter(Boolean),
  );
}

export interface QuestionBankAdminGuardDependencies {
  getUserId: (req: Request) => string | null;
  getAdminEmails: () => ReadonlySet<string>;
  getVerifiedEmails: (userId: string) => Promise<readonly string[]>;
}

export function createQuestionBankAdminGuard(
  dependencies: QuestionBankAdminGuardDependencies,
): RequestHandler {
  return async (req, res, next): Promise<void> => {
    const userId = dependencies.getUserId(req);
    if (!userId) {
      res.status(401).json({ error: "Sign-in is required." });
      return;
    }

    const adminEmails = dependencies.getAdminEmails();
    if (adminEmails.size === 0) {
      req.log.warn(
        "Question-bank admin access is unavailable until MEDQUEST_ADMIN_EMAILS is configured.",
      );
      res.status(503).json({
        error: "Question-bank admin access is not configured.",
      });
      return;
    }

    try {
      const verifiedEmails = await dependencies.getVerifiedEmails(userId);
      if (
        !verifiedEmails.some((email) =>
          adminEmails.has(email.trim().toLowerCase()),
        )
      ) {
        res
          .status(403)
          .json({ error: "Question-bank admin access is required." });
        return;
      }

      res.locals.adminUserId = userId;
      next();
    } catch (error) {
      req.log.error(
        { err: error, userId },
        "Could not verify question-bank admin",
      );
      res.status(503).json({ error: "Admin access could not be verified." });
    }
  };
}

export const requireQuestionBankAdmin = createQuestionBankAdminGuard({
  getUserId: (req) => getAuth(req).userId ?? null,
  getAdminEmails: getConfiguredAdminEmails,
  async getVerifiedEmails(userId) {
    const user = await clerkClient.users.getUser(userId);
    return user.emailAddresses
      .filter((address) => address.verification?.status === "verified")
      .map((address) => address.emailAddress.toLowerCase());
  },
});
