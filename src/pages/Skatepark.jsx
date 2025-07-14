import "./Skatepark.css";
import React, { useState } from "react";
import LazyImage from "../components/LazyImage";

const photos = [
  "/img/skatepark11.jpg",
  "/img/skatepark14.jpg",
  "/img/skatepark34.jpg",
  "/img/skatepark9.jpg",
  "/img/skatepark16.jpg",
  "/img/people.jpg",
  "/img/skatepark19.jpg",
  "/img/skatepark2.jpg",
  "/img/skatepark4.jpg",
  "/img/skatepark5.jpg",
  "/img/skatepark3.jpg",
  "/img/skatepark7.jpg",
  "/img/skatepark10.jpg",
  "/img/skatepark23.jpg",
  "/img/skatepark20.jpg",
  "/img/skatepark15.jpg",
  "/img/skatepark18.jpg",
  "/img/skatepark.jpg",
  "/img/skatepark88.jpg",
  "/img/skatepark89.jpg", 
  "/img/skatepark12.jpg",
  "/img/tag9.jpg",
  "/img/skatepark13.jpg",
  "/img/tag18.jpg",
  "/img/tag10.jpg",
  "/img/tag17.jpg",
  "/img/tag11.jpg",
  "/img/tag31.jpg",
  "/img/tag24.jpg",
  "/img/tag13.jpg",
  "/img/skatepark29.jpg",
  "/img/skatepark8.jpg",
  "/img/skatepark30.jpg",
  "/img/skatepark31.jpg",
  "/img/skatepark32.jpg",
  "/img/skatepark33.jpg",
  "/img/skatepark35.jpg",
  "/img/skateboard.jpg",
];

const SkateparkGallery = () => {
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setIsEnlarged(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  return (
    <div className="skatepark-gallery">
      <div className="skatepark-paired">
      <LazyImage
 loading="lazy" src={photos[0]} alt="Skatepark 1" onClick={() => handleImageClick(0)} />
      <LazyImage
 loading="lazy"src={photos[1]} alt="Skatepark 2" onClick={() => handleImageClick(1)} />
      </div>

      <div className="skatepark-paired">
        <div className="skatepark-description">
          <p>
            Perched on a hilltop overlooking the Atlantic, the Taghazout Skatepark is a vibrant collision of movement, color, and community...
          </p>
        </div>
        <LazyImage
 loading="lazy"
 src={photos[2]} alt="Skatepark 3" onClick={() => handleImageClick(2)} />
      </div>

      <div className="skatepark-paired">
      <LazyImage
 loading="lazy" src={photos[3]} alt="Skatepark 4" onClick={() => handleImageClick(3)} />
      <LazyImage
 loading="lazy" src={photos[4]} alt="Skatepark 5" onClick={() => handleImageClick(4)} />
      </div>

      <div className="skatepark-grid">
        {photos.slice(5).map((src, index) => (
          <LazyImage
 loading="lazy"
            key={index + 5}
            src={src}
            alt={`Skatepark ${index + 6}`}
            onClick={() => handleImageClick(index + 5)}
            className="grid-img"
          />
        ))}
      </div>

      {isEnlarged && (
        <div className="fullscreen-overlay" onClick={() => setIsEnlarged(false)}>
<LazyImage
 loading="lazy"
            src={photos[currentIndex]}
            alt="Full view"
            className="fullscreen-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="close-button" onClick={() => setIsEnlarged(false)}>×</button>
          <button className="arrow left" onClick={(e) => { e.stopPropagation(); handlePrev(); }}>❮</button>
          <button className="arrow right" onClick={(e) => { e.stopPropagation(); handleNext(); }}>❯</button>
        </div>
      )}
    </div>
  );
};

export default SkateparkGallery;
