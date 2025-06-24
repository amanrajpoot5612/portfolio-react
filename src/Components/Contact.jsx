import React, { useEffect, useState } from 'react'
import './Contact.css'
import theme_pattern from '../assets/theme_pattern.svg';
import mail_icon from '../assets/mail_icon.svg'
import call_icon from '../assets/call_icon.svg'
import location_icon from '../assets/location_icon.svg'
const formId = import.meta.env.VITE_FORM_ID;

// import { useForm, ValidationError } from '@formspree/react';
const Contact = () => {

    // const [state, handleSubmit] = useForm("");
//      const [showAlert, setShowAlert] = useState(false);
//   useEffect(() => {
//     if (state.succeeded) {
//       setShowAlert(true);

//       const timer = setTimeout(() => {
//         setShowAlert(false);
//       }, 2000); // hide after 2 seconds

//       return () => clearTimeout(timer); // cleanup
//     }
//   }, [state.succeeded]);

  return (
    <div className='contact' id='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src= {theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Currently looking for clients, to make projects and sharpen my skills and learn new*</p>
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
  {/* {showAlert && <div className="success-alert">Message sent successfully!</div>} */}
  
  <form
    action={`https://formspree.io/f/${import.meta.env.VITE_FORM_ID}` }
    method="POST"
    onSubmit={(e) => {
      e.preventDefault();
      const form = e.target;
      const data = new FormData(form);

      const name = data.get("name");
      const email = data.get("email");
      const message = data.get("message");

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }

      fetch(`https://formspree.io/f/${import.meta.env.VITE_FORM_ID}`, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
            form.reset();
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 2000);
          } else {
            alert("Failed to send message.");
          }
        })
        .catch(() => alert("Message sent successfully"));
    }}
  >
    <label htmlFor="name">Your Name</label>
    <input type="text" placeholder="Enter your name" name="name" id="email" />

    <br />

    <label htmlFor="email">Your E-mail</label>
    <input type="email" placeholder="Enter your e-mail" name="email" />

    <br />

    <label htmlFor="message" id="message-label">Write your message here</label>
    <textarea
      type="text"
      placeholder="Enter your message"
      name="message"
      id="message"
      rows={8}
    />

    <button type="submit" className="contact-submit">Submit now</button>
  </form>
</div>

        </div>
    </div>
  )
}

export default Contact