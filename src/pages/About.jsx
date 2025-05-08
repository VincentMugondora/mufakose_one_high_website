import React from 'react'
import AboutHero from '../components/about/Hero'
import AboutFeature from '../components/about/About'
import AboutAbout from '../components/home/About'
import Testimonials from '../components/home/Testimonials'
import MeetOurTeachers from '../components/about/Teachers'

const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutAbout />
      <AboutFeature />  
      <Testimonials />
      <MeetOurTeachers />
    </div>
  )
}

export default About