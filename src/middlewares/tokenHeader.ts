import { NextFunction, Request, Response } from 'express';
import Auth from '../auth/authorization';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    req.body.userData = Auth.authenticate(token);
    console.log(req.body.userData);
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default validateToken;
