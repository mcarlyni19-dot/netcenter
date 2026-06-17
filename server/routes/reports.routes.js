import express from 'express';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { generateReport, listReports } from '../controllers/reports.controller.js';

const router = express.Router();
router.post('/generate', authMiddleware, generateReport);
router.get('/', authMiddleware, listReports);

export default router;
