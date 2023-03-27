import { Request, Response } from 'express';
import LoginService from '../services/LoginService';

class LoginController {
  service: LoginService;

  constructor() {
    this.service = new LoginService();
  }

  async login(req: Request, res: Response) {
    const { username, password } = req.body;
    const result = await this.service.login(username, password);

    console.log(result.status, result.payload);

    return res.status(result.status).json(result.payload);
  }
}

export = LoginController;