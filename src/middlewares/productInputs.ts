import { NextFunction, Request, Response } from 'express';
import { productAmountSchema, productNameSchema } from './schemas/productSchema';

const validateName = (req: Request, res: Response) => {
  const { error } = productNameSchema.validate(req.body.name);

  if (error) {
    switch (error.message) {
      case '"name" must be a string':
        return res.status(422).json({ message: error.message });
      case '"name" length must be at least 3 characters long':
        return res.status(422).json({ message: error.message });
      default:
        return res.status(400).json({ message: error.message });
    }
  }
};

const validateAmount = (req: Request, res: Response) => {
  const { error } = productAmountSchema.validate(req.body.amount);

  if (error) {
    switch (error.message) {
      case '"amount" must be a string':
        return res.status(422).json({ message: error.message });
      case '"amount" length must be at least 3 characters long':
        return res.status(422).json({ message: error.message });
      default:
        return res.status(400).json({ message: error.message });
    }
  }
};

const validateProduct = (req: Request, res: Response, next: NextFunction) => (
  validateName(req, res) || validateAmount(req, res) || next()
);

export default validateProduct;