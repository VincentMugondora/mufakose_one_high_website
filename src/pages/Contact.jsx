import React from 'react'
import AboutHero from '../components/about/Hero'
import InfoCards from '../components/contact/InfoCards'
import ContactSection from '../components/contact/ContactSection'
import MapSection from '../components/contact/MapSection'

const Contact = () => {
  return (
    <div>
      <AboutHero />
      <InfoCards />
      <ContactSection />
      <MapSection />
    </div>
  )
}

export default Contact
