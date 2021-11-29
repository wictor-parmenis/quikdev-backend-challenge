// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

const { APP_PORT, SECRET } = process.env

export { SECRET, APP_PORT }
