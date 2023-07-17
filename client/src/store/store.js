import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import restaurantCartSlice from "./restaurantCart-slice"

const store = configureStore({
    reducer : {
        auth : authSlice.reducer,
        cart : restaurantCartSlice.reducer
    }
});

export default store;

