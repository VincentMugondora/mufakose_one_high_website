import React, { useEffect } from "react";
import { BookOpenIcon, CalculatorIcon, BeakerIcon, GlobeAltIcon, PaintBrushIcon, UsersIcon, AcademicCapIcon, UserGroupIcon, ClockIcon, StarIcon } from "@heroicons/react/24/solid";

const departments = [
  {
    name: "Sciences",
    description: "Biology, Chemistry, Physics, and Mathematics-where curiosity meets discovery.",
    icon: <BeakerIcon className="h-8 w-8 text-white" />,
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80",
    lessons: 12,
    rating: 4.5,
    seats: 60,
    years: 4,
    price: 500,
    badge: "Science",
    badgeColor: "bg-blue-500",
  },
  {
    name: "Languages",
    description: "English, Shona, and French-empowering students to communicate globally.",
    icon: <GlobeAltIcon className="h-8 w-8 text-white" />,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    lessons: 10,
    rating: 4.0,
    seats: 40,
    years: 3,
    price: 450,
    badge: "Languages",
    badgeColor: "bg-purple-500",
  },
  {
    name: "Arts & Humanities",
    description: "History, Geography, Religious Studies, and Literature-exploring society and culture.",
    icon: <BookOpenIcon className="h-8 w-8 text-white" />,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    lessons: 8,
    rating: 4.2,
    seats: 35,
    years: 3,
    price: 400,
    badge: "Arts",
    badgeColor: "bg-red-500",
  },
  {
    name: "Commercials",
    description: "Accounting, Business Studies, and Economics-building tomorrow's entrepreneurs.",
    icon: <CalculatorIcon className="h-8 w-8 text-white" />,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    lessons: 9,
    rating: 4.3,
    seats: 50,
    years: 4,
    price: 480,
    badge: "Business",
    badgeColor: "bg-yellow-500",
  },
  {
    name: "Practical Subjects",
    description: "Food & Nutrition, Agriculture, Technical Graphics, and Computer Science-hands-on learning for real-world skills.",
    icon: <PaintBrushIcon className="h-8 w-8 text-white" />,
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    lessons: 11,
    rating: 4.6,
    seats: 45,
    years: 3,
    price: 470,
    badge: "Practical",
    badgeColor: "bg-orange-500",
  },
  {
    name: "Guidance & Counseling",
    description: "Supporting students' personal, social, and academic development.",
    icon: <UsersIcon className="h-8 w-8 text-white" />,
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80",
    lessons: 6,
    rating: 4.8,
    seats: 30,
    years: 2,
    price: 350,
    badge: "Support",
    badgeColor: "bg-pink-500",
  },
];

const Departments = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.department-card').forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-green-50 via-white to-green-100 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 relative">
          {/* Decorative elements for the header */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-green-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-8 right-1/2 transform translate-x-1/2 w-32 h-32 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse animation-delay-1000"></div>
          
          {/* Enhanced title with gradient text */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 animate-fade-in relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800">
              Our Departments
            </span>
            {/* Decorative underline */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-400 rounded-full animate-pulse"></div>
          </h2>

          {/* Enhanced description with animated border */}
          <div className="relative max-w-2xl mx-auto p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-green-100 shadow-lg animate-fade-in animation-delay-200">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-50 to-green-100 opacity-50 animate-pulse"></div>
            <p className="text-lg text-green-700 relative z-10 leading-relaxed">
              Mufakose I High School offers a diverse range of academic and practical departments, 
              each dedicated to nurturing excellence and preparing students for a bright future.
            </p>
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-400 rounded-tl-lg"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green-400 rounded-tr-lg"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-400 rounded-bl-lg"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-400 rounded-br-lg"></div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept, idx) => (
            <div
              key={idx}
              className="department-card opacity-0 bg-white/60 backdrop-blur-xl rounded-2xl shadow-2xl p-0 flex flex-col transition-all duration-500 group border border-green-100 overflow-hidden relative hover:scale-105 hover:shadow-green-200 hover:border-green-400 hover:z-20 hover:ring-4 hover:ring-green-200/40"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Top image with overlay icon and badge */}
              <div className="relative w-full h-44 bg-gray-200 overflow-hidden">
                <img src={dept.image} alt={dept.name} className="w-full h-full object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110 group-hover:brightness-90" />
                {/* Badge */}
                <span className={`absolute top-3 right-3 px-3 py-1 text-xs font-bold text-white rounded-lg shadow-md ${dept.badgeColor} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl`}>{dept.badge}</span>
                {/* Icon overlay */}
                <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-green-500 to-green-700 bg-opacity-90 rounded-full p-4 shadow-2xl border-4 border-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-green-400 animate-float">
                  {dept.icon}
                </span>
              </div>
              {/* Details row */}
              <div className="flex items-center justify-between px-6 pt-8 pb-2 text-gray-500 text-sm font-medium">
                <span className="flex items-center gap-1"><AcademicCapIcon className="h-5 w-5 text-yellow-500" /> {dept.lessons} Lessons</span>
                <span className="flex items-center gap-1"><StarIcon className="h-5 w-5 text-yellow-400" /> {dept.rating} </span>
              </div>
              {/* Title and description */}
              <div className="px-6 pb-4 pt-2 text-center">
                <h3 className="text-xl font-extrabold text-green-800 mb-2 group-hover:text-green-700 transition-colors duration-300 drop-shadow-lg">{dept.name}</h3>
                <p className="text-green-700 text-sm mb-2 opacity-90 group-hover:opacity-100 transition-opacity duration-300">{dept.description}</p>
              </div>
              {/* Bottom row */}
              <div className="flex items-center justify-between px-6 pb-6 pt-2 border-t border-gray-100 text-gray-500 text-sm font-medium">
                <span className="flex items-center gap-1"><UserGroupIcon className="h-5 w-5 text-green-500" /> {dept.seats} Seats</span>
                <span className="flex items-center gap-1"><ClockIcon className="h-5 w-5 text-green-500" /> {dept.years} Years</span>
                <span className="bg-gradient-to-br from-orange-400 to-yellow-400 text-white font-bold px-4 py-1 rounded-lg shadow-xl text-base border-2 border-white scale-110 group-hover:scale-125 transition-transform duration-300">${dept.price}</span>
              </div>
              {/* Glow border effect */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl border-4 border-transparent group-hover:border-green-300 group-hover:shadow-green-200 group-hover:shadow-2xl transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;
