import { useEffect, useState } from 'react';
import '../styles/Restaurant.css';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/restaurantCart-slice';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/FoodItemBox.css';

import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

function Restaurant(){
    const [openDialog, handleDisplay] = useState(false);

    const dispatch = useDispatch();
    let restaurantMenu = {}
    useSelector((state)=>{
        restaurantMenu = JSON.parse(localStorage.getItem('res-menu'));
        return state.menu.restaurantMenu;
    })

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const boxItem = useSelector(state=>state.cart.dailogData);
    let cartItems = useSelector((state)=> state.cart.itemList);
    function addToCart(menu,id){
        let isSameRestaurant = true;
        if(cartItems.length){
            isSameRestaurant = cartItems.every(item=>item.restaurantId===id);
        }
        if(!isSameRestaurant){
            alert("You cannot add items from different Restaurants, Please add the items from same Restaurant.");
            return;
        }

        let dailogBoxData = {
            "restaurantId":id,
            "itemId" : `${id}#${menu.itemName}`,
            "itemName": menu.itemName,
            "price":getPrice(menu.price),
            "description": menu.description,
            "image": menu.image,
            "quantity":1
        }
        dispatch(cartActions.addToCart(dailogBoxData))
        dispatch(cartActions.dialogBoxData(dailogBoxData));
        openDialogBox();
    }

    function getPrice(p){
        let price = p.slice(1);
        return +price;
    }

    function changeQuantity(val,boxItem){
        let q = boxItem.quantity;
        if(!val && q-1<=0) return;
        q = val ? q+1 : q-1;
        dispatch(cartActions.changeQuantity({
            "quantity":q,
            "itemId":boxItem.itemId
        }))
        console.log(boxItem)
    }

    const handleClose = () => {
        handleDisplay(false);
     };
  
     const openDialogBox = () => {
        handleDisplay(true);
     };

    return (
        <div className='restaurant'>
            <div className='ires_container'>
                <div className='ires_image'><img src={restaurantMenu.image} alt='restaurant'></img></div>
                <div className='ires_main'>
                    <div className='ires_detailsLeft'>
                        <h2>{restaurantMenu.name}</h2>
                        <div className='ires_subDetails'>
                            <span className='ires_rating'>{restaurantMenu.rating}<StarIcon/></span>
                            <span>{restaurantMenu.type}</span>|
                            <span>{restaurantMenu.distance}</span>
                        </div>
                    </div>
                    <div className='ires_detailsRight'>
                        <div className='ires_delivery'>
                            <span>Delivery Time</span>
                            <span>{restaurantMenu.deliveryTime}</span>
                        </div>
                        <div className='ires_0delivery'>
                            <span>$0.00</span>
                            <span>delivery fee, first order</span>
                        </div>
                    </div>
                </div>
                <div className='ires_menu'>
                    {
                        restaurantMenu.menuHeaders.map((head,i)=>(
                            <div key={i}>
                                <h2 className='ires_head' >{head}</h2>{
                                restaurantMenu.menu[`${head}`].map((item,j)=> (
                                    <div className='menu_item' key={j}>
                                        <div className='left'>
                                            <p>{item.itemName}</p>
                                            <p>{item.price}</p>
                                            <p className='ires_description'>{item.description}</p>
                                        </div>
                                        <div className='right'>
                                            <img src={item.image} alt="food"></img>
                                                <button className='AddToCart' onClick={(e)=>addToCart(item,restaurantMenu.id)}>Add</button>
                                        </div>
                                    </div>  
                                ))}
                            </div>
                        ))
                    }
                </div>
            </div>{
                openDialog && ( <Dialog onClose = {handleClose} open = {openDialog}>
            <div className="dialog_clsBtn">
                <span onClick={handleClose}><CloseIcon/></span>
            </div>
            <DialogTitle>{boxItem.itemName} </DialogTitle>
            <div className='foodItem'>
                <div className='box_container'>
                    <img src={boxItem.image} alt='food item'></img>
                    <p className='box_description'>{boxItem.description}</p>
                    <p>$    {boxItem.price.toFixed(2)}</p>
                    <div className='incDecQuantity'>
                        <button onClick={()=>changeQuantity(0,boxItem)}>-</button> {boxItem.quantity}
                        <button onClick={()=>changeQuantity(1,boxItem)}>+</button>
                    </div>
                </div>
            </div>
            </Dialog>)}
        </div>
    );
}

export default Restaurant;