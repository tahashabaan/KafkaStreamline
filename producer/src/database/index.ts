import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Product } from '../entity/product';
import * as dotenv from 'dotenv';

dotenv.config();

const database = process.env.DB_NAME;
const host = process.env.DB_HOST;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const port = parseInt(process.env.DB_PORT || '5432', 10);

if (!database || !host || !username || !password) {
  throw new Error('Database connection details are missing in environment variables');
}

const connectdb = () => createConnection({
  type: 'postgres',
  host,
  port,
  username,
  password,
  database,
  synchronize: true,
  entities:[Product],
  logging: true,
  ssl: {
    rejectUnauthorized: false,
  },
  // entities: [Product],
}).then(() => {
  console.log('Database connected');
}).catch((error:any) => console.log('Error: ', error));

export default connectdb;