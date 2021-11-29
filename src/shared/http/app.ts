import 'reflect-metadata'
import express, { Response, Request, NextFunction } from 'express'
import 'express-async-errors'
import cors from 'cors'
import { routes } from './routes'
import { AppError } from '@shared/errors/AppError'

const app = express()
app.use(cors())
app.use(express.json())

app.use(routes)

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.status).json({
      status: error.status,
      message: error.message,
    })
  }

  return res.status(500).json({
    message: 'Internal server error',
    status: 500,
  })
})

export default app
