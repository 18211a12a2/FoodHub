import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import restaurantCartSlice from "./restaurantCart-slice";
import restaurantMenuSlice from "./restaurantmenu-slice";

const store = configureStore({
    reducer : {
        auth : authSlice.reducer,
        cart : restaurantCartSlice.reducer,
        menu : restaurantMenuSlice.reducer
    }
});

export default store;

