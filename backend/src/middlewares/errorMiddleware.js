// src/middlewares/errorMiddleware.js
export const errorMiddleware = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  };

export default errorMiddleware