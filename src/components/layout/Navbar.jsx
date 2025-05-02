import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaFacebookF, FaTwitter, FaYoutube, FaSkype } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <Link to="/" className="navbar-logo">
          <img src="/logo.png" alt="School Logo" className="logo-img" />
          <div className="logo-text">
            <span className="school-name">MUFAKOSE 1</span>
            <span className="school-type">High School</span>
          </div>
        </Link>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/academics" className="nav-link" onClick={() => setIsOpen(false)}>Academics</Link>
          </li>
          <li className="nav-item">
            <Link to="/news" className="nav-link" onClick={() => setIsOpen(false)}>News</Link>
          </li>
          <li className="nav-item">
            <Link to="/events" className="nav-link" onClick={() => setIsOpen(false)}>Events</Link>
          </li>
          <li className="nav-item dropdown">
            <span className="nav-link">Pages</span>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/facilities" onClick={() => setIsOpen(false)}>Facilities</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/staff" onClick={() => setIsOpen(false)}>Our Staff</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/calendar" onClick={() => setIsOpen(false)}>School Calendar</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/policies" onClick={() => setIsOpen(false)}>School Policies</Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="#" className="social-icon"><FaFacebookF /></a>
          <a href="#" className="social-icon"><FaTwitter /></a>
          <a href="#" className="social-icon"><FaYoutube /></a>
          <a href="#" className="social-icon"><FaSkype /></a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 