import express from 'express';
import { createResourceAllocation, getResourceAllocation, updateResourceAllocation, deleteResourceAllocation, getResourseAllocations } from '../controllers/resourceAllocationController.js';


const router = express.Router();

router.post('/resource-allocations', createResourceAllocation);
router.get('/resource-allocations', getResourseAllocations);
router.get('/resource-allocations/:id', getResourceAllocation);
router.put('/resource-allocations/:id', updateResourceAllocation);
router.delete('/resource-allocations/:id', deleteResourceAllocation);

export default router;
