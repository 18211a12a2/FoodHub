import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Restaurant from './components/Restaurant';
import Cart from './components/Cart';
import CheckOut from './components/Checkout';
import jwt_decode from 'jwt-decode'
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
              family_name : userObj.family_name,
              given_name : userObj.given_name,
              email : userObj.email,
              userId: res.data.userId
      }))
      handleCartData(res.data.userId);
    }).catch(error => {
      console.error(error);
    });
   }

  function handleCartData(user_id){
    console.log(typeof user_id)
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
    let token = JSON.parse(localStorage.getItem('JWT'));
    if(token && !userId){
      let userObj = jwt_decode(token);
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
    </Routes>
  );
}

export default App;
