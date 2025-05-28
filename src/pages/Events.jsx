import React from "react";
import AboutHero from '../components/about/Hero'


const events = [
  {
    title: "Sports Day 2025",
    date: "June 15, 2025",
    location: "School Grounds",
    description: "A day packed with football, netball, relays and cheerleading! Families are welcome.",
    image: "https://img.freepik.com/free-photo/view-children-practicing-health-wellness-activity_23-2151401966.jpg?uid=R141677484&ga=GA1.1.1974680323.1747900426&semt=ais_hybrid&w=740",
  },
  {
    title: "Prize Giving Ceremony",
    date: "July 5, 2025",
    location: "School Hall",
    description: "Honoring the best-performing students in academics, sports and leadership.",
    image: "https://img.freepik.com/free-photo/portrait-young-boy-school-student_23-2151031889.jpg?uid=R141677484&ga=GA1.1.1974680323.1747900426&semt=ais_hybrid&w=740",
  },
  {
    title: "Career Guidance Fair",
    date: "August 12, 2025",
    location: "Main Auditorium",
    description: "Meet experts in technology, health, engineering, and entrepreneurship.",
    image: "https://img.freepik.com/free-photo/outdoor-food-distribution-event-organized-by-non-profit-drawing-people-all-races-who-want-help-homeless-less-fortunate-warm-meals-are-provided-by-volunteers-poor-needy_482257-70841.jpg?uid=R141677484&ga=GA1.1.1974680323.1747900426&semt=ais_hybrid&w=740",
  },
];

const EventsPage = () => {
  return (
    <div className="bg-green-50">
      {/* Hero Section */}
   <div>
      <AboutHero
  title="Our School Events"
  breadcrumb={["Home", "School Events"]}
/>

      {/* Event Cards */}
      <div className="grid max-w-6xl gap-8 px-4 py-16 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] hover:shadow-2xl transition-all duration-300"
          >
            <img src={event.image} alt={event.title} className="object-cover w-full h-48" />
            <div className="p-6">
              <h2 className="mb-1 text-2xl font-bold text-green-700">{event.title}</h2>
              <p className="mb-2 text-sm text-gray-500">{event.date} · {event.location}</p>
              <p className="text-gray-700">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default EventsPage;
