// backend/src/routes/companyRoutes.js

import express from 'express'
import authMiddleware from '../middlewares/authMiddleware.js';
import {
    createCompany,
    getCompanies,
    getCompanyById,
    updateCompany,
    deleteCompany
} from '../controllers/companyController.js';

const router = express.Router();

// router.post('/companies', createCompany);
router.post('/companies', authMiddleware, createCompany);
router.get('/companies', authMiddleware, getCompanies);
router.get('/companies/:id', authMiddleware, getCompanyById);
router.put('/companies/:id', authMiddleware, updateCompany);
router.delete('/companies/:id', authMiddleware, deleteCompany);

export default router;
