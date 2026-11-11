import assert from "node:assert/strict";
import type { AddressInfo } from "node:net";
import { test } from "node:test";
import express from "express";
import pino from "pino";
import pinoHttp from "pino-http";
import { ListStudentQuestionsResponse } from "@workspace/api-zod";
import {
  createQuestionBankAdminGuard,
  type QuestionBankAdminGuardDependencies,
} from "./requireQuestionBankAdmin";

const testUserIds = {
  student: "test-student",
  admin: "test-admin",
  unverified: "test-unverified",
} as const;

function createTestDependencies(
  adminEmails: ReadonlySet<string> = new Set(["admin@medquest.test"]),
): QuestionBankAdminGuardDependencies {
  return {
    getUserId: (req) => req.get("x-test-user") ?? null,
    getAdminEmails: () => adminEmails,
    async getVerifiedEmails(userId) {
      if (userId === testUserIds.admin) {
        return ["ADMIN@medquest.test"];
      }
      if (userId === testUserIds.student) {
        return ["student@medquest.test"];
      }
      return [];
    },
  };
}

async function withAdminTestServer(
  dependencies: QuestionBankAdminGuardDependencies,
  run: (baseUrl: string) => Promise<void>,
): Promise<void> {
  const app = express();
  app.use(
    pinoHttp({
      logger: pino({ level: "silent" }),
    }),
  );
  app.use(express.json());

  const adminRouter = express.Router();
  adminRouter.use(createQuestionBankAdminGuard(dependencies));
  adminRouter.get("/questions", (_req, res) => {
    res.json({ authorized: true });
  });
  adminRouter.post("/questions", (req, res) => {
    res.status(201).json({
      authorized: true,
      actorUserId: res.locals.adminUserId,
      body: req.body,
    });
  });
  adminRouter.patch("/questions/:id", (_req, res) => {
    res.json({ authorized: true, actorUserId: res.locals.adminUserId });
  });
  adminRouter.post("/questions/:id/reviews", (_req, res) => {
    res.status(201).json({ authorized: true, actorUserId: res.locals.adminUserId });
  });
  app.use("/admin", adminRouter);

  const server = app.listen(0, "127.0.0.1");
  await new Promise<void>((resolve, reject) => {
    server.once("error", reject);
    server.once("listening", resolve);
  });

  try {
    const address = server.address();
    assert.ok(address && typeof address !== "string");
    await run(`http://127.0.0.1:${(address as AddressInfo).port}`);
  } finally {
    await new Promise<void>((resolve, reject) => {
      server.close((error) => (error ? reject(error) : resolve()));
    });
  }
}

async function request(
  baseUrl: string,
  path: string,
  method: string,
  userId?: string,
): Promise<Response> {
  const headers = new Headers({ "Content-Type": "application/json" });
  if (userId) {
    headers.set("x-test-user", userId);
  }
  return fetch(`${baseUrl}${path}`, {
    method,
    headers,
    body: method === "GET" ? undefined : "{}",
  });
}

test("rejects API requests that have no signed-in user", async () => {
  await withAdminTestServer(createTestDependencies(), async (baseUrl) => {
    const response = await request(baseUrl, "/admin/questions", "POST");
    assert.equal(response.status, 401);
  });
});

test("blocks a student from admin reads, creation, edits, and approval", async () => {
  await withAdminTestServer(createTestDependencies(), async (baseUrl) => {
    const questionId = "00000000-0000-4000-8000-000000000001";
    const responses = await Promise.all([
      request(baseUrl, "/admin/questions", "GET", testUserIds.student),
      request(baseUrl, "/admin/questions", "POST", testUserIds.student),
      request(
        baseUrl,
        `/admin/questions/${questionId}`,
        "PATCH",
        testUserIds.student,
      ),
      request(
        baseUrl,
        `/admin/questions/${questionId}/reviews`,
        "POST",
        testUserIds.student,
      ),
    ]);

    assert.deepEqual(
      responses.map((response) => response.status),
      [403, 403, 403, 403],
    );
  });
});

test("allows a verified allowlisted admin to reach protected writes", async () => {
  await withAdminTestServer(createTestDependencies(), async (baseUrl) => {
    const response = await request(
      baseUrl,
      "/admin/questions",
      "POST",
      testUserIds.admin,
    );
    assert.equal(response.status, 201);
    assert.deepEqual(await response.json(), {
      authorized: true,
      actorUserId: testUserIds.admin,
      body: {},
    });
  });
});

test("does not allow an unverified allowlisted email or an empty admin list", async () => {
  await withAdminTestServer(createTestDependencies(), async (baseUrl) => {
    const response = await request(
      baseUrl,
      "/admin/questions",
      "POST",
      testUserIds.unverified,
    );
    assert.equal(response.status, 403);
  });

  await withAdminTestServer(createTestDependencies(new Set()), async (baseUrl) => {
    const response = await request(
      baseUrl,
      "/admin/questions",
      "POST",
      testUserIds.admin,
    );
    assert.equal(response.status, 503);
  });
});

test("student response schema strips answers, explanations, and internal fields", () => {
  const [question] = ListStudentQuestionsResponse.parse([
    {
      id: "00000000-0000-4000-8000-000000000001",
      examTrackId: "palestinian-internship",
      stem: "Test-only question content",
      options: [
        { id: "A", text: "First option" },
        { id: "B", text: "Second option" },
      ],
      difficulty: "basic",
      topic: "Test topic",
      sources: [
        {
          id: "00000000-0000-4000-8000-000000000002",
          title: "Test-only source",
          citation: "Test citation",
          author: null,
          publicationYear: null,
          url: null,
        },
      ],
      correctOptionId: "A",
      explanationBasic: "Must not be returned",
      explanationAdvanced: "Must not be returned",
      status: "draft",
      createdBy: "internal-user",
    },
  ]);

  assert.equal("correctOptionId" in question, false);
  assert.equal("explanationBasic" in question, false);
  assert.equal("explanationAdvanced" in question, false);
  assert.equal("status" in question, false);
  assert.equal("createdBy" in question, false);
});
