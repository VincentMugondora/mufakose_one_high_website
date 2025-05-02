import React, { useState, useEffect } from "react";

// Replace these with your real images and messages!
const slides = [
  {
    gradient: "from-green-800 via-green-600 to-green-400",
    bgImg: "https://img.freepik.com/free-photo/group-african-kids-standing-each-other-class_23-2148892566.jpg?uid=R141677484&ga=GA1.1.823258313.1744718745&semt=ais_hybrid&w=740",
    headline: "Welcome to Mufakose I High School",
    subheadline: "Achieving academic and socio-cultural excellence through hard work.",
  },
  {
    gradient: "from-emerald-700 via-emerald-500 to-lime-300",
    bgImg: "https://static.wixstatic.com/media/898036_c394ae0e5b894f638e64cc7b1b1f5edf.jpg/v1/fill/w_520,h_344,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/898036_c394ae0e5b894f638e64cc7b1b1f5edf.jpg",
    headline: "A Tradition of Excellence",
    subheadline: "Join our vibrant community and shape your future with us!",
  },
  {
    gradient: "from-teal-800 via-teal-500 to-green-300",
    bgImg: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
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
