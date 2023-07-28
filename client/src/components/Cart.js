import { useEffect, useState } from 'react';
import '../styles/Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { cartActions } from '../store/restaurantCart-slice';
import { Link } from 'react-router-dom';
import axios from '../axios.js';

function Cart(){
    let totalPrice = 0;
    const dispatch = useDispatch();
    const [isAuthenticated, setAuthentication] = useState(false);
    useEffect(()=>{
        window.scroll(0,0);
        setAuthentication(!!userData.userId);
    })

    let cartItems = useSelector((state)=>{
        console.log("cart : ",state.cart.itemList)
        totalPrice = 0;
        state.cart.itemList.forEach(item => {
            totalPrice += item.totalPrice;
        });
        return state.cart.itemList
    });
    
    let specialMessage = useSelector(state=>state.cart.specialMessage);

    let userData = useSelector((state)=>state.auth.userData);

    function removeItem(id){
        dispatch(cartActions.removeFromCart(id))
    }

    function changeQuantity(e,item){
        dispatch(cartActions.changeQuantity({
            "quantity":e.target.value,
            "itemId":item.itemId
        }))
    }
    async function handleCheckout(){
        let userId = userData.userId;
        axios.post('/cartItems', { userId, cartItems, specialMessage })
        .then(response => {
            console.log('Cart saved successfully:', response.data);
        })
        .catch(error => {
            console.error('Error saving cart:', error.response);
        })
    }

    function handleChange(e){
        dispatch(cartActions.getSpecialMessage(e.target.value));
      };

    return (
        <div className='cart'>
                <div className='cart_container'>
                    <div className='cart_header'>
                        {cartItems.length ? (<h2>Your Food Basket</h2>) : (<h2>Your Food Basket is empty</h2>)}
                        {/* Special Message/Instructions Text Box */}
                        <textarea
                            className='special_message'
                            placeholder='Add any special message or instructions for your order here...'
                            value={specialMessage}
                            onChange={handleChange}
                        />
                        <div className='checkout_container'>
                            <p className='cart_price'>Total Price : ${totalPrice.toFixed(2)}</p>
                            {isAuthenticated ? (
                                <Link to='/checkout'><button onClick={handleCheckout} className='checkout_btn'>Checkout</button></Link>
                            ) : (
                                <Link to='/login'><button onClick={handleCheckout} className='checkout_btn'>Login to Continue</button></Link>
                            )}
                        </div>
                    </div>
                    <div className='cart_cards'>
                    {
                      cartItems.map((item,i)=>(
                        <div className='cart_item' key={item.itemId}>
                            <div className='cart_itemLeft'>
                                <p>{item.itemName}</p>
                                <p>$ {item.price.toFixed(2)}</p>
                                <label className='cartProduct_quantity'>Quantity </label>    
                                <input className='cartProduct_quantityInput' onChange={(e)=>changeQuantity(e,item)} min='1' defaultValue={item.quantity} type='number'/> 
                            </div>
                            <div className='cart_itemRight'>
                                <img src={item.image} alt='menu_item'></img>
                                <div onClick={()=>removeItem(item.itemId)} className='cartProduct_button'><DeleteIcon/></div>
                            </div>
                        </div>
                      ))
                    }
                    </div>
                </div>
        </div>
    );
}

export default Cart;