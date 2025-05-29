import React from 'react';
import AboutHero from '../components/about/Hero'; // Reusing the Hero component

const oLevelSubjects = [
  {
    id: 1,
    name: 'Mathematics',
    code: '4028',
    icon: '🧮',
    description: 'Develops logical thinking, problem-solving skills, and a foundation for further studies in STEM fields.',
    department: 'Sciences & Mathematics',
    color: 'bg-green-600',
    hoverColor: 'hover:bg-green-700',
  },
  {
    id: 2,
    name: 'English Language',
    code: '1122',
    icon: '📚',
    description: 'Enhances communication skills, comprehension, and creative expression through language and literature.',
    department: 'Languages & Arts',
    color: 'bg-emerald-600',
    hoverColor: 'hover:bg-emerald-700',
  },
  {
    id: 3,
    name: 'Integrated Science',
    code: '5006',
    icon: '🔬',
    description: 'Provides a broad understanding of biological, chemical, and physical concepts, fostering scientific inquiry.',
    department: 'Sciences & Mathematics',
    color: 'bg-teal-600',
    hoverColor: 'hover:bg-teal-700',
  },
  {
    id: 4,
    name: 'History',
    code: '2167',
    icon: '📜',
    description: 'Explores past events and societies, developing critical analysis and an understanding of historical context.',
    department: 'Humanities',
    color: 'bg-lime-600',
    hoverColor: 'hover:bg-lime-700',
  },
  {
    id: 5,
    name: 'Geography',
    code: '2217',
    icon: '🌍',
    description: 'Studies the Earth\'s landscapes, environments, and the relationship between people and their surroundings.',
    department: 'Humanities',
    color: 'bg-green-500',
    hoverColor: 'hover:bg-green-600',
  },
  {
    id: 6,
    name: 'Shona / Ndebele',
    code: '3156 / 3155',
    icon: '🗣️',
    description: 'Focuses on proficiency in local languages, cultural understanding, and literary appreciation.',
    department: 'Languages & Arts',
    color: 'bg-emerald-500',
    hoverColor: 'hover:bg-emerald-600',
  },
  {
    id: 7,
    name: 'Commerce',
    code: '7100',
    icon: '📈',
    description: 'Introduces the principles of business, trade, and finance, preparing students for commercial fields.',
    department: 'Commercials',
    color: 'bg-teal-500',
    hoverColor: 'hover:bg-teal-600',
  },
  {
    id: 8,
    name: 'Principles of Accounts',
    code: '7110',
    icon: '🧾',
    description: 'Covers the fundamentals of accounting, financial record-keeping, and business decision-making.',
    department: 'Commercials',
    color: 'bg-lime-500',
    hoverColor: 'hover:bg-lime-600',
  },
  {
    id: 9,
    name: 'Computer Studies',
    code: '7010',
    icon: '💻',
    description: 'Develops ICT skills, understanding of computer systems, programming basics, and digital literacy.',
    department: 'Technicals & Vocations',
    color: 'bg-green-700',
    hoverColor: 'hover:bg-green-800',
  },
   {
    id: 10,
    name: 'Agriculture',
    code: '5038',
    icon: '🌱',
    description: 'Explores principles of crop and animal husbandry, soil science, and sustainable farming practices.',
    department: 'Technicals & Vocations',
    color: 'bg-emerald-700',
    hoverColor: 'hover:bg-emerald-800',
  },
];

export default function OLevelSubjectsPage() {
  return (
    <div className="min-h-screen text-gray-800 bg-gradient-to-br from-green-50 via-lime-50 to-emerald-100">
      <AboutHero
        title="O-Level Subjects"
        breadcrumb={["Home", "Academics", "O-Level Subjects"]}
      />

      <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-600 to-teal-800 drop-shadow-lg">
            📚 O-Level Curriculum
          </h1>
          <p className="max-w-3xl mx-auto mt-5 text-xl text-green-700">
            Discover the diverse range of O-Level subjects offered at Mufakose 1 High School, designed to provide a strong academic foundation and cater to varied student interests.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {oLevelSubjects.map((subject) => (
            <div
              key={subject.id}
              className={`flex flex-col overflow-hidden transition-all duration-300 ease-in-out transform ${subject.color} shadow-xl group rounded-2xl hover:shadow-2xl hover:-translate-y-2`}
            >
              <div className="p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{subject.icon}</span>
                  <span className="px-2 py-1 text-xs font-semibold bg-white rounded-full bg-opacity-20">
                    Code: {subject.code}
                  </span>
                </div>
                <h2 className="mb-2 text-2xl font-bold">{subject.name}</h2>
                <p className="mb-1 text-sm font-medium opacity-80">Department: {subject.department}</p>
                <p className="h-24 overflow-y-auto text-sm opacity-90 scrollbar-thin scrollbar-thumb-white/50 scrollbar-track-transparent">
                  {subject.description}
                </p>
              </div>
              <div className={`p-4 mt-auto text-center text-white bg-black bg-opacity-20 ${subject.hoverColor} transition-colors duration-300 cursor-pointer`}>
                <span className="font-semibold">Learn More</span>
              </div>
            </div>
          ))}
        </div>

        <section className="py-12 mt-20 text-center bg-green-700 rounded-xl">
          <div className="container px-6 mx-auto">
            <h2 className="text-3xl font-bold text-white">Why Choose Our O-Level Program?</h2>
            <ul className="max-w-2xl mx-auto mt-6 space-y-3 text-lg text-left text-green-100 list-disc list-inside">
              <li>Comprehensive curriculum aligned with national standards.</li>
              <li>Experienced and dedicated subject specialist teachers.</li>
              <li>Focus on both theoretical knowledge and practical application.</li>
              <li>Preparation for A-Level studies and future careers.</li>
            </ul>
            <button className="px-10 py-3 mt-8 font-semibold text-green-700 transition-transform duration-300 transform bg-white rounded-full shadow-lg text-md hover:bg-green-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-opacity-75">
              View Prospectus
            </button>
          </div>
        </section>

      </div>

      <footer className="py-10 mt-12 text-sm text-center text-green-700 bg-green-100 border-t border-green-200">
        &copy; {new Date().getFullYear()} Mufakose 1 High School. Building Foundations for Success.
      </footer>
    </div>
  );
}