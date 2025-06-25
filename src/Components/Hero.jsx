import React from 'react'
import './Hero.css';
import profile_img from '../assets/profile-image.png';
const Hero = () => {
    return (
        <div className='hero' id='home'>
            <img src={profile_img} alt="" width={300} style={{borderRadius:"100%"}}/>
            <h1><span>I'm Aman Rajpoot</span>, a frontend developer with a solid foundation in backend development through real-world projects.</h1>
            <p>Began my journey in 2023 and have developed 10+ projects across frontend and full-stack domains.</p>
            <div className="hero-action">
                <div className="hero-connect">
                    <a href="https://www.linkedin.com/in/amanrajpoot5612/" target='1'>
                        Connect With Me
                    </a>
                </div>
                <div className="hero-resume"><a href="
              https://drive.google.com/file/d/1z-83SB2zIcLIMSnH46V1aJhRL5Duztpf/view?usp=drivesdk
              " target='1'>
                    My resume
                </a>
              </div>
            </div>
        </div>
    )
}

export default Hero