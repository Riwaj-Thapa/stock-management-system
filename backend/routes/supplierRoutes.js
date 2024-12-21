import express from 'express';
import { registerSuppiler } from '../controllers/supplierController.js';


const router = express.Router();

router.post('/register-supplier',registerSuppiler)



export default router;