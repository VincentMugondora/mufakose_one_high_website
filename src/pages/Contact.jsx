import React from 'react'
import AboutHero from '../components/about/Hero'
import InfoCards from '../components/contact/InfoCards'

const Contact = () => {
  return (
    <div>
      <AboutHero
  title="Contact Us"
  breadcrumb={["Home", "Contact Us"]}
  backgroundImage="https://img.freepik.com/free-photo/shallow-focus-shot-people-wearing-same-uniform-standing-line_181624-7958.jpg?uid=R141677484&ga=GA1.1.823258313.1744718745&semt=ais_hybrid&w=740"
/>
<InfoCards />
    </div> 
  )
}

export default Contact
