import React from 'react';
import AboutHero from '../components/about/Hero'; // Reusing the Hero component

// Placeholder gallery items - replace with actual image paths or data
const galleryItems = [
  { id: 1, src: 'https://static.wixstatic.com/media/898036_26b9e2e4575b4bc6b2e046755559fdd0.jpg/v1/fill/w_639,h_423,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/898036_26b9e2e4575b4bc6b2e046755559fdd0.jpg', alt: 'Sporting Event', category: 'Sports' },
  { id: 2, src: 'https://static.wixstatic.com/media/898036_8396f666fc6a47a8a8c9904a00afadfd.jpg/v1/fill/w_635,h_423,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/898036_8396f666fc6a47a8a8c9904a00afadfd.jpg', alt: 'Science Fair', category: 'Academics' },
  { id: 3, src: 'https://static.wixstatic.com/media/898036_b4a37c7ec8bb496ca3cf984c75134982.jpg/v1/fill/w_635,h_423,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/898036_b4a37c7ec8bb496ca3cf984c75134982.jpg', alt: 'Cultural Day', category: 'Events' },
  { id: 4, src: 'https://static.wixstatic.com/media/898036_c7c1708410d7494eb8312941c7cbf729.jpg/v1/fill/w_690,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/898036_c7c1708410d7494eb8312941c7cbf729.jpg', alt: 'Graduation Ceremony', category: 'Events' },
  { id: 5, src: 'https://static.wixstatic.com/media/898036_9eefc024b6ab46a18105da28adc5043a.jpg/v1/fill/w_635,h_423,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/898036_9eefc024b6ab46a18105da28adc5043a.jpg', alt: 'Art Exhibition', category: 'Arts' },
  { id: 6, src: 'https://static.wixstatic.com/media/898036_d79e1898e2dc49b3a0ad68559ffa3d0b.jpg/v1/fill/w_695,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/898036_d79e1898e2dc49b3a0ad68559ffa3d0b.jpg', alt: 'School Campus', category: 'Campus' },
  { id: 7, src: 'https://static.wixstatic.com/media/898036_0ec5e538d480405eaac9d06e9d504c53.jpg/v1/fill/w_690,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/898036_0ec5e538d480405eaac9d06e9d504c53.jpg', alt: 'Classroom Activity', category: 'Academics' },
  { id: 8, src: 'https://static.wixstatic.com/media/898036_0fb728c1607649f9bb5e85202520c741.jpg/v1/fill/w_690,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/898036_0fb728c1607649f9bb5e85202520c741.jpg', alt: 'Library View', category: 'Campus' },
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