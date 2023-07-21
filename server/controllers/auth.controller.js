import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import Users from "../mongodb/models/user.js"

const register = async(req,res) =>{
    try{
        const { firstName, lastName, email, password } = req.body;
        const salt = await bcrypt.genSalt();
        const pwdHash = await bcrypt.hash(password,salt);
        const newUser = new Users({
            firstName,
            lastName,
            email,
            password:pwdHash
        })
        const savedUser = await newUser.save();
        res.status(201).json(savedUser); 
    }catch(err){
        res.status(500).json({msg : err.message});
    }
}

const login = async(req,res) =>{
    try{
        const { email, password } = req.body;
        const user = await Users.findOne({email:email});
        if(!user) return res.status(400).json({msg : "User does not exists"});
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch)  return res.status(400).json({msg : "Invalid credentials"});
        const token = jwt.sign({id : user._id}, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({token, user});        
    }catch(err){
        res.status(500).json({msg : err.message});
    }
}

export {
    register,
    login
}