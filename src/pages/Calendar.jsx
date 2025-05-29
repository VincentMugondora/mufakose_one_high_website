import React from 'react';
import AboutHero from '../components/about/Hero';

const calendarEvents = [
  {
    date: '2025-09-02',
    title: 'Term 3 Begins',
    description: 'Welcome back! All students report for the third term. Let’s aim for excellence this term.',
    category: 'Academic',
    color: 'bg-green-600',
  },
  {
    date: '2025-09-19',
    title: 'Inter-House Sports Day',
    description: 'The annual athletics showdown! Wear your house colors and compete for the Mufakose 1 High trophy.',
    category: 'Sports',
    color: 'bg-emerald-500',
  },
  {
    date: '2025-10-03',
    title: 'Parents’ Consultation Day',
    description: 'Parents meet teachers to discuss progress and support student success.',
    category: 'School Event',
    color: 'bg-lime-600',
  },
  {
    date: '2025-10-20',
    title: 'Mid-Term Break',
    description: 'A short break to recharge. School closes for mid-term.',
    category: 'Holiday',
    color: 'bg-yellow-500',
  },
  {
    date: '2025-10-27',
    title: 'Mid-Term Break Ends',
    description: 'School reopens. All students resume classes.',
    category: 'Academic',
    color: 'bg-green-600',
  },
  {
    date: '2025-11-12',
    title: 'Science & Innovation Expo',
    description: 'Students present projects and inventions. Parents and community welcome!',
    category: 'Academic',
    color: 'bg-teal-500',
  },
  {
    date: '2025-12-05',
    title: 'Term 3 Ends – School Closes',
    description: 'End of the academic year. Wishing everyone a restful holiday!',
    category: 'Holiday',
    color: 'bg-red-500',
  },
];

export default function CalendarPage() {
  return (
    <div className="min-h-screen text-green-900 bg-gradient-to-br from-green-100 via-emerald-50 to-lime-100">
      <AboutHero
        title="School Calendar"
        breadcrumb={["Home", "Calendar"]}
      />

      <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-600 to-lime-800 drop-shadow-lg">
            🗓️ Mufakose 1 High School Calendar
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-xl text-green-700">
            Stay up-to-date with all key dates, events, and academic activities at Mufakose 1 High School. Excellence is our tradition—plan ahead and be part of every moment!
          </p>
        </header>

        <div className="overflow-hidden bg-white border-2 shadow-2xl rounded-3xl border-emerald-100">
          <div className="p-6 sm:p-10">
            <h2 className="mb-10 text-3xl font-bold text-center text-emerald-800 drop-shadow-sm">Upcoming Events & Key Dates</h2>
            <div className="space-y-8">
              {calendarEvents.map((event, index) => (
                <div
                  key={index}
                  className={`p-6 transition-all duration-300 ease-in-out transform border-l-4 ${event.color.replace('bg-', 'border-')} rounded-r-xl shadow-md hover:shadow-emerald-400/30 hover:scale-[1.025] bg-gradient-to-r from-green-50 via-emerald-50 to-lime-50`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="mb-3 sm:mb-0">
                      <span className={`px-3 py-1 mb-2 text-xs font-bold tracking-wide text-white ${event.color} rounded-full inline-block shadow`}>
                        {event.category}
                      </span>
                      <h3 className="text-2xl font-bold text-emerald-900">{event.title}</h3>
                      <p className="text-sm font-medium text-green-700">
                        {new Date(event.date).toLocaleDateString('en-ZW', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </p>
                    </div>
                    <div className="max-w-md text-green-800 sm:text-right">
                      <p>{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="py-16 mt-20 text-center shadow-xl bg-gradient-to-r from-emerald-600 via-green-700 to-lime-600 rounded-2xl">
          <div className="container px-6 mx-auto">
            <h2 className="text-4xl font-bold text-white">Download Full Academic Calendar</h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-lime-100">
              Get the complete Mufakose 1 High School academic calendar as a PDF. Plan your year, mark your diary, and never miss a milestone!
            </p>
            <button
              className="px-10 py-4 mt-8 text-lg font-semibold transition-transform duration-300 transform bg-white rounded-full shadow-lg text-emerald-700 hover:bg-lime-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-opacity-75"
              // TODO: Add actual PDF link
              onClick={() => alert('Download coming soon!')}
            >
              Download PDF
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
