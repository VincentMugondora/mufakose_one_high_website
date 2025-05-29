import React from 'react';
import AboutHero from '../components/about/Hero'; // Reusing the Hero component

const scienceHighlights = [
  {
    title: 'State-of-the-Art Laboratories',
    description: 'Our Physics, Chemistry, and Biology labs are well-equipped to support hands-on learning, practicals, and experiments aligned with the ZIMSEC curriculum.',
    icon: '🔬',
    imgSrc: 'https://images.unsplash.com/photo-1559757175-5700dde67548?auto=format&fit=crop&w=600&q=80', // Modern lab
  },
  {
    title: 'Experienced Science Faculty',
    description: 'Our passionate and qualified science teachers inspire curiosity and excellence, guiding students to outstanding results and national recognition.',
    icon: '👩‍🏫',
    imgSrc: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80', // Teacher in lab/class
  },
  {
    title: 'Annual Science Fair',
    description: 'Mufakose 1 High hosts an annual Science Fair, giving students the chance to showcase innovative projects and compete at district and national levels.',
    icon: '🏆',
    imgSrc: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80', // Science fair/project
  },
  {
    title: 'STEM Club Activities',
    description: 'Our active STEM Club engages learners in robotics, coding, and engineering challenges, preparing them for the future of science and technology.',
    icon: '💡',
    imgSrc: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80', // STEM/robotics
  },
];

const scienceSubjects = [
  { name: 'Physics', oLevel: true, aLevel: true, description: "Understanding the fundamental principles of the universe, from motion and energy to electricity and waves." },
  { name: 'Chemistry', oLevel: true, aLevel: true, description: "Exploring substances, reactions, and the composition of matter, with practicals central to learning." },
  { name: 'Biology', oLevel: true, aLevel: true, description: "The study of living organisms, from cells to ecosystems, with a focus on Zimbabwean biodiversity." },
  { name: 'Integrated Science (O-Level)', oLevel: true, aLevel: false, description: "A foundational subject covering basics of Physics, Chemistry, and Biology, building curiosity and practical skills." },
  { name: 'Computer Science (A-Level)', oLevel: false, aLevel: true, description: "Modern computing, algorithms, and programming, equipping students for the digital world." },
];

export default function SciencePage() {
  return (
    <div className="min-h-screen text-green-900 bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100">
      <AboutHero
        title="Science Department"
        breadcrumb={["Home", "Academics", "Departments", "Science"]}
      />

      <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-600 to-teal-800 drop-shadow-lg">
            🔬 Discover the World of Science
          </h1>
          <p className="max-w-3xl mx-auto mt-5 text-xl text-green-700">
            The Science Department at Mufakose 1 High School is dedicated to fostering a love for inquiry, experimentation, and critical thinking. We aim to equip students with the knowledge and skills to excel in a science-driven world, with a strong record of ZIMSEC success and alumni in STEM fields.
          </p>
        </header>

        {/* Highlights Section */}
        <section className="mb-20">
          <h2 className="mb-10 text-4xl font-bold text-center text-green-800">Department Highlights</h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {scienceHighlights.map((highlight, index) => (
              <div key={index} className="flex flex-col items-center p-6 text-center transition-all duration-300 bg-white border-2 shadow-lg border-emerald-200 rounded-xl hover:shadow-emerald-400/50 hover:scale-105">
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
          <h2 className="mb-10 text-4xl font-bold text-center text-green-800">Subjects We Offer</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {scienceSubjects.map((subject, index) => (
              <div key={index} className="p-6 transition-all duration-300 bg-green-600 shadow-xl rounded-2xl hover:bg-green-700 hover:shadow-2xl">
                <h3 className="mb-2 text-2xl font-bold text-white">{subject.name}</h3>
                <div className="flex mb-3 space-x-2">
                  {subject.oLevel && <span className="px-3 py-1 text-xs font-semibold text-green-700 bg-white rounded-full">O-Level</span>}
                  {subject.aLevel && <span className="px-3 py-1 text-xs font-semibold text-green-700 bg-white rounded-full">A-Level</span>}
                </div>
                <p className="text-green-100">{subject.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Study Science Section */}
        <section className="py-16 text-center bg-emerald-700 rounded-xl">
          <div className="container px-6 mx-auto">
            <h2 className="text-4xl font-bold text-white">Why Study Science With Us?</h2>
            <ul className="max-w-2xl mx-auto mt-6 space-y-3 text-lg text-left list-disc list-inside text-emerald-100">
              <li>Develop critical thinking and problem-solving abilities.</li>
              <li>Gain practical skills through hands-on laboratory work.</li>
              <li>Explore diverse career paths in STEM fields.</li>
              <li>Understand the natural world and technological advancements.</li>
              <li>Participate in exciting clubs, fairs, and competitions.</li>
              <li>Benefit from a supportive environment and a tradition of science excellence at Mufakose 1 High.</li>
            </ul>
            <button className="px-10 py-4 mt-8 text-lg font-semibold transition-transform duration-300 transform bg-white rounded-full shadow-lg text-emerald-700 hover:bg-emerald-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-opacity-75">
              Contact Head of Science
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
