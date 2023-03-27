import { NextFunction, Request, Response } from 'express';
import { levelSchema, passwordSchema, usernameSchema, vocationSchema } from './schemas/userSchema';

const validateUsername = (req: Request, res: Response) => {
  const { error } = usernameSchema.validate(req.body.username);

  if (error) {
    switch (error.message) {
      case '"username" must be a string':
        return res.status(422).json({ message: error.message });
      case '"username" length must be at least 3 characters long':
        return res.status(422).json({ message: error.message });
      default:
        return res.status(400).json({ message: error.message });
    }
  }
};

const validateVocation = (req: Request, res: Response) => {
  const { error } = vocationSchema.validate(req.body.vocation);

  if (error) {
    switch (error.message) {
      case '"vocation" must be a string':
        return res.status(422).json({ message: error.message });
      case '"vocation" length must be at least 3 characters long':
        return res.status(422).json({ message: error.message });
      default:
        return res.status(400).json({ message: error.message });
    }
  }
};

const validateLevel = (req: Request, res: Response) => {
  const { error } = levelSchema.validate(req.body.level);

  if (error) {
    switch (error.message) {
      case '"level" must be a number':
        return res.status(422).json({ message: error.message });
      case '"level" must be greater than or equal to 1':
        return res.status(422).json({ message: error.message });
      default:
        return res.status(400).json({ message: error.message });
    }
  }
};

const validatePassword = (req: Request, res: Response) => {
  const { error } = passwordSchema.validate(req.body.password);

  if (error) {
    switch (error.message) {
      case '"password" must be a string':
        return res.status(422).json({ message: error.message });
      case '"password" length must be at least 8 characters long':
        return res.status(422).json({ message: error.message });
      default:
        return res.status(400).json({ message: error.message });
    }
  }
};

const validateUser = (req: Request, res: Response, next: NextFunction) => validateUsername(req, res)
  || validateVocation(req, res)
  || validateLevel(req, res)
  || validatePassword(req, res)
  || next();

export default validateUser;