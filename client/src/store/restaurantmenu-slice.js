import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    restaurantMenu : {},

};

const restaurantCartSlice = createSlice({
    name:"cart",
    initialState,
    reducers: {
        getRestaurantMenu(state,action){
            state.restaurantMenu = action.payload;
        }
    }
})

export const restaurantMenuActions = restaurantCartSlice.actions;
export default restaurantCartSlice;