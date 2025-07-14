import { useState, useEffect } from "react";
import "./Italia.css";

const fadingImages = ["/img/ita12.jpg", "/img/ita10.jpg", "/img/ita14.jpg", "/img/ita3.jpg",];

const photos = [
  "/img/ita13.jpg",
  "/img/ita15.jpg",
  "/img/ita8.jpg",
  "/img/ita6.jpg",
  "/img/ita7.jpg",
  "/img/ita12.jpg",
  "/img/ita10.jpg",
  "/img/ita18.jpg",
  "/img/ita9.jpg",
  "/img/ita3.jpg",
  "/img/ita22.jpg",
  "/img/ita2.jpg",
  "/img/ita16.jpg",
  "/img/ita11.jpg",
  "/img/ita17.jpg",
  "/img/ita5.jpg",
  "/img/ita19.jpg",
  "/img/ita20.jpg",
  "/img/ita21.jpg",
  "/img/ita4.jpg",
  "/img/ita14.jpg",
];

const ItaliaGallery = () => {
  const [currentFadeIndex, setCurrentFadeIndex] = useState(0);
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFadeIndex((prev) => (prev + 1) % fadingImages.length);
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, []);

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
    <div className="italia-page">
      {/* Fading Hero Section */}
      <div className="fading-hero-container">
        {fadingImages.map((src, index) => (
          <img loading="lazy"
            key={index}
            src={src}
            className={`fading-hero-image ${index === currentFadeIndex ? "active" : ""}`}
            alt={`Hero ${index + 1}`}
          />
        ))}
      </div>

      {/* Description */}
      <div className="italia-description">
        <p>
          A sun-soaked Italian escape — where pasta twirls meet cliff dives,
          warm stone beaches, and the vibrant rhythm of summer.
        </p>
      </div>

      {/* Grid */}
      <div className="italia-grid">
        {photos.map((photo, index) => (
          <img loading="lazy"
            key={index}
            src={photo}
            alt={`Italia ${index + 1}`}
            onClick={() => handleImageClick(index)}
            className="grid-img"
          />
        ))}
      </div>

      {/* Fullscreen Overlay */}
      {isEnlarged && (
        <div className="fullscreen-overlay" onClick={() => setIsEnlarged(false)}>
          <img loading="lazy"

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

export default ItaliaGallery;
