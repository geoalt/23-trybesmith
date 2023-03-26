import connection from '../models/connection';
import { IProducts } from '../interfaces';
import ProductModel from '../models/ProductModel';

class ProductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  async findAll() {
    const result = await this.model.findAll();
    return { status: 200, payload: result };
  }

  async insertOne(product: IProducts) {
    const id = await this.model.insertOne(product);
    const result = await this.model.findOne(id);

    return { status: 201, payload: result };
  }
}

export = ProductService;