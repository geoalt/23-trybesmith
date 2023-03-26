import dotenv from 'dotenv';
import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken';
import { IUser } from '../interfaces';

dotenv.config();

const SECRET = process.env.JWT_SECRET || 'secret';

const config: SignOptions = {
  expiresIn: '2d',
  algorithm: 'HS256',
};

class Auth {
  static generate(user: IUser): { token: string } | void {
    try {
      return { token: jwt.sign(user, SECRET, config) };
    } catch (error) {
      console.error(error);
    }
  }

  static verify(token: string): string | JwtPayload | void {
    try {
      return jwt.verify(token, SECRET);
    } catch (error) {
      console.error(error);
    }
  }
}

export = Auth;