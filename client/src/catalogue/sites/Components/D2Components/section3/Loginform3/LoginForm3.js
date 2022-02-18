import React from 'react';
import './LoginForm3.css';
import { Avatar } from 'antd';

function LoginForm3() {
    return (
        <div className="loginform3">
            <div className="lf3d">
                <form>
                    <Avatar src="https://joeschmoe.io/api/v1/random" />
                    <h3>Welcome</h3>
                    <input type="email" placeholder="&#61447; Enter Email"/>
                    <input type="password" placeholder="&#61475; Enter Password"/>
                    <br/>
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm3
