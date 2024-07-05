import express from 'express';
import { createIntegration, getIntegration, updateIntegration, deleteIntegration } from '../controllers/integrationController.js';

const router = express.Router();

router.post('/integrations', createIntegration);
router.get('/integrations/:id', getIntegration);
router.put('/integrations/:id', updateIntegration);
router.delete('/integrations/:id', deleteIntegration);

export default router;
