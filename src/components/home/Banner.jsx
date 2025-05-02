import React, { useState, useEffect } from "react";
// import { Button } from "../ui/button";

const backgroundSlides = [
  {
    image: "/home/banner/banner1.jpg",
    title: "MUFAKOSE ONE HIGH",
    subtitle: "SCHOOL",
    motto: "Pfumo Rakava Rugare",
    cta: "+ WHAT WE OFFER"
  },
  {
    image: "/home/banner/banner2.jpg",
    title: "ACADEMIC EXCELLENCE",
    subtitle: "IN EVERY CLASSROOM",
    motto: "Empowering Future Leaders",
    cta: "EXPLORE OUR CURRICULUM"
  },
  {
    image: "/home/banner/banner3.jpg",
    title: "SPORTS & CULTURE",
    subtitle: "BUILDING CHARACTER",
    motto: "Discipline Through Action",
    cta: "JOIN OUR CLUBS"
  }
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundSlides.length);
    }, 15000); // 15 seconds

    return () => clearInterval(interval);
  }, []);

  const { image, title, subtitle, motto, cta } = backgroundSlides[currentIndex];

  return (
    <section
      className="relative w-[100vw]  h-screen bg-cover bg-center flex items-center justify-center text-white transition-all -mt-9 duration-1000"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="absolute inset-0 bg-green-900 bg-opacity-60"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white drop-shadow-lg">
          {title}
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold mt-2 text-green-200 drop-shadow-md">
          {subtitle}
        </h2>
        <p className="text-lg md:text-2xl mt-4 font-light text-green-100 italic">
          {motto}
        </p>

        {/* <Button className="mt-8 bg-green-700 hover:bg-green-800 px-8 py-4 rounded-full text-lg font-semibold shadow-xl">
          {cta}
        </Button> */}
      </div>
    </section>
  );
};

export default HeroSection;
