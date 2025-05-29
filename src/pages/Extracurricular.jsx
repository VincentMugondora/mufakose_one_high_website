import React from 'react';
import AboutHero from '../components/about/Hero'; // Reusing the Hero component

const activities = [
  {
    id: 1,
    name: 'Debate Club',
    icon: '🗣️',
    description: 'Sharpen your critical thinking and public speaking skills. Participate in local and national competitions.',
    category: 'Intellectual & Leadership',
    color: 'bg-green-600',
    imgSrc: 'https://via.placeholder.com/400x300.png/2E7D32/FFFFFF?text=Debate+Club',
  },
  {
    id: 2,
    name: 'Science Club',
    icon: '🔬',
    description: 'Explore the wonders of science through experiments, projects, and participation in science fairs.',
    category: 'Academic & STEM',
    color: 'bg-emerald-600',
    imgSrc: 'https://via.placeholder.com/400x300.png/388E3C/FFFFFF?text=Science+Club',
  },
  {
    id: 3,
    name: 'Drama Club',
    icon: '🎭',
    description: 'Unleash your creativity on stage. Participate in school plays, skits, and drama festivals.',
    category: 'Arts & Culture',
    color: 'bg-teal-600',
    imgSrc: 'https://via.placeholder.com/400x300.png/4CAF50/FFFFFF?text=Drama+Club',
  },
  {
    id: 4,
    name: 'Music & Choir',
    icon: '🎶',
    description: 'Develop your musical talents, join the school choir, or learn an instrument. Perform at school events.',
    category: 'Arts & Culture',
    color: 'bg-lime-600',
    imgSrc: 'https://via.placeholder.com/400x300.png/8BC34A/FFFFFF?text=Music+Choir',
  },
  {
    id: 5,
    name: 'Sports (Soccer, Netball, Athletics)',
    icon: '⚽🏀🏃',
    description: 'Stay active, build teamwork, and compete in various sports disciplines at inter-house and inter-school levels.',
    category: 'Sports & Fitness',
    color: 'bg-green-500',
    imgSrc: 'https://via.placeholder.com/400x300.png/2E7D32/FFFFFF?text=Sports',
  },
  {
    id: 6,
    name: 'Chess Club',
    icon: '♟️',
    description: 'Develop strategic thinking and problem-solving skills through the game of chess. Compete in tournaments.',
    category: 'Intellectual & Strategy',
    color: 'bg-emerald-500',
    imgSrc: 'https://via.placeholder.com/400x300.png/388E3C/FFFFFF?text=Chess+Club',
  },
  {
    id: 7,
    name: 'Environmental Club',
    icon: '🌱',
    description: 'Promote environmental awareness and participate in conservation projects within the school and community.',
    category: 'Community & Service',
    color: 'bg-teal-500',
    imgSrc: 'https://via.placeholder.com/400x300.png/4CAF50/FFFFFF?text=Environment+Club',
  },
  {
    id: 8,
    name: 'Interact Club (Rotary Sponsored)',
    icon: '🤝',
    description: 'Engage in community service projects, develop leadership skills, and make a positive impact.',
    category: 'Community & Service',
    color: 'bg-lime-500',
    imgSrc: 'https://via.placeholder.com/400x300.png/8BC34A/FFFFFF?text=Interact+Club',
  },
];

export default function ExtracurricularPage() {
  return (
    <div className="min-h-screen text-gray-800 bg-gradient-to-br from-green-50 via-emerald-100 to-teal-200">
      <AboutHero
        title="Extracurricular Activities"
        breadcrumb={["Home", "Academics", "Extracurricular"]}
      />

      <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-600 to-teal-800 drop-shadow-lg">
            🌟 Beyond the Classroom
          </h1>
          <p className="max-w-3xl mx-auto mt-5 text-xl text-green-700">
            At Mufakose 1 High, we believe in holistic development. Explore a wide range of extracurricular activities to discover talents, build skills, and make lifelong friends.
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className={`flex flex-col overflow-hidden transition-all duration-300 ease-in-out transform bg-white border-2 shadow-xl group rounded-2xl border-emerald-200 hover:shadow-teal-400/50 hover:-translate-y-2`}
            >
              <div className="relative h-56">
                <img
                  src={activity.imgSrc}
                  alt={activity.name}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute top-4 right-4 px-3 py-1 text-sm font-semibold text-white ${activity.color} rounded-full shadow-md`}>
                  {activity.category}
                </div>
              </div>
              <div className="flex-grow p-6">
                <div className="flex items-center mb-3">
                  <span className="mr-3 text-3xl">{activity.icon}</span>
                  <h2 className="text-2xl font-bold text-green-800 group-hover:text-emerald-700">{activity.name}</h2>
                </div>
                <p className="text-green-700">{activity.description}</p>
              </div>
              <div className="p-4 text-center bg-gray-50">
                <button className={`w-full px-6 py-2 font-medium text-white transition-colors duration-300 rounded-lg ${activity.color} hover:${activity.color.replace('600','700').replace('500','600')} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:${activity.color.replace('bg-','ring-')}`} >
                  Join Club
                </button>
              </div>
            </div>
          ))}
        </div>

        <section className="py-16 mt-20 text-center bg-green-700 rounded-xl">
          <div className="container px-6 mx-auto">
            <h2 className="text-4xl font-bold text-white">Get Involved!</h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-green-100">
              Participation in extracurricular activities is highly encouraged. It's a great way to learn new skills, pursue passions, and contribute to the vibrant school community.
            </p>
            <button className="px-10 py-4 mt-8 text-lg font-semibold text-green-700 transition-transform duration-300 transform bg-white rounded-full shadow-lg hover:bg-green-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-opacity-75">
              Contact Activity Coordinators
            </button>
          </div>
        </section>

      </div>

      <footer className="py-10 mt-12 text-sm text-center text-green-700 bg-green-100 border-t border-green-200">
        &copy; {new Date().getFullYear()} Mufakose 1 High School. Nurturing Talents, Building Character.
      </footer>
    </div>
  );
}