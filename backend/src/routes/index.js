// src/routes/index.js
import express from 'express';


import authRoutes from './authRoutes.js';
import clientRoutes from './clientRoutes.js';
import companyRoutes from './companyRoutes.js';
import subAgencyRoute from './subAgencyRoute.js'
// import projectRoutes from './projectRoutes.js';
// Add more route imports as needed


const router = express.Router();



router.use('/auth', authRoutes);
router.use('', clientRoutes);
router.use('', companyRoutes);
router.use('', subAgencyRoute)
// router.use('/projects', projectRoutes);
// Add more routes as needed

export default router;
