import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
        "firstName" : {type: String, required:true},
        "lastName": {type: String, required:true},
        "email": {type: String, required:true},
        "password": {type: String, required:false},
        "cart": [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cart' }],
})

const userModel = mongoose.model('User',UserSchema);

export default userModel;