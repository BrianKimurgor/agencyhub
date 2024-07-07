// src/routes/index.js
import express, { application } from 'express';


import authRoutes from './authRoutes.js';
import clientRoutes from './clientRoutes.js';
import companyRoutes from './companyRoutes.js';
import subAgencyRoute from './subAgencyRoute.js'
import projectRoutes from './projectRoutes.js';
import resourseAlocationRoutes from './resourceAllocationRoutes.js'
import perfomanceRoutes from './performanceRoutes.js'
import brandingRoutes from './brandingRoutes.js'
import integrationRoutes from './integrationRoutes.js'
// Add more route imports as needed


const router = express.Router();



router.use('/auth', authRoutes);
router.use('', clientRoutes);
router.use('', companyRoutes);
router.use('', subAgencyRoute)
router.use('', projectRoutes);
router.use('', resourseAlocationRoutes)
router.use('', perfomanceRoutes)
router.use('', brandingRoutes)
router.use('', integrationRoutes)
// Add more routes as needed

export default router;
