import mongoose from 'mongoose'
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

const { DB_HOSTNAME, DB_HOSTNAME_DEV } = process.env

const databaseConnection = async () => {
  await mongoose
    .connect(`mongodb://${DB_HOSTNAME}/clientsQuikDev`)
    .then(res => {
      console.log('Sucessfully connection with database.')
    })
    .catch(err => {
      console.log({ err })
    })
}

export { databaseConnection }
