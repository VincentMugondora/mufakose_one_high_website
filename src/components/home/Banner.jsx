import React, { useState, useEffect } from "react";

// Updated slides with high school images
const slides = [
  {
    gradient: "from-green-800 via-green-600 to-green-400",
    bgImg: "https://static.wixstatic.com/media/898036_68e9b45112284cff91d6a11c1898835c.jpg/v1/fill/w_400,h_266,al_c,q_80,usm_0.66_1.00_0.01/898036_68e9b45112284cff91d6a11c1898835c.jpg", // High school building exterior
    headline: "Welcome to Mufakose I High School",
    subheadline: "Achieving academic and socio-cultural excellence through hard work.",
  },
  {
    gradient: "from-emerald-700 via-emerald-500 to-lime-300",
    bgImg: "https://static.wixstatic.com/media/898036_1c08e47df7b644298a5532c5fa899092.jpg/v1/fill/w_400,h_264,al_c,q_80,usm_0.66_1.00_0.01/898036_1c08e47df7b644298a5532c5fa899092.jpg", // High school classroom
    headline: "A Tradition of Excellence",
    subheadline: "Join our vibrant community and shape your future with us!",
  },
  {
    gradient: "from-teal-800 via-teal-500 to-green-300",
    bgImg: "https://static.wixstatic.com/media/898036_7b02a4e1066545dc8951e9c58d8293cc.jpg/v1/fill/w_400,h_266,al_c,q_80,usm_0.66_1.00_0.01/898036_7b02a4e1066545dc8951e9c58d8293cc.jpg", // High school students
    headline: "Empowering Tomorrow's Leaders",
    subheadline: "Discover your potential at Mufakose I High School.",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const { gradient, bgImg, headline, subheadline } = slides[index];

  return (
    <section
      className={`
        relative min-h-[70vh] flex items-center justify-center overflow-hidden
        bg-gradient-to-br ${gradient}
        transition-all duration-1000
      `}
      style={{
        position: "relative",
      }}
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 z-0 transition-all duration-1000"
        style={{
          backgroundImage: `linear-gradient(rgba(34,197,94,0.65), rgba(34,197,94,0.55)), url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.95)",
          transition: "background-image 1s ease-in-out",
        }}
        aria-hidden="true"
      />

      {/* Decorative shapes (optional) */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute top-0 left-0 w-64 h-64 opacity-20"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="200" cy="200" r="200" fill="#fff" />
        </svg>
        <svg
          className="absolute bottom-0 right-0 w-48 h-48 opacity-10"
          viewBox="0 0 400 400"
          fill="none"
        >
          <rect width="400" height="400" rx="200" fill="#fff" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl w-full px-6 py-16 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg transition-all duration-700">
          {headline}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-green-100 max-w-xl mx-auto transition-all duration-700">
          {subheadline}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#admissions"
            className="bg-yellow-400 text-green-900 font-bold px-8 py-3 rounded shadow hover:bg-yellow-500 transition"
          >
            Enroll Now
          </a>
          <a
            href="#about"
            className="bg-white bg-opacity-20 border border-white text-white font-semibold px-8 py-3 rounded hover:bg-opacity-40 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
