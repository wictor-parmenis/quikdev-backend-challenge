import { AppError } from '@shared/errors/AppError'
import User from '../domain/models/User'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import authConfig from '@config/authConfig'
import { IRequestUpdateUser } from './UpdateUserService'

interface IRequestCreateSession {
  username: string
  password: string
}

interface IResponseCreateSession {
  user: IRequestUpdateUser
  token: string
}

class CreateSessionService {
  public async execute({
    username,
    password,
  }: IRequestCreateSession): Promise<IResponseCreateSession> {
    const userExist = await User.findOne({ username })

    if (!userExist) {
      throw new AppError('Incorrect password/username.', 401)
    }
    const passwordConfirm = await compare(password, userExist.password)

    if (!passwordConfirm) {
      throw new AppError('Incorrect password.', 401)
    }

    const token = sign({}, `${authConfig.jwt.secret}`, {
      subject: userExist.id,
      expiresIn: authConfig.jwt.expiresIn,
    })

    return {
      user: {
        address: userExist.address,
        addressNumber: userExist.addressNumber,
        birthdate: userExist.birthdate,
        description: userExist.description,
        name: userExist.name,
        primaryPhone: userExist.primaryPhone,
        username: userExist.username,
        id: userExist.id,
        createdAt: userExist.createdAt,
      },
      token,
    }
  }
}

export default CreateSessionService
