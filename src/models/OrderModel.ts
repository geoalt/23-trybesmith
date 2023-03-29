import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IOrders } from '../interfaces';

class OrderModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async insertOne(id: number) {
    const query = `
      INSERT INTO
        Trybesmith.orders (user_id)
        VALUES (?)
    `;
    const [result] = await this.connection
      .execute<ResultSetHeader>(query, [id]);

    return result.insertId;
  }

  async findAll(): Promise<IOrders[]> {
    const query = `
    SELECT o.id, o.user_id AS userId,
      JSON_ARRAYAGG(p.id) AS productsIds
      FROM Trybesmith.orders AS o
      INNER JOIN Trybesmith.products AS p
      ON o.id = p.order_id
      GROUP BY o.id
    `;
    const [result] = await this.connection
      .execute<IOrders[] & RowDataPacket[]>(query);

    return result;
  }
}

export = OrderModel;