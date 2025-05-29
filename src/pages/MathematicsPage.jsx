import React from 'react';
import AboutHero from '../components/about/Hero'; // Reusing the Hero component

const mathHighlights = [
  {
    title: 'Experienced Math Educators',
    description: 'Our team of qualified mathematics teachers is dedicated to fostering a deep understanding and appreciation for the subject.',
    icon: '👩‍🏫',
    imgSrc: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80', // Teacher in classroom
  },
  {
    title: 'Problem-Solving Focus',
    description: 'We emphasize developing strong analytical and problem-solving skills applicable in various real-world scenarios.',
    icon: '🧩',
    imgSrc: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80', // Students solving problems
  },
  {
    title: 'Math Competitions',
    description: 'Students are encouraged to participate in local and national math olympiads and competitions to challenge themselves.',
    icon: '🏆',
    imgSrc: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80', // Competition/award
  },
  {
    title: 'Support & Resources',
    description: 'We provide ample resources, including a math clinic and online tools, to support students at all levels.',
    icon: '📚',
    imgSrc: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80', // Books/resources
  },
];

const mathSubjects = [
    { name: 'Mathematics (O-Level)', oLevel: true, aLevel: false, description: "Core concepts in algebra, geometry, trigonometry, and statistics, building a strong foundation." },
    { name: 'Additional Mathematics (O-Level)', oLevel: true, aLevel: false, description: "Advanced topics for students with a strong aptitude in mathematics, preparing for A-Level." },
    { name: 'Mathematics (A-Level)', oLevel: false, aLevel: true, description: "In-depth study of Pure Mathematics, Mechanics, and Statistics for advanced learners." },
];

export default function MathematicsPage() {
  return (
    <div className="min-h-screen text-green-900 bg-gradient-to-br from-green-100 via-lime-50 to-emerald-100">
      <AboutHero
        title="Mathematics Department"
        breadcrumb={["Home", "Academics", "Departments", "Mathematics"]}
      />

      <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-lime-600 to-emerald-800 drop-shadow-lg">
            🧮 The World of Numbers & Logic
          </h1>
          <p className="max-w-3xl mx-auto mt-5 text-xl text-green-700">
            Welcome to the Mathematics Department at Mufakose 1 High School. We strive to make mathematics engaging, understandable, and relevant for all our students.
          </p>
        </header>

        {/* Highlights Section */}
        <section className="mb-20">
          <h2 className="mb-10 text-4xl font-bold text-center text-green-800">Why Mathematics at Mufakose 1 High?</h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {mathHighlights.map((highlight, index) => (
              <div key={index} className="flex flex-col items-center p-6 text-center transition-all duration-300 bg-white border-2 shadow-lg border-lime-200 rounded-xl hover:shadow-lime-400/50 hover:scale-105">
                <img src={highlight.imgSrc} alt={highlight.title} className="object-cover w-full h-40 mb-4 rounded-lg"/>
                <span className="mb-3 text-5xl">{highlight.icon}</span>
                <h3 className="mb-2 text-2xl font-semibold text-green-700">{highlight.title}</h3>
                <p className="text-green-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Subjects Offered Section */}
        <section className="mb-20">
          <h2 className="mb-10 text-4xl font-bold text-center text-green-800">Mathematics Curriculum</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mathSubjects.map((subject, index) => (
              <div key={index} className="p-6 transition-all duration-300 shadow-xl bg-lime-600 rounded-2xl hover:bg-lime-700 hover:shadow-2xl">
                <h3 className="mb-2 text-2xl font-bold text-white">{subject.name}</h3>
                <div className="flex mb-3 space-x-2">
                  {subject.oLevel && <span className="px-3 py-1 text-xs font-semibold bg-white rounded-full text-lime-700">O-Level</span>}
                  {subject.aLevel && <span className="px-3 py-1 text-xs font-semibold bg-white rounded-full text-lime-700">A-Level</span>}
                </div>
                <p className="text-lime-100">{subject.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Career Pathways Section */}
        <section className="py-16 text-center bg-green-700 rounded-xl">
          <div className="container px-6 mx-auto">
            <h2 className="text-4xl font-bold text-white">Careers with Mathematics</h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-green-100">
              A strong foundation in mathematics opens doors to a wide array of rewarding careers in fields like engineering, finance, data science, actuarial science, research, and education.
            </p>
            <button className="px-10 py-4 mt-8 text-lg font-semibold text-green-700 transition-transform duration-300 transform bg-white rounded-full shadow-lg hover:bg-green-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-opacity-75">
              Speak to a Career Advisor
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
