import Joi from 'joi';

export const productNameSchema = Joi.string().min(3).required().label('name');
export const productAmountSchema = Joi.string().min(3).required().label('amount');
