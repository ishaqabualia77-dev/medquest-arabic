import { Router, type IRouter } from "express";
import healthRouter from "./health";
import questionBankRouter from "./question-bank";

const router: IRouter = Router();

router.use(healthRouter);
router.use(questionBankRouter);

export default router;
