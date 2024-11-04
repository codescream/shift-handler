import express from 'express';
import { clientShifts, create, deleteOne, fetchAll, fetchOne, update } from '../controllers/shift.js';
import { verifyRole, verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/', verifyRole, create);

router.get('/', fetchAll);

router.get('/:id', fetchOne);

router.get('/client/:id', clientShifts);

router.patch('/:id', update);

router.delete('/:id', verifyRole, deleteOne);

export default router;