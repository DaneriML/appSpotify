import userController from '../controllers/userControllers.js';
import express from 'express';

const router = express.Router();
router.get('/test', userController.testController);

export default router;