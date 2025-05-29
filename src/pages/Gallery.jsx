import React from 'react';
import AboutHero from '../components/about/Hero'; // Reusing the Hero component

// Placeholder gallery items - replace with actual image paths or data
const galleryItems = [
  { id: 1, src: 'https://via.placeholder.com/600x400.png/2E7D32/FFFFFF?text=Sporting+Event', alt: 'Sporting Event', category: 'Sports' },
  { id: 2, src: 'https://via.placeholder.com/600x400.png/388E3C/FFFFFF?text=Science+Fair', alt: 'Science Fair', category: 'Academics' },
  { id: 3, src: 'https://via.placeholder.com/600x400.png/4CAF50/FFFFFF?text=Cultural+Day', alt: 'Cultural Day', category: 'Events' },
  { id: 4, src: 'https://via.placeholder.com/600x400.png/2E7D32/FFFFFF?text=Graduation+Ceremony', alt: 'Graduation Ceremony', category: 'Events' },
  { id: 5, src: 'https://via.placeholder.com/600x400.png/388E3C/FFFFFF?text=Art+Exhibition', alt: 'Art Exhibition', category: 'Arts' },
  { id: 6, src: 'https://via.placeholder.com/600x400.png/4CAF50/FFFFFF?text=School+Campus', alt: 'School Campus', category: 'Campus' },
  { id: 7, src: 'https://via.placeholder.com/600x400.png/2E7D32/FFFFFF?text=Classroom+Activity', alt: 'Classroom Activity', category: 'Academics' },
  { id: 8, src: 'https://via.placeholder.com/600x400.png/388E3C/FFFFFF?text=Library+View', alt: 'Library View', category: 'Campus' },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen text-green-900 bg-gradient-to-br from-green-50 via-green-100 to-green-200">
      <AboutHero
        title="School Gallery"
        breadcrumb={["Home", "Gallery"]}
      />

      <div className="container px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 drop-shadow-lg">
            🖼️ Our Vibrant Moments
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-xl text-green-700">
            A glimpse into the life, events, and achievements at Mufakose 1 High School.
          </p>
        </header>

        {/* Image Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden transition-all duration-500 ease-in-out transform bg-white border-2 border-green-200 shadow-lg group rounded-xl hover:shadow-2xl hover:scale-105"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white transition-opacity duration-500 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                <h3 className="text-xl font-semibold">{item.alt}</h3>
                <p className="mt-1 text-sm">{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action or more info */}
        <div className="mt-16 text-center">
          <p className="mb-4 text-lg text-green-700">
            Want to see more? Follow our social media or visit us during open days!
          </p>
          <button
            className="px-8 py-3 font-semibold text-white transition-transform duration-300 transform bg-green-600 rounded-full shadow-md hover:bg-green-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}