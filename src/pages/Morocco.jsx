import { useState } from "react";
import "./Morocco.css";

const photos = [
  "/img/fes5.jpg",
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
  const [currentIndex, setCurrentIndex] = useState(5); // pick a starting image

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
    <div className="morocco-page">
      {/* Hero Carousel */}
      <div className="hero-carousel">
        <button className="carousel-button left" onClick={handlePrev}>
          &#10094;
        </button>
        <img
          src={photos[currentIndex]}
          alt={`Morocco Hero ${currentIndex + 1}`}
          className="carousel-image"
        />
        <button className="carousel-button right" onClick={handleNext}>
          &#10095;
        </button>
      </div>

      {/* Description */}
      <div className="morocco-description">
        <p>
          A soulful wander through Moroccan streets, sandy markets, lush courtyards, and ocean edges — warm textures, quiet moments, and sunlit stories.
        </p>
      </div>

      {/* Grid */}
      <div className="morocco-grid">
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Morocco ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default MoroccoGallery;
