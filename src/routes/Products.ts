import express from 'express';
import ProductController from '../controllers/ProductController';

const products = express.Router();
const controller = new ProductController();

products.post('/', (req, res) => controller.insertOne(req, res));

export default products;