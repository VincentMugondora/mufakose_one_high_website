import React from 'react'
import AboutHero from '../components/about/Hero'
import AboutFeature from '../components/about/About'
import AboutAbout from '../components/home/About'
import TestimonialSection from '../components/about/TestimonialSection'

const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutAbout />
      <AboutFeature />  
      <TestimonialSection />
    </div>
  )
}

export default About