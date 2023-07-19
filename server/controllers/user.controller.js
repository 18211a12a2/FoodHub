import User from '../mongodb/models/user.js';

const getUser = async (req,res)=> {
    try{
        const {email} = req.params;
      //  console.log("email in user: ",req.params,email)
        const userExists = await User.findOne({email});
      //  console.log("1 uaer : ",userExists)
        if(userExists){
         res.status(200).send({userId : userExists._id})
        }
    }catch(err){
        res.status(500).json({message: error.message});
    }
    
}

const createUser = async (req,res)=> {
    try{
        const { family_name, given_name, email } = req.body;
        const userExists = await User.findOne({email});

        if(userExists) return res.status(200).json(userExists);

        const newUser = await User.create({
            family_name,
            given_name,
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