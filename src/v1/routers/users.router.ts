import { Router } from "express";
import {
  getUsers,
  getCurrentUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users.controller";
import { auth } from "../middlewares/auth.middleware";
import { validate } from "../middlewares/validation.middleware";
import { updateUserSchema, createUserSchema } from "../schemas/users.schema";

const usersRouter = Router();

// auth required
usersRouter.route("/").get(auth, getUsers);
usersRouter.route("/me").get(auth, getCurrentUser);
usersRouter.route("/:id(\\d+)").get(auth, getUserById);
usersRouter.route("/:id(\\d+)").patch(auth, validate(updateUserSchema), updateUser);
usersRouter.route("/:id(\\d+)").delete(auth, deleteUser);

// auth not required
usersRouter.route("/").post(validate(createUserSchema), createUser);

export { usersRouter };
