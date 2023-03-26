import { Request, Response } from 'express';
import UserService from '../services/UserService';

class UserController {
  service: UserService;

  constructor() {
    this.service = new UserService();
  }

  async insertOne(req: Request, res: Response) {
    const user = req.body;
    const result = await this.service.insertOne(user);
    return res.status(result.status).json(result.payload);
  }
}

export = UserController;