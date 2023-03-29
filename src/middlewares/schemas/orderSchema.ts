import Joi from 'joi';

const orderSchema = Joi.array().min(1)
  .items(Joi.number().strict().only().label('productsIds')).required()
  .label('productsIds');

export = orderSchema;