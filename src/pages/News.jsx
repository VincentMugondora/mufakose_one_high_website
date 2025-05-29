import React from "react";
import AboutHero from '../components/about/Hero';

const newsItems = [
  {
    title: "🏆 Mufakose 1 High Wins Science Fair",
    date: "2025-05-15",
    description:
      "Our brilliant learners brought home the trophy from the National Science Fair. Congratulations to our champions!",
    image:
      "https://static.wixstatic.com/media/898036_723a17abc7b848e999aac5f9f9a14ca9.jpg/v1/fill/w_695,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/898036_723a17abc7b848e999aac5f9f9a14ca9.jpg",
  },
  {
    title: "🏃‍♂️ Sports Gala Success",
    date: "2025-05-10",
    description:
      "A big thank you to all participants and supporters. Our sports teams shone across multiple disciplines!",
    image:
      "https://static.wixstatic.com/media/898036_9eefc024b6ab46a18105da28adc5043a.jpg/v1/fill/w_635,h_423,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/898036_9eefc024b6ab46a18105da28adc5043a.jpg",
  },
  {
    title: "📚 New Library Section Opened",
    date: "2025-04-28",
    description:
      "The school has officially opened a new library section to accommodate more study resources for students.",
    image:
      "https://static.wixstatic.com/media/898036_26b9e2e4575b4bc6b2e046755559fdd0.jpg/v1/fill/w_639,h_423,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/898036_26b9e2e4575b4bc6b2e046755559fdd0.jpg",
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300">
      {/* Hero Section */}
      <AboutHero
        title="Our School Events"
        breadcrumb={["Home", "School Events"]}
      />

      {/* Page Heading */}
      <header className="px-4 mb-12 text-center">
        <h1 className="text-5xl font-extrabold text-green-900 drop-shadow-md">
          📰 Mufakose 1 High News
        </h1>
        <p className="max-w-xl mx-auto mt-3 text-lg text-green-700">
          Explore our latest achievements, student activities, and exciting school events.
        </p>
      </header>

      {/* News Cards */}
      <div className="grid gap-10 px-6 pb-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden transition duration-500 transform bg-white border border-green-200 shadow-lg hover:-translate-y-1 hover:shadow-2xl rounded-2xl"
          >
            <img
              src={item.image}
              alt={item.title}
              className="object-cover w-full h-48"
            />
            <div className="flex flex-col justify-between h-full p-6">
              <div>
                <h2 className="text-2xl font-semibold text-green-800 transition group-hover:text-green-900">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm text-green-600">📅 {item.date}</p>
                <p className="mt-4 text-green-900">{item.description}</p>
              </div>
              <div className="mt-6">
                <button className="w-full px-4 py-2 font-medium text-white transition duration-300 bg-green-600 rounded-lg hover:bg-green-700">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
