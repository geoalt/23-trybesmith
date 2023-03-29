import dotenv from 'dotenv';
import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import { IUsers } from '../interfaces';

dotenv.config();

// const SECRET = process.env.JWT_SECRET || 'secret';
const SECRET: Secret = 'secret';

const config: SignOptions = {
  expiresIn: '2d',
  algorithm: 'HS256',
};

class Auth {
  static generate(user: IUsers) {
    try {
      return { token: jwt.sign(user, SECRET, config) };
    } catch (error) {
      return;
      console.error(error);
    }
  }

  static authenticate(token: string) {
    return jwt.verify(token, SECRET);
  }
}

export = Auth;