import React, { useEffect, useState } from "react";

const photos = [
  'https://i.ibb.co/B3cW3F6/01.jpg',
  'https://i.ibb.co/VMfvPgD/02.jpg',
  'https://i.ibb.co/kDcK9Cw/03.jpg',
  'https://i.ibb.co/pn2Fz5k/04.jpg',
  'https://i.ibb.co/hYzDKGW/05.jpg',
  'https://i.ibb.co/Tt0Y6hH/06.jpg',
  'https://i.ibb.co/zFSGHCV/07.jpg',
  'https://i.ibb.co/LpYMZtC/08.jpg',
  'https://i.ibb.co/3NMghcM/09.jpg',
  'https://i.ibb.co/S0PRjVj/10.jpg',
  'https://i.ibb.co/8dbjgy3/11.jpg',
  'https://i.ibb.co/3yJ63Wj/12.jpg'
];

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(3);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    let interval;
    if (showAll) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [showAll]);

  const visiblePhotos = showAll
    ? [
        photos[0],
        photos[1],
        photos[2],
        photos[currentIndex],
        photos[(currentIndex + 1) % photos.length],
        photos[(currentIndex + 2) % photos.length]
      ]
    : photos.slice(0, 3);

  return (
    <section id="gallery" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-10 border-b-4 border-blue-500 inline-block">
          📸 Photo Gallery
        </h2>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {visiblePhotos.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
