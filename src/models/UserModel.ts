import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IUsers } from '../interfaces';

class UserModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async findOne(username: string, password: string): Promise<IUsers> {
    const query = `
      SELECT 
      id, username, vocation, level
      FROM Trybesmith.users
      WHERE username = ?
      AND password = ?`;

    const [[result]] = await this.connection.execute<IUsers[] & RowDataPacket[]>(query, [
      username,
      password,
    ]);

    return result;
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