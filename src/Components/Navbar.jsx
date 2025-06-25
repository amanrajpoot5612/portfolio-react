import React, { useEffect, useState } from 'react'
import './Navbar.css'
// import logo-no-bg from '../assets/logo-no-bg.png'
// import logo_bg from 'public/logo_bg.png'
import logo_bg from '../assets/logos/logo_bg.png'
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  return (

    <>
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <img src= {logo_bg} alt="logo" width={130} id='logo'/>
        <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="
              https://drive.google.com/file/d/1z-83SB2zIcLIMSnH46V1aJhRL5Duztpf/view?usp=drivesdk
              " target='1'>Resume</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-connect">
            <a href="https://www.linkedin.com/in/amanrajpoot5612/" target='1'>
              Connect With Me
            </a>
        </div>
    </div>
    {/* <div class="fisheye-mask"></div> */}
    </>
  )
}

export default Navbar