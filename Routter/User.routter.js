import express from 'express';
import { newregister, loginuser, getuser } from '../Controlers/User.controlers.js';
import authMiddleware from '../Middleware/auth.midleware.js';

const router = express.Router();

router.post('/register', newregister);
router.post('/login', loginuser);
router.get('/getuser', authMiddleware, getuser);

export default router;
