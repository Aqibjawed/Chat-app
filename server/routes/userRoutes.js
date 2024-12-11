import express from 'express'
import { getUsersFoSidebar } from '../controllers/userController.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

router.get('/', protectRoute, getUsersFoSidebar);

export default router;