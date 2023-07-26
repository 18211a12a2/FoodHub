import './App.css';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Restaurant from './components/Restaurant';
import Cart from './components/Cart';
import CheckOut from './components/Checkout';
import CheckoutSuccess from './components/CheckoutSuccess';
import Footer from './components/Footer';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login' || location.pathname === '/checkout-success';

  return (
    <div>
      {!isLoginPage && <Header />}
    <Routes>
        <Route path='/' element={<div><Home/></div>}/>
        <Route path='/cart' element={<div><Cart/></div>}/>
        <Route path='/restaurant' element={<div><Restaurant/></div>}/>
        <Route path='/checkout' element={<div><CheckOut/></div>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/checkout-success' element={<div><CheckoutSuccess/></div>}/>
    </Routes>
    {!isLoginPage && <Footer />}
    </div>
  );
}

export default App;
