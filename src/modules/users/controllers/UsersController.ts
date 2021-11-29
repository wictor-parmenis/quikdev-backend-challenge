import { Request, Response } from 'express'
import CreateUserService from '../services/CreateUserService'
import { DeleteUserService } from '../services/DeleteUserService'
import ListUserService from '../services/ListUserService'
import ShowUserService from '../services/ShowUserService'
import { UpdateUserService } from '../services/UpdateUserService'

export default class UsersController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listUser = await new ListUserService().execute()

    return res.json(listUser)
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { username } = req.params
    const user = await new ShowUserService().execute({ username })
    return res.json(user)
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const {
      address,
      addressNumber,
      birthdate,
      description,
      name,
      password,
      primaryPhone,
      username,
    } = req.body

    const userCreate = await new CreateUserService().execute({
      address,
      addressNumber,
      birthdate,
      description,
      name,
      password,
      primaryPhone,
      username,
    })

    return res.json(userCreate)
  }

  async update(req: Request, res: Response): Promise<Response> {
    const {
      address,
      addressNumber,
      birthdate,
      description,
      name,
      primaryPhone,
      username,
    } = req.body

    const updateUser = await new UpdateUserService().execute({
      address,
      addressNumber,
      birthdate,
      description,
      name,
      primaryPhone,
      username,
    })

    return res.json(updateUser)
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { username } = req.params

    const response = await new DeleteUserService().execute({ username })
    return res.json({ message: response })
  }
}
