import React from 'react';
import './LoginForm1.css';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonIcon from '@mui/icons-material/Person';
import LockOpenIcon from '@mui/icons-material/LockOpen';

function LoginForm1() {
    return (
        <div className="loginform">
            <div className="loginform1">
                <form>
                    <div><PersonOutlineOutlinedIcon className="icon"/></div>
                    <PersonIcon className="icon"/><input type="email" placeholder="E-mail id"/>
                    <br/>
                    <LockOpenIcon className="icon"/><input type="password" placeholder="Password"/>
                    <div className="lf1d">
                        <input type="checkbox" /><span>Remember Me</span><span id="span">Forgot password?</span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm1
