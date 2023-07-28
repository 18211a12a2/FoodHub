import User from '../mongodb/models/user.js';

const getUser = async (req,res)=> {
    try{
        const {email} = req.params;
        const userExists = await User.findOne({email});
        if(userExists){
         res.status(200).send({userId : userExists._id})
        }
    }catch(err){
        res.status(500).json({message: error.message});
    }
    
}

const createUser = async (req,res)=> {
    try{
        const { firstName, lastName, email } = req.body;
        const userExists = await User.findOne({email});

        if(userExists) return res.status(200).json(userExists);

        const newUser = await User.create({
            firstName,
            lastName,
            email
        })
        res.status(200).json(newUser);

    }catch(error){
        res.status(500).json({message: error.message});
    }
}

export {
    getUser,
    createUser
}