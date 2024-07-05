// backend/src/routes/companyRoutes.js

import express from 'express'
import { authorize } from '../middlewares/roleMiddleware.js';
import {
    createCompany,
    getCompanies,
    getCompanyById,
    updateCompany,
    deleteCompany
} from '../controllers/companyController.js';

const router = express.Router();

// router.post('/companies', createCompany);
router.post('/companies', authorize(['USER', 'ADMIN']),  createCompany);
router.get('/companies', authorize('ADMIN'), getCompanies);
router.get('/companies/:id',authorize('ADMIN'),  getCompanyById);
router.put('/companies/:id',authorize('ADMIN'), updateCompany);
router.delete('/companies/:id',authorize('ADMIN'), deleteCompany);

export default router;
