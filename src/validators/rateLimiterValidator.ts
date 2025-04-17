import Joi from "joi";


export const rateLimiterSchema = Joi.object({
  identifier: Joi.string().required().messages({
    'string.empty': 'identifier is required',
    'any.required': 'identifier is required',
  }),
  resource: Joi.string().required().messages({
    'string.empty': 'resource is required',
    'any.required': 'resource is required',
  }),
});