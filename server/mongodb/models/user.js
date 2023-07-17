import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
        "family_name" : {type: String, required:true},
        "given_name": {type: String, required:true},
        "email": {type: String, required:true},
        "cart": [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cart' }],
})

const userModel = mongoose.model('User',UserSchema);

export default userModel;