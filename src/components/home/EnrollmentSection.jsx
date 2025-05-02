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
    <section className="relative min-h-[400px] bg-gradient-to-br from-green-900 via-green-700 to-green-500 py-6 px-2 md:px-4 lg:px-8">
      <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-8">
        {/* Left Side - Enrollment Form */}
        <div className="w-full md:w-5/12 bg-white rounded-2xl shadow-xl border border-green-100 overflow-hidden text-center md:text-left">
          <div className="bg-green-500 text-white p-4 rounded-t-2xl">
            <h3 className="text-lg font-extrabold mb-1">Start Your Enrollment</h3>
            <p className="text-xs opacity-90">We are variations of passages the have suffered.</p>
          </div>
          <form onSubmit={handleSubmit} className="p-4 space-y-3">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-2 bg-green-50 border border-green-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
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
                className="w-full p-2 bg-green-50 border border-green-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>
            <div>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full p-2 bg-green-50 border border-green-200 rounded-md text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-green-400"
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
                className="w-full p-2 bg-green-50 border border-green-200 rounded-md h-20 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full flex items-center shadow-md text-sm transition-all duration-300"
            >
              ENROLL NOW
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </form>
        </div>
        {/* Divider on large screens */}
        <div className="hidden md:block h-[260px] w-px bg-green-200 rounded-full"></div>
        {/* Right Side - Skills Section */}
        <div className="w-full md:w-7/12 text-white text-center md:text-left min-h-[420px] md:min-h-[480px] flex flex-col justify-center">
          <div className="flex items-center mb-2 justify-center md:justify-start">
            <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            <span className="uppercase tracking-widest text-green-400 font-semibold text-xs">WHY ENROLL AT MUFAKOSE I HIGH</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Unlock Your Potential at Mufakose I High School</h2>
          <p className="text-green-100 mb-4 text-sm">
            At Mufakose I High School, we nurture academic excellence, creativity, and leadership. Our dedicated teachers, modern facilities, and vibrant student life empower you to achieve your dreams. Join a community where your talents are celebrated and your future is bright.
          </p>
          <div className="space-y-4 mb-4">
            <div>
              <div className="flex justify-between mb-1 text-xs">
                <span>Pass Rate</span>
                <span>92%</span>
              </div>
              <div className="w-full bg-green-100 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "92%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1 text-xs">
                <span>Clubs & Activities</span>
                <span>20+</span>
              </div>
              <div className="w-full bg-green-100 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1 text-xs">
                <span>University Admissions</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-green-100 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "75%" }}></div>
              </div>
            </div>
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full flex items-center shadow-md text-sm transition-all duration-300">
            LEARN MORE
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentSection;
