
import { useState } from "react";
import "./Italia.css";
import useLazyLoadImages from "../useLazyLoadImages"; // adjust path if needed
 

const photos = [
  "/img/ita13.jpg",
  "/img/ita15.jpg",
  "/img/ita8.jpg",
  "/img/ita6.jpg",
  "/img/ita7.jpg",
  "/img/ita12.jpg",
  "/img/ita10.jpg",
  "/img/ita9.jpg",
  "/img/ita3.jpg",
  "/img/ita4.jpg",
  "/img/ita2.jpg",
  "/img/ita16.jpg",
  "/img/ita11.jpg",
  "/img/ita17.jpg",
  "/img/ita5.jpg",
  "/img/ita19.jpg",
  "/img/ita20.jpg",
  "/img/ita21.jpg",
  "/img/ita14.jpg",
];

const ItaliaGallery = () => {
  useLazyLoadImages();

  const [currentIndex, setCurrentIndex] = useState(8);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };
  

  return (
    <div className="italia-page">
      {/* Hero Carousel */}
      <div className="hero-carousel">
        <button className="carousel-button left" onClick={handlePrev}>
          &#10094;
        </button>
        <img
          src={photos[currentIndex]}
          loading="lazy"
          alt={`Italia Hero ${currentIndex + 1}`}
          className="carousel-image"
        />
        <button className="carousel-button right" onClick={handleNext}>
          &#10095;
        </button>
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
          <img key={index} src={photo} alt={`Italia ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default ItaliaGallery;
