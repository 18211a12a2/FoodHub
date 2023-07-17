 import Cart from '../mongodb/models/cartItems.js';

const getAllCartItems = async (req,res)=> {
  try{
    const userId = req.params.id;
    const userExists = await Cart.findOne({userId});
    if(userExists){
     res.status(200).send(userExists.items)
    }
}catch(err){
    res.status(500).json({message: err.message});
}
};
const insertCartItem = async (req,res)=> {
  try {
      const { userId, cartItems } = req.body;
      let cart = await Cart.findOne({ userId });
      if (cart) {
        cart = await Cart.updateOne({ userId }, { items: cartItems });
        res.status(200).json(cart.items);
      } else {
        const newCartItems = await Cart.create({ userId, items: cartItems });
        res.status(200).json(newCartItems);
      }
    } catch (error) {
      res.status(500).json({ success: false, message: 'An error occurred while saving the cart' });
    }
};
const updateCartItem = async (req,res)=> {};
const removeCartItem = async (req,res)=> {};

export {
    getAllCartItems,
    insertCartItem,
    updateCartItem,
    removeCartItem
}