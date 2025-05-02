import React from "react";
import { AcademicCapIcon, BookOpenIcon, ComputerDesktopIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const features = [
  {
    icon: <AcademicCapIcon className="h-8 w-8 text-green-500" />,
    title: "Expert Teachers",
    desc: "There are many variation of the suffered.",
  },
  {
    icon: <BookOpenIcon className="h-8 w-8 text-green-500" />,
    title: "Courses Material",
    desc: "There are many variation of the suffered.",
  },
  {
    icon: <ComputerDesktopIcon className="h-8 w-8 text-green-500" />,
    title: "Online Courses",
    desc: "There are many variation of the suffered.",
  },
  {
    icon: <CurrencyDollarIcon className="h-8 w-8 text-green-500" />,
    title: "Affordable Price",
    desc: "There are many variation of the suffered.",
  },
];

const WhyChooseUs = () => (
  <section className="bg-gradient-to-br from-green-900 via-green-700 to-green-500 py-16 px-4 md:px-0">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
      {/* Left Content */}
      <div className="flex-1 text-white">
        <div className="flex items-center mb-4">
          <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2z" />
            <path d="M17 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2z" />
            <path d="M22 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2z" />
          </svg>
          <span className="uppercase tracking-widest text-green-400 font-semibold text-sm">Why Choose Us</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          We Are Expert & <span className="text-green-400">Do Our Best</span> For Your Goal
        </h2>
        <p className="text-green-100 mb-8 max-w-lg">
          It is a long established fact that a reader will be distracted by the readable content of a page when many desktop and web page editors looking at its layout.
        </p>
        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div key={i} className="flex items-start bg-white/90 rounded-xl p-4 shadow-md mb-2">
              <div className="mr-4 mt-1">{f.icon}</div>
              <div>
                <div className="font-bold text-green-900">{f.title}</div>
                <div className="text-green-700 text-sm">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Right Image */}
      <div className="flex-1 flex justify-center">
        <div className="relative animate-float">
          {/* Custom shape using clip-path and border */}
          <div className="rounded-tl-[60px] rounded-br-[60px] overflow-hidden border-4 border-green-400 relative" style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 90%)"}}>
            <img
              src="https://images.unsplash.com/photo-1543337346-5f7dbd4cb934?auto=format&fit=crop&w=500&q=80"
              alt="Students"
              className="object-cover w-[340px] h-[400px] md:w-[360px] md:h-[440px]"
            />
            {/* Green gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-green-700/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
