import React from 'react'
import './MyWork.css'
import mywork_data from '../assets/mywork_data'
import arrow_icon from '../assets/arrow_icon.svg'
import theme_pattern from '../assets/theme_pattern.svg'
const MyWork = () => {
  return (
    <div className='mywork'>
        <div className="mywork-title">
            <h1>My latest work</h1>
            <img src= {theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work, index) => (
                <React.Fragment key={index}>
                    {work.w_img.endsWith(".mp4") ? (
                     <div className='work-element-gigs'>
                     <video src={work.w_img} controls autoPlay muted loop />
                     <button className='work-see-code'>
                        <a href={work.w_link} target='1'>
                                    See Code
                                </a>
                     </button>
                     </div>
                        ) : (
                            <div className='work-element-gigs'>
                            <img src={work.w_img} alt="project" />
                            <button className='work-see-code'>
                                <a href={work.w_link} target='1'>
                                    See Code
                                </a>
                            </button>
                            </div>
                    )}
                </React.Fragment>
            ))}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src= {arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default MyWork