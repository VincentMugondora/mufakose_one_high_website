export default function MapSection() {
  return (
    <section className="px-4 py-10 bg-white md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#23786a] mb-6">
          Visit Mufakose 1 High School
        </h2>
        <p className="mb-10 text-center text-gray-600">
          Located at 22 Muriranyenze Street, Mufakose, Harare. Come see what makes our school exceptional!
        </p>
        <div className="overflow-hidden shadow-xl rounded-xl">
          <iframe
            title="Mufakose 1 High School Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.746732646879!2d30.934367975112122!3d-17.861685083958142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a30e6c22234b%3A0x3d1ae861f504b93c!2sMufakose%201%20High%20School!5e0!3m2!1sen!2szw!4v1715179320091!5m2!1sen!2szw"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
