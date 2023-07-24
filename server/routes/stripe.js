import Stripe from 'stripe';
import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const stripe = Stripe(process.env.STRIPE_KEY);
const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {
  const line_items = req.body.cartItems.map(item=>{
    return {
        price_data:{
            currency:"usd",
            product_data:{
                name:item.itemName,
                images: [item.image],
                description: item.description,
                metadata:{
                    id:item.itemId,
                }
            },
            unit_amount: Math.floor(item.price * 100),
        },
        quantity: item.quantity
      }
  })
  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}/checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}/cart`,
  });
  res.send({url:session.url});
});

export default router;