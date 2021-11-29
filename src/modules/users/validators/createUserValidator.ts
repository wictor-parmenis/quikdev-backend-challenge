import { regex_names } from '@shared/utils/regex'
import * as Joi from 'joi'

export const createUserValidator = Joi.object({
  name: Joi.string().required().regex(regex_names),
  password: Joi.string().required().min(6),
  password_confirmation: Joi.string().required().valid(Joi.ref('password')),
  username: Joi.string().required().min(6),
  birthdate: Joi.string().required().length(10),
  address: Joi.string().required(),
  addressNumber: Joi.string().required(),
  primaryPhone: Joi.string()
    .required()
    .regex(/[0-9)()]/),
  description: Joi.string().required(),
})
