import React from 'react'
import './About.css'
import theme_pattern from '../assets/theme_pattern.svg';
import profile_img from '../assets/profile-image.png';
import js from '../assets/logos/js.svg';
import react from '../assets/logos/react.svg';
import css from '../assets/logos/css.svg';
import html from '../assets/logos/html.svg';
import mongodb from '../assets/logos/mongodb.svg';
import node from '../assets/logos/node.svg';
import tailwind from '../assets/logos/tailwind.svg';
import github from '../assets/logos/github.png'
const About = () => {
  return (
    <div className='about' id='about'>
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
                    <p><span>🎓&nbsp;&nbsp;</span> 4th year B.Tech student (CS Allied branch)</p>
                    <p><span>💻&nbsp;&nbsp;</span> Built 10+ diverse projects — from frontend interfaces to full-stack applications</p>
                    <p><span>🧠&nbsp;&nbsp;</span> Strong in frontend development (React, HTML, CSS)</p>
                    <p><span>🔧&nbsp;&nbsp;</span> Practical experience with backend services and integration</p>
                    <p><span>🚀&nbsp;&nbsp;</span> Notable projects:</p>        
                    <p id='projects-name-about'>
                        <ul className='about-project'>
                            <li>
                                <p>Nike Landing Page</p>
                            </li>
                            <li>
                                <p>Video Streaming Platform (Frontend + FullStack)</p>
                            </li>
                            <li>
                                <p>Blogging App with Backend as a Service</p>
                            </li>
                            <li>
                                <p>AI Resume Analyzer & Summarizer Extension</p>
                            </li>
                            <li>
                                <p>Snake Game, Quiz App, Webpage Canvas</p>
                            </li>
                        </ul>
                    </p>
                </div>

            </div>
        </div>
           <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p>
                        <img src= {html} alt="html-logo"  width={100}/>
                        <img src= {css} alt="css-logo"  width={100}/>
                    </div>
                    <div className="about-skill"><p>React JS</p>
                    <img src= {react} alt="react-logo"  width={100}/>
                    </div>
                    <div className="about-skill"><p>JavaScript</p>
                    <img src= {js} alt="js-logo"  width={100}/>
                    </div>
                    <div className="about-skill"><p>MongoDb</p>
                    <img src= {mongodb} alt="mongodb-logo"  width={100}/>
                    </div>
                    <div className="about-skill">Node<p>
                        <img src= {node} alt="node-logo" width={100}/></p>
                    </div>
                    <div className="about-skill">React<p>
                        <img src= {react} alt="react-logo" width={100}/></p>
                    </div>
                    <div className="about-skill">Node<p>
                        <img src= {tailwind} alt="tailwind-logo" width={100}/></p>
                    </div>
                    <div className="about-skill">Node<p>
                        <img src= {github} alt="github-logo" width={100}/></p>
                    </div>
                    
            </div>

        <div className="about-achievments">
            <div className="about-achievment">
                <h1>10+</h1>
                <p>Personal projects</p>
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