import dotenv from 'dotenv';
import { IConfig } from '../types/interfaces';

dotenv.config();

const config: IConfig = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  limit: 5,
  windowSeconds: 60,
  redis_host: process.env.REDIS_HOST || '127.0.0.1',
  redis_port: parseInt(process.env.REDIS_PORT || '6379'),
  redis_username: process.env.REDIS_USERNAME as string,
  redis_password: process.env.REDIS_PASSWORD as string,
};

export default config;
