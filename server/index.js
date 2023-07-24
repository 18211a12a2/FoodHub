import express from "express";
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from "./mongodb/connect.js";
import cartRouter from "./routes/cartItems.routes.js"
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import stripe from "./routes/stripe.js";
import ordersRouter from "./routes/orders.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit : '50mb'}));

app.get('/',(req,res)=>{
    res.send({message:"hello !!"});
})

app.use('/users',userRouter);

app.use('/cartItems', cartRouter);

app.use('/auth', authRouter);

app.use('/stripe',stripe);

app.use('/orders',ordersRouter);

const startServer = async ()=>{
    try{
        connectDB(process.env.MONGODB_URL);

        app.listen(8080,()=>console.log("Server has started at : http://localhost:8080"));
    }catch(err){
        console.log(err);
    }
}

startServer();