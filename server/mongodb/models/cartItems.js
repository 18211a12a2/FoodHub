import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
        items:[
                {
                "restaurantId" : {type: String, required:true},
                "itemId" : {type: String, required:true},
                "itemName": {type: String, required:true},
                "price": {type: Number, required:true},
                "description": {type: String, required:true},
                "image": {type: String, required:true},
                "quantity":{type: Number, required:true},    
                }
        ],
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        specialMessage: {type: String, required:false},
})

const cartItemsModel = mongoose.model('Cart',CartSchema);

export default cartItemsModel;