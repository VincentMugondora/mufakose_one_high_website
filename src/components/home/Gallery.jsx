import React from "react";

const Gallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=500&q=80",
      alt: "School library",
      caption: "Our modern school library",
    },
    {
      src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=500&q=80",
      alt: "Science lab",
      caption: "Students in the science laboratory",
    },
    {
      src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=500&q=80",
      alt: "School sports field",
      caption: "Sports and recreation field",
    },
    {
      src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=500&q=80",
      alt: "Classroom activity",
      caption: "Interactive classroom activities",
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80",
      alt: "School building",
      caption: "Our beautiful school building",
    },
    {
      src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=500&q=80",
      alt: "Art class",
      caption: "Creative art class in session",
    },
    {
      src: "https://images.unsplash.com/photo-1584634203423-43537a8fa9b6?auto=format&fit=crop&w=500&q=80",
      alt: "Students group",
      caption: "High school students group photo",
    },
    {
      src: "https://images.unsplash.com/photo-1553356084-58ef4c982a36?auto=format&fit=crop&w=500&q=80",
      alt: "Classroom learning",
      caption: "Engaged students in classroom learning",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
          Our Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover"
              />
              {image.caption && (
                <div className="p-4">
                  <p className="text-gray-700">{image.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
