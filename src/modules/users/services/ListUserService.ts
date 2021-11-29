import User from '../domain/models/User'
import { IRequestUpdateUser } from './UpdateUserService'

class ListUserService {
  public async execute(): Promise<IRequestUpdateUser[]> {
    const userList = await User.find().exec()

    const usersWithourPassword: IRequestUpdateUser[] = []
    if (userList.length > 0) {
      userList.forEach(user => {
        usersWithourPassword.push({
          address: user.address,
          addressNumber: user.addressNumber,
          birthdate: user.birthdate,
          description: user.description,
          name: user.name,
          primaryPhone: user.primaryPhone,
          username: user.username,
          id: user.id,
          createdAt: user.createdAt,
        })
      })
    }

    return usersWithourPassword
  }
}

export default ListUserService
