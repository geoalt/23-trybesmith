import connection from '../models/connection';
import IProducts from '../interfaces';
import ProductModel from '../models/ProductModel';

class ProductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  async insertOne(product: IProducts) {
    const id = await this.model.insertOne(product);
    console.log(id);

    const result = await this.model.findOne(id);
    console.log(result);
    return { status: 201, payload: result };
  }
}

export = ProductService;