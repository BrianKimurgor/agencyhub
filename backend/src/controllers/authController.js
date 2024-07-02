// src/controllers/authController.js
import { loginService, registerService } from '../services/authService.js';

export const login = async (req, res) => {
  const { email, password, name, role } = req.body;
  const token = await loginService(email, password, name, role);
  res.json({ token });
};

export const register = async (req, res) => {
  const { name, email, password, role } = req.body;
  const user = await registerService(name, email, password,role);
  res.json(user);
};
