import connection from '../models/connection';
import OrderModel from '../models/OrderModel';

class OrderService {
  model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  async findAll() {
    const result = await this.model.findAll();
    return { status: 200, payload: result };
  }
}

export = OrderService;