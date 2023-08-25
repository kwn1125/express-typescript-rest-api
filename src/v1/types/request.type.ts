import { Request } from "express";
import { z } from "zod";
import { generateTokenBodySchema } from "../schemas/auth.schema";
import { updateUserBodySchema, createUserBodySchema } from "../schemas/users.schema";

type GenerateTokenBodySchema = z.infer<typeof generateTokenBodySchema>;
export type GenerateTokenRequest = Request<unknown, unknown, GenerateTokenBodySchema>;

type GetUserByIdParamsSchema = { id: string };
export type GetUserByIdRequest = Request<GetUserByIdParamsSchema, unknown, unknown>;

type UpdateUserParamsSchema = { id: string };
type UpdateUserBodySchema = z.infer<typeof updateUserBodySchema>;
export type UpdateUserRequest = Request<UpdateUserParamsSchema, unknown, UpdateUserBodySchema>;

type DeleteUserParamsSchema = { id: string };
export type DeleteUserRequest = Request<DeleteUserParamsSchema, unknown, unknown>;

type CreateUserBodySchema = z.infer<typeof createUserBodySchema>;
export type CreateUserRequest = Request<unknown, unknown, CreateUserBodySchema>;
