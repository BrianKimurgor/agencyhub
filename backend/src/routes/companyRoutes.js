// backend/src/routes/companyRoutes.js

import express from 'express'
// import { authorize } from '../middlewares/roleMiddleware.js';
import {
    createCompany,
    getCompanies,
    getCompanyById,
    updateCompany,
    deleteCompany
} from '../controllers/companyController.js';

const router = express.Router();

// router.post('/companies', createCompany);
router.post('/companies',  createCompany);
router.get('/companies',  getCompanies);
router.get('/companies/:id',  getCompanyById);
router.put('/companies/:id', updateCompany);
router.delete('/companies/:id', deleteCompany);

export default router;
