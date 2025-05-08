import React, { useState } from "react";

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
];

function StarRating({ count }) {
  return (
    <div className="flex">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-yellow-400"
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
  // Show 1 card on small screens, 2 on md, 3 on lg, 4 on xl
  const getCardsToShow = () => {
    if (window.innerWidth >= 1280) return 4;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const [current, setCurrent] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(getCardsToShow());

  React.useEffect(() => {
    const handleResize = () => setCardsToShow(getCardsToShow());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Compute visible testimonials
  const visibleTestimonials = testimonials.slice(
    current,
    current + cardsToShow
  );

  // Handle next/prev
  const canPrev = current > 0;
  const canNext = current + cardsToShow < testimonials.length;

  return (
    <section className="py-12 bg-gray-50">
      <div className="px-4 mb-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-2 font-semibold tracking-widest text-yellow-500 uppercase">
          <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
          TESTIMONIALS
        </div>
        <h2 className="mb-2 text-3xl font-bold md:text-4xl">
          What Our Students <span className="text-yellow-500">Say's</span>
        </h2>
        <p className="max-w-xl mx-auto text-gray-500">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
      </div>
      <div className="relative flex items-center justify-center">
        {/* Prev Button */}
        <button
          className={`absolute left-0 z-10 bg-white rounded-full shadow p-2 text-yellow-500 hover:bg-yellow-100 transition disabled:opacity-30`}
          style={{ top: "50%", transform: "translateY(-50%)" }}
          onClick={() => setCurrent((prev) => Math.max(prev - 1, 0))}
          disabled={!canPrev}
          aria-label="Previous"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        {/* Cards */}
        <div className="flex justify-center w-full gap-6 overflow-hidden">
          {visibleTestimonials.map((t, i) => (
            <div
              key={i}
              className="relative flex flex-col justify-between w-full max-w-xs p-6 transition-transform bg-white border-b-4 border-yellow-400 shadow-md rounded-2xl"
            >
              {/* Score badge */}
              <div className="absolute top-0 right-0 px-3 py-1 mt-3 mr-3 text-sm font-bold text-white bg-yellow-400 rounded-full shadow-md">
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
                  className="object-cover w-12 h-12 mr-3 border-2 border-yellow-300 rounded-full"
                />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-yellow-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Next Button */}
        <button
          className={`absolute right-0 z-10 bg-white rounded-full shadow p-2 text-yellow-500 hover:bg-yellow-100 transition disabled:opacity-30`}
          style={{ top: "50%", transform: "translateY(-50%)" }}
          onClick={() => setCurrent((prev) => Math.min(prev + 1, testimonials.length - cardsToShow))}
          disabled={!canNext}
          aria-label="Next"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      {/* Dots navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: testimonials.length - cardsToShow + 1 }).map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full inline-block transition-all duration-200 ${idx === current ? "bg-yellow-500" : "bg-yellow-200"}`}
            onClick={() => setCurrent(idx)}
            style={{ cursor: "pointer" }}
          ></span>
        ))}
      </div>
    </section>
  );
}
