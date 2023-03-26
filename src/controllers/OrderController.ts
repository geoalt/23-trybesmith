import { Request, Response } from 'express';
import OrderService from '../services/OrderService';

class OrderController {
  service: OrderService; 

  constructor() {
    this.service = new OrderService();
  }

  async findAll(_req: Request, res: Response) {
    const result = await this.service.findAll();
    return res.status(result.status).json(result.payload);
  }
}

export = OrderController;