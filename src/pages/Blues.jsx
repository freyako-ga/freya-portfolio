import React, { useState } from "react";
import "./Blues.css";
import LazyImage from "../components/LazyImage";


const photos = [
  "/img/blue7.jpg",
  "/img/blue4.jpg",
  "/img/chef6.jpg",
  "/img/blue3.jpg",
  "/img/fes8.jpg",
  "/img/chef9.jpg",
  "/img/chef5.jpg",
  "/img/fes6.jpg",
  "/img/chef1.jpg",
  "/img/m25.jpg",
  "/img/blue6.jpg",
  "/img/blue8.jpg",
  "/img/blue.jpg",
  "/img/fes27.jpg",
  "/img/chef8.jpg",
  "/img/oranges.jpg",
  "/img/comm28.jpg",
  "/img/phone.jpg",
  "/img/chef2.jpg",
  "/img/chef3.jpg",
  "/img/chef4.jpg",
  "/img/blue2.jpg",
  "/img/tag22.jpg",
  "/img/chef7.jpg",
  "/img/blue5.jpg",
  "/img/san4.jpg",
  "/img/door.jpg",
];

const BluesGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    setIsZoomed(false);
    setPosition({ x: 0, y: 0 });
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    setIsZoomed(false);
    setPosition({ x: 0, y: 0 });
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % photos.length);
    setIsZoomed(false);
    setPosition({ x: 0, y: 0 });
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsZoomed(false);
    setPosition({ x: 0, y: 0 });
  };

  const handleZoomToggle = (e) => {
    e.stopPropagation();
    setIsZoomed(!isZoomed);
    if (!isZoomed) setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    if (!isZoomed) return;
    setDragging(true);
    setStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const x = e.clientX - start.x;
    const y = e.clientY - start.y;
    setPosition({ x, y });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <>
      <div className="blues-grid">
        {photos.map((photo, index) => (
        <LazyImage
        key={index}
            src={photo}
            alt={`Morocco ${index + 1}`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>

      {isOpen && (
        <div
          className="fullscreen-overlay"
          onClick={handleClose}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div
            className="zoom-container"
            onMouseDown={handleMouseDown}
            onClick={handleZoomToggle}
          >
            <LazyImage

              src={photos[currentIndex]}
              alt="Full view"
              className={`fullscreen-image ${isZoomed ? "zoomed" : ""}`}
              style={{
                transform: isZoomed
                  ? `scale(2) translate(${position.x / 2}px, ${position.y / 2}px)`
                  : "scale(1) translate(0, 0)",
                cursor: isZoomed ? "zoom-out" : "zoom-in",
              }}
              onClick={(e) => e.stopPropagation()}
              draggable={false}
            />
          </div>

          <button className="close-button" onClick={handleClose}>×</button>
          <button className="arrow left" onClick={handlePrev}>❮</button>
          <button className="arrow right" onClick={handleNext}>❯</button>
        </div>
      )}
    </>
  );
};

export default BluesGallery;
