import { Document } from 'mongoose'

export interface IUser extends Document {
  id: string // user ID
  name: string // full person name
  password: string
  username: string // user name
  birthdate: string // date of birth
  address: string // user address
  addressNumber: string // user address number
  primaryPhone: string // primary phone formatted as (XX) XXXX-XXXX
  description: string // user description
  createdAt: string // user created date
}
