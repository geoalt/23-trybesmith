import express from 'express';
import OrderController from '../controllers/OrderController';
import validadeOrderEntries from '../middlewares/orderEntries';
import validateToken from '../middlewares/tokenHeader';

const orders = express.Router();
const controller = new OrderController();

orders.get('/', (req, res) => controller.findAll(req, res));
orders.post('/', validateToken, validadeOrderEntries, (req, res) => controller.insertOne(req, res));

export = orders;