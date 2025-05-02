import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    // Add floating animation to the 404 text
    const animate404 = () => {
      const element = document.querySelector('.animate-404');
      if (element) {
        element.style.transform = `translateY(${Math.sin(Date.now() / 1000) * 10}px)`;
        requestAnimationFrame(animate404);
      }
    };
    animate404();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex flex-col justify-center items-center py-12 px-6 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-green-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse animation-delay-1000"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Enhanced 404 Text */}
        <div className="relative mb-8">
          <h1 className="animate-404 text-8xl md:text-9xl font-extrabold text-green-800 mb-6 transition-transform duration-300">
            404
          </h1>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
        </div>

        {/* Enhanced Title and Description */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-4 animate-fade-in">
            Page Not Found
          </h2>
          <p className="text-xl text-green-600 mb-8 leading-relaxed animate-fade-in animation-delay-200">
            Oops! The page you're looking for seems to have wandered off into the digital wilderness. 
            Let's get you back on track to exploring our school's amazing features.
          </p>
        </div>

        {/* Enhanced Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
          <Link
            to="/"
            className="group inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 transform group-hover:-translate-x-1 transition-transform duration-300" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-green-50 text-green-600 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-green-600"
          >
            Contact Support
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 transform group-hover:translate-x-1 transition-transform duration-300" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-50"></div>
      </div>
    </div>
  );
};

export default NotFound;
