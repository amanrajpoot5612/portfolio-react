import React from 'react'
import './Hero.css';
import profile_img from '../assets/profile-image.jpg';
const Hero = () => {
    return (
        <div className='hero'>
            <img src={profile_img} alt="" width={300} style={{borderRadius:"100%"}}/>
            <h1><span>I'm Aman Rajpoot</span>, Front-end developer based in India</h1>
            <p>I'm Frontend developer from Delhi, Started my journey 1 year back in 2023, created 10+ projects</p>
            <div className="hero-action">
                <div className="hero-connect">Connect With Me</div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}

export default Hero