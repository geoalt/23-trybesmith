import { NextFunction, Request, Response } from 'express';
import orderSchema from './schemas/orderSchema';

const validadeOrderEntries = (req: Request, res: Response, next: NextFunction) => {
  const { error } = orderSchema.validate(
    req.body.productsIds,
    { errors: { label: 'path' } },
  );

  if (error) {
    console.log(error.message);
    switch (error.message) {
      case '"productsIds" must be an array':
        return res.status(422).json({ message: error.message });
      case '"productsIds" must contain at least 1 items':
        return res.status(422).json({ message: '"productsIds" must include only numbers' });
      default:
        return res.status(400).json({ message: error.message });
    }
  }

  return next();
};

export = validadeOrderEntries;