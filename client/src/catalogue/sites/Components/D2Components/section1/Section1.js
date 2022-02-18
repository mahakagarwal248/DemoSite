import React from 'react';
import './Section1.css';
import LoginForm1 from './Loginform1/LoginForm1';

function Section1() {
    return (
        <div className="demo2s1">
            <h1>Login Forms</h1>
            <section style={{display:'flex',backgroundColor: 'rgb(61, 7, 54)',color: 'white'}}>
                <div className="demo2s1d1">Form 1</div>
                <div className="demo2s1d2"><LoginForm1/></div>
            </section>
        </div>
    )
}
export default Section1
