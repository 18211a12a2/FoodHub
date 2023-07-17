 import '../styles/Header.css'
 import SearchIcon from '@mui/icons-material/Search';
 import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
 import { Link } from 'react-router-dom'
 import { useDispatch, useSelector } from 'react-redux';
 import { authActions } from '../store/auth-slice';

 const Header = () =>{
    const dispatch = useDispatch();
    let cartQuantity = useSelector((state)=>{
        let count = 0;
        state.cart.itemList.forEach(item => {
            count += item.quantity;
        });
        return count;
    });

    let isUserLoggedIn = useSelector(state=>state.auth.isLoggedIn);

    let userData = useSelector((state)=>state.auth.userData);

    function userLogout(){
        const token = localStorage.getItem("JWT");
        dispatch(authActions.isLoggedIn(false));
        dispatch(authActions.userDetails({
            family_name : "",
            given_name : "Guest",
            email : '',
            id:''
        }));
        localStorage.removeItem("JWT");
        window.google?.accounts.id.revoke(token, () => {
            return Promise.resolve();
        });
        alert("Logout successful!!")
    }

    return (
        <div className='header'>
            <div className="header_container">

                <Link to='/' style={{ textDecoration: 'none' }}><div className="header_logo"><h2>FoodHUB</h2></div></Link>
                <div className="header_search">
                    <input type="text" placeholder="Search for restaurant, cuisine or a dish"/>
                    <SearchIcon/>
                </div>
                <div className="header_sidemenu">
                    <div className="header_user"><span>Hello</span><h4>{userData.given_name} {userData.family_name}</h4></div>
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