export class BaseError extends Error {
  public status: number;
  public errors: string[];

  constructor(status: number, errors: string[]) {
    super();
    this.status = status;
    this.errors = errors;
  }
}
