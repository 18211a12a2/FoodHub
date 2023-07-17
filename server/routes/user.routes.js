import express from 'express';
import { getUser, createUser  } from '../controllers/user.controller.js';


const router = express.Router();

router.route('/:email').get(getUser);
router.route('/').post(createUser);

export default router;
