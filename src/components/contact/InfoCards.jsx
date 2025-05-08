import { FaMapMarkedAlt, FaPhoneAlt, FaEnvelope, FaRegClock } from "react-icons/fa";

const info = [
  {
    icon: <FaMapMarkedAlt size={36} />,
    title: "Office Address",
    detail: "25/B Milford, New York, USA",
  },
  {
    icon: <FaPhoneAlt size={36} />,
    title: "Call Us",
    detail: "+2 123 4565 789",
  },
  {
    icon: <FaEnvelope size={36} />,
    title: "Email Us",
    detail: "info@example.com",
  },
  {
    icon: <FaRegClock size={36} />,
    title: "Open Time",
    detail: "Mon - Sat (10.00AM - 05.30PM)",
  },
];

export default function InfoCards() {
  return (
    <div className="flex flex-wrap justify-center w-full gap-6 py-8 bg-white">
      {info.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center bg-white rounded-2xl shadow-sm px-6 py-6 w-full max-w-xs min-w-[220px] sm:w-[45%] md:w-[22%] transition hover:shadow-md relative"
        >
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#23786a1a] text-[#23786a] mb-2">
            {item.icon}
          </div>
          <div className="font-semibold text-[#23786a] text-lg mb-1">{item.title}</div>
          <div className="text-sm text-center text-gray-700">{item.detail}</div>
          <div className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-12 h-1 bg-[#23786a] rounded-t"></div>
        </div>
      ))}
    </div>
  );
}
