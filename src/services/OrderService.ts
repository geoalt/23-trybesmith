import connection from '../models/connection';
import OrderModel from '../models/OrderModel';
import ProductsModel from '../models/ProductModel';

class OrderService {
  model: OrderModel;

  modelProduct: ProductsModel;
  
  constructor() {
    this.model = new OrderModel(connection);
    this.modelProduct = new ProductsModel(connection);
  }

  async insertOne(userId: number, productsIds: number[]) {
    const orderId = await this.model.insertOne(userId);
    
    await Promise.all(productsIds.map((id) => this.modelProduct.update(id, orderId)));

    return { status: 201, payload: { userId, productsIds } };
  }

  async findAll() {
    const result = await this.model.findAll();
    return { status: 200, payload: result };
  }
}

export = OrderService;