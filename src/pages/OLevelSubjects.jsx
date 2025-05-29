import React from 'react';
import AboutHero from '../components/about/Hero'; // Reusing the Hero component

const oLevelSubjects = [
  {
    id: 1,
    name: 'Mathematics',
    code: '4028',
    icon: '🧮',
    description: 'Essential for all students, Mathematics at Mufakose 1 High develops logical reasoning and problem-solving skills, forming the backbone for STEM careers.',
    department: 'Sciences & Mathematics',
    color: 'bg-green-600',
    hoverColor: 'hover:bg-green-700',
  },
  {
    id: 2,
    name: 'English Language',
    code: '1122',
    icon: '📚',
    description: 'Our English Language curriculum builds strong communication, comprehension, and creative writing skills, preparing students for academic and real-world success.',
    department: 'Languages & Arts',
    color: 'bg-emerald-600',
    hoverColor: 'hover:bg-emerald-700',
  },
  {
    id: 3,
    name: 'Integrated Science',
    code: '5006',
    icon: '🔬',
    description: 'A hands-on subject that introduces learners to Biology, Chemistry, and Physics, fostering curiosity and scientific thinking.',
    department: 'Sciences & Mathematics',
    color: 'bg-teal-600',
    hoverColor: 'hover:bg-teal-700',
  },
  {
    id: 4,
    name: 'History',
    code: '2167',
    icon: '📜',
    description: 'History at Mufakose 1 High deepens understanding of Zimbabwean, African, and world events, encouraging critical analysis and citizenship.',
    department: 'Humanities',
    color: 'bg-lime-600',
    hoverColor: 'hover:bg-lime-700',
  },
  {
    id: 5,
    name: 'Geography',
    code: '2217',
    icon: '🌍',
    description: 'Students explore physical and human geography, with a focus on Zimbabwe’s environment and global issues such as climate change.',
    department: 'Humanities',
    color: 'bg-green-500',
    hoverColor: 'hover:bg-green-600',
  },
  {
    id: 6,
    name: 'Shona / Ndebele',
    code: '3156 / 3155',
    icon: '🗣️',
    description: 'We promote local language proficiency and cultural heritage through Shona and Ndebele, supporting identity and community values.',
    department: 'Languages & Arts',
    color: 'bg-emerald-500',
    hoverColor: 'hover:bg-emerald-600',
  },
  {
    id: 7,
    name: 'Commerce',
    code: '7100',
    icon: '📈',
    description: 'Commerce introduces students to business principles and entrepreneurship, vital for Zimbabwe’s economic landscape.',
    department: 'Commercials',
    color: 'bg-teal-500',
    hoverColor: 'hover:bg-teal-600',
  },
  {
    id: 8,
    name: 'Principles of Accounts',
    code: '7110',
    icon: '🧾',
    description: 'Accounting skills are taught with practical examples, preparing students for business studies and financial literacy in daily life.',
    department: 'Commercials',
    color: 'bg-lime-500',
    hoverColor: 'hover:bg-lime-600',
  },
  {
    id: 9,
    name: 'Computer Studies',
    code: '7010',
    icon: '💻',
    description: 'Students gain ICT skills, digital literacy, and an introduction to coding, making them ready for the digital world.',
    department: 'Technicals & Vocations',
    color: 'bg-green-700',
    hoverColor: 'hover:bg-green-800',
  },
  {
    id: 10,
    name: 'Agriculture',
    code: '5038',
    icon: '🌱',
    description: 'With practical lessons in crop and animal husbandry, students learn sustainable agriculture, vital for Zimbabwe’s future.',
    department: 'Technicals & Vocations',
    color: 'bg-emerald-700',
    hoverColor: 'hover:bg-emerald-800',
  },
];

export default function OLevelSubjectsPage() {
  return (
    <div className="min-h-screen text-green-900 bg-gradient-to-br from-green-50 via-lime-50 to-emerald-100">
      <AboutHero
        title="O-Level Subjects"
        breadcrumb={["Home", "Academics", "O-Level Subjects"]}
      />

      <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-600 to-teal-800 drop-shadow-lg">
            📚 O-Level Curriculum at Mufakose 1 High
          </h1>
          <p className="max-w-3xl mx-auto mt-5 text-xl text-green-700">
            Mufakose 1 High School offers a diverse and robust O-Level curriculum, empowering students to excel academically and prepare for life beyond the classroom. Our subjects reflect Zimbabwe’s national standards and the needs of our community.
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
            <h2 className="text-3xl font-bold text-white">Why Choose O-Levels at Mufakose 1 High?</h2>
            <ul className="max-w-2xl mx-auto mt-6 space-y-3 text-lg text-left text-green-100 list-disc list-inside">
              <li>Comprehensive curriculum aligned with ZIMSEC standards.</li>
              <li>Experienced teachers who inspire and support every learner.</li>
              <li>Balance of theory, practicals, and real-world skills.</li>
              <li>Excellent track record in O-Level results and university placements.</li>
              <li>Vibrant co-curricular and sports activities alongside academics.</li>
            </ul>
            <button className="px-10 py-3 mt-8 font-semibold text-green-700 transition-transform duration-300 transform bg-white rounded-full shadow-lg text-md hover:bg-green-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-opacity-75">
              View Prospectus
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
