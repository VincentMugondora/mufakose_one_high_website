import React from "react";
import { Link } from "react-router-dom";  // Or your routing library
import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
} from "@mui/icons-material";

const Footer = () => {
  // Back to top handler
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-gradient-to-br mt-16 from-green-900 via-green-700 to-green-500 text-white pt-0 pb-0 relative overflow-hidden">
      <div className="container mx-auto px-4 pt-12 pb-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 md:text-left text-center">
          {/* Logo/Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl font-extrabold text-green-300">Mufakose I</span>
              <span className="text-lg font-bold text-green-100">High School</span>
            </div>
            <div className="text-green-100/80 text-sm mb-2">"Nurturing Excellence"</div>
            <div className="text-green-100/80 text-xs mb-2">Corner Mupani Ave & Muriranyenze Rd, P.O. Box 22, Mufakose, Harare</div>
            <button
              onClick={scrollToTop}
              className="mt-2 bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-5 rounded-full shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-200"
              aria-label="Back to top"
            >
              ↑ Back to Top
            </button>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 text-green-100">Quick Links</h3>
            <ul className="text-green-100/80 space-y-2">
              <li>
                <Link to="/" className="hover:text-green-300 hover:underline underline-offset-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-300 rounded">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-green-300 hover:underline underline-offset-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-300 rounded">About Us</Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-green-300 hover:underline underline-offset-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-300 rounded">Admissions</Link>
              </li>
              <li>
                <Link to="/departments" className="hover:text-green-300 hover:underline underline-offset-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-300 rounded">Departments</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green-300 hover:underline underline-offset-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-300 rounded">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Departments */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 text-green-100">Departments</h3>
            <ul className="text-green-100/80 space-y-2">
              <li>Sciences</li>
              <li>Languages</li>
              <li>Arts & Humanities</li>
              <li>Commercials</li>
              <li>Practical Subjects</li>
              <li>Guidance & Counseling</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 text-green-100">Contact & Social</h3>
            <div className="text-green-100/80 text-sm mb-2">Phone: 04699059, 042922891, 042920590, 0782297513</div>
            <div className="text-green-100/80 text-sm mb-4">Email: info@mufakosehigh.ac.zw</div>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="bg-green-100/20 text-green-100 hover:bg-green-400 hover:text-white rounded-full p-3 shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-300" aria-label="Facebook"><Facebook fontSize="medium" /></a>
              <a href="#" className="bg-green-100/20 text-green-100 hover:bg-green-400 hover:text-white rounded-full p-3 shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-300" aria-label="Instagram"><Instagram fontSize="medium" /></a>
              <a href="#" className="bg-green-100/20 text-green-100 hover:bg-green-400 hover:text-white rounded-full p-3 shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-300" aria-label="Twitter"><Twitter fontSize="medium" /></a>
              <a href="#" className="bg-green-100/20 text-green-100 hover:bg-green-400 hover:text-white rounded-full p-3 shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-300" aria-label="YouTube"><YouTube fontSize="medium" /></a>
            </div>
            <Link to="/contact" className="inline-block bg-gradient-to-r from-green-500 to-green-400 text-white px-6 py-2 rounded-full font-bold shadow-md hover:scale-105 hover:shadow-green-300 transition-all duration-300 border-2 border-white focus:outline-none focus:ring-2 focus:ring-green-200">Contact Us</Link>
          </div>
        </div>
      </div>
      {/* Copyright Bar */}
      <div className="w-full bg-green-950/80 py-3 px-4 mt-8 border-t border-green-200/20 text-green-100/70 text-xs md:text-sm text-center md:text-left">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} Mufakose I High School. All rights reserved.</span>
          <span>Designed and developed by <span className="text-green-200 font-semibold">Vincent Mugondora</span></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
