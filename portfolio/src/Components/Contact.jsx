import React from 'react'
import './Contact.css'
import theme_pattern from '../assets/theme_pattern.svg';
import mail_icon from '../assets/mail_icon.svg'
import call_icon from '../assets/call_icon.svg'
import location_icon from '../assets/location_icon.svg'
const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src= {theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Currently looking for clients, to mkae projects and sharpen my skills and learn new*</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src= {mail_icon} alt="" />
                        <p>amanrajpoot5612@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src= {call_icon} alt="" />
                        <p>+91 9355505920</p>
                    </div>
                    <div className="contact-detail">
                        <img src= {location_icon} alt="" />
                        <p>Delhi, India</p>
                    </div>
                </div>
            </div>
            <div className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your E-mail</label>
                <input type="text" placeholder='Enter your e-mail' name='email'/>
                <label htmlFor="">Write your message here</label>
                <textarea type="text" placeholder='Enter your message' name='message'rows={8}/>
                <button type='submit' className='contact-submit'>Submit now</button>
            </div>
        </div>
    </div>
  )
}

export default Contact