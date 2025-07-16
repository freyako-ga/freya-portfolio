import { useState, useEffect } from "react";
import "./Morocco.css";
import LazyImage from "../components/LazyImage";

const photos = [
  "/img/tag36.jpg",
  "/img/mara1.jpg",
  "/img/tag46.jpg",
  "/img/boy.jpg",
  "/img/tag23.jpg",
  "/img/m14.jpg",
  "/img/mor.jpg",
  "/img/mor1.jpg",
  "/img/sofa.jpg",
  "/img/tag45.jpg",
  "/img/text25.jpg",
  "/img/tag37.jpg",
  "/img/tag38.jpg",
  "/img/tag111.jpg",
  "/img/ims12.jpg",
  "/img/fes7.jpg",
  "/img/fes12.jpg",
  // "/img/tag7.jpg",
  "/img/fes1.jpg",
  "/img/m5.jpg",
  "/img/para.jpg",
  "/img/tag52.jpg",
  "/img/m21.jpg",
  "/img/m9.jpg",
  "/img/m15.jpg",
  "/img/tag31.jpg",
  "/img/tag30.jpg",
  "/img/m17.jpg",
  "/img/tag40.jpg",
  "/img/m20.jpg",
  "/img/m13.jpg",
  "/img/fes9.jpg",
  "/img/fes41.jpg",
  "/img/tag1.jpg",
  "/img/sand.jpg",
  "/img/sand2.jpg",
  "/img/tag55.jpg",
  // "/img/tag44.jpg",
  "/img/m24.jpg",
  "/img/m26.jpg",
  "/img/m27.jpg",
  "/img/fes2.jpg",
  "/img/fes5.jpg",
  "/img/tag2.jpg",
  "/img/car.jpg",
  "/img/tag49.jpg",
  "/img/tag47.jpg",
  "/img/football.jpg",
  "/img/tag43.jpg",
    "/img/fes10.jpg",
    "/img/swimmingpool.jpg",
  "/img/tag51.jpg",
  "/img/louis.jpg",
  // "/img/imiou.jpg",
  "/img/tag39.jpg",
  "/img/tag41.jpg",
  "/img/m10.jpg",
  "/img/fes10.jpg",
  "/img/tag50.jpg",
  "/img/fes28.jpg",
  "/img/market13.jpg",
  "/img/tag42.jpg",

  // "/img/market3.jpg",
  // "/img/market19.jpg",
  // // "/img/market8.jpg",
  // "/img/market18.jpg",
  // "/img/market9.jpg",
  // "/img/market20.jpg",
  // // "/img/m23.jpg",
  // "/img/market27.jpg",
  // // "/img/market7.jpg",
  // "/img/market17.jpg",
];

const MoroccoGallery = () => {
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadingImages = ["/img/m14.jpg",   "/img/swimmingpool.jpg", "/img/tag31.jpg", "/img/m15.jpg",  "/img/m9.jpg"];
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
      <div className="fading-morocco-hero-container">
        {fadingImages.map((src, index) => (
          <LazyImage
 loading="lazy"

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
          <LazyImage
 loading="lazy"

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

export default MoroccoGallery;
