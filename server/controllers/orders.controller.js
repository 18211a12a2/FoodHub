import Orders from "../mongodb/models/orders.js";


const saveUserOrder = async (req,res) =>{
    try {
        const { userId, itemsPlaced, dateOfOrder } = req.body;
        const cart = await Orders.create({ userId, dateOfOrder, items: itemsPlaced.items });
        res.status(200).json(cart);
      } catch (error) {
        res.status(500).json({ success: false, message: 'An error occurred while saving the data' });
      }
}

export {
    saveUserOrder
}