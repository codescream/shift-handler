import express from "express";
import { create, fetchAll, fetchOne, remove } from "../controllers/client.js";

const router = express.Router();

router.post('/', create);

router.delete('/', remove);

router.get('/', fetchAll);

router.get('/:id', fetchOne);

export default router;