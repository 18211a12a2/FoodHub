import { useSelector } from 'react-redux';
import '../styles/Checkout.css';
import axios from '../axios.js';

function CheckOut(){
    let checkoutItems = useSelector(state=>state.cart.itemList)
    let userData = useSelector((state)=>state.auth.userData);
    let specialMessage = useSelector((state)=>state.cart.specialMessage);
    async function handlePayments(){
        axios.post('/stripe/create-checkout-session',{
            cartItems:checkoutItems,
            userId : userData.userId,
        }).then(res=>{
            console.log("res stripe : ",res)
            if(res.data.url){
                window.location.href = res.data.url;
            }
        }).catch(err=>{
            console.log(err.message);
        })
    }
    return (
        <div className="checkout">
            <div className='co_container'>
                <h2>Checkout ({checkoutItems.length} {checkoutItems.length > 1 ? "items" : "item"})</h2>
                <div className='co_delivery co_cmn'>
                    <h3>Delivery Address</h3>
                    <div className='co_address'>
                        <p>UAB, Birmingham,</p>
                        <p>Alabama, USA</p>
                        <p>35205</p>
                    </div>
                </div>
                <div className='co_items co_cmn'>
                    <h3>Review Items</h3>
                    <div className='co_item_cards'>
                            {
                                checkoutItems.map((item,i)=>(
                                    <div className='co_item' key={item.itemId}>
                                        <div className='co_itemLeft'>
                                            <p>{item.itemName}</p>
                                            <p>$ {item.price.toFixed(2)}</p>
                                            <p className='coProduct_quantity'>Quantity : {item.quantity}</p>    
                                        </div>
                                        <div className='co_itemRight'>
                                            <img src={item.image} alt='menu_item'></img>
                                        </div>
                                    </div>
                                  ))
                            }
                    </div>
                </div>
                <div className='co_special_msg co_cmn_spcl'>
                    <h3>Special Message</h3>
                    <p>{specialMessage}</p>
                </div>
                <div className='co_payment co_cmn'>
                    <h3>Payment method</h3>
                    <button onClick={handlePayments}>Go to payments page</button>
                </div>
            </div>
        </div>
    );
}

export default CheckOut;