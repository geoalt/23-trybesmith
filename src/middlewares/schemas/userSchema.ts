import Joi from 'joi';

export const usernameSchema = Joi.string().min(3).required().label('username');
export const vocationSchema = Joi.string().min(3).required().label('vocation');
export const levelSchema = Joi.number().min(1).required().label('level');
export const passwordSchema = Joi.string().min(8).required().label('password');
