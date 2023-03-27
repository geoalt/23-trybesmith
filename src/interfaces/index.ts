export interface IProducts {
  id?: number,
  name: string,
  amount: string,
}

export interface IUsers {
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password?: string,
}

export interface IOrders {
  id: number,
  userId: number,
  productsIds: number[],
}

export interface IResult {
  status: number;
  payload: void | {
    token: string;
  };
}
