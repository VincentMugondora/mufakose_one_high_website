import React from 'react';
import AboutHero from '../components/about/Hero'; // Reusing the Hero component

const facilities = [
  {
    name: 'Modern Classrooms',
    description: 'Spacious and well-equipped classrooms conducive to learning.',
    icon: '🏫',
    imgSrc: 'https://i.pinimg.com/736x/c7/e0/08/c7e008c6cc06377d378edc1b986c91ee.jpg',
  },
  {
    name: 'Science Laboratories',
    description: 'State-of-the-art labs for Physics, Chemistry, and Biology practicals.',
    icon: '🔬',
    imgSrc: 'https://i.pinimg.com/736x/9c/f6/73/9cf67319816b55c582b86028e9b4506e.jpg',
  },
  {
    name: 'Computer Lab',
    description: 'Fully equipped computer lab with internet access for all students.',
    icon: '💻',
    imgSrc: 'https://static.wixstatic.com/media/898036_1c08e47df7b644298a5532c5fa899092.jpg/v1/fill/w_400,h_264,al_c,q_80,usm_0.66_1.00_0.01/898036_1c08e47df7b644298a5532c5fa899092.jpg',
  },
  {
    name: 'School Library',
    description: 'A vast collection of books, journals, and digital resources.',
    icon: '📚',
    imgSrc: 'https://i.pinimg.com/736x/f1/4d/e2/f14de29840d1ac51cdc4298b4414fb6b.jpg',
  },
  {
    name: 'Sports Grounds',
    description: 'Expansive grounds for various sports including soccer, netball, and athletics.',
    icon: '⚽',
    imgSrc: 'https://static.wixstatic.com/media/898036_1d64eab3d89d4a3283c5d0d8cc89404a.jpg/v1/fill/w_621,h_277,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/898036_1d64eab3d89d4a3283c5d0d8cc89404a.jpg',
  },
  {
    name: 'Art & Music Room',
    description: 'Dedicated spaces to nurture creativity in arts and music.',
    icon: '🎨🎵',
    imgSrc: 'https://i.pinimg.com/736x/18/70/1b/18701bc598bb31fe951706abdf91ffc8.jpg',
  },
];

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen text-green-900 bg-gradient-to-br from-green-50 via-lime-100 to-emerald-200">
      <AboutHero
        title="Our Facilities"
        breadcrumb={["Home", "Facilities"]}
      />

      <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-700 drop-shadow-lg">
            World-Class School Facilities
          </h1>
          <p className="max-w-3xl mx-auto mt-5 text-xl text-green-700">
            At Mufakose 1 High, we provide an environment equipped with top-notch facilities to support holistic student development and academic excellence.
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden transition-all duration-300 ease-in-out transform bg-white border-2 border-green-200 shadow-xl group rounded-2xl hover:shadow-emerald-400/50 hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={facility.imgSrc}
                  alt={facility.name}
                  className="object-cover w-full h-56 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-2xl font-bold text-white drop-shadow-md">
                    {facility.icon} {facility.name}
                  </h3>
                </div>
              </div>
              <div className="flex-grow p-6">
                <p className="text-green-800">{facility.description}</p>
              </div>
              <div className="p-6 pt-0">
                <button className="w-full px-6 py-3 font-semibold text-white transition-all duration-300 rounded-lg shadow-md bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-75">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <section className="py-16 mt-20 text-center bg-green-700 rounded-xl">
          <div className="container px-6 mx-auto">
            <h2 className="text-4xl font-bold text-white">Visit Our Campus</h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-green-100">
              Experience our facilities firsthand. Schedule a tour to see how Mufakose 1 High School can be the perfect place for your child's education.
            </p>
            <button className="px-10 py-4 mt-8 text-lg font-semibold text-green-700 transition-transform duration-300 transform bg-white rounded-full shadow-lg hover:bg-green-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-opacity-75">
              Schedule a Tour
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
