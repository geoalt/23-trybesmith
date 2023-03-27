import express from 'express';
import UserController from '../controllers/UserController';
import validateUser from '../middlewares/userInputs';

const users = express.Router();
const controller = new UserController();

users.post('/', validateUser, (req, res) => controller.insertOne(req, res));

export = users;