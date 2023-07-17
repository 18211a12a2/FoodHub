import { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode'
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import { Navigate } from 'react-router-dom';
import '../styles/Login.css'


function Login(){

    const [user,setUser] = useState({});
    let dispatch = useDispatch();
    const [token, setToken] = useState("");
    async function handleCallBackResponse(res){
        console.log("Encoded JWT ID token : ",res.credential)
        setToken(res.credential)
        let userObj = res.credential ? jwt_decode(res.credential) : null;
        console.log(userObj);

        if(userObj){
            const response = await fetch("http://localhost:8080/users",{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    family_name : userObj.family_name,
                    given_name : userObj.given_name,
                    email : userObj.email,
                })
            })
            const data = await response.json();
            console.log("user reso ",data)
            dispatch(authActions.isLoggedIn(true))
            dispatch(authActions.userDetails({
                    family_name : userObj.family_name,
                    given_name : userObj.given_name,
                    email : userObj.email,
                    userId:data._id
            }))
            setUser(userObj);
            localStorage.setItem('JWT', JSON.stringify(res.credential));
        }
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
                    <h1>Welcome to FoodHUB</h1>
                </div>
                <div className="login_right">
                    <div className="login_right_main">
                        <h1 className="login_label">Login</h1>
                        <div id="signInDiv"></div>
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