import React from "react";

const About = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute left-0 top-0 w-48 h-48 opacity-20 -z-10">
        <svg viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="100" fill="#22c55e" />
        </svg>
      </div>
      <div className="absolute right-0 bottom-0 w-72 h-72 opacity-10 -z-10">
        <svg viewBox="0 0 300 300" fill="none">
          <rect width="300" height="300" rx="150" fill="#16a34a" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <div className="inline-block">
            <span className="text-green-600 font-semibold tracking-wider uppercase text-xs mb-1 block">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-3">
              About Our School
            </h2>
            <div className="w-20 h-1 bg-green-600 md:mx-0 mx-auto rounded-full"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Gallery Section */}
          <div className="relative order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              {/* Main Image */}
              <div className="col-span-2 relative group">
                <div className="absolute -inset-3 bg-green-200 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <img
                  src="https://static.wixstatic.com/media/898036_7b02a4e1066545dc8951e9c58d8293cc.jpg/v1/fill/w_400,h_266,al_c,q_80,usm_0.66_1.00_0.01/898036_7b02a4e1066545dc8951e9c58d8293cc.jpg"
                  alt="Mufakose I High School Main Building"
                  className="relative rounded-xl shadow-xl w-full h-64 object-cover border-4 border-green-200 transform group-hover:scale-[1.02] transition duration-300"
                />
              </div>
              {/* Secondary Images */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-green-200 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=500&q=80"
                  alt="School Library"
                  className="relative rounded-xl shadow-lg w-full h-40 object-cover border-4 border-green-200 transform group-hover:scale-[1.02] transition duration-300"
                />
              </div>
              <div className="relative group">
                <div className="absolute -inset-2 bg-green-200 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=500&q=80"
                  alt="School Sports"
                  className="relative rounded-xl shadow-lg w-full h-40 object-cover border-4 border-green-200 transform group-hover:scale-[1.02] transition duration-300"
                />
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-100 rounded-full opacity-50 -z-10"></div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-green-200 rounded-full opacity-30 -z-10"></div>
          </div>

          {/* Content Section */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 rounded-full text-green-800 font-semibold text-sm">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                Established 1970
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-green-800 leading-tight">
                  Mufakose I High School
                </h3>
                <p className="text-base text-green-900 leading-relaxed">
                  A beacon of academic and socio-cultural excellence for generations. 
                  Located in the heart of Mufakose, Harare, our school is committed to nurturing well-rounded students who excel in both academics and extracurricular activities.
                </p>
                <p className="text-green-800 leading-relaxed">
                  Our dedicated staff, vibrant student community, and strong alumni network have helped us achieve outstanding results at both O and A levels. 
                  We believe in hard work, diversity, and the power of education to transform lives.
                </p>
              </div>
              
              {/* Stats Section */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <div className="text-2xl font-bold text-green-600 mb-1">50+</div>
                  <div className="text-sm text-green-800 font-medium">Years of Excellence</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
                  <div className="text-sm text-green-800 font-medium">Student Success</div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#admissions"
                  className="inline-flex items-center gap-2 bg-green-600 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transform hover:-translate-y-0.5 transition duration-300"
                >
                  Join Our Community
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
