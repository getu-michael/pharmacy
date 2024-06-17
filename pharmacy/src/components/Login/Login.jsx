import { useState } from "react";
import Banner from "../Banner/Banner";
import './login.css'
function Login(){
    const [loginMessage,setLoginMessage] = useState('');
    const loginBtnHandler = (event)=>{
        //checks username and password
        event.preventDefault();
        setLoginMessage(<p style={{color:'red',marginTop:'1px', fontSize:'0.85rem',textAlign:'center'}}>Incorrect username/password</p>);
    }
    return (<>
            
            <Banner />
            {/* <div className="out">
            <form  method="">
                <div className="form">
                    <input type="text" name="" id="login-username" placeholder="username"/><br />
                    <input type="password" name="" id="login-password" placeholder="password"/><br />

                    <button onClick={loginBtnHandler} type="submit">Login</button>
                    {loginMessage}
                </div>
            </form>
            </div> */}
            
            </>);
}

export default Login;