import React from "react";
import { Link } from "react-router-dom";
import { AcademicCapIcon, UsersIcon, StarIcon, DeviceTabletIcon, TrophyIcon } from "@heroicons/react/24/solid";

const advantages = [
  {
    icon: <AcademicCapIcon className="h-12 w-12 text-white" />,
    title: "Academic Excellence",
    description:
      "Consistently outstanding O and A Level results, with a proven record of high pass rates and provincial awards.",
    gradient: "from-green-500 to-green-600",
    route: "/academics"
  },
  {
    icon: <UsersIcon className="h-12 w-12 text-white" />,
    title: "Vibrant Student Community",
    description:
      "A diverse, inclusive environment where students from various backgrounds thrive together in harmony.",
    gradient: "from-green-600 to-green-700",
    route: "/student-life"
  },
  {
    icon: <StarIcon className="h-12 w-12 text-white" />,
    title: "Award-Winning School",
    description:
      "Recipient of the Secretary's Award and recognized for excellence in both academics and extracurricular activities.",
    gradient: "from-green-700 to-green-800",
    route: "/achievements"
  },
  {
    icon: <DeviceTabletIcon className="h-12 w-12 text-white" />,
    title: "Modern Facilities",
    description:
      "Well-equipped computer labs, sporting grounds, and learning spaces powered by solar energy and advanced resources.",
    gradient: "from-green-800 to-green-900",
    route: "/facilities"
  },
  {
    icon: <TrophyIcon className="h-12 w-12 text-white" />,
    title: "Rich Arts & Culture",
    description:
      "Active arts, music, and culture programs with a strong tradition of participation and achievement.",
    gradient: "from-green-900 to-green-950",
    route: "/arts-culture"
  },
];

const AdvantagesCards = () => (
  <section className="relative py-24 bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden">
    {/* Decorative Elements */}
    <div className="absolute left-0 top-0 w-64 h-64 opacity-20 -z-10">
      <svg viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="100" fill="#22c55e" />
      </svg>
    </div>
    <div className="absolute right-0 bottom-0 w-96 h-96 opacity-10 -z-10">
      <svg viewBox="0 0 300 300" fill="none">
        <rect width="300" height="300" rx="150" fill="#16a34a" />
      </svg>
    </div>

    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-green-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Why Choose Us</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
          Why Choose Mufakose 1 High School?
        </h2>
        <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {advantages.map((adv, idx) => (
          <div
            key={idx}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r opacity-75 blur-lg group-hover:opacity-100 transition duration-300 rounded-2xl"></div>
            <div className="relative bg-white rounded-2xl p-8 flex flex-col items-center text-center border-t-4 border-green-500 hover:scale-[1.02] transition-all duration-300">
              <div className={`mb-6 p-4 rounded-xl bg-gradient-to-r ${adv.gradient} transform group-hover:scale-110 transition-transform duration-300`}>
                {adv.icon}
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3 group-hover:text-green-600 transition-colors duration-300">
                {adv.title}
              </h3>
              <p className="text-green-700 leading-relaxed">
                {adv.description}
              </p>
              <div className="mt-6 md:opacity-0 md:transform md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
                <Link 
                  to={adv.route}
                  className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AdvantagesCards;
