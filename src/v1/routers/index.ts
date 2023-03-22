import { Router } from "express";
import usersRouter from "./users.router";
import { errorHandler } from "../middlewares/error.middleware";

const router = Router();

router.use("/users", usersRouter);
router.use(errorHandler);

export default router;
