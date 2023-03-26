import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUsers } from '../interfaces';

class UserModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async insertOne(user: IUsers): Promise<number> {
    const query = `INSERT INTO Trybesmith.users 
     (username, vocation, level, password) 
     VALUES (?, ?, ?, ?)`;

    const [result] = await this.connection.execute<ResultSetHeader>(query, [
      user.username, 
      user.vocation, 
      user.level, 
      user.password,
    ]);

    return result.insertId;
  }
}

export = UserModel;