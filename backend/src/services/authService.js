// src/services/authService.js
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


/**
 * Authenticates a user by checking the provided email and password against the database.
 * @param {string} email - The email of the user to authenticate.
 * @param {string} password - The password of the user to authenticate.
 * @returns {Promise<string>} A JWT token if authentication is successful.
 * @throws {Error} If the credentials are invalid.
 */
export const loginService = async (email, password) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !await bcrypt.compare(password, user.password)) {
    throw new Error('Invalid credentials');
  }
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
  return token;
};


/**
 * Registers a new user with the provided name, email, password, and role.
 * @param {string} name - The name of the user.
 * @param {string} email - The email of the user.
 * @param {string} password - The password of the user.
 * @param {string} role - The role of the user.
 * @returns {Promise<object>} A promise that resolves to the created user object.
 */
export const registerService = async (name, email, password, role) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { name, email, password: hashedPassword, role }
  });
  return user;
};
