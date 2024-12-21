import express from 'express';
import { addProduct} from '../controllers/productContoller.js'
import protectAdminRoute from '../middlewares/adminCheck.js';

const router = express.Router();

router.post('/addProduct',addProduct)


export default router;