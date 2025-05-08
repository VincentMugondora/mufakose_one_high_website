import React from "react";

const teachers = [
  {
    name: "Mrs. Chikowore",
    subject: "Mathematics",
    img: "https://randomuser.me/api/portraits/women/51.jpg",
  },
  {
    name: "Mr. Moyo",
    subject: "English Language",
    img: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Mrs. Mutsvene",
    subject: "Science",
    img: "https://randomuser.me/api/portraits/women/53.jpg",
  },
  {
    name: "Mr. Dube",
    subject: "History",
    img: "https://randomuser.me/api/portraits/men/54.jpg",
  },
];

export default function MeetOurTeachers() {
  return (
    <section className="py-12 text-center bg-white">
      <div className="max-w-6xl px-4 mx-auto">
        <h2 className="mb-6 text-3xl font-bold text-green-600 md:text-4xl">
          Meet Our <span className="text-gray-800">Teachers</span>
        </h2>
        <p className="max-w-2xl mx-auto mb-10 text-gray-500">
          Dedicated, qualified and passionate about educating the future of Zimbabwe.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="p-6 transition-all duration-300 shadow bg-gray-50 rounded-xl hover:shadow-md"
            >
              <img
                src={teacher.img}
                alt={teacher.name}
                className="object-cover w-24 h-24 mx-auto mb-4 border-4 border-green-100 rounded-full"
              />
              <h3 className="text-xl font-semibold text-green-700">{teacher.name}</h3>
              <p className="text-sm text-gray-600">{teacher.subject}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
