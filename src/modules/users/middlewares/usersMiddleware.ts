import { AppError } from '@shared/errors/AppError'
import { NextFunction, Request, Response } from 'express'
import { createUserValidator } from '../validators/createUserValidator'
import { updateUserValidator } from '../validators/updateUserValidator'
import { usernameValidatorValidator } from '../validators/usernameValidator'

export class UserMiddleware {
  execute(req: Request, res: Response, next: NextFunction) {
    const validation = () => {
      if (req.method === 'GET' && req.params.username !== '') {
        return usernameValidatorValidator.validate(req.params)
      } else if (req.method === 'POST') {
        return createUserValidator.validate(req.body)
      } else if (req.method === 'PUT') {
        return updateUserValidator.validate(req.body)
      } else if (req.method === 'DELETE') {
        return usernameValidatorValidator.validate(req.params)
      } else {
        throw new AppError('An unexpected error happened.')
      }
    }

    const validationMiddleware = validation()
    if (validationMiddleware) {
      const valid =
        validationMiddleware.error === null ||
        validationMiddleware.error === undefined
      console.log(validationMiddleware.error)

      if (valid) {
        next()
      } else {
        if (validationMiddleware.error) {
          const { details } = validationMiddleware.error
          const message = details.map(i => i.message).join(',')

          console.log('error', message)
          res.status(422).json({ error: message, type: 'error', status: 422 })
        }
      }
    }
  }
}
