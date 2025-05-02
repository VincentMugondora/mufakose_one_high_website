import React from "react";

const About = () => {
  return (
    <section className="relative py-32 bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute left-0 top-0 w-64 h-64 opacity-20 -z-10">
        <svg viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="100" fill="#22c55e" />
        </svg>
      </div>
      <div className="absolute right-0 bottom-0 w-96 h-96 opacity-10 -z-10">
        <svg viewBox="0 0 300 300" fill="none">
          <rect width="300" height="300" rx="150" fill="#16a34a" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
            About Our School
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative order-2 md:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-green-200 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <img
                src="https://static.wixstatic.com/media/898036_7b02a4e1066545dc8951e9c58d8293cc.jpg/v1/fill/w_400,h_266,al_c,q_80,usm_0.66_1.00_0.01/898036_7b02a4e1066545dc8951e9c58d8293cc.jpg"
                alt="Mufakose I High School"
                className="relative rounded-xl shadow-2xl w-full max-w-md border-4 border-green-200 transform group-hover:scale-[1.02] transition duration-300"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-100 rounded-full opacity-50 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-green-200 rounded-full opacity-30 -z-10"></div>
          </div>

          {/* Content Section */}
          <div className="order-1 md:order-2">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-green-100 rounded-full text-green-800 font-semibold mb-4">
                Established 1970
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-green-800 leading-tight">
                Mufakose I High School
              </h3>
              <p className="text-lg text-green-900 leading-relaxed">
                A beacon of academic and socio-cultural excellence for generations. 
                Located in the heart of Mufakose, Harare, our school is committed to nurturing well-rounded students who excel in both academics and extracurricular activities.
              </p>
              <p className="text-green-800 leading-relaxed">
                Our dedicated staff, vibrant student community, and strong alumni network have helped us achieve outstanding results at both O and A levels. 
                We believe in hard work, diversity, and the power of education to transform lives.
              </p>
              
              {/* Stats Section */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-2xl font-bold text-green-600">50+</div>
                  <div className="text-sm text-green-800">Years of Excellence</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-green-800">Student Success</div>
                </div>
              </div>

              <a
                href="#admissions"
                className="inline-block bg-green-600 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-green-700 hover:shadow-xl transform hover:-translate-y-0.5 transition duration-300 mt-8"
              >
                Join Our Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
