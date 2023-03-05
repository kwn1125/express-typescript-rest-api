import { Router } from "express";
import sampleRouter from "./sample.router";
import usersRouter from "./users.router";

const router = Router();

router.use("/sample", sampleRouter);
router.use("/users", usersRouter);

export default router;
