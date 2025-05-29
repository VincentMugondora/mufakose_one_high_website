import React from 'react';
import AboutHero from '../components/about/Hero'; // Reusing the Hero component

const staffMembers = [
  {
    id: 1,
    name: 'Mr. John Doe',
    subject: 'Mathematics & Physics',
    qualification: 'M.Sc. Mathematics, B.Ed.',
    experience: '15+ Years',
    bio: 'A passionate educator dedicated to making complex subjects understandable and enjoyable for all students. Believes in fostering critical thinking.',
    imgSrc: 'https://via.placeholder.com/300x300.png/2E7D32/FFFFFF?text=J+Doe',
    email: 'j.doe@mufakosehigh.ac.zw',
  },
  {
    id: 2,
    name: 'Ms. Jane Smith',
    subject: 'English Literature & Language',
    qualification: 'M.A. English, PGDE',
    experience: '12+ Years',
    bio: 'Inspires a love for literature and effective communication. Focuses on developing students\' analytical and creative writing skills.',
    imgSrc: 'https://via.placeholder.com/300x300.png/388E3C/FFFFFF?text=J+Smith',
    email: 'j.smith@mufakosehigh.ac.zw',
  },
  {
    id: 3,
    name: 'Dr. Emily White',
    subject: 'Chemistry & Biology',
    qualification: 'Ph.D. Chemistry, B.Sc. Biology',
    experience: '10+ Years',
    bio: 'Brings science to life with engaging experiments and real-world applications. Committed to nurturing future scientists.',
    imgSrc: 'https://via.placeholder.com/300x300.png/4CAF50/FFFFFF?text=E+White',
    email: 'e.white@mufakosehigh.ac.zw',
  },
  {
    id: 4,
    name: 'Mr. David Green',
    subject: 'History & Geography',
    qualification: 'B.A. History, Dip. Ed.',
    experience: '18+ Years',
    bio: 'Makes history and geography relevant and exciting, encouraging students to explore the world and its past.',
    imgSrc: 'https://via.placeholder.com/300x300.png/2E7D32/FFFFFF?text=D+Green',
    email: 'd.green@mufakosehigh.ac.zw',
  },
  {
    id: 5,
    name: 'Mrs. Linda Brown',
    subject: 'Art & Design',
    qualification: 'B.F.A, M.A. Art Education',
    experience: '9+ Years',
    bio: 'Fosters creativity and artistic expression, guiding students to discover their unique talents in visual arts.',
    imgSrc: 'https://via.placeholder.com/300x300.png/388E3C/FFFFFF?text=L+Brown',
    email: 'l.brown@mufakosehigh.ac.zw',
  },
  {
    id: 6,
    name: 'Mr. Michael Black',
    subject: 'Physical Education & Sports',
    qualification: 'B.Sc. Sports Science',
    experience: '14+ Years',
    bio: 'Promotes physical fitness, teamwork, and sportsmanship through a variety of athletic programs.',
    imgSrc: 'https://via.placeholder.com/300x300.png/4CAF50/FFFFFF?text=M+Black',
    email: 'm.black@mufakosehigh.ac.zw',
  },
];

export default function StaffPage() {
  return (
    <div className="min-h-screen text-green-900 bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100">
      <AboutHero
        title="Our Dedicated Staff"
        breadcrumb={["Home", "Our Staff"]}
      />

      <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-600 to-teal-800 drop-shadow-lg">
            Meet Our Esteemed Staff
          </h1>
          <p className="max-w-3xl mx-auto mt-5 text-xl text-green-700">
            The heart of Mufakose 1 High School lies in our experienced and passionate staff, committed to nurturing bright futures.
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {staffMembers.map((staff) => (
            <div
              key={staff.id}
              className="overflow-hidden transition-all duration-500 ease-in-out transform bg-white border-2 shadow-xl group rounded-2xl border-emerald-200 hover:shadow-teal-400/50 hover:scale-105"
            >
              <div className="relative">
                <img
                  src={staff.imgSrc}
                  alt={`Photo of ${staff.name}`}
                  className="object-cover w-full transition-transform duration-500 h-80 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-3xl font-bold text-white drop-shadow-md">{staff.name}</h3>
                  <p className="text-lg text-emerald-200">{staff.subject}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-1 text-sm font-semibold text-green-600">{staff.qualification}</p>
                <p className="mb-3 text-sm text-green-500">Experience: {staff.experience}</p>
                <p className="mb-4 text-green-800 text-md">{staff.bio}</p>
                <a
                  href={`mailto:${staff.email}`}
                  className="inline-block px-5 py-2 text-sm font-medium text-white transition-colors duration-300 bg-green-600 rounded-lg hover:bg-emerald-700"
                >
                  Contact {staff.name.split(' ')[0]}
                </a>
              </div>
            </div>
          ))}
        </div>

        <section className="py-16 mt-20 text-center bg-teal-700 rounded-xl">
          <div className="container px-6 mx-auto">
            <h2 className="text-4xl font-bold text-white">Join Our Team</h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-teal-100">
              Are you a passionate educator looking to make a difference? We are always looking for talented individuals to join our faculty.
            </p>
            <button className="px-10 py-4 mt-8 text-lg font-semibold text-teal-700 transition-transform duration-300 transform bg-white rounded-full shadow-lg hover:bg-teal-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-opacity-75">
              View Career Opportunities
            </button>
          </div>
        </section>
      </div>

      <footer className="py-10 mt-12 text-sm text-center text-green-700 bg-green-100 border-t border-green-200 opacity-90">
        &copy; {new Date().getFullYear()} Mufakose 1 High School. Inspiring Minds, Shaping Futures.
      </footer>
    </div>
  );
}