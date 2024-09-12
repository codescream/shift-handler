import express from 'express';
import { clientShifts, create, deleteOne, fetchAll, fetchOne, update } from '../controllers/shift.js';

const router = express.Router();

router.post('/', create);

router.get('/', fetchAll);

router.get('/:id', fetchOne);

router.get('/client/:id', clientShifts);

router.patch('/:id', update);

router.delete('/:id', deleteOne);

export default router;