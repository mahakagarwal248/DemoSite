import React from 'react';
import './Section2.css';
import LoginForm2 from './Loginform2/LoginForm2';

function Section2() {
    return (
        <div className="demo2s2">
            <section style={{display:'flex',backgroundColor: '#f8e6e4'}}>
                <div className="demo2s2d1" ><LoginForm2/></div>
                <div className="demo2s2d2" >Form 2</div>
            </section>
        </div>
    )
}

export default Section2
