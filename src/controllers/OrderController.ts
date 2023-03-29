import { Request, Response } from 'express';
import OrderService from '../services/OrderService';

class OrderController {
  service: OrderService; 

  constructor() {
    this.service = new OrderService();
  }

  async insertOne(req: Request, res: Response) {
    const { userData, productsIds } = req.body;

    const result = await this.service.insertOne(userData.id, productsIds);

    return res.status(result.status).json(result.payload);
  }

  async findAll(_req: Request, res: Response) {
    const result = await this.service.findAll();
    return res.status(result.status).json(result.payload);
  }
}

export = OrderController;