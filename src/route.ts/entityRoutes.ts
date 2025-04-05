import express from 'express';
import { createEntity, deleteEntity, getAllEntity, updateEntity } from '../controllers/entityController';

const router = express.Router();

router.get('/', getAllEntity);
router.post('/', createEntity);
router.put('/:id', updateEntity);    
router.delete('/:id', deleteEntity);

export default router;