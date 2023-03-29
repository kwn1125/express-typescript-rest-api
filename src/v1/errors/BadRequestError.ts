import { BaseError } from "./BaseError";

export class BadRequestError extends BaseError {
  constructor(errors: string[]) {
    super(400, errors);
  }
}
