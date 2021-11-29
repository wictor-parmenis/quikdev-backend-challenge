import { Request, Response, Router } from 'express'

export const routes = Router()

routes.get('/api/v1/', (req: Request, res: Response) => {
  res.json({ title: 'API USERS - Quik Dev', version: '0.0.1' })
})
