import { FaMapMarkedAlt, FaPhoneAlt, FaEnvelope, FaRegClock } from "react-icons/fa";

const info = [
  {
    icon: <FaMapMarkedAlt size={28} />,
    title: "School Address",
    detail: "22 Muriranyenze Street, Mufakose, Harare, Zimbabwe",
  },
  {
    icon: <FaPhoneAlt size={28} />,
    title: "Call Us",
    detail: "+263 77 123 4567",
  },
  {
    icon: <FaEnvelope size={28} />,
    title: "Email Us",
    detail: "info@mufakose1high.ac.zw",
  },
  {
    icon: <FaRegClock size={28} />,
    title: "Office Hours",
    detail: "Mon - Fri (07:30AM - 04:00PM)",
  },
];

export default function InfoCards() {
  return (
    <div className="w-full py-12 bg-[#f6fffc]">
      <div className="grid max-w-6xl grid-cols-1 gap-6 px-4 mx-auto sm:grid-cols-2 md:grid-cols-4">
        {info.map((item, idx) => (
          <div
            key={idx}
            className="group flex flex-col items-center text-center bg-white/90 backdrop-blur-md border border-[#23786a33] rounded-3xl px-6 py-8 transition duration-300 hover:shadow-2xl shadow-lg shadow-[#23786a44] hover:scale-[1.02] relative"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#23786a1a] text-[#23786a] mb-4 transition-transform duration-300 group-hover:scale-110">
              {item.icon}
            </div>
            <h3 className="text-lg font-bold text-[#23786a] mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.detail}</p>
            <span className="absolute left-1/2 -bottom-1.5 transform -translate-x-1/2 w-12 h-1 bg-[#23786a] rounded-full"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
