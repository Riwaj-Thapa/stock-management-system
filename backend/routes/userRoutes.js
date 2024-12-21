import express from 'express';
import { registerUser, loginUser } from '../controllers/userController.js';
import protectAdminRoute from '../middlewares/adminCheck.js';

const router = express.Router();

router.post('/register-admin',registerUser)

router.post('/register',protectAdminRoute,registerUser)

router.post('/login',loginUser)

export default router;