import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    itemList : [],
    totalQuantity : 0,
    dailogData:{}
};

function getExistingItem(state,newItem){
    return state.itemList.find(item=>item.itemId === newItem.itemId);
}

const restaurantCartSlice = createSlice({
    name:"cart",
    initialState,
    reducers: {
        addToCart : (state, action) => {
            const newItem = action.payload;
            const existingItem = getExistingItem(state,newItem);
            if(existingItem){
                existingItem.quantity++;
                existingItem.totalPrice +=  newItem.price;
            }else{
                state.itemList.push({
                    restaurantId:newItem.restaurantId   ,
                    itemId:newItem.itemId,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price,
                    itemName:newItem.itemName,
                    description:newItem.description,
                    image:newItem.image
                })
            }
            state.totalQuantity++;
        },
        removeFromCart(state, action){
            const itemId = action.payload;
            // if(state.itemList[itemId].quantity>1){
            //     state.itemList[itemId].quantity--;
            // }else{
                state.itemList = [...state.itemList].filter((item)=>item.itemId!==itemId)
            // }
        },
        setShowCart(state){
            state.showCart = true;
        },
        changeQuantity:(state,action)=>{
            const existingItem = getExistingItem(state,action.payload);
            existingItem.totalPrice = existingItem.price * action.payload.quantity;
            existingItem.quantity = action.payload.quantity;
            state.dailogData = existingItem;
        },
        dialogBoxData(state,action){
            const existingItem = getExistingItem(state,action.payload);
            if(existingItem){
                state.dailogData = existingItem;
            }else{
                state.dailogData = action.payload;
            }
        }
    },
});

export const cartActions = restaurantCartSlice.actions;
export default restaurantCartSlice;