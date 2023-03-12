import { Router } from "express";
import sampleRouter from "./sample.router";
import usersRouter from "./users.router";
import { errorHandler } from "../middlewares/error.middleware";

const router = Router();

router.use("/sample", sampleRouter);
router.use("/users", usersRouter);
router.use(errorHandler);

export default router;
