import { genSalt, hash, compare } from "bcrypt";

const saltRounds = 10;

export const hashPassword = async (password: string) => {
  const salt = await genSalt(saltRounds);
  return await hash(password, salt);
};

export const comparePassword = async (password: string, hashedPassword: string) => {
  return await compare(password, hashedPassword);
};
