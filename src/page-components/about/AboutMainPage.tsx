import React from 'react'
import AboutMainBanner from './AboutMainBanner'
import OurStories from './OurStories'
import OurApproach from './OurAppoach'
import AboutNav from './AboutNav'
import WhyProgenesis from './WhyProgenesis'
import VisionMission from './VisionMission'
import FaQ from './FaQ'
import Impact from './Impact'
import JoinUs from './JoinUs'
import './AboutMain.css'


const AboutMainPage = () => {
  return (
    <div className=''>
        <AboutMainBanner />
        <AboutNav />
        <OurStories />
        <OurApproach /> 
        <VisionMission />
        <WhyProgenesis />
        <Impact />
        <JoinUs />
        <FaQ />
    </div>
  )
}

export default AboutMainPage