import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src= {logo} alt="logo" width={130} id='logo'/>
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
  )
}

export default Navbar