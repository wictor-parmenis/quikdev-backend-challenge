import { Request, Response } from 'express'
import CreateSessionService from '../services/CreateSessionsService'

export default class SessionsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body

    const createSession = await new CreateSessionService().execute({
      username,
      password,
    })

    return res.json(createSession)
  }
}
