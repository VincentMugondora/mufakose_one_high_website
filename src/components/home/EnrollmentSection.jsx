import React, { useState } from "react";

const EnrollmentSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <section className="relative min-h-[500px] bg-green-900/90 py-0 px-0 flex items-center justify-center overflow-hidden">
      {/* Background image with green overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1500&q=80"
          alt="Students background"
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-700 to-green-500 opacity-90" />
      </div>
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0 py-12 px-2 md:px-8">
        {/* Left Side - Enrollment Form */}
        <div className="w-full md:w-[420px] bg-white rounded-tl-[40px] rounded-br-[40px] rounded-tr-3xl rounded-bl-3xl shadow-2xl overflow-hidden flex flex-col">
          <div className="bg-green-500 text-white p-6 rounded-tl-[40px] rounded-br-[40px]">
            <h3 className="text-2xl font-extrabold mb-1">Start Your Enrollment</h3>
            <p className="text-sm opacity-90">We are variations of passages the have suffered.</p>
          </div>
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 bg-green-50 border border-green-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full p-3 bg-green-50 border border-green-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>
            <div>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full p-3 bg-green-50 border border-green-200 rounded-md text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              >
                <option value="" disabled>Choose Course</option>
                <option value="mathematics">Mathematics</option>
                <option value="science">Science</option>
                <option value="languages">Languages</option>
                <option value="arts">Arts</option>
              </select>
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type Message"
                className="w-full p-3 bg-green-50 border border-green-200 rounded-md h-20 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full flex items-center shadow-md text-base transition-all duration-300"
            >
              ENROLL NOW
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </form>
        </div>
        {/* Right Side - Skills Section */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-white px-4 md:px-12 py-10 md:py-0 text-center md:text-left">
          <div className="flex items-center mb-4 justify-center md:justify-start">
            <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            <span className="uppercase tracking-widest text-green-400 font-semibold text-sm">WHY ENROLL AT MUFAKOSE I HIGH</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
            Unlock Your <span className="text-green-400">Potential</span> at <span className="text-green-400">Mufakose I High School</span>
          </h2>
          <p className="text-green-100 mb-6 text-base max-w-xl">
            At Mufakose I High School, we nurture academic excellence, creativity, and leadership. Our dedicated teachers, modern facilities, and vibrant student life empower you to achieve your dreams. Join a community where your talents are celebrated and your future is bright.
          </p>
          <div className="space-y-6 mb-8 w-full max-w-md">
            <div>
              <div className="flex justify-between mb-1 text-sm font-semibold">
                <span>Pass Rate</span>
                <span>92%</span>
              </div>
              <div className="w-full bg-green-100 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "92%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1 text-sm font-semibold">
                <span>Clubs & Activities</span>
                <span>20+</span>
              </div>
              <div className="w-full bg-green-100 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1 text-sm font-semibold">
                <span>University Admissions</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-green-100 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "75%" }}></div>
              </div>
            </div>
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full flex items-center shadow-lg text-base transition-all duration-300">
            LEARN MORE
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentSection;
