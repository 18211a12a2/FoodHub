import '../styles/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/auth-slice';
import { useEffect, useState } from 'react';
import restaurants from '../utils/restaurants';
import { restaurantMenuActions } from '../store/restaurantmenu-slice';
import { cartActions } from '../store/restaurantCart-slice';
import axios from '../axios.js';

 const Header = () =>{
    const [userId, setUserId] = useState("");
    const [userFlag, setUserFlag] = useState(false);
    const [filtered, setFiltered] = useState([]);
    const [isShow, setIsShow] = useState(false);
    const [input, setInput] = useState("");

    const dispatch = useDispatch();
    let cartQuantity = useSelector((state)=>{
        let count = 0;
        state.cart.itemList.forEach(item => {
            count += +item.quantity;
        });
        return count;
    });

    let isUserLoggedIn = useSelector(state=>state.auth.isLoggedIn);

    let userData = useSelector((state)=>state.auth.userData);
    const suggestions  = restaurants;
    const navigate = useNavigate();

    function handleLogin(userObj){
        axios.get(`/users/${userObj.email}`).then(res=>{
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
        axios.get(`/cartItems/user-cart/${user_id}`).then(res=>{
            if(!res.data) return;
            res.data.items.forEach(item=>{
              dispatch(cartActions.addToCart(item));
            })
            dispatch(cartActions.getSpecialMessage(res.data.specialMessage));
        }).catch(error => {
          console.error(error);
        });
      }

    function userLogout(){
        const token = localStorage.getItem("JWT");
        dispatch(authActions.isLoggedIn(false));
        dispatch(authActions.userDetails({
            firstName : "Guest",
            lastName : "",
            email : '',
            id:''
        }));
        localStorage.removeItem("JWT");
        window.google?.accounts.id.revoke(token, () => {
            return Promise.resolve();
        });
        alert("Logout successful!!")
        dispatch(cartActions.emptyCart())
        navigate('/');
    }

    function onSelectSuggestion(e,restaurant){
        dispatch(restaurantMenuActions.getRestaurantMenu(restaurant));
        localStorage.setItem('res-menu', JSON.stringify(restaurant));
        setFiltered([]);
        setIsShow(false);
        setInput(e.currentTarget.innerText)
    };

    function onChange(e){
        const newFilteredSuggestions = suggestions.filter(suggestion =>suggestion.name.toLowerCase().indexOf(e.currentTarget.value.toLowerCase()) > -1);
        setFiltered(newFilteredSuggestions);
        setIsShow(true);
        setInput(e.currentTarget.value)
    };

    useEffect(()=>{
        console.log('app js')
        let userObj = JSON.parse(localStorage.getItem('JWT'));
        if(userObj && !userId && !userFlag){
          setUserFlag(true);
          handleLogin(userObj);
        }
      })



    return (
        <div className='header'>
            <div className="header_container">
                
                <Link to='/' style={{ textDecoration: 'none' }}><div className="header_logo"><h2>FoodHUB</h2></div></Link>
                
                <div className='header_autoSuggest'>
                    <div className="header_search">
                        <input type="text" placeholder="Search for a restaurant" onChange={onChange} />
                        <SearchIcon/>
                    </div>
                    {
                         (isShow && input && filtered.length!==0) && (
                    <div className="autocomplete">
                        <ul className='ac_ul'>
                            {
                            filtered.map((suggestion) => (
                                <Link to='/restaurant' key={suggestion.id} style={{ textDecoration: 'none' }}><li className='ac_li' onClick={(e)=>onSelectSuggestion(e,suggestion)}>
                                 {suggestion.name}
                                </li></Link>
                            ))
                        }
                        </ul>
                    </div>
                     )
                    }                
                </div>

                <div className="header_sidemenu">
                    <div className="header_user"><span>Hello</span><h4>{userData.firstName} {userData.lastName}</h4></div>
                    {
                        isUserLoggedIn ? (<div onClick={userLogout} className="header_login">Logout</div>)
                        : (<Link to='/login' style={{ textDecoration: 'none' }}><div className="header_login">Login</div></Link>)
                    }
                    <Link to='/cart' className="header_cart" style={{ textDecoration: 'none' }}><ShoppingCartIcon/><p>{cartQuantity}</p></Link>
                </div>
            </div>
        </div>
    );
}

export default Header;