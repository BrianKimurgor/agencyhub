import express from 'express';
import {  createClient, getClient, updateClient, deleteClient, getClients } from '../controllers/clientController.js';


const router = express.Router();

router.post('/clients',  createClient);
router.get('/clients', getClients)
router.get('/clients/:id',  getClient);
router.put('/clients/:id',  updateClient);
router.delete('/clients/:id',  deleteClient);

export default router;
