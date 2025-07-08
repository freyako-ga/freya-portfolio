import { useState } from "react";
import "./Mothernature.css";

const photos = [
  "/img/nature3.jpg",
  "/img/nature7.jpg",
  "/img/ice6.jpg",
  "/img/ice4.jpg", 
  "/img/nature8.jpg",
  "/img/nature9.jpg",
  "/img/nature10.jpg",
  "/img/nature12.jpg",
  "/img/nature13.jpg",

  "/img/nature4.jpg",
  "/img/nature5.jpg",
  "/img/ice2.jpg",
  "/img/text32.jpg",
  "/img/ice3.jpg",
  "/img/ice5.jpg",

  "/img/ice1.jpg",
  "/img/ice7.jpg",
  "/img/ice9.jpg",
  "/img/ice8.jpg",
  "/img/ice10.jpg",
  "/img/ice11.jpg",
  "/img/ice12.jpg",
];

const MothernatureGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openOverlay = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeOverlay = () => {
    setIsOpen(false);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  return (
    <>
      <div className="mothernature-grid">
        {photos.map((src, index) => (
          <div className="photo-wrapper" key={index}>
            <img loading="lazy"

              src={src}
              alt={`Mothernature ${index + 1}`}
              onClick={() => openOverlay(index)}
              className="clickable"
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="fullscreen-overlay" onClick={closeOverlay}>
          <button className="close-button" onClick={closeOverlay}>
            ×
          </button>
          <button className="arrow left" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
            ❮
          </button>
          <img loading="lazy"

            src={photos[currentIndex]}
            alt={`Full View ${currentIndex + 1}`}
            className="fullscreen-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="arrow right" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
            ❯
          </button>
        </div>
      )}
    </>
  );
};

export default MothernatureGallery;
