import React from 'react';
import AboutHero from '../components/about/Hero'; // Reusing the Hero component

const activities = [
  {
    id: 1,
    name: 'Debate Club',
    icon: '🗣️',
    description: 'Sharpen your critical thinking and public speaking skills. Represent Mufakose 1 High at Harare district and national debate competitions.',
    category: 'Intellectual & Leadership',
    color: 'bg-green-600',
    imgSrc: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    name: 'Science Club',
    icon: '🔬',
    description: 'Explore the wonders of science through experiments, STEM projects, and participation in ZIMSEC Science Fairs.',
    category: 'Academic & STEM',
    color: 'bg-emerald-600',
    imgSrc: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    name: 'Drama Club',
    icon: '🎭',
    description: 'Unleash your creativity on stage! Take part in school plays, cultural festivals, and drama competitions in Harare.',
    category: 'Arts & Culture',
    color: 'bg-teal-600',
    imgSrc: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    name: 'Music & Choir',
    icon: '🎶',
    description: 'Join the award-winning Mufakose 1 High Choir or learn an instrument. Perform at school assemblies and community events.',
    category: 'Arts & Culture',
    color: 'bg-lime-600',
    imgSrc: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 5,
    name: 'Sports (Soccer, Netball, Athletics)',
    icon: '⚽🏀🏃',
    description: 'Excel in soccer, netball, athletics, and more. Compete in inter-house and inter-school tournaments. Mufakose 1 High is known for sporting excellence!',
    category: 'Sports & Fitness',
    color: 'bg-green-500',
    imgSrc: 'https://images.unsplash.com/photo-1505843276877-1d5b8d6c8a48?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 6,
    name: 'Chess Club',
    icon: '♟️',
    description: 'Master the game of chess and develop strategic thinking. Represent the school in local and national chess tournaments.',
    category: 'Intellectual & Strategy',
    color: 'bg-emerald-500',
    imgSrc: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 7,
    name: 'Environmental Club',
    icon: '🌱',
    description: 'Promote environmental awareness and sustainability. Take part in tree planting, clean-up campaigns, and community outreach.',
    category: 'Community & Service',
    color: 'bg-teal-500',
    imgSrc: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 8,
    name: 'Interact Club (Rotary Sponsored)',
    icon: '🤝',
    description: 'Engage in community service, develop leadership, and make a difference through Rotary’s Interact Club. Join projects that benefit both school and community.',
    category: 'Community & Service',
    color: 'bg-lime-500',
    imgSrc: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80',
  },
];

export default function ExtracurricularPage() {
  return (
    <div className="min-h-screen text-green-900 bg-gradient-to-br from-green-50 via-emerald-100 to-teal-200">
      <AboutHero
        title="Extracurricular Activities"
        breadcrumb={["Home", "Academics", "Extracurricular"]}
      />

      <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-600 to-teal-800 drop-shadow-lg">
            🌟 Beyond the Classroom at Mufakose 1 High
          </h1>
          <p className="max-w-3xl mx-auto mt-5 text-xl text-green-700">
            At Mufakose 1 High School, we believe in developing well-rounded learners. Discover a vibrant selection of clubs and activities that nurture talent, leadership, and teamwork—both inside and outside the classroom.
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
            <h2 className="text-4xl font-bold text-white">Get Involved at Mufakose 1 High!</h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-green-100">
              Participation in extracurricular activities is highly encouraged. Whether you’re passionate about sports, arts, leadership, or service, there’s something for everyone. Join a club, discover your strengths, and be part of our proud school tradition!
            </p>
            <button className="px-10 py-4 mt-8 text-lg font-semibold text-green-700 transition-transform duration-300 transform bg-white rounded-full shadow-lg hover:bg-green-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-opacity-75">
              Contact Club Coordinators
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
