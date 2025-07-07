import { useState, useEffect } from "react";
import "./Mothernature.css";

const photos = [
  "/img/ice4.jpg",
  "/img/nature8.jpg",
  "/img/nature9.jpg",
  "/img/nature10.jpg",
  "/img/nature7.jpg",
  "/img/nature4.jpg",
  "/img/nature5.jpg",
  "/img/nature3.jpg",
  "/img/ice2.jpg",
  "/img/text32.jpg",
  "/img/ice3.jpg",
  "/img/ice5.jpg",
  "/img/ice6.jpg",
  "/img/ice1.jpg",
  "/img/ice7.jpg",
  "/img/ice9.jpg",
  "/img/ice8.jpg",
  "/img/ice10.jpg",
  "/img/ice11.jpg",
  "/img/ice12.jpg",
  "/img/over.jpg",
  "/img/text32.jpg",
];

const IcelandGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isEnlarged, setIsEnlarged] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 4000); // 4 second fade

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  return (
    <div className="gallery-wrapper">
      <button className="fade-arrow left" onClick={prevSlide}>
        ❮
      </button>

      <img
        src={photos[currentIndex]}
        alt={`Mothernature ${currentIndex + 1}`}
        className="fade-image"
        onClick={() => setIsEnlarged(true)}
      />

      <button className="fade-arrow right" onClick={nextSlide}>
        ❯
      </button>

      {isEnlarged && (
        <div className="fullscreen-overlay" onClick={() => setIsEnlarged(false)}>
          <img
            src={photos[currentIndex]}
            alt={`Full view`}
            className="fullscreen-image"
          />
          <button
            className="close-button"
            onClick={() => setIsEnlarged(false)}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default IcelandGallery;
