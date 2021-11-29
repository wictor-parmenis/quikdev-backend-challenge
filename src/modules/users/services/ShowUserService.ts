import { AppError } from '@shared/errors/AppError'
import User from '../domain/models/User'
import { IUser } from '../interfaces/IUser'
import { IRequestUpdateUser } from './UpdateUserService'

export interface IRequestUsername {
  username: string
}
class ShowUserService {
  public async execute({
    username,
  }: IRequestUsername): Promise<IRequestUpdateUser | undefined> {
    const user = await User.findOne({ username })

    if (!user) {
      throw new AppError('User not found.')
    }

    return {
      address: user.address,
      addressNumber: user.addressNumber,
      birthdate: user.birthdate,
      description: user.description,
      name: user.name,
      primaryPhone: user.primaryPhone,
      username: user.username,
      id: user.id,
      createdAt: user.createdAt,
    }
  }
}

export default ShowUserService
