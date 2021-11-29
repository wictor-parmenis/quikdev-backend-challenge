import { AppError } from '@shared/errors/AppError'
import User from '../domain/models/User'
import { IRequestUsername } from './ShowUserService'

export class DeleteUserService {
  async execute({ username }: IRequestUsername): Promise<{ message: string }> {
    const userExist = await User.findOne({
      username,
    })

    if (!userExist) {
      throw new AppError('User not found.')
    }

    await userExist.delete()

    return { message: `User ${username} deleted sucessfully.` }
  }
}
