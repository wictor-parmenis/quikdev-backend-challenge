import { AppError } from '@shared/errors/AppError'
import User from '../domain/models/User'
import mongoose from 'mongoose'
import { encodeBase64, hash } from 'bcryptjs'
import { IUser } from '../interfaces/IUser'
import { IRequestUpdateUser } from './UpdateUserService'
import { primaryPhoneValidator } from '../validators/primaryPhoneValidator'

export interface IRequestCreateUser {
  name: string
  password: string
  username: string
  birthdate: string
  address: string
  addressNumber: string
  primaryPhone: string
  description: string
}

class CreateUserService {
  public async execute({
    address,
    addressNumber,
    birthdate,
    description,
    name,
    password,
    primaryPhone,
    username,
  }: IRequestCreateUser): Promise<IRequestUpdateUser> {
    const userExist = await User.findOne({
      username,
    })

    if (userExist) {
      throw new AppError('There is already exist user with this username.')
    }

    const phoneValid = primaryPhoneValidator(primaryPhone)

    if (!phoneValid)
      throw new AppError(
        'Please insert phone number with this format: (XX) XXXXX-XXXX or (XX) XXXX-XXXX',
      )

    const hashPassword = await hash(password, 8)

    const newUser = new User({
      id: new mongoose.Types.ObjectId(),
      address,
      addressNumber,
      birthdate,
      description,
      name,
      password: hashPassword,
      primaryPhone,
      username,
    })
    await newUser.save()
    return {
      address: newUser.address,
      addressNumber: newUser.addressNumber,
      birthdate: newUser.birthdate,
      description: newUser.description,
      name: newUser.name,
      primaryPhone: newUser.primaryPhone,
      username: newUser.username,
      id: newUser.id,
      createdAt: newUser.createdAt,
    }
  }
}

export default CreateUserService
