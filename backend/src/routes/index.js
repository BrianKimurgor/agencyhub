// src/routes/index.js
import express from 'express';
const router = express.Router();

import authRoutes from './authRoutes.js';
import clientRoutes from './clientRoutes.js';
// import projectRoutes from './projectRoutes.js';
// Add more route imports as needed

router.use('/auth', authRoutes);
router.use('/clients', clientRoutes);
// router.use('/projects', projectRoutes);
// Add more routes as needed

export default router;
