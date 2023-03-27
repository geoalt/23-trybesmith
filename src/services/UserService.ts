import Auth from '../auth/authorization';
import { IUsers } from '../interfaces';
import connection from '../models/connection';
import UserModel from '../models/UserModel';

class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  async insertOne(user: IUsers) {
    const id = await this.model.insertOne(user);
    const { username, vocation, level } = user;
    const token = Auth.generate({ id, username, vocation, level });

    return { status: 201, payload: token };
  }
}

export = UserService;