// src/validators/companyValidator.js
import Joi from 'joi';


/**
 * Validates the company data based on a predefined schema using Joi.
 * @param {Object} data - The company data to be validated.
 * @returns {Object} - An object containing the validation result.
 */
export const validateCompany = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    address: Joi.string().required(),
    contactEmail: Joi.string().email().required(),
    contactPhone: Joi.string().required(),
    industry: Joi.string().required(),
  });

  return schema.validate(data);
};
