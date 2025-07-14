import { useState } from "react";
import { useRef } from "react";
import "./Mothernature.css";
import LazyImage from "../components/LazyImage";

const photos = [
  "/img/nature3.jpg",
  "/img/nature7.jpg",
  "/img/nature21.jpg",
  "/img/nature22.jpg",

  "/img/ice2.jpg",
  "/img/ice6.jpg",
  "/img/ice4.jpg", 
  "/img/nature8.jpg",
  "/img/nature12.jpg",
  "/img/nature13.jpg",

  "/img/nature4.jpg",
  "/img/nature5.jpg",
  "/img/nature26.jpg",
  "/img/text32.jpg",
  "/img/nature19.jpg",
  "/img/nature20.jpg",
  // "/img/ice3.jpg",
  // "/img/ice5.jpg",

  "/img/ice1.jpg",
  "/img/ice7.jpg",
  "/img/flowers1.jpg",
  "/img/ice8.jpg",
  "/img/ice10.jpg",
  "/img/ice11.jpg",
  "/img/ice12.jpg",
  "/img/nature17.jpg",
  "/img/nature18.jpg",
  "/img/nature14.jpg",
  "/img/lanzz.jpg",
  "/img/ice9.jpg",
  "/img/ice13.jpg",
  "/img/fes40.jpg",

  "/img/greenhouse.jpg",
  "/img/greenery.jpg",

  "/img/greenhouse1.jpg",
  "/img/greenhouse2.jpg",
  "/img/nature23.jpg",
  "/img/nature24.jpg",
  "/img/nature25.jpg",
  "/img/flowers2.jpg",
  "/img/nature9.jpg",
  "/img/urban.jpg",
  "/img/nature10.jpg",

];

const MothernatureGallery = () => {
const [isOpen, setIsOpen] = useState(false);
const [currentIndex, setCurrentIndex] = useState(0);
const zoomRef = useRef(null);
const [zoom, setZoom] = useState(false);
const [zoomStyle, setZoomStyle] = useState({});
const [isZoomed, setIsZoomed] = useState(false);
const [position, setPosition] = useState({ x: 0, y: 0 });
const [dragging, setDragging] = useState(false);
const [start, setStart] = useState({ x: 0, y: 0 });


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

const handleImageClick = (e) => {
  e.stopPropagation();
  if (isZoomed) {
    // Zoom out
    setIsZoomed(false);
    setPosition({ x: 0, y: 0 });
  } else {
    // Zoom in
    setIsZoomed(true);
  }
};

  const openOverlay = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeOverlay = () => {
    setIsOpen(false);
    setIsZoomed(false);
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
            <LazyImage
 loading="lazy"

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


          <div
  className="zoom-container"
  onMouseDown={handleMouseDown}
  onMouseMove={handleMouseMove}
  onMouseUp={handleMouseUp}
  onMouseLeave={handleMouseUp}
>
  <LazyImage

    src={photos[currentIndex]}
    alt={`Full View ${currentIndex + 1}`}
    className={`fullscreen-image ${isZoomed ? "zoomed" : ""}`}
    onClick={handleImageClick}
    style={{
      transform: isZoomed
        ? `scale(2) translate(${position.x / 2}px, ${position.y / 2}px)`
        : "scale(1) translate(0, 0)",
      cursor: isZoomed ? "zoom-out" : "zoom-in",
    }}
  />
</div>


          <button className="arrow right" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
            ❯
          </button>
        </div>
      )}
    </>
  );
};

export default MothernatureGallery;
