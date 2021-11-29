import { regex_names } from '@shared/utils/regex'
import * as Joi from 'joi'

export const updateUserValidator = Joi.object({
  name: Joi.string().optional().regex(regex_names),
  username: Joi.string().required().min(6),
  birthdate: Joi.string().optional().length(10),
  address: Joi.string().optional(),
  addressNumber: Joi.string().optional(),
  primaryPhone: Joi.string().optional(),
  description: Joi.string().optional(),
  user: Joi.optional(),
})
