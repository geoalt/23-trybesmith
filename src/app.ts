import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

app.use('/products', routes.products);
app.use('/users', routes.users);
app.use('/orders', routes.orders);
app.use('/login', routes.login);

export default app;
