import { Router } from 'express';
import LoginController from '../controllers/LoginController';
import validateLogin from '../middlewares/loginInputs';

const login = Router();
const controller = new LoginController();

login.post('/', validateLogin, (req, res) => controller.login(req, res));

export = login;