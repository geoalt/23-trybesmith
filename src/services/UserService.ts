import Auth from '../auth/authorization';
import { IUser } from '../interfaces';
import connection from '../models/connection';
import UserModel from '../models/UserModel';

class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  async insertOne(user: IUser) {
    await this.model.insertOne(user);
    console.log('SERVICE', user);
    const { username, vocation, level } = user;
    const token = Auth.generate({ username, vocation, level });

    return { status: 201, payload: token };
  }
}

export = UserService;