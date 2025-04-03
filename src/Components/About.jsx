import React from 'react'
import './About.css'
import theme_pattern from '../assets/theme_pattern.svg';
import profile_img from '../assets/profile-image.jpg';
const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src= {theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src= {profile_img} alt="" width={450}/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I've created 10+ projects in which 7 are personal projects and 4 are professional end-to-end projects</p>
                    <p>Currently in 2nd year of Bachelor of Technology (CS Allied branch)</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}} /></div>
             
                    </div>
               </div>
        </div>
        <div className="about-achievments">
            <div className="about-achievment">
                <h1>10+</h1>
                <p>Perosnal projects</p>
            </div><hr />
            <div className="about-achievment">
                <h1>3+</h1>
                <p>End-to-End completed proejcts</p>
            </div><hr />
            <div className="about-achievment">
                <h1>2</h1>
                <p>Happy Clients</p>
            </div><hr />
        </div>
    </div>
  )
}

export default About