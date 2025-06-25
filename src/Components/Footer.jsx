import React, { useState } from 'react'
import './Footer.css'
// import logo_bg from '../assets/logo_bg.png'
import logo_bg from '../assets/logos/logo_bg.png'
import user_icon from '../assets/user_icon.svg'
// import logo_bg from 'public/logo_bg.png'
const Footer = () => {
    
    const email = "amanrajpoot5612@gmail.com"
    const mailOpenService = ()=> {
        if(!email){
            alert("Please enter a valid email");
            return;
        }
        const subject = encodeURIComponent("Quotation or Collaboration");
        const body = encodeURIComponent("Hello, I would like to ");
        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    
         window.open(gmailURL, "_blank");
    }

  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src= {logo_bg} alt="footer-logo" width={150} />
                <p>I'm Frontend developer + FullStack Developer, Started my journey 2 years back in 2023, created 10+ projects</p>
            </div>
            <div className="footer-top-right">
                <h1>Contact directly by sending a mail</h1>
                <div className="footer-input-field">
                    {/* <div className="footer-email-input">
                <img src= {user_icon} alt="" /> 
                <input type="email" placeholder='Enter your email'name='emailOpen' id='emailOpen'value={email} onChange={(e)=> setEmail(e.target.value)}/>
                </div> */}
                <div className="footer-subscribe">
                    <button onClick={mailOpenService} id='direct-contact-button'>Connect on Mail</button>
                    {/* <a href="mailto:test@example.com?subject=Test&body=This is a test" target="_blank" rel="noopener noreferrer">
  Test Mail Link
</a> */}

                </div>
                </div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">
                Aman Rajpoot, All rights reserved @amanrajpoot5612
            </p>
            <div className="footer-bottom-right">
                {/* <p>amanrajpoot5612</p> */}
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer