import React from "react";

// Icons as SVG components (replace with your own or use an icon library)
const StatsIcons = [
  // Book icon
  <svg key="courses" className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
    <path d="M4 4.5A2.5 2.5 0 016.5 7H20v13" />
    <path d="M4 4.5v15A2.5 2.5 0 006.5 22H20" />
  </svg>,
  // Student icon
  <svg key="students" className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <circle cx="12" cy="7" r="4" />
    <path d="M5.5 21a7.5 7.5 0 0113 0" />
  </svg>,
  // Lecturer icon
  <svg key="lecturers" className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <circle cx="12" cy="7" r="4" />
    <path d="M5.5 21a7.5 7.5 0 0113 0" />
    <path d="M16 11V5a2 2 0 10-4 0v6" />
  </svg>,
  // Award icon
  <svg key="awards" className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <circle cx="12" cy="8" r="6" />
    <path d="M8.21 13.89l-1.42 4.24a1 1 0 001.3 1.3l4.24-1.42" />
    <path d="M15.79 13.89l1.42 4.24a1 1 0 01-1.3 1.3l-4.24-1.42" />
  </svg>,
];

const stats = [
  { label: "Total Courses", value: 500, icon: StatsIcons[0] },
  { label: "Our Students", value: 1900, icon: StatsIcons[1] },
  { label: "Skilled Lecturers", value: 750, icon: StatsIcons[2] },
  { label: "Win Awards", value: 30, icon: StatsIcons[3] },
];

const AboutPage = () => (
  <div>
    {/* Hero Section */}
    <section className="relative h-48 md:h-56 flex items-center justify-center">
      <img
        src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
        alt="Students"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-70" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2 drop-shadow">
          About Us
        </h1>
        <nav className="flex items-center justify-center space-x-2 text-sm">
          <span className="text-white/80">Home</span>
          <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M7.05 4.05a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 11-1.06-1.06L10.19 10 7.05 6.86a.75.75 0 010-1.06z" />
          </svg>
          <span className="text-orange-400 font-semibold">About Us</span>
        </nav>
      </div>
    </section>

    {/* About Feature Section */}
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Left: Images & Badge */}
        <div className="flex-1 flex flex-col gap-4 items-center md:items-start">
          <div className="flex gap-4">
            <img
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=300&q=80"
              alt="Student studying"
              className="rounded-2xl w-40 h-48 object-cover shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=120&q=80"
              alt="Students group"
              className="rounded-full w-28 h-28 object-cover border-4 border-white shadow-lg mt-10"
            />
          </div>
          <div className="flex gap-4 mt-2">
            <div className="bg-orange-100 text-orange-600 rounded-2xl px-6 py-6 flex flex-col items-center shadow-md">
              <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="10" />
              </svg>
              <span className="font-bold text-lg">30 Years Of<br/>Quality Service</span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1584634203423-43537a8fa9b6?auto=format&fit=crop&w=120&q=80"
              alt="Student discussion"
              className="rounded-2xl w-28 h-28 object-cover shadow-lg"
            />
          </div>
        </div>
        {/* Right: Text & Features */}
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="uppercase tracking-widest text-orange-500 font-semibold text-sm">About Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Our Edukation System <span className="text-orange-500">Inspires</span> You More.
          </h2>
          <p className="text-gray-600 mb-6">
            There are many variations of passages available but the majority have suffered alteration in some form by injected humour randomised words which don’t look even slightly believable. If you are going to use passage.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="bg-orange-100 p-2 rounded-full">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Edukation Services</h4>
                <p className="text-gray-500 text-sm">It is a long established fact that reader will to using content.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-orange-100 p-2 rounded-full">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">International Hubs</h4>
                <p className="text-gray-500 text-sm">It is a long established fact that reader will to using content.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="bg-blue-50 rounded-2xl p-4 flex-1 flex items-center justify-between">
              <span className="text-gray-600 text-sm">
                It is a long established fact that a reader will be distracted by the content of a page when looking at its reader for the long words layout.
              </span>
              <span className="ml-4 text-3xl font-extrabold text-green-500">99</span>
            </div>
            <div className="flex flex-col gap-2 items-start">
              <a
                href="#"
                className="bg-orange-500 text-white font-bold px-6 py-3 rounded-full shadow hover:bg-orange-600 transition"
              >
                DISCOVER MORE &rarr;
              </a>
              <div className="flex items-center gap-2">
                <span className="bg-green-100 rounded-full p-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M22 16.92V21a2 2 0 01-2.18 2A19.72 19.72 0 013 5.18 2 2 0 015 3h4.09a2 2 0 012 1.72 13 13 0 006.29 6.29 2 2 0 011.72 2V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
                <span className="font-semibold text-green-600">Call Now</span>
                <span className="text-gray-600 font-bold">+2 123 654 7898</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Stats Row */}
    <section className="relative py-10 bg-teal-700">
      <img
        src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
        alt="Students"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-teal-700 opacity-80" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="bg-orange-400 rounded-t-full rounded-b-[40px] p-4 mb-2 shadow-lg flex items-center justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-white/80 font-medium mt-1">+ {stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
