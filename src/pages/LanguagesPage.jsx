import React from 'react';
import AboutHero from '../components/about/Hero'; // Reusing the Hero component

const languageHighlights = [
  {
    title: 'Diverse Language Offerings',
    description: 'Our department offers a range of languages including English, Shona, Ndebele, and French, catering to diverse linguistic interests.',
    icon: '🌐',
    imgSrc: 'https://via.placeholder.com/600x400.png/2E7D32/FFFFFF?text=Languages',
  },
  {
    title: 'Focus on Communication',
    description: 'We emphasize practical communication skills – speaking, listening, reading, and writing – to foster fluency and confidence.',
    icon: '🗣️',
    imgSrc: 'https://via.placeholder.com/600x400.png/388E3C/FFFFFF?text=Communication',
  },
  {
    title: 'Cultural Immersion',
    description: 'Language learning is intertwined with cultural understanding. We explore literature, traditions, and arts of different cultures.',
    icon: '🌍',
    imgSrc: 'https://via.placeholder.com/600x400.png/4CAF50/FFFFFF?text=Culture',
  },
  {
    title: 'Literary & Debating Societies',
    description: 'Students can join vibrant clubs to enhance their literary appreciation, debating skills, and public speaking abilities.',
    icon: '📖',
    imgSrc: 'https://via.placeholder.com/600x400.png/8BC34A/FFFFFF?text=Debate+Literature',
  },
];

const languageSubjects = [
    { name: 'English Language & Literature', oLevel: true, aLevel: true, description: "Developing mastery in English communication, literary analysis, and creative writing." },
    { name: 'Shona Language & Literature', oLevel: true, aLevel: true, description: "Exploring the richness of Shona language, its literature, and cultural heritage." },
    { name: 'Ndebele Language & Literature', oLevel: true, aLevel: true, description: "Focusing on Ndebele language proficiency, literary works, and cultural contexts." },
    { name: 'French', oLevel: true, aLevel: true, description: "Learning the French language and discovering Francophone cultures around the world." },
];

export default function LanguagesPage() {
  return (
    <div className="min-h-screen text-gray-800 bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100">
      <AboutHero
        title="Languages Department"
        breadcrumb={["Home", "Academics", "Departments", "Languages"]}
      />

      <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-600 to-teal-800 drop-shadow-lg">
            🗣️ The Power of Words & Communication
          </h1>
          <p className="max-w-3xl mx-auto mt-5 text-xl text-green-700">
            The Languages Department at Mufakose 1 High School nurtures effective communicators, critical thinkers, and culturally aware global citizens.
          </p>
        </header>

        {/* Highlights Section */}
        <section className="mb-20">
          <h2 className="mb-10 text-4xl font-bold text-center text-green-800">Why Study Languages With Us?</h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {languageHighlights.map((highlight, index) => (
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
          <h2 className="mb-10 text-4xl font-bold text-center text-green-800">Our Language Curriculum</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"> {/* Adjusted to lg:grid-cols-2 for better display of 4 items */}
            {languageSubjects.map((subject, index) => (
              <div key={index} className="p-6 transition-all duration-300 shadow-xl bg-emerald-600 rounded-2xl hover:bg-emerald-700 hover:shadow-2xl">
                <h3 className="mb-2 text-2xl font-bold text-white">{subject.name}</h3>
                <div className="flex mb-3 space-x-2">
                  {subject.oLevel && <span className="px-3 py-1 text-xs font-semibold bg-white rounded-full text-emerald-700">O-Level</span>}
                  {subject.aLevel && <span className="px-3 py-1 text-xs font-semibold bg-white rounded-full text-emerald-700">A-Level</span>}
                </div>
                <p className="text-emerald-100">{subject.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Importance of Languages Section */}
        <section className="py-16 text-center bg-teal-700 rounded-xl">
          <div className="container px-6 mx-auto">
            <h2 className="text-4xl font-bold text-white">Unlock a World of Opportunities</h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-teal-100">
              Proficiency in languages enhances career prospects in translation, journalism, international relations, education, tourism, and many other fields. It also enriches personal growth and global understanding.
            </p>
            <button className="px-10 py-4 mt-8 text-lg font-semibold text-teal-700 transition-transform duration-300 transform bg-white rounded-full shadow-lg hover:bg-teal-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-opacity-75">
              Meet Our Language Teachers
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}