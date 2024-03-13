import express from 'express';
import protectRoute from '../middleware/protecttRoute.js';
import { getUserSlideBar } from '../controllers/userController.js';

const router=express.Router();

router.get("/" ,protectRoute,getUserSlideBar);

export default router;