import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const teachers = [
  {
    name: "Mrs. Sarah Johnson",
    subject: "Mathematics",
    bio: "Passionate about making math fun and engaging.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Mr. Daniel Lee",
    subject: "Science",
    bio: "Exploring the wonders of the universe with students.",
    img: "https://randomuser.me/api/portraits/men/42.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Miss Emily Green",
    subject: "English",
    bio: "Helping students find their voice through writing.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
];

export default function MeetOurTeachers() {
  return (
    <section className="py-12 bg-white">
      <div className="px-4 mb-10 text-center">
        <h2 className="mb-3 text-3xl font-bold md:text-4xl">
          Meet Our <span className="text-green-500">Teachers</span>
        </h2>
        <p className="max-w-xl mx-auto text-gray-500">
          Our dedicated educators bring passion and experience into the classroom.
        </p>
      </div>

      <div className="grid gap-8 px-6 mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className="p-6 overflow-hidden text-center transition-transform shadow-md bg-gray-50 rounded-xl hover:scale-105"
          >
            <img
              src={teacher.img}
              alt={teacher.name}
              className="object-cover mx-auto mb-4 border-4 border-green-400 rounded-full w-28 h-28"
            />
            <h3 className="text-xl font-semibold">{teacher.name}</h3>
            <p className="font-medium text-green-500">{teacher.subject}</p>
            <p className="mt-2 text-sm text-gray-600">{teacher.bio}</p>
            <div className="flex justify-center gap-4 mt-4 text-green-500">
              <a href={teacher.socials.facebook}><FaFacebookF /></a>
              <a href={teacher.socials.twitter}><FaTwitter /></a>
              <a href={teacher.socials.linkedin}><FaLinkedinIn /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
