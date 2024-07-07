import express from 'express';
import { createSubAgency, getSubAgency, updateSubAgency, deleteSubAgency } from '../controllers/subAgencyController.js';


const router = express.Router();

router.post('/subagencies', createSubAgency);
router.get('/subagencies/:id', getSubAgency);
router.put('/subagencies/:id',  updateSubAgency);
router.delete('/subagencies/:id',  deleteSubAgency);

export default router;
