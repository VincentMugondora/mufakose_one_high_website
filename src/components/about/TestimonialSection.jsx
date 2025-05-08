import React, { useState, useEffect, useRef } from "react";

// 10 testimonials for the carousel
const testimonials = [
  {
    name: "Anthony Nicoll",
    role: "Student",
    text: "There are many variations of tend to repeat chunks some all form necessary injected for the going are humour words.",
    rating: 5,
    score: 99,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Richard Lock",
    role: "Student",
    text: "There are many variations of tend to repeat chunks some all form necessary injected for the going are humour words.",
    rating: 5,
    score: 99,
    img: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    name: "Randal Grand",
    role: "Student",
    text: "There are many variations of tend to repeat chunks some all form necessary injected for the going are humour words.",
    rating: 5,
    score: 99,
    img: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    name: "Edward Miles",
    role: "Student",
    text: "There are many variations of tend to repeat chunks some all form necessary injected for the going are humour words.",
    rating: 5,
    score: 99,
    img: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    name: "Sarah Lee",
    role: "Student",
    text: "The teachers are amazing and I have made lifelong friends here.",
    rating: 5,
    score: 98,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Doe",
    role: "Student",
    text: "A wonderful environment for learning and growing.",
    rating: 5,
    score: 97,
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Jane Smith",
    role: "Student",
    text: "I love the school spirit and the dedication of the staff.",
    rating: 5,
    score: 96,
    img: "https://randomuser.me/api/portraits/women/46.jpg",
  },
  {
    name: "Michael Brown",
    role: "Student",
    text: "Great facilities and excellent academic support.",
    rating: 5,
    score: 95,
    img: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    name: "Emily White",
    role: "Student",
    text: "The extracurricular activities are top-notch!",
    rating: 5,
    score: 94,
    img: "https://randomuser.me/api/portraits/women/48.jpg",
  },
  {
    name: "Chris Green",
    role: "Student",
    text: "I feel prepared for my future thanks to this school.",
    rating: 5,
    score: 93,
    img: "https://randomuser.me/api/portraits/men/49.jpg",
  },
];

function StarRating({ count }) {
  return (
    <div className="flex">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-orange-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <polygon points="10,1 12,7 18,7 13,11 15,17 10,13 5,17 7,11 2,7 8,7" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialCarousel() {
  // Responsive: 1 on mobile, 2 on md, 3 on lg, 4 on xl+
  const getCardsToShow = () => {
    if (window.innerWidth >= 1280) return 4;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const [current, setCurrent] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(getCardsToShow());
  const [isSliding, setIsSliding] = useState(false);
  const timeoutRef = useRef(null);

  // Responsive handler
  useEffect(() => {
    const handleResize = () => setCardsToShow(getCardsToShow());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll: delay 2s, then animate slide (0.5s)
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIsSliding(true);
      setTimeout(() => {
        setIsSliding(false);
        setCurrent((prev) =>
          prev + cardsToShow < testimonials.length ? prev + 1 : 0
        );
      }, 500); // 0.5s slide animation
    }, 2000); // 2s pause
    return () => clearTimeout(timeoutRef.current);
  }, [current, cardsToShow]);

  // Dots navigation
  const numDots = testimonials.length - cardsToShow + 1;

  // For slide animation direction (right to left)
  const slideClass = isSliding
    ? "transition-transform duration-500 ease-in-out -translate-x-10 opacity-60"
    : "transition-transform duration-500 ease-in-out translate-x-0 opacity-100";

  return (
    <section className="py-12 bg-gray-50">
      {/* Header */}
      <div className="px-4 mb-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-2 font-semibold tracking-widest text-orange-400 uppercase">
          <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
          TESTIMONIALS
        </div>
        <h2 className="mb-2 text-3xl font-bold md:text-4xl">
          What Our Students <span className="text-orange-400">Say's</span>
        </h2>
        <p className="max-w-xl mx-auto text-gray-500">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
      </div>
      {/* Carousel */}
      <div className="relative flex items-center justify-center">
        {/* Cards */}
        <div className={`flex gap-6 overflow-hidden w-full justify-center ${slideClass}`}>
          {testimonials.slice(current, current + cardsToShow).map((t, i) => (
            <div
              key={i}
              className="relative flex flex-col justify-between w-full max-w-xs p-6 bg-white border-b-4 border-orange-300 shadow-md rounded-2xl"
            >
              {/* Score badge */}
              <div className="absolute top-0 right-0 px-3 py-1 mt-3 mr-3 text-sm font-bold text-white bg-orange-400 rounded-full shadow-md">
                {t.score}
              </div>
              {/* Stars */}
              <StarRating count={t.rating} />
              {/* Testimonial Text */}
              <p className="my-4 text-sm text-gray-700">{t.text}</p>
              {/* User Info */}
              <div className="flex items-center mt-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="object-cover w-12 h-12 mr-3 border-2 border-orange-200 rounded-full"
                />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-orange-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Dots navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: numDots }).map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full inline-block transition-all duration-200 cursor-pointer ${
              idx === current ? "bg-orange-400" : "bg-orange-100"
            }`}
            onClick={() => setCurrent(idx)}
          ></span>
        ))}
      </div>
    </section>
  );
}
