import Auth from '../auth/authorization';
import connection from '../models/connection';
import UserModel from '../models/UserModel';

class LoginService {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  async login(username: string, password: string) {
    try {
      const result = await this.model.findOne(username, password);
      const { id, vocation, level } = result;
      const token = Auth.generate({ id, username, vocation, level });
      
      return { status: 200, payload: token };
    } catch (error) {
      return { status: 401, payload: { message: 'Username or password invalid' } };
    }
  }
}

export = LoginService;