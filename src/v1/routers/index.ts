import { Router } from "express";
import { usersRouter } from "./users.router";
import { errorHandler } from "../middlewares/error.middleware";

const v1Router = Router();
v1Router.use("/users", usersRouter);
v1Router.use(errorHandler);

export { v1Router };
