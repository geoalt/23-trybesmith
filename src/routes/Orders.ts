import express from 'express';
import OrderController from '../controllers/OrderController';

const orders = express.Router();
const controller = new OrderController();

orders.get('/', (req, res) => controller.findAll(req, res));

export = orders;