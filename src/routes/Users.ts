import express from 'express';
import UserController from '../controllers/UserController';

const users = express.Router();
const controller = new UserController();

users.post('/', (req, res) => controller.insertOne(req, res));

export = users;