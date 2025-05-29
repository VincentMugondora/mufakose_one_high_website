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
    <footer className="relative pt-0 pb-0 overflow-hidden text-white bg-gradient-to-br from-green-900 via-green-700 to-green-500">
      <div className="container relative z-10 px-4 pt-12 pb-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-4 md:gap-10 md:text-left">
          {/* Logo/Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl font-extrabold text-green-300">Mufakose I</span>
              <span className="text-lg font-bold text-green-100">High School</span>
            </div>
            <div className="mb-2 text-sm text-green-100/80">"Nurturing Excellence"</div>
            <div className="mb-2 text-xs text-green-100/80">Corner Mupani Ave & Muriranyenze Rd, P.O. Box 22, Mufakose, Harare</div>
            <button
              onClick={scrollToTop}
              className="px-5 py-2 mt-2 font-bold text-white transition-all duration-300 bg-green-400 rounded-full shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
              aria-label="Back to top"
            >
              ↑ Back to Top
            </button>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-4 text-lg font-bold text-green-100">Quick Links</h3>
            <ul className="space-y-2 text-green-100/80">
              <li>
                <Link to="/" className="transition-all duration-200 rounded hover:text-green-300 hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-green-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="transition-all duration-200 rounded hover:text-green-300 hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-green-300">About Us</Link>
              </li>
              <li>
                <Link to="/admissions" className="transition-all duration-200 rounded hover:text-green-300 hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-green-300">Admissions</Link>
              </li>
              <li>
                <Link to="/departments" className="transition-all duration-200 rounded hover:text-green-300 hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-green-300">Departments</Link>
              </li>
              <li>
                <Link to="/contact" className="transition-all duration-200 rounded hover:text-green-300 hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-green-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Departments */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-4 text-lg font-bold text-green-100">Departments</h3>
            <ul className="space-y-2 text-green-100/80">
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
            <h3 className="mb-4 text-lg font-bold text-green-100">Contact & Social</h3>
            <div className="mb-2 text-sm text-green-100/80">Phone: 04699059, 042922891, 042920590, 0782297513</div>
            <div className="mb-4 text-sm text-green-100/80">Email: info@mufakosehigh.ac.zw</div>
            <div className="flex mb-4 space-x-4">
              <a href="#" className="p-3 text-green-100 transition-all duration-300 rounded-full shadow-md bg-green-100/20 hover:bg-green-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-300" aria-label="Facebook"><Facebook fontSize="medium" /></a>
              <a href="#" className="p-3 text-green-100 transition-all duration-300 rounded-full shadow-md bg-green-100/20 hover:bg-green-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-300" aria-label="Instagram"><Instagram fontSize="medium" /></a>
              <a href="#" className="p-3 text-green-100 transition-all duration-300 rounded-full shadow-md bg-green-100/20 hover:bg-green-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-300" aria-label="Twitter"><Twitter fontSize="medium" /></a>
              <a href="#" className="p-3 text-green-100 transition-all duration-300 rounded-full shadow-md bg-green-100/20 hover:bg-green-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-300" aria-label="YouTube"><YouTube fontSize="medium" /></a>
            </div>
            <Link to="/contact" className="inline-block px-6 py-2 font-bold text-white transition-all duration-300 border-2 border-white rounded-full shadow-md bg-gradient-to-r from-green-500 to-green-400 hover:scale-105 hover:shadow-green-300 focus:outline-none focus:ring-2 focus:ring-green-200">Contact Us</Link>
          </div>
        </div>
      </div>
      {/* Copyright Bar */}
      <div className="w-full px-4 py-3 mt-8 text-xs text-center border-t bg-green-950/80 border-green-200/20 text-green-100/70 md:text-sm md:text-left">
        <div className="container flex flex-col items-center gap-2 mx-auto md:flex-row md:justify-between">
          <span>&copy; {new Date().getFullYear()} Mufakose I High School. All rights reserved.</span>
          <span>Designed and developed by <span className="font-semibold text-green-200">Vincent Mugondora</span></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
