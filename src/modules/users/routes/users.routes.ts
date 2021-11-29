import { Router } from 'express'
import UsersController from '../controllers/UsersController'
import isAuthenticated from '../../../shared/http/middlewares/isAuthenticated'
import { UserMiddleware } from '../middlewares/usersMiddleware'

const usersRoutes = Router()
const usersController = new UsersController()
const userMiddleware = new UserMiddleware()

usersRoutes.get('/', isAuthenticated, usersController.index)

usersRoutes.get(
  '/:username',
  isAuthenticated,
  userMiddleware.execute,
  usersController.show,
)

usersRoutes.post('/', userMiddleware.execute, usersController.create)

usersRoutes.put(
  '/',
  isAuthenticated,
  userMiddleware.execute,
  usersController.update,
)

usersRoutes.delete(
  '/:username',
  isAuthenticated,
  userMiddleware.execute,
  usersController.delete,
)

export default usersRoutes
