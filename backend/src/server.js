// src/server.js
import express from 'express'
import cors from 'cors'
import routes from './routes/index.js'
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', routes);

// Error handling middlewar
import errorMiddleware from './middlewares/errorMiddleware.js';
app.use(errorMiddleware);

export default  app;
