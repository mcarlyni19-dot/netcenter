import express from 'express';
import authRoutes from './auth.routes.js';
import ferramentasRoutes from './ferramentas.routes.js';
import reportsRoutes from './reports.routes.js';
import toolsRoutes from './tools.routes.js';
import profileRoutes from './profile.routes.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/ferramentas', ferramentasRoutes);
router.use('/reports', reportsRoutes);
router.use('/run-tool', toolsRoutes);
router.use('/auth/profile', profileRoutes);

export default router;
