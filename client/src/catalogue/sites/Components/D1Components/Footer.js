import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
    return (
        <div className="d1footer">
            <div className="d1fd1">
                <span>D</span>
                <span>E</span>
                <span>C</span>
                <span>O</span>
                <span style={{color:'red'}}>R</span>
                <span>R</span>
                <div>
                    <FacebookIcon className="d1ficon"/>
                    <LinkedInIcon className="d1ficon"/>
                    <TwitterIcon className="d1ficon"/>
                    <YouTubeIcon className="d1ficon"/>
                </div>
                <p>2021 Decorr-All rights reserved</p>
            </div>
            <div className="d1fd2">
                <h5>Navigation</h5>
                <p>Home</p>
                <p>Our Portfolio</p>
                <p>Features</p>
                <p>Contact Us</p>
                <p>Customer Reviews</p>
                <p>Our Team</p>
            </div>
            <div className="d1fd3">
                <h5>Legal</h5>
                <p>License</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Copyright</p>
            </div>
            <div className="d1fd4">
                <h5>Newsletter</h5>
                <p>Signup for secrets</p>
                <input type="email" placeholder="E-mail"/>
                <button>Signup</button>
            </div>
        </div>
    )
}

export default Footer
