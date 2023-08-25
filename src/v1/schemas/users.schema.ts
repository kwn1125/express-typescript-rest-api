import { z } from "zod";

export const updateUserBodySchema = z.object({
  email: z.string().email(),
  name: z.string().nonempty().max(255),
  password: z
    .string()
    .min(8)
    .regex(/^[a-zA-Z0-9]+$/, { message: "password: Only alphanumeric" }),
});

export const updateUserSchema = z.object({
  body: updateUserBodySchema,
});

export const createUserBodySchema = z.object({
  email: z.string().email(),
  name: z.string().nonempty().max(255),
  password: z
    .string()
    .min(8)
    .regex(/^[a-zA-Z0-9]+$/, { message: "password: Only alphanumeric" }),
});

export const createUserSchema = z.object({
  body: createUserBodySchema,
});
