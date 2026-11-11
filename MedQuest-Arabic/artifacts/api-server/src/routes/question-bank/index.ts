import { Router, type IRouter } from "express";
import { requireQuestionBankAdmin } from "../../middlewares/requireQuestionBankAdmin";
import auditLogsRouter from "./audit-logs";
import questionsRouter from "./questions";
import sourcesRouter from "./sources";
import studentRouter from "./student";
import tracksRouter from "./tracks";

const router: IRouter = Router();
const adminRouter: IRouter = Router();

adminRouter.use(requireQuestionBankAdmin);
adminRouter.use(auditLogsRouter);
adminRouter.use(questionsRouter);
adminRouter.use(sourcesRouter);

router.use(tracksRouter);
router.use(studentRouter);
router.use("/admin", adminRouter);

export default router;
