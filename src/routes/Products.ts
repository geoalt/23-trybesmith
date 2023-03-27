import express from 'express';
import ProductController from '../controllers/ProductController';
import validateProduct from '../middlewares/productInputs';

const products = express.Router();
const controller = new ProductController();

products.get('/', (req, res) => controller.findAll(req, res));

products.post('/', validateProduct, (req, res) => controller.insertOne(req, res));

export default products;