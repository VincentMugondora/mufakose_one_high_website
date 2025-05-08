import { FaPaperPlane } from "react-icons/fa";

export default function ContactSection() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f3fdfa] py-12 px-4">
      <div className="flex flex-col w-full max-w-5xl overflow-hidden bg-white shadow-2xl rounded-2xl md:flex-row">
        {/* Left: Image with green accent */}
        <div className="relative flex items-center justify-center w-full bg-white md:w-1/2">
          {/* Green accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-4 bg-[#23786a] rounded-l-2xl z-10 hidden md:block"></div>
          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80"
            alt="Mufakose 1 High School"
            className="object-cover object-center w-full h-64 md:h-full md:rounded-none rounded-t-2xl md:pl-4"
            style={{
              clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0 100%)",
            }}
          />
        </div>

        {/* Right: Contact Form */}
        <div className="flex flex-col justify-center flex-1 p-8 md:p-10">
          <h2 className="text-3xl font-bold mb-2 text-[#23786a]">Contact Mufakose 1 High</h2>
          <p className="mb-6 text-sm text-gray-600">
            We'd love to hear from you! Whether you're a parent, student, or alumnus, feel free to reach out for inquiries, suggestions, or general communication.
          </p>
          <form className="space-y-4">
            <div className="flex flex-col gap-4 md:flex-row">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#23786a] transition"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#23786a] transition"
              />
            </div>
            <input
              type="text"
              placeholder="Subject (e.g. Admission, Visit, Feedback)"
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#23786a] transition"
            />
            <textarea
              placeholder="Write your message here..."
              rows={5}
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#23786a] transition resize-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-[#23786a] hover:bg-[#1e5e55] text-white font-semibold px-6 py-3 rounded-md shadow-md transition mt-2"
            >
              SEND MESSAGE <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
