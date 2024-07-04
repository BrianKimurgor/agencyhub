// backend/src/app.js

import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import errorMiddleware from './middlewares/errorMiddleware.js';
import { EventEmitter } from 'events';


const app = express();
EventEmitter.defaultMaxListeners = 20;

app.use((req, res, next) => {
    console.log(`request: ${req.method} ${req.url}`);
    next();
  });

app.use(cors());
app.use(express.json());
app.use('/api', routes);
app.use(errorMiddleware);

export default app;
