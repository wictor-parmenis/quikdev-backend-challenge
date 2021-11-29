import { regex_number_phone } from '@shared/utils/regex'
import * as Joi from 'joi'

export const usernameValidatorValidator = Joi.object({
  username: Joi.string().required().min(6).regex(regex_number_phone),
})
