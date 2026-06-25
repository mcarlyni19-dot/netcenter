import express from 'express';
import { runTool, runToolValidation } from '../controllers/tools.controller.js';

const router = express.Router();
router.post('/', runToolValidation, runTool);

export default router;
