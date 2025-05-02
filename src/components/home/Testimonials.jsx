import React, { useState } from "react";

const testimonials = [
  {
    quote: "The dedicated teachers and supportive environment at Mufakose I High School helped me achieve my academic goals. The science department is exceptional!",
    rating: 5,
    studentPhoto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    studentName: "Tendai Moyo",
    studentTitle: "Form 6 Graduate",
  },
  {
    quote: "I'm grateful for the opportunities provided by the school's sports program. The balance between academics and extracurricular activities is perfect.",
    rating: 5,
    studentPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    studentName: "Takudzwa Chikwava",
    studentTitle: "Current Student",
  },
  {
    quote: "The computer lab and modern facilities have greatly enhanced our learning experience. The teachers are always willing to help after hours.",
    rating: 5,
    studentPhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    studentName: "Blessing Mutasa",
    studentTitle: "Form 4 Student",
  },
  {
    quote: "The school's focus on both academic excellence and character development has prepared me well for university. I'm proud to be a Mufakose I graduate!",
    rating: 5,
    studentPhoto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    studentName: "Ruvimbo Muzenda",
    studentTitle: "Alumni",
  },
  {
    quote: "The mathematics department's teaching methods are outstanding. They make complex concepts easy to understand and apply.",
    rating: 5,
    studentPhoto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
    studentName: "Tinashe Mupfumira",
    studentTitle: "Form 5 Student",
  },
  {
    quote: "The school's music program has helped me discover my passion. The teachers are incredibly supportive of our artistic development.",
    rating: 5,
    studentPhoto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    studentName: "Rumbidzai Chiwenga",
    studentTitle: "Music Club Member",
  },
  {
    quote: "The career guidance department helped me choose the right subjects for my future. Their support was invaluable in my university applications.",
    rating: 5,
    studentPhoto: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&q=80",
    studentName: "Farai Muchenje",
    studentTitle: "University Student",
  },
  {
    quote: "The school's commitment to technology integration has given us an edge in the digital world. The new computer lab is amazing!",
    rating: 5,
    studentPhoto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    studentName: "Nyasha Muzondo",
    studentTitle: "ICT Club President",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerPage >= testimonials.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - itemsPerPage < 0 ? Math.max(0, testimonials.length - itemsPerPage) : prevIndex - itemsPerPage
    );
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="relative py-16 bg-green-500 bg-opacity-10 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1950&q=80"
          alt="School library with students studying"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-700 to-green-500 opacity-80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-2">
            <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2z" />
              <path d="M17 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2z" />
              <path d="M22 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2z" />
            </svg>
            <span className="uppercase tracking-widest text-green-400 font-semibold text-sm">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
            What Our Students <span className="text-green-400">Say</span>
          </h2>
          <p className="text-green-100 max-w-2xl mx-auto">
            Hear from our students about their experiences at Mufakose I High School. From academic excellence to personal growth, discover why our students love being part of our community.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center mb-8 space-x-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors duration-300"
            aria-label="Previous testimonials"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors duration-300"
            aria-label="Next testimonials"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Testimonials Carousel */}
        <div className="grid gap-8 md:grid-cols-4">
          {visibleTestimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 flex flex-col hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-gray-600 mb-4 h-24 md:h-32 overflow-hidden italic leading-relaxed">
                {testimonial.quote}
              </div>
              {/* Star Rating */}
              <div className="flex mb-3">
                {Array(testimonial.rating).fill().map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.587 6.95 5.21 6.575 10 2.05 14.79 6.575l4.623.375-3.638 3.595 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              {/* Student Info */}
              <div className="mt-auto flex items-center border-t pt-4">
                <img
                  src={testimonial.studentPhoto}
                  alt={testimonial.studentName}
                  className="w-12 h-12 rounded-full mr-3 border-2 border-green-500 object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-700">{testimonial.studentName}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.studentTitle}</p>
                </div>
                <span className="ml-auto bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded h-fit">2024</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array(Math.ceil(testimonials.length / itemsPerPage)).fill().map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx * itemsPerPage)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentIndex === idx * itemsPerPage ? 'bg-green-500' : 'bg-green-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
