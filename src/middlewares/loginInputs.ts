import { NextFunction, Request, Response } from 'express';
import loginSchema from './schemas/loginSchema';

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { error } = loginSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  return next();
};

export = validateLogin;