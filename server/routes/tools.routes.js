import express from 'express';
import { runTool } from '../controllers/tools.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = express.Router();
router.post('/', authMiddleware, runTool);

export default router;
