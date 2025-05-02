import React from "react";

const Gallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1543337346-5f7dbd4cb934?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhpa2glMjBzY2hvb2wlMjBl4mJpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      alt: "High school building",
      caption: "The main entrance of our school",
    },
    {
      src: "https://images.unsplash.com/photo-1553356084-58ef4c982a36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhpa2glMjBzY2hvb2wlMjBj4bGFzc3Jvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      alt: "High school classroom",
      caption: "Students in a classroom setting",
    },
    {
      src: "https://images.unsplash.com/photo-1584634203423-43537a8fa9b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGhpa2glMjBzY2hvb2wlMjBzdHVkZW50c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "High school students",
      caption: "High school students",
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
