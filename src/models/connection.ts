import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export default mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  // database: process.env.MYSQL_DATABASE || 'Trybesmith',
});