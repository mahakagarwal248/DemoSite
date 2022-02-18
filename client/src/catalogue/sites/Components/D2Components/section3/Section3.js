import React from 'react';
import './Section3.css';
import LoginForm3 from './Loginform3/LoginForm3';

function Section3() {
    return (
        <div>
            <section style={{display:'flex',backgroundColor: 'rgb(61, 7, 54)',color: 'white'}}>
                <div className="demo2s3d1">Form 3</div>
                <div className="demo2s3d2"><LoginForm3/></div>
            </section>
        </div>
    )
}

export default Section3
