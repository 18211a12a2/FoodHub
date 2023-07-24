import mongoose from 'mongoose';

const OrdersSchema = new mongoose.Schema({
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
        dateOfOrder : {type:Date,required : true}
})

const OrderItemsModel = mongoose.model('Order',OrdersSchema);

export default OrderItemsModel;