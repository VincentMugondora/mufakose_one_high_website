import React from "react";

const AboutHero = () => (
  <section className="relative h-48 md:h-72 flex items-center justify-center">
    {/* Background image */}
    <img
      src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80"
      alt="School Building"
      className="absolute inset-0 w-full h-full object-cover"
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-70" />
    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
      <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2 drop-shadow">
        About Us
      </h1>
      <nav className="flex items-center justify-center space-x-2 text-sm">
        <span className="text-white/80">Home</span>
        <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M7.05 4.05a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 11-1.06-1.06L10.19 10 7.05 6.86a.75.75 0 010-1.06z" />
        </svg>
        <span className="text-green-400 font-semibold">About Us</span>
      </nav>
    </div>
  </section>
);

export default AboutHero;
