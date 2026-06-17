import express from 'express';
import { fetchFerramentas } from '../controllers/ferramentas.controller.js';

const router = express.Router();
router.get('/', fetchFerramentas);

export default router;
