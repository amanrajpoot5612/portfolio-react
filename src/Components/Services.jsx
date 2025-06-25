import React from 'react'
import './Services.css'
import theme_pattern from '../assets/theme_pattern.svg'
import Services_Data from '../assets/services_data'
import arrow_icon from '../assets/arrow_icon.svg'
const Services = () => {
  return (
    <div className='services' id='services'>
        <div className="services-title">
            <h1>Offerings</h1>
            <img src= {theme_pattern} alt="" />
        </div>
        <div className="services-container">
            {Services_Data.map((services, index) =>{
                return <div key ={index} className="services-format">
                <h3>{services.s_no}</h3>
                <h2>{services.s_name}</h2>
                <p>{services.s_desc}</p>
                <div className="services-readmore">
                    <a href={services.s_link} className='read-more-link' target='1'>
                      <p>
                      Read More
                      </p>
                    <img src= {arrow_icon} alt="arrow-icon" />
                    </a>
                </div>
                </div>})}
        </div>
    </div>
  )
}

export default Services