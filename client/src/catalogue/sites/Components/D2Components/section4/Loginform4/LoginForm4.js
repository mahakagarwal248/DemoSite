import React from 'react';
import './LoginForm4.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

function LoginForm4() {
    return (
        <div className="lf4">
            <div className="loginform4">
            <form>
                <div className="lf4d">
                    <button className="btn1"><FacebookIcon className="icon"/> Facebok</button>
                    <button className="btn2"><GoogleIcon className="icon"/>
                        <span> </span>
                        <span style={{color:'#4885ed'}}>G</span>
                        <span style={{color:'#db3236'}}>o</span>
                        <span style={{color:'#f4c20d'}}>o</span>
                        <span style={{color:'#4885ed'}}>g</span>
                        <span style={{color:'#3cba54'}}>l</span>
                        <span style={{color:'#db3236'}}>e</span>
                    </button>
                </div>
                <p>Or</p>
                <input type="email" placeholder="Enter Email or Username"/>
                <input type="password" placeholder="Enter Password"/>
                <br/>
                <button>Login</button>
            </form>
        </div>
        </div>
        
    )
}

export default LoginForm4
