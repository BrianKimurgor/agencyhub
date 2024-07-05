// src/utils/jwt.js
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();


const secret = process.env.JWT_SECRET || 'your_jwt_secret';

/**
 * Generates a JWT token for the given user.
 * @param {Object} user - The user object containing id and email.
 * @returns {string} - The generated JWT token.
 */
export const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, secret, { expiresIn: '1h' });
};


/**
 * Verifies the authenticity of a given token using JWT.
 * @param {string} token - The token to be verified.
 * @returns {object} - The decoded token payload if verification is successful.
 * @throws {Error} - If the token is invalid or verification fails.
 */
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    throw new Error('Invalid token');
  }
};
