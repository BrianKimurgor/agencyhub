import express from 'express';
import { createBranding, getBranding, updateBranding, deleteBranding } from '../controllers/brandingController.js';

const router = express.Router();

router.post('/brandings', createBranding);
router.get('/brandings/:id', getBranding);
router.put('/brandings/:id', updateBranding);
router.delete('/brandings/:id', deleteBranding);

export default router;
