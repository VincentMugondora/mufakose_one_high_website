import React from "react";

const LatestVideo = () => {
  const videoUrl = "https://youtu.be/jkXhAb9ye0k";

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12 animate-fade-in-up">
      {/* Text Content */}
      <div className="flex-1 max-w-xl animate-fade-in-up text-center md:text-left">
        <p className="flex items-center justify-center md:justify-start text-green-600 font-semibold uppercase tracking-widest mb-2">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14v-4zM4 6h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" />
          </svg>
          Latest Video
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-4">
          Let's Check Our{" "}
          <span className="text-green-600">Latest</span> Video
        </h2>
        <p className="text-green-700 mb-8 leading-relaxed">
          There are many variations of passages available but the majority have suffered alteration in some form by injected humour look even slightly believable.
        </p>
        <a
          href="#"
          className="inline-block bg-gradient-to-r from-green-600 to-green-400 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 hover:shadow-green-300 transition-all duration-300 border-2 border-white"
        >
          Learn More &rarr;
        </a>
      </div>

      {/* Video Thumbnail with Play Button */}
      <div
        className="flex-1 relative max-w-xl w-full cursor-pointer group animate-fade-in-up"
        onClick={() => window.open(videoUrl, "_blank")}
      >
        {/* Glassmorphism/gradient card */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/60 via-green-100/60 to-green-200/60 backdrop-blur-xl z-10 pointer-events-none"></div>
        {/* Video Image */}
        <img
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80"
          alt="Students watching video"
          className="rounded-3xl object-cover w-full h-[300px] md:h-[350px] shadow-2xl border-4 border-white group-hover:scale-105 group-hover:shadow-green-200 group-hover:border-green-400 transition-all duration-500"
        />
        {/* Overlay for depth */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-green-900/30 via-transparent to-transparent z-20 pointer-events-none"></div>
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="bg-gradient-to-br from-green-600 to-green-400 bg-opacity-90 rounded-full p-7 shadow-2xl border-4 border-white animate-glow group-hover:scale-110 group-hover:shadow-green-400 transition-all duration-300">
            <svg
              className="w-12 h-12 text-white drop-shadow-lg"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestVideo;
