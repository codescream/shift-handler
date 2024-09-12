import express from 'express';
import { clientShifts, create, deleteOne, fetchAll, fetchOne, update } from '../controllers/shift.js';
import { verifyRole, verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/', verifyRole, create);

router.get('/', verifyToken, fetchAll);

router.get('/:id', verifyToken, fetchOne);

router.get('/client/:id', verifyToken, clientShifts);

router.patch('/:id', verifyRole, update);

router.delete('/:id', verifyRole, deleteOne);

export default router;