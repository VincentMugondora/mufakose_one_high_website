import React from 'react'
import AboutHero from '../components/about/Hero'
import InfoCards from '../components/contact/InfoCards'
import ContactSection from '../components/contact/ContactSection'
import MapSection from '../components/contact/MapSection'

const Contact = () => {
  return (
    <div>
      <AboutHero
  title="Contact Us"
  breadcrumb={["Home", "Contact Us"]}
/>

      <InfoCards />
      <ContactSection />
      <MapSection />
    </div>
  )
}

export default Contact