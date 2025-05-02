import React from "react";

const blogPosts = [
  {
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80",
    date: "June 18, 2024",
    author: "Mr. Mugondora",
    comments: 3,
    title: "Mufakose I High School Achieves 92% Pass Rate in 2024 A-Level Examinations",
  },
  {
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    date: "June 15, 2024",
    author: "Mrs. Chikwava",
    comments: 5,
    title: "Science Club Students Win National Science Fair Competition",
  },
  {
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
    date: "June 12, 2024",
    author: "Mr. Moyo",
    comments: 4,
    title: "New Computer Lab Opens: Enhancing Digital Learning at Mufakose I",
  },
];

const BlogSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-2">
          <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2z" />
            <path d="M17 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2z" />
            <path d="M22 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2z" />
          </svg>
          <span className="uppercase tracking-widest text-green-500 font-semibold text-sm">School News</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
          Latest Updates & <span className="text-green-500">Achievements</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Stay informed about the latest news, achievements, and developments at Mufakose I High School. From academic excellence to extracurricular activities, discover what makes our school community thrive.
        </p>
      </div>
      {/* Blog Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {blogPosts.map((post, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg p-5 flex flex-col hover:shadow-xl transition-shadow duration-300">
            <div className="relative mb-4">
              <img
                src={post.image}
                alt={post.title}
                className="rounded-2xl w-full h-48 object-cover"
              />
              <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                <svg className="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {post.date}
              </span>
            </div>
            <div className="flex items-center text-gray-400 text-xs mb-2">
              <span className="mr-2 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M5.121 17.804A7 7 0 1112 19a7.001 7.001 0 01-6.879-1.196z" />
                  <path d="M12 12v.01" />
                </svg>
                By {post.author}
              </span>
              <span className="mx-2">|</span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h2" />
                  <path d="M12 15v2m0 0v2m0-2h2m-2 0H8" />
                </svg>
                {post.comments} Comments
              </span>
            </div>
            <h3 className="font-bold text-lg mb-4 hover:text-green-500 transition-colors duration-300">{post.title}</h3>
            <button className="mt-auto bg-green-500 text-white font-semibold px-5 py-2 rounded-full hover:bg-green-600 transition-colors duration-300 self-start">
              READ MORE &rarr;
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
