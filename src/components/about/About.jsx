import React from "react";

const AboutFeature = () => (
  <section className="py-12 bg-white">
    <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
      {/* Left: One Big Stunning Image (hidden on small devices) */}
      <div className="hidden sm:flex flex-1 flex-col items-center justify-center lg:items-start min-h-[400px] relative">
        {/* Blurred Green Accent Shape */}
        <div className="absolute -top-16 -left-16 w-[32rem] h-[32rem] bg-green-400 opacity-20 rounded-full blur-3xl z-0" />
        {/* Image Container with Glow, Gradient Overlay, and Animation */}
        <div className="relative z-10 animate-float">
          <img
            src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
            alt="School Campus"
            className="w-full max-w-2xl h-[28rem] object-cover rounded-3xl shadow-2xl border-4 border-white ring-4 ring-green-200 hover:ring-green-400 transition duration-300"
            style={{ boxShadow: '0 12px 48px 0 rgba(34,197,94,0.25), 0 2px 8px 0 rgba(0,0,0,0.10)' }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{background: 'linear-gradient(135deg, rgba(34,197,94,0.10) 0%, rgba(255,255,255,0.00) 100%)'}} />
        </div>
      </div>

      {/* Right: Achievements & Testimonial (with updated testimonial image and layout) */}
      <div className="flex-1 flex flex-col justify-center items-center lg:items-start w-full">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-center lg:text-left text-green-700">Why Choose Us?</h2>
        {/* Short Description */}
        <p className="text-gray-600 mb-6 text-center lg:text-left max-w-xl">
          Discover what makes our school unique. We are committed to excellence, student growth, and a vibrant community experience.
        </p>
        {/* Achievements Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8 w-full max-w-md">
          <div className="flex flex-col items-center bg-green-50 rounded-xl p-4 shadow-sm">
            <svg className="w-8 h-8 text-green-500 mb-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z" />
            </svg>
            <span className="font-semibold text-green-700">98% Graduation Rate</span>
          </div>
          <div className="flex flex-col items-center bg-green-50 rounded-xl p-4 shadow-sm">
            <svg className="w-8 h-8 text-green-500 mb-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M16 7a4 4 0 01-8 0" />
              <circle cx="12" cy="3" r="2" />
              <path d="M12 5v6" />
              <path d="M6 21v-2a4 4 0 014-4h0a4 4 0 014 4v2" />
            </svg>
            <span className="font-semibold text-green-700">Top University Admissions</span>
          </div>
          <div className="flex flex-col items-center bg-green-50 rounded-xl p-4 shadow-sm">
            <svg className="w-8 h-8 text-green-500 mb-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 16v-4a4 4 0 018 0v4" />
            </svg>
            <span className="font-semibold text-green-700">20+ Student Clubs</span>
          </div>
          <div className="flex flex-col items-center bg-green-50 rounded-xl p-4 shadow-sm">
            <svg className="w-8 h-8 text-green-500 mb-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="10" />
            </svg>
            <span className="font-semibold text-green-700">Community Projects</span>
          </div>
        </div>
        {/* Testimonial Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col sm:flex-row items-center gap-4 mb-6 w-full max-w-md border border-green-100">
          <img
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=100&q=80"
            alt="Happy student testimonial"
            className="w-20 h-20 rounded-full object-cover border-4 border-green-200 shadow order-1 sm:order-none hidden sm:block"
          />
          <div className="flex-1 text-center sm:text-left order-2 sm:order-none">
            <p className="text-gray-700 italic mb-2">“This school gave me the confidence and skills to pursue my dreams. The teachers and friends I made here changed my life!”</p>
            <span className="font-bold text-green-700">— Sarah M., Class of 2023</span>
          </div>
        </div>
        {/* Contact Admissions Button */}
        <a
          href="#"
          className="bg-green-500 text-white font-bold px-8 py-3 rounded-full shadow hover:bg-green-600 transition text-lg text-center"
        >
          Contact Admissions
        </a>
      </div>
    </div>
  </section>
);

// Floating animation for image
// Add this to your global CSS if not already present:
// @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
// .animate-float { animation: float 3s ease-in-out infinite; }

export default AboutFeature;
