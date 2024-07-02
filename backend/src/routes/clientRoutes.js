// src/routes/clientRoutes.js
import express from 'express'
import { getAllClientss, getClientByIds } from '../controllers/clientController.js';




const router = express.Router();


router.get('/', getAllClientss);
router.get('/:id', getClientByIds);

export default router;
