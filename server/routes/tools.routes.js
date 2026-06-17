import express from 'express';
import { runTool } from '../controllers/tools.controller.js';

const router = express.Router();
router.post('/', runTool);

export default router;
