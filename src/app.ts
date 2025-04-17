import express from 'express';
import { errorHandler } from './middlewares/errorHandler';
import rateLimiterRoute from './routes/rateLimiter';


const app = express();

app.use(express.json());

app.use(rateLimiterRoute);

app.use(errorHandler);

export default app;