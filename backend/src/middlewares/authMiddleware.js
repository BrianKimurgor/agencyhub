// src/middlewares/authMiddleware.js
import { verifyToken } from '../utis/jwt.js';


/**
 * Middleware function to check if a valid token is provided in the request headers.
 * If a valid token is found, it decodes the token and attaches the decoded user information to the request object.
 * If no token is provided or the token is invalid, it returns a 401 Unauthorized response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function in the chain.
 */
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
};

export default authMiddleware;
