import mongoose, { Schema } from 'mongoose'
import { IUser } from '../../interfaces/IUser'

const UserSchema: Schema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true, match: /[a-z]/ },
  password: { type: String, required: true },
  username: { type: String, required: true },
  birthdate: { type: String, required: true },
  address: { type: String, required: true },
  addressNumber: { type: String, required: true },
  primaryPhone: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now() },
})

export default mongoose.model<IUser>('User', UserSchema)
