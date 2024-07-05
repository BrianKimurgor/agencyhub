import express from 'express';
import { createPerformance, getPerformance, updatePerformance, deletePerformance } from '../controllers/performanceController.js';

const router = express.Router();

router.post('/performances',  createPerformance);
router.get('/performances/:id', getPerformance);
router.put('/performances/:id',  updatePerformance);
router.delete('/performances/:id',  deletePerformance);

export default router;
