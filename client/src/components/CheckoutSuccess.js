import { useEffect, useState } from "react";
import axios from '../axios.js';
import moment from 'moment';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import '../styles/CheckoutSuccess.css'
import { Link } from "react-router-dom";


function CheckoutSuccess(){
    let dateOfOrder = moment().format('MM-DD-YYYY');
    const [userFlag, setUserFlag] = useState(false);

    function saveUserOrder(userId, itemsPlaced){
        axios.post("/orders/save", {userId, dateOfOrder, itemsPlaced})
        .then(res=>{
            console.log("order placed",res)
        }).catch(err=>{
            console.log("error while placing order",err.response)
        })
    }

    useEffect(()=>{
        let user_id = JSON.parse(localStorage.getItem('JWT')).userId;
        if(!userFlag){
            axios.delete(`/cartItems/delete/${user_id}`).then(res=>{
                saveUserOrder(user_id, res.data.cartItems);
            }).catch(err=>{
                console.log('er : ',err);
            })  
            setUserFlag(true)
        }
    });

    return (
        <div className="checkoutSuccess">
            <div className="cs_container">
                <DeliveryDiningOutlinedIcon/>
                <h2>checkout success</h2>
                <p>Go back to <Link className="cs_homepage" to='/' style={{ textDecoration: 'none' }}>Home page</Link></p>
             </div>
        </div>
    )
}

export default CheckoutSuccess;