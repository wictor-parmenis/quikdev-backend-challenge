import sessionsRoutes from '@modules/users/routes/sessions.routes'
import usersRoutes from '@modules/users/routes/users.routes'
import { Request, Response, Router } from 'express'

export const routes = Router()

routes.get('/api/v1/', (req: Request, res: Response) => {
  res.json({ title: 'API USERS - Quik Dev', version: '0.0.1' })
})

routes.use('/api/v1/users', usersRoutes)
routes.use('/api/v1/session', sessionsRoutes)
