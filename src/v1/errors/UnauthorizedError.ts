import { BaseError } from "./BaseError";

export class UnauthorizedError extends BaseError {
  constructor() {
    super(401, ["Unauthorized"]);
  }
}
