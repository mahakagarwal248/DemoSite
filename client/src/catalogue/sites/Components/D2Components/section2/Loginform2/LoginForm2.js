import React from 'react';
import './LoginForm2.css';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function LoginForm2() {
    return (
        <div className="loginform2">
            <Tabs  defaultActiveKey="1" onChange={callback}>
                <TabPane className="Tabs" tab="Login" key="1">
                    <form>
                        <input type="email" placeholder="Enter Email"/>
                        <input type="password" placeholder="Enter Password"/>
                        <br/>
                        <button>Login</button>
                    </form>
                </TabPane>
                <TabPane tab="Register" key="2">
                <form>
                        <input type="email" placeholder="Enter Email"/>
                        <input type="password" placeholder="Enter Password"/>
                        <input type="password" placeholder="Confirm Password" />
                        <br/>
                        <button>Register</button>
                    </form>
                </TabPane>
            </Tabs>
        </div>
    )
}

export default LoginForm2
