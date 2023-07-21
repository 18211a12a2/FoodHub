import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'auth',
    initialState:{ 
        isLoggedIn : false,
        userData : {
            firstName : "Guest",
            lastName : "",
            email : '',
            id:''
        }
     },
    reducers : {
        isLoggedIn(state,action){
            state.isLoggedIn = action.payload;
        },
        logout(state){
            state.isLoggedIn = false;
        },
        userDetails(state,action){
            state.userData = action.payload;
        },
        JWTToken(state,action){
            
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice;