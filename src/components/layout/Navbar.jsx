import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaSkype } from 'react-icons/fa';

const academicsMegaMenu = [
  {
    heading: "Curriculum",
    links: [
      { name: "O-Level Subjects", path: "/academics/o-level-subjects" },
      { name: "A-Level Subjects", path: "/academics/a-level-subjects" },
      { name: "Extracurricular Activities", path: "/academics/extracurricular" },
    ],
  },
  {
    heading: "Departments",
    links: [
      { name: "Science", path: "/academics/departments/science" },
      { name: "Mathematics", path: "/academics/departments/mathematics" },
      { name: "Languages", path: "/academics/departments/languages" },
      { name: "Humanities", path: "/academics/departments/humanities" },
    ],
  },
  {
    heading: "Student Support",
    links: [
      { name: "Learning Support", path: "/academics/support/learning" },
      { name: "Career Guidance", path: "/academics/support/career-guidance" },
      { name: "Counseling", path: "/academics/support/counseling" },
    ],
  },
  {
    heading: "Exams & Results",
    links: [
      { name: "Timetables", path: "/academics/exams/timetables" },
      { name: "Results", path: "/academics/exams/results" },
      { name: "ZIMSEC Info", path: "/academics/exams/zimsec" },
    ],
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full p-0 m-0 bg-green-700 shadow-md shadow-mdz-50">
      <div className="flex items-center justify-between px-6 py-3 mx-auto max-w-7xl">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="School Logo" className="w-10 h-10 rounded" />
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-white">MUFAKOSE 1</span>
            <span className="text-xs tracking-wide text-green-200 uppercase">High School</span>
          </div>
        </Link>

        <div className="flex flex-col gap-1 cursor-pointer lg:hidden" onClick={toggleMenu}>
          <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </div>

        <ul className="items-center hidden gap-6 lg:flex">
          <li><Link to="/" className="font-medium text-white hover:text-green-200">Home</Link></li>
          <li><Link to="/about" className="font-medium text-white hover:text-green-200">About</Link></li>
          <li className="relative group">
            <span className="flex items-center font-medium text-white cursor-pointer hover:text-green-200">
              Academics
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.25 7.5l4.5 4.5 4.5-4.5" />
              </svg>
            </span>
            <div
              className="absolute left-1/2 top-full z-20 hidden group-hover:flex group-focus-within:flex
                        w-[900px] max-w-[95vw] border-t-4 border-green-300
                        shadow-xl py-8 px-8 gap-10 text-left bg-green-800"
              style={{ transform: "translateX(-50%)", minHeight: "220px" }}
            >
              <div className="flex-1 min-w-[200px]">
                <div className="font-bold text-green-300">About Us</div>
                <div className="flex items-center">
                  <img src="/logo.png" alt="Logo" className="w-10 h-10 mr-2" />
                  <span className="text-2xl font-bold text-white">
                    Mufakose<span className="text-green-300">1</span>
                  </span>
                </div>
                <p className="text-sm text-white">
                  Mufakose 1 High School is a renowned institution in Harare, Zimbabwe, known for academic excellence, discipline, and a vibrant school culture since its founding in 1982.
                </p>
              </div>
              {academicsMegaMenu.map((col, idx) => (
                <div key={idx} className="flex-1 min-w-[180px]">
                  <div className="font-bold text-green-300">{col.heading}</div>
                  <ul>
                    {col.links.map((link, i) => (
                      <li key={i}>
                        <Link
                          to={link.path}
                          className="block py-1 text-white hover:text-green-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </li>
          <li><Link to="/news" className="font-medium text-white hover:text-green-200">News</Link></li>
          <li><Link to="/events" className="font-medium text-white hover:text-green-200">Events</Link></li>
          <li className="relative group">
            <span className="font-medium text-white cursor-pointer hover:text-green-200">Pages</span>
            <ul className="absolute left-0 top-full z-10 hidden group-hover:block bg-green-800 border-t-2 border-green-300 shadow-lg py-2 min-w-[180px]">
              <li><Link to="/gallery" className="block px-4 py-2 text-white hover:text-green-200">Gallery</Link></li>
              <li><Link to="/facilities" className="block px-4 py-2 text-white hover:text-green-200">Facilities</Link></li>
              <li><Link to="/staff" className="block px-4 py-2 text-white hover:text-green-200">Our Staff</Link></li>
              <li><Link to="/calendar" className="block px-4 py-2 text-white hover:text-green-200">School Calendar</Link></li>
              <li><Link to="/policies" className="block px-4 py-2 text-white hover:text-green-200">School Policies</Link></li>
            </ul>
          </li>
          <li><Link to="/contact" className="font-medium text-white hover:text-green-200">Contact</Link></li>
        </ul>

        <div className="items-center hidden gap-3 lg:flex">
          <a href="#" className="text-lg text-white hover:text-green-300"><FaFacebookF /></a>
          <a href="#" className="text-lg text-white hover:text-green-300"><FaTwitter /></a>
          <a href="#" className="text-lg text-white hover:text-green-300"><FaYoutube /></a>
          <a href="#" className="text-lg text-white hover:text-green-300"><FaSkype /></a>
        </div>
      </div>

      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-green-700`}>
        <ul className="flex flex-col gap-2 px-6 py-4">
          {["Home", "About", "Academics", "News", "Events", "Gallery", "Facilities", "Staff", "Calendar", "Policies", "Contact"].map((item, index) => (
            <li key={index}>
              <Link to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`} className="block py-2 text-white" onClick={toggleMenu}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-3 px-6 pb-4">
          <a href="#" className="text-lg text-white"><FaFacebookF /></a>
          <a href="#" className="text-lg text-white"><FaTwitter /></a>
          <a href="#" className="text-lg text-white"><FaYoutube /></a>
          <a href="#" className="text-lg text-white"><FaSkype /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
