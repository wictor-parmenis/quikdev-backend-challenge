export class AppError {
  public readonly message: string
  public readonly status: number

  constructor(message = 'error in processing', status = 500) {
    this.message = message
    this.status = status
  }
}
