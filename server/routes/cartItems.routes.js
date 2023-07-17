import express from 'express';
import { getAllCartItems, insertCartItem, removeCartItem, updateCartItem } from '../controllers/cartItems.controller.js';


const router = express.Router();

router.route('/:id').get(getAllCartItems);
router.route('/').post(insertCartItem);
router.route('/:id').patch(updateCartItem);
router.route('/:id').post(removeCartItem);

export default router;
