import { AppError } from '@shared/errors/AppError'
import User from '../domain/models/User'

export interface IRequestUpdateUser {
  id?: string
  name: string
  password?: string
  username: string
  birthdate: string
  address: string
  addressNumber: string
  primaryPhone: string
  description: string
  createdAt?: string
}

export class UpdateUserService {
  public async execute({
    address,
    addressNumber,
    birthdate,
    description,
    name,
    primaryPhone,
    username,
  }: IRequestUpdateUser): Promise<IRequestUpdateUser> {
    const user = await User.findOne({ username })

    if (!user) {
      throw new AppError('User not found.')
    }

    if (user) {
      user.address = address ? address : user.address
      user.addressNumber = addressNumber ? addressNumber : user.addressNumber
      user.birthdate = birthdate ? birthdate : user.birthdate
      user.description = description ? description : user.description
      user.name = name ? name : user.name
      user.primaryPhone = primaryPhone ? primaryPhone : user.primaryPhone
      user.username = username ? username : user.username
    }

    user.save()

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
