import { Request, Response } from 'express';
import ProductService from '../services/ProductService';

class ProductController {
  service: ProductService;
  
  constructor() {
    this.service = new ProductService();
  }

  // Mesmo resultado que o código acima, porem encurtado
  // constructor(private service = new ProductService()) {}

  async insertOne(req: Request, res: Response) {
    const product = req.body;
    const result = await this.service.insertOne(product);
    return res.status(result.status).json(result.payload);
  }
}

export = ProductController;