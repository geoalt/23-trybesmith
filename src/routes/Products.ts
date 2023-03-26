import express from 'express';
import ProductController from '../controllers/ProductController';

const products = express.Router();
const controller = new ProductController();

products.get('/', (req, res) => controller.findAll(req, res));

products.post('/', (req, res) => controller.insertOne(req, res));

export default products;