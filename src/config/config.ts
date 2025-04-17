import dotenv from 'dotenv';
import { IConfig } from '../types/interfaces';

dotenv.config();

const config: IConfig = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  limit: 10,
  windowSeconds: 60,
};

export default config;
