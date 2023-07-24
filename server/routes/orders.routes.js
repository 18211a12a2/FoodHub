import express from 'express';
import { saveUserOrder } from '../controllers/orders.controller.js';


const router = express.Router();

router.route('/save').post(saveUserOrder);

export default router;
