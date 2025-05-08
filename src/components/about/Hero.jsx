import React from "react";

const AboutHero = ({
  title = "About Us",
  breadcrumb = ["Home", "About Us"],
  backgroundImage = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
}) => (
  <section className="relative flex items-center justify-center h-48 mt-16 md:h-64 lg:h-72">
    {/* Background image */}
    <img
      src={backgroundImage}
      alt={title}
      className="absolute inset-0 object-cover w-full h-full"
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-70" />
    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center w-full text-center">
      <h1 className="mb-2 text-3xl font-extrabold text-white md:text-4xl drop-shadow">
        {title}
      </h1>
      <nav className="flex items-center justify-center space-x-2 text-sm">
        <span className="text-white/80">{breadcrumb[0]}</span>
        <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M7.05 4.05a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 11-1.06-1.06L10.19 10 7.05 6.86a.75.75 0 010-1.06z" />
        </svg>
        <span className="font-semibold text-green-400">{breadcrumb[1]}</span>
      </nav>
    </div>
  </section>
);

export default AboutHero;
