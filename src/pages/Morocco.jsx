import { useState, useEffect } from "react";
import "./Morocco.css";

const photos = [
  "/img/fes5.jpg",
  "/img/mara1.jpg",
  "/img/tag36.jpg",
  "/img/boy.jpg",
  "/img/m15.jpg",
  "/img/m14.jpg",
  "/img/fes1.jpg",
  "/img/text25.jpg",
  "/img/tag37.jpg",
  "/img/tag38.jpg",
  "/img/tag111.jpg",
  "/img/ims12.jpg",
  "/img/fes7.jpg",
  "/img/fes12.jpg",
  "/img/tag45.jpg",
  "/img/m5.jpg",
  "/img/tag30.jpg",
  "/img/m9.jpg",
  "/img/tag23.jpg",
  "/img/tag31.jpg",
  "/img/m21.jpg",
  "/img/m17.jpg",
  "/img/m20.jpg",
  "/img/m13.jpg",
  "/img/fes9.jpg",
  "/img/fes41.jpg",
  "/img/tag1.jpg",
  "/img/tag2.jpg",
  "/img/m24.jpg",
  "/img/m26.jpg",
  "/img/m27.jpg",
  "/img/louis.jpg",
  "/img/tag42.jpg",
  "/img/tag43.jpg",
  "/img/tag44.jpg",
  "/img/fes10.jpg",
  "/img/tag46.jpg",
  "/img/tag47.jpg",
  "/img/m10.jpg",
  "/img/tag7.jpg",
  "/img/tag34.jpg",
  "/img/fes2.jpg",
  // "/img/imiou.jpg",
  "/img/tag39.jpg",
  "/img/tag40.jpg",
  "/img/tag41.jpg",
  "/img/football.jpg",
];

const MoroccoGallery = () => {
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadingImages = ["/img/m14.jpg", "/img/m15.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % fadingImages.length);
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
    <div className="morocco-page">
      <div className="fading-hero-container">
        {fadingImages.map((src, index) => (
          <img loading="lazy"

            key={index}
            src={src}
            className={`fading-hero-image ${index === currentImageIndex ? "active" : ""}`}
            alt={`Hero ${index + 1}`}
          />
        ))}
      </div>

      <div className="morocco-description">
        A land of warm light and deeper tones, of rich texture and feeling.
      </div>

      <div className="morocco-grid">
        {photos.map((src, index) => (
          <img loading="lazy"

            key={index}
            src={src}
            alt={`Morocco ${index + 1}`}
            onClick={() => handleImageClick(index)}
            className="grid-img"
          />
        ))}
      </div>

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

export default MoroccoGallery;
