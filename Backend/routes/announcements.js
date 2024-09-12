import express from "express";
import { fetchAll, remove, sendMessage } from "../controllers/announcement.js";

const router = express.Router();

router.post('/', sendMessage);
router.get('/', fetchAll);
router.delete('/:id', remove);

export default router;