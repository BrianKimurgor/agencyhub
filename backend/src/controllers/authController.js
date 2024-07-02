// src/controllers/authController.js
import { loginService, registerService } from '../services/authService.js';

export const login = async (req, res) => {
  const { email, password } = req.body;
  const token = await loginService(email, password);
  res.json({ token });
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await registerService(name, email, password);
  res.json(user);
};
