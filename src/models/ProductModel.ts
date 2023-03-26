import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import IProducts from '../interfaces';

class ProductsModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async findOne(id: number): Promise<IProducts> {
    const query = 'SELECT id, name, amount FROM Trybesmith.products WHERE id = ?';
    const [[result]] = await this.connection
      .execute<IProducts[] & RowDataPacket[]>(query, [id]);

    console.log(result);
    
    return result;
  }

  async insertOne(product: IProducts): Promise<number> {
    const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES  (?, ?)';
    const [result] = await this.connection
      .execute<ResultSetHeader>(query, [product.name, product.amount]);

    return result.insertId;
  }
}

export = ProductsModel;