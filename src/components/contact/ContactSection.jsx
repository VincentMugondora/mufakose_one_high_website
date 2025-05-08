import { FaPaperPlane } from "react-icons/fa";

export default function ContactSection() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f9f9f9] py-8">
      <div className="flex flex-col w-full max-w-4xl overflow-hidden bg-white shadow-lg rounded-2xl md:flex-row">
        {/* Left: Image with green accent */}
        <div className="relative flex items-center justify-center flex-shrink-0 w-full bg-white md:w-1/2">
          {/* Green accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-4 bg-[#23786a] rounded-l-2xl z-10 hidden md:block"></div>
          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80"
            alt="Students"
            className="object-cover object-center w-full h-64 md:h-full md:rounded-none rounded-t-2xl md:pl-4"
            style={{
              clipPath:
                "polygon(8% 0, 100% 0, 100% 100%, 0 100%)",
            }}
          />
        </div>
        {/* Right: Form */}
        <div className="flex flex-col justify-center flex-1 p-6 md:p-10">
          <h2 className="mb-2 text-2xl font-bold text-gray-800">Get In Touch</h2>
          <p className="mb-6 text-sm text-gray-500">
            It is a long established fact that a reader will be distracted by the readable content of a page randomised words which don’t look even slightly when looking at its layout.
          </p>
          <form className="space-y-4">
            <div className="flex flex-col gap-4 md:flex-row">
              <input
                type="text"
                placeholder="Your Name"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#23786a] transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#23786a] transition"
              />
            </div>
            <input
              type="text"
              placeholder="Your Subject"
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#23786a] transition"
            />
            <textarea
              placeholder="Write Your Message"
              rows={4}
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#23786a] transition resize-none"
            />
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 mt-2 font-semibold text-white transition bg-yellow-400 rounded-md shadow hover:bg-yellow-500"
            >
              SEND MESSAGE <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
