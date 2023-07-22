import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Restaurant from './components/Restaurant';
import Cart from './components/Cart';
import CheckOut from './components/Checkout';
import CheckoutSuccess from './components/CheckoutSuccess';
import { useDispatch } from 'react-redux';
import { authActions } from './store/auth-slice';
import axios from 'axios';
import { cartActions } from './store/restaurantCart-slice';

function App() {
  let [userId, setUserId] = useState("")
  let dispatch = useDispatch();


  function handleLogin(userObj){
    axios.get(`http://localhost:8080/users/${userObj.email}`).then(res=>{
      setUserId(res.data.userId)
      dispatch(authActions.isLoggedIn(true))
      dispatch(authActions.userDetails({
              firstName : userObj.firstName,
              lastName : userObj.lastName,
              email : userObj.email,
              userId: res.data.userId
      }))
      handleCartData(res.data.userId);
    }).catch(error => {
      console.error(error);
    });
   }

  function handleCartData(user_id){
    axios.get(`http://localhost:8080/cartItems/${user_id}`).then(res=>{
        res.data.forEach(item=>{
          dispatch(cartActions.addToCart(item));
        })
    }).catch(error => {
      console.error(error);
    });
  }


  useEffect(()=>{
    console.log('app js')
    let userObj = JSON.parse(localStorage.getItem('JWT'));
    if(userObj && !userId){
      handleLogin(userObj);
    }
  })

  return (
    <Routes>
        <Route path='/' element={<div><Header/><Home/></div>}/>
        <Route path='/cart' element={<div><Header/><Cart/></div>}/>
        <Route path='/restaurant' element={<div><Header/><Restaurant/></div>}/>
        <Route path='/checkout' element={<div><Header/><CheckOut/></div>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/checkout-success' element={<div><Header/><CheckoutSuccess/></div>}/>
    </Routes>
  );
}

export default App;
