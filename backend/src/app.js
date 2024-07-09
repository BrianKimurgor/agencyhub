// backend/src/app.js

import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import errorMiddleware from './middlewares/errorMiddleware.js';
import { EventEmitter } from 'events';


const app = express();
EventEmitter.defaultMaxListeners = 20;

// const corsOptions = {
//   origin: 'http://localhost:5173',
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
//   optionsSuccessStatus: 204
// };

// Allow request from a server
app.use(cors({
  origin: 'http://127.0.0.1:5173'
}));


/**
 * Middleware function to log incoming requests.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @param {function} next - The next middleware function in the stack.
 */
app.use((req, res, next) => {
    console.log(`request: ${req.method} ${req.url}`);
    next();
  });

// app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', routes);
app.use(errorMiddleware);

export default app;
