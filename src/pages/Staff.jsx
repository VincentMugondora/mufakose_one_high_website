import React from 'react';
import AboutHero from '../components/about/Hero'; // Reusing the Hero component

const staffMembers = [
  {
    id: 1,
    name: 'Mr. Tendai Moyo',
    subject: 'Mathematics & Physics',
    qualification: 'MSc Mathematics, BEd (UZ)',
    experience: '18+ Years',
    bio: 'A veteran educator at Mufakose 1 High, Mr. Moyo is known for making numbers and formulas come alive. He mentors the Science Club and encourages critical thinking in every lesson.',
    imgSrc: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=400&facepad=3&q=80',
    email: 't.moyo@mufakosehigh.ac.zw',
  },
  {
    id: 2,
    name: 'Ms. Rudo Chikafu',
    subject: 'English Language & Literature',
    qualification: 'MA English, PGDE (MSU)',
    experience: '14+ Years',
    bio: 'Ms. Chikafu inspires a love of reading and creative writing. She coaches the Debate Team and is passionate about helping students find their voice.',
    imgSrc: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=400&h=400&facepad=3&q=80',
    email: 'r.chikafu@mufakosehigh.ac.zw',
  },
  {
    id: 3,
    name: 'Dr. Blessing Nyathi',
    subject: 'Chemistry & Biology',
    qualification: 'PhD Chemistry (UZ), BSc Biology',
    experience: '11+ Years',
    bio: 'Dr. Nyathi brings science to life through hands-on experiments and field trips. She leads the Environmental Club and encourages curiosity about the natural world.',
    imgSrc: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=400&h=400&facepad=3&q=80',
    email: 'b.nyathi@mufakosehigh.ac.zw',
  },
  {
    id: 4,
    name: 'Mr. Simbarashe Dube',
    subject: 'History & Geography',
    qualification: 'BA History, Dip Ed (GZU)',
    experience: '20+ Years',
    bio: 'With a passion for storytelling, Mr. Dube makes history and geography relevant and exciting. He organizes educational tours and the annual Geography Bee.',
    imgSrc: 'https://images.unsplash.com/photo-1519340333755-c6e2a6a2c5fe?auto=format&fit=facearea&w=400&h=400&facepad=3&q=80',
    email: 's.dube@mufakosehigh.ac.zw',
  },
  {
    id: 5,
    name: 'Mrs. Tsitsi Mlambo',
    subject: 'Art & Design',
    qualification: 'BFA, MA Art Education (Chinhoyi)',
    experience: '10+ Years',
    bio: 'Mrs. Mlambo nurtures creativity and self-expression. Her students regularly win prizes at the Harare Schools Art Festival.',
    imgSrc: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=400&h=400&facepad=3&q=80',
    email: 't.mlambo@mufakosehigh.ac.zw',
  },
  {
    id: 6,
    name: 'Mr. Farai Chikomba',
    subject: 'Physical Education & Sports',
    qualification: 'BSc Sports Science (UZ)',
    experience: '16+ Years',
    bio: 'Mr. Chikomba promotes fitness, discipline, and teamwork. He coaches the school’s soccer and athletics teams, leading them to several district championships.',
    imgSrc: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&w=400&h=400&facepad=3&q=80',
    email: 'f.chikomba@mufakosehigh.ac.zw',
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
            The heart of Mufakose 1 High School lies in our experienced and passionate staff, committed to nurturing bright futures in Harare and beyond.
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
              Are you a passionate educator looking to make a difference in Zimbabwean education? We are always looking for talented individuals to join our faculty at Mufakose 1 High School.
            </p>
            <button className="px-10 py-4 mt-8 text-lg font-semibold text-teal-700 transition-transform duration-300 transform bg-white rounded-full shadow-lg hover:bg-teal-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-opacity-75">
              View Career Opportunities
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
