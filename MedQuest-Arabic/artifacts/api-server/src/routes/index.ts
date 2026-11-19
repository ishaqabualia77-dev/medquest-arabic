import { Router, type IRouter } from "express";
import healthRouter from "./health";
import questionBankRouter from "./question-bank";
import doctorAccessRouter from "./doctor-access";

const router: IRouter = Router();

router.use(healthRouter);
router.use(questionBankRouter);
router.use("/doctor-access", doctorAccessRouter);

export default router;
