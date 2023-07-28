 import Cart from '../mongodb/models/cartItems.js';

const getAllCartItems = async (req,res)=> {
    try{
      const userId = req.params.id;
      const userExists = await Cart.findOne({userId});
      if(userExists){
        res.status(200).send({items:userExists.items, specialMessage:userExists.specialMessage})
      }else{
        res.status(200).send(null)
      }
  }catch(err){
      res.status(500).json({message: err.message});
  }
};
const insertCartItem = async (req,res)=> {
  try {
      const { userId, cartItems, specialMessage } = req.body;
      let cart = await Cart.findOne({ userId });
      if (cart) {
        cart = await Cart.updateOne({ userId }, { items: cartItems, specialMessage:specialMessage });
        res.status(200).json(cart.items);
      } else {
        const newCartItems = await Cart.create({ userId, items: cartItems, specialMessage });
        res.status(200).json(newCartItems);
      }
    } catch (error) {
      res.status(500).json({ success: false, message: 'An error occurred while saving the cart' });
    }
};
const updateCartItem = async (req,res)=> {};
const removeCartItem = async (req,res)=> {
  try{
    const userId = req.params.id;
    const userExists = await Cart.findOne({userId});
    if(userExists){
      const result = await Cart.deleteMany({userId});
      res.status(200).json({ message: 'All cart items have been deleted successfully.', cartItems : userExists });
    }
  } catch (err) {
    console.error('Error deleting cart items:', err);
    res.status(500).json({ message: 'An error occurred while deleting cart items.' });
  }
}

export {
    getAllCartItems,
    insertCartItem,
    updateCartItem,
    removeCartItem
}