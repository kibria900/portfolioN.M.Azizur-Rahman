import React, { useState, useEffect } from "react";

const photos = [
  'https://i.ibb.co/hRDW4g6X/IMG-20150803-132858.jpg',
  'https://i.ibb.co/JWJHDVnR/IMG-20150803-132929.jpg',
  'https://i.ibb.co/qKgG1Mp/IMG-20150803-132959.jpg',
  'https://i.ibb.co/1trxJwdW/IMG-20150803-133023.jpg',
  'https://i.ibb.co/GQsHHW8c/IMG-20150803-133032.jpg',
  'https://i.ibb.co/m5fDR2PK/IMG-20150803-133034.jpg',
  'https://i.ibb.co/DgvyPfZ4/IMG-20150803-133036.jpg',
  'https://i.ibb.co/rK8w6x0W/IMG-20150803-133039.jpg',
  'https://i.ibb.co/pBTkmjbQ/IMG-20150803-133040.jpg'
];

const PhotoGallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    if (!showAll) {
      const interval = setInterval(() => {
        setStartIndex(prevIndex => (prevIndex + 1) % photos.length);
      }, 1000); // ১ সেকেন্ডে ছবি পরিবর্তন হবে
      return () => clearInterval(interval);
    }
  }, [showAll]);

  const visiblePhotos = showAll
    ? photos
    : [
        photos[startIndex],
        photos[(startIndex + 1) % photos.length],
        photos[(startIndex + 2) % photos.length]
      ];

  return (
    <section id="gallery" className="bg-white py-16 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-10 border-b-4 border-blue-500 inline-block">
          📸 Photo Gallery
        </h2>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {visiblePhotos.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => setSelectedPhoto(src)}
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

      {/* Fullscreen modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl max-h-full p-4" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-gray-400"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={selectedPhoto}
              alt="Selected"
              className="max-w-full max-h-[80vh] object-contain rounded"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
