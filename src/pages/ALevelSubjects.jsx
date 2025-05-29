import React from 'react';
import AboutHero from '../components/about/Hero'; // Reusing the Hero component

const aLevelSubjects = [
  {
    id: 1,
    name: 'Mathematics',
    code: '9709',
    icon: '📐',
    description: 'Advanced mathematical concepts including Pure Mathematics, Mechanics, and Statistics, preparing for university-level STEM courses.',
    department: 'Sciences & Mathematics',
    color: 'bg-blue-600',
    hoverColor: 'hover:bg-blue-700',
    prerequisites: 'Strong O-Level Mathematics pass.',
  },
  {
    id: 2,
    name: 'Physics',
    code: '9702',
    icon: '💡',
    description: 'In-depth study of classical and modern physics, focusing on problem-solving, experimental skills, and theoretical understanding.',
    department: 'Sciences & Mathematics',
    color: 'bg-sky-600',
    hoverColor: 'hover:bg-sky-700',
    prerequisites: 'Good O-Level Physics or Integrated Science, and Mathematics.',
  },
  {
    id: 3,
    name: 'Chemistry',
    code: '9701',
    icon: '🧪',
    description: 'Covers physical, inorganic, and organic chemistry, emphasizing practical skills and application of chemical principles.',
    department: 'Sciences & Mathematics',
    color: 'bg-cyan-600',
    hoverColor: 'hover:bg-cyan-700',
    prerequisites: 'Good O-Level Chemistry or Integrated Science, and Mathematics.',
  },
  {
    id: 4,
    name: 'Biology',
    code: '9700',
    icon: '🧬',
    description: 'Explores advanced biological concepts, from molecular biology to ecology, with a strong emphasis on practical investigation.',
    department: 'Sciences & Mathematics',
    color: 'bg-teal-600',
    hoverColor: 'hover:bg-teal-700',
    prerequisites: 'Good O-Level Biology or Integrated Science.',
  },
  {
    id: 5,
    name: 'Literature in English',
    code: '9695',
    icon: '📖',
    description: 'Critical analysis of literary texts from various genres and periods, developing advanced interpretative and essay-writing skills.',
    department: 'Languages & Arts',
    color: 'bg-indigo-600',
    hoverColor: 'hover:bg-indigo-700',
    prerequisites: 'Strong O-Level English Language and Literature pass.',
  },
  {
    id: 6,
    name: 'History',
    code: '9489', // Updated code for A-Level History
    icon: '🏛️',
    description: 'Advanced study of historical periods and themes, focusing on source analysis, historiography, and argumentative writing.',
    department: 'Humanities',
    color: 'bg-purple-600',
    hoverColor: 'hover:bg-purple-700',
    prerequisites: 'Good O-Level History pass.',
  },
  {
    id: 7,
    name: 'Geography',
    code: '9696',
    icon: '🗺️',
    description: 'Examines complex physical and human geographical processes, contemporary global issues, and fieldwork techniques.',
    department: 'Humanities',
    color: 'bg-pink-600',
    hoverColor: 'hover:bg-pink-700',
    prerequisites: 'Good O-Level Geography pass.',
  },
  {
    id: 8,
    name: 'Accounting',
    code: '9706',
    icon: '📊',
    description: 'Advanced principles of financial and managerial accounting, preparing students for careers in finance and business.',
    department: 'Commercials',
    color: 'bg-red-600',
    hoverColor: 'hover:bg-red-700',
    prerequisites: 'Good O-Level Principles of Accounts pass.',
  },
  {
    id: 9,
    name: 'Business Studies',
    code: '9609',
    icon: '💼',
    description: 'Comprehensive study of business organizations, functions, decision-making, and the external business environment.',
    department: 'Commercials',
    color: 'bg-orange-600',
    hoverColor: 'hover:bg-orange-700',
    prerequisites: 'Good O-Level Commerce or Business Studies pass.',
  },
  {
    id: 10,
    name: 'Economics',
    code: '9708',
    icon: '💹',
    description: 'Analysis of microeconomic and macroeconomic principles, economic policy, and contemporary economic issues.',
    department: 'Commercials',
    color: 'bg-amber-600',
    hoverColor: 'hover:bg-amber-700',
    prerequisites: 'Good O-Level Commerce and Mathematics recommended.',
  },
  {
    id: 11,
    name: 'Computer Science',
    code: '9618', // Updated code for A-Level Computer Science
    icon: '💾',
    description: 'In-depth study of computation, algorithms, programming, computer architecture, and information representation.',
    department: 'Technicals & Vocations',
    color: 'bg-lime-600',
    hoverColor: 'hover:bg-lime-700',
    prerequisites: 'Strong O-Level Computer Studies or Mathematics pass.',
  },
   {
    id: 12,
    name: 'Divinity',
    code: '9011',
    icon: '🕊️',
    description: 'Critical study of religious texts, themes, and philosophical questions within a chosen religious tradition.',
    department: 'Humanities',
    color: 'bg-fuchsia-600',
    hoverColor: 'hover:bg-fuchsia-700',
    prerequisites: 'Good O-Level Religious Studies pass recommended.',
  },
];

export default function ALevelSubjectsPage() {
  return (
    <div className="min-h-screen text-gray-800 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-100">
      <AboutHero
        title="A-Level Subjects"
        breadcrumb={["Home", "Academics", "A-Level Subjects"]}
      />

      <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-800 drop-shadow-lg">
            🎓 A-Level Advanced Studies
          </h1>
          <p className="max-w-3xl mx-auto mt-5 text-xl text-blue-700">
            Explore our Advanced Level (A-Level) subject offerings at Mufakose 1 High School, designed for in-depth specialization and university preparation.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {aLevelSubjects.map((subject) => (
            <div
              key={subject.id}
              className={`flex flex-col overflow-hidden transition-all duration-300 ease-in-out transform ${subject.color} shadow-xl group rounded-2xl hover:shadow-2xl hover:-translate-y-2`}
            >
              <div className="p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{subject.icon}</span>
                  <span className="px-2 py-1 text-xs font-semibold bg-white bg-opacity-25 rounded-full">
                    Code: {subject.code}
                  </span>
                </div>
                <h2 className="mb-2 text-2xl font-bold">{subject.name}</h2>
                <p className="mb-1 text-sm font-medium opacity-80">Department: {subject.department}</p>
