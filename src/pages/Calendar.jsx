import React from 'react';
import AboutHero from '../components/about/Hero'; // Reusing the Hero component

const calendarEvents = [
  {
    date: '2025-09-02',
    title: 'Term 3 Begins',
    description: 'Welcome back to school! All students are expected to report for the third term.',
    category: 'Academic',
    color: 'bg-blue-500',
  },
  {
    date: '2025-09-15',
    title: 'Inter-House Sports Day',
    description: 'Annual inter-house athletics competition. Come and support your house!',
    category: 'Sports',
    color: 'bg-green-500',
  },
  {
    date: '2025-10-05',
    title: 'Parents\' Day',
    description: 'An opportunity for parents to meet with teachers and discuss student progress.',
    category: 'School Event',
    color: 'bg-purple-500',
  },
  {
    date: '2025-10-20',
    title: 'Mid-Term Break',
    description: 'School closes for a short mid-term break.',
    category: 'Holiday',
    color: 'bg-yellow-500',
  },
  {
    date: '2025-10-25',
    title: 'Mid-Term Break Ends',
    description: 'School reopens after the mid-term break.',
    category: 'Academic',
    color: 'bg-blue-500',
  },
  {
    date: '2025-11-10',
    title: 'Science Fair',
    description: 'Students showcase their innovative science projects.',
    category: 'Academic',
    color: 'bg-indigo-500',
  },
  {
    date: '2025-12-05',
    title: 'Term 3 Ends - School Closes',
    description: 'End of the academic year. School closes for the December holidays.',
    category: 'Holiday',
    color: 'bg-red-500',
  },
];

export default function CalendarPage() {
  return (
    <div className="min-h-screen text-gray-800 bg-gradient-to-br from-sky-100 via-cyan-50 to-blue-100">
      <AboutHero
        title="School Calendar"
        breadcrumb={["Home", "Calendar"]}
      />

      <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-700 drop-shadow-lg">
            🗓️ Stay Updated: School Calendar
          </h1>
          <p className="max-w-3xl mx-auto mt-5 text-xl text-sky-700">
            Keep track of all important dates, events, holidays, and academic schedules for Mufakose 1 High School.
          </p>
        </header>

        <div className="overflow-hidden bg-white shadow-xl rounded-2xl">
          <div className="p-6 sm:p-8">
            <h2 className="mb-8 text-3xl font-semibold text-center text-sky-800">Upcoming Events & Key Dates</h2>
            <div className="space-y-8">
              {calendarEvents.map((event, index) => (
                <div
                  key={index}
                  className={`p-6 transition-all duration-300 ease-in-out transform border-l-4 ${event.color.replace('bg-', 'border-')} rounded-r-lg shadow-lg hover:shadow-xl hover:scale-[1.02] bg-sky-50`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="mb-3 sm:mb-0">
                      <p className={`px-3 py-1 mb-2 text-xs font-semibold text-white ${event.color} rounded-full inline-block`} >
                        {event.category}
                      </p>
                      <h3 className="text-2xl font-bold text-sky-900">{event.title}</h3>
                      <p className="text-sm text-gray-600">{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                    <div className="max-w-md text-gray-700 sm:text-right">
                      <p>{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="py-16 mt-20 text-center bg-gradient-to-r from-cyan-600 to-blue-700 rounded-xl">
          <div className="container px-6 mx-auto">
            <h2 className="text-4xl font-bold text-white">Download Full Academic Calendar</h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-blue-100">
              Get the complete academic calendar for the year in PDF format. Plan ahead and never miss an important date.
            </p>
            <button className="px-10 py-4 mt-8 text-lg font-semibold text-blue-700 transition-transform duration-300 transform bg-white rounded-full shadow-lg hover:bg-blue-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-opacity-75">
              Download PDF
            </button>
          </div>
        </section>

      </div>

      <footer className="py-10 mt-12 text-sm text-center border-t text-sky-700 bg-sky-100 border-sky-200 opacity-90">
        &copy; {new Date().getFullYear()} Mufakose 1 High School. Planning for Success.
      </footer>
    </div>
  );
}