import React, { useState } from "react";
import "./Texture.css";
import LazyImage from "../components/LazyImage.jsx";


const photos = [
  "/img/text38.jpg", 
  "/img/san8.jpg",
  "/img/clothes.jpg", 
  "/img/text40.jpg",
  "/img/text17.jpg",
  "/img/text18.jpg", 
  "/img/text28.jpg",
  "/img/tene5.jpg",
  "/img/text27.jpg",
  "/img/text29.jpg",
  "/img/text30.jpg",
  "/img/text31.jpg", 
  "/img/text36.jpg",
  "/img/text37.jpg", 
  "/img/text19.jpg", 
  "/img/text43.jpg",
  "/img/text39.jpg",
  "/img/text12.jpg", 
  "/img/text15.jpg", 
  "/img/text21.jpg",
  "/img/text5.jpg", 
  "/img/text11.jpg",
  "/img/text23.jpg", 
  "/img/clothes1.jpg",
  "/img/text24.jpg", 
  "/img/detail.jpg", 
  "/img/text22.jpg", 
  "/img/chronological.jpg", 
  "/img/nature.jpg",
  "/img/text35.jpg",
  "/img/text10.jpg",  
  "/img/text34.jpg", 
  "/img/text16.jpg",  
  "/img/text41.jpg",
  "/img/text42.jpg",
];

const TextureGallery = () => {
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
    <div className="texture-gallery">
      <div className="texture-paired">
        <LazyImage
 src={photos[0]} alt="Texture 1" onClick={() => handleImageClick(0)} loading="lazy" />
        <LazyImage
 src={photos[1]} alt="Texture 2" onClick={() => handleImageClick(1)} loading="lazy" />
      </div>

      <div className="texture-paired">
        <div className="texture-description">
          <p>
            A study in surface, repetition and quiet imperfection — the Texture collection explores subtle details and tactile beauty.
          </p>
        </div>
        <LazyImage
 src={photos[2]} alt="Texture 3" onClick={() => handleImageClick(2)} loading="lazy" />
      </div>

      <div className="texture-paired">
        <LazyImage
 src={photos[3]} alt="Texture 4" onClick={() => handleImageClick(3)} loading="lazy" />
        <LazyImage
 src={photos[4]} alt="Texture 5" onClick={() => handleImageClick(4)} loading="lazy" />
      </div>

      <div className="texture-grid">
        {photos.slice(5).map((src, index) => (
          <LazyImage

            key={index + 5}
            src={src}
            alt={`Texture ${index + 6}`}
            onClick={() => handleImageClick(index + 5)}
            className="grid-img"
            loading="lazy"
          />
        ))}
      </div>

      {isEnlarged && (
        <div className="fullscreen-overlay" onClick={() => setIsEnlarged(false)}>
          <LazyImage

            src={photos[currentIndex]}
            alt="Full view"
            className="fullscreen-image"
            onClick={(e) => e.stopPropagation()}
            loading="lazy"
          />
          <button className="close-button" onClick={() => setIsEnlarged(false)}>×</button>
          <button className="arrow left" onClick={(e) => { e.stopPropagation(); handlePrev(); }}>❮</button>
          <button className="arrow right" onClick={(e) => { e.stopPropagation(); handleNext(); }}>❯</button>
        </div>
      )}
    </div>
  );
};

export default TextureGallery;
