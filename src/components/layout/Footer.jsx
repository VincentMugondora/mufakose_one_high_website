import React from "react";
import { Link } from "react-router-dom";  // Or your routing library
import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* School Info Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Mufakose I High School</h3>
            <p className="text-gray-400 text-sm">
              Corner Mupani Ave & Muriranyenze Rd, P.O. Box 22, Mufakose, Harare
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Phone: 04699059, 042922891, 042920590, 0782297513
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Email: info@mufakosehigh.ac.zw (example)
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/admissions" className="hover:text-white">
                  Admissions
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/departments" className="hover:text-white">
                  Departments
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                aria-label="Twitter"
              >
                <Twitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                aria-label="YouTube"
              >
                <YouTube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Mufakose I High School. All rights
          reserved. | Designed by [Your Name/Organization]
        </div>
      </div>
    </footer>
  );
};

export default Footer;
