import { databaseConnection } from '@config/databaseConfig'
import { APP_PORT } from '@config/index'
import app from './app'

databaseConnection()

app.listen(APP_PORT, () => {
  console.log(`Server started on port ${APP_PORT}`)
})
