import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const closeMenu = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full text-white bg-green-700 shadow-md">
      <div className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl">
        <div className="text-2xl font-bold">Mufakose 1 High</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <ul className={`md:flex space-x-6 hidden`}>
          <li><Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:text-green-300">Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-green-300">About</Link></li>
          <li><Link to="achievements" smooth={true} duration={500} className="cursor-pointer hover:text-green-300">Achievements</Link></li>
          <li><Link to="gallery" smooth={true} duration={500} className="cursor-pointer hover:text-green-300">Gallery</Link></li>
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="cursor-pointer hover:text-green-300 focus:outline-none"
            >
              Academic
            </button>
            {dropdownOpen && (
              <ul className="absolute z-50 w-48 py-2 mt-2 bg-green-600 rounded shadow-lg">
                <li><Link to="curriculum" smooth={true} duration={500} className="block px-4 py-2 hover:bg-green-500" onClick={closeMenu}>Curriculum</Link></li>
                <li><Link to="subjects" smooth={true} duration={500} className="block px-4 py-2 hover:bg-green-500" onClick={closeMenu}>Subjects</Link></li>
                <li><Link to="results" smooth={true} duration={500} className="block px-4 py-2 hover:bg-green-500" onClick={closeMenu}>Exam Results</Link></li>
                <li><Link to="staff" smooth={true} duration={500} className="block px-4 py-2 hover:bg-green-500" onClick={closeMenu}>Teaching Staff</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-green-300">Contact</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="px-4 pt-4 pb-6 space-y-4 bg-green-700 md:hidden">
          <li><Link to="hero" smooth={true} duration={500} className="block" onClick={closeMenu}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} className="block" onClick={closeMenu}>About</Link></li>
          <li><Link to="achievements" smooth={true} duration={500} className="block" onClick={closeMenu}>Achievements</Link></li>
          <li><Link to="gallery" smooth={true} duration={500} className="block" onClick={closeMenu}>Gallery</Link></li>
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="w-full text-left focus:outline-none"
            >
              Academic
            </button>
            {dropdownOpen && (
              <ul className="pl-4 mt-2 space-y-2">
                <li><Link to="curriculum" smooth={true} duration={500} className="block" onClick={closeMenu}>Curriculum</Link></li>
                <li><Link to="subjects" smooth={true} duration={500} className="block" onClick={closeMenu}>Subjects</Link></li>
                <li><Link to="results" smooth={true} duration={500} className="block" onClick={closeMenu}>Exam Results</Link></li>
                <li><Link to="staff" smooth={true} duration={500} className="block" onClick={closeMenu}>Teaching Staff</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="contact" smooth={true} duration={500} className="block" onClick={closeMenu}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
