import { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode'
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import { Link, Navigate } from 'react-router-dom';
import '../styles/Login.css';
import axios from '../axios.js';
import LoadingIndicator from 'react-loading-indicator'


function Login(){

    const [user,setUser] = useState({});
    const [isLogin, setLogin] = useState(true);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoadingIncON, setLoading] = useState(false);
    let dispatch = useDispatch();

    function handleUserData(userObj,id){
        console.log(userObj)
        dispatch(authActions.isLoggedIn(true))
        dispatch(authActions.userDetails({
                firstName : userObj.firstName,
                lastName : userObj.lastName,
                email : userObj.email,
                userId:userObj.userId
        }))
        setUser(userObj);
        localStorage.setItem('JWT', JSON.stringify(userObj));
    }

    async function handleCallBackResponse(res){
        setLoading(true);
        let userObj = res.credential ? jwt_decode(res.credential) : null;
        if(userObj){
            axios.post('/users',{
                firstName : userObj.given_name,
                lastName : userObj.family_name,
                email : userObj.email,
            }).then(res=>{
                setLoading(false);
                let userPayLoad = {
                    firstName : userObj.given_name,
                    lastName : userObj.family_name,
                    email : userObj.email,
                    userId: res._id
                }
                handleUserData(userPayLoad);
            }).catch(err=>{
                console.log(err);
            })
        }
    }

    function login(e){
        e.preventDefault();
        console.log('login');
        let loginData = {
            email,
            password
        }
        setLoading(true);
        postUserdata(loginData,"login")
    }

    function signup(e){
        e.preventDefault();
        console.log('signup');
        if(password !== confirmPassword) return alert("passwords doesn't match");
        let registrationData = {
            firstName,
            lastName,
            email,
            password
        }
        postUserdata(registrationData,"register")
    }

    function postUserdata(payload,type){
        axios.post(`/auth/${type}`, payload)
        .then(response => {
            setLoading(false);
            if(type==='register'){
                console.log('Registration done successfully', response.data);
                alert("Registration done successfully");
                setLogin(true);
            }else{
                console.log("Login Successful");
                let userPayLoad = {
                    firstName : response.data.user.firstName,
                    lastName : response.data.user.lastName,
                    email : response.data.user.email,
                    userId:response.data.user._id
                }
                handleUserData(userPayLoad);
            }
        })
        .catch(error => {
            if(type==='register'){
                alert(error.response.data.msg);
                console.error('Error registering new user:', error.response);
            }else{
                alert(error.response.data.msg);
                console.error('Error while logging in:', error.response);
            }
            
        })
    }

    function goToSignup(){
        setLogin(false);
        console.log(isLogin)
    }

    function goToLogin(){
        setLogin(true);
        console.log(isLogin)
    }

    useEffect(()=>{
        /* global google */

            google.accounts.id.initialize({
                client_id:process.env.REACT_APP_GOOGLE_CLIENT_ID,
                callback:handleCallBackResponse
            })
    
            google.accounts.id.renderButton(
                document.getElementById('signInDiv'),
                { theme : "outline", size : "large"}
            );
    
            google.accounts.id.prompt();

        
    },[]);

    return (
        <div className="login">
            <div className="login_comtainer">
                <div className="login_left">
                    <Link to="/" style={{ textDecoration: 'none' }}><h1 className="login_welcomeLabel">Welcome to FoodHUB</h1></Link>
                </div>
                <div className="login_right">
                    <div className="login_right_main">
                        { isLogin ? (
                            <div className="login_page">
                                <form onSubmit={login}>
                                    <h1 className="login_label">Login</h1>
                                    <input className="m h" value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="email"></input>
                                    <input className="m h" value={password} onChange={(e) => setPassword(e.target.value)} type="password" required placeholder="password"></input>
                                    <button className="login_btn btn_h" type="submit">Login</button>
                                    {
                                        isLoadingIncON && <LoadingIndicator />
                                    }
                                    <p className="have_an_acc">Don't have an account? <span onClick={goToSignup}>Signup</span></p>
                                </form>
                             </div>
                        ) : (
                        <div className="signup_page">
                                <form onSubmit={signup}>
                                    <h1 className="signup_label">Signup</h1>
                                    <input className="m h" value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" required placeholder="first name"></input>
                                    <input className="m h" value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" required placeholder="last name"></input>
                                    <input className="m h" value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="email"></input>
                                    <input className="m h" value={password} onChange={(e) => setPassword(e.target.value)} type="password" required placeholder="create password"></input>
                                    <input className="m h" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" required placeholder="confirm password"></input>
                                    <button className="login_btn btn_h" type="submit">Signup</button>
                                    <p className="have_an_acc">Already have an account? <span onClick={goToLogin}>Login</span></p>
                                </form>
                        </div>
                        )
                    }
                        <div>
                            <p className="p_center">---------------- Or ----------------</p>
                            <div id="signInDiv"></div>
                        </div>
                        
                    </div>
                </div>
            </div>
            {
                user.email && <Navigate to='/' />
            }
        </div>
    );
}

export default Login;