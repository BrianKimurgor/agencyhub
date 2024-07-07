// src/controllers/authController.js
import { loginService, registerService } from '../services/authService.js';
import logger from '../utils/logger.js';

export const login = async (req, res) => {
  try {
    const { email, password, name, role } = req.body;
    const token = await loginService(email, password, name, role);
    res.json({ token });
  } catch (error) {
    logger.error(`Login error: ${error.message}`, { error });
    res.status(500).json({ message: 'Credentials are invalid' });
  }
};

export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const user = await registerService(name, email, password, role);
    res.json(user);
  } catch (error) {
    logger.error(`Register error: ${error.message}`, { error });
    res.status(500).json({ message: 'Internal server error' });
  }
};
