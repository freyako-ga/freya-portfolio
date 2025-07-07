import { useRef, useEffect, useState } from "react";
import "./Texture.css";

const photos = [
  "/img/text19.jpg", "/img/text12.jpg", "/img/text21.jpg", "/img/text17.jpg",
  "/img/text18.jpg", "/img/text28.jpg", "/img/text27.jpg",
  "/img/text29.jpg", "/img/text30.jpg", "/img/text31.jpg", 
  "/img/nature2.jpg",  "/img/text36.jpg","/img/text37.jpg", "/img/text38.jpg", "/img/text43.jpg",
 "/img/text39.jpg","/img/san8.jpg",
  "/img/text15.jpg", "/img/clothes.jpg", "/img/text5.jpg", "/img/text11.jpg",
  "/img/text23.jpg", "/img/clothes1.jpg", "/img/text24.jpg", 
//   "/img/text9.jpg",
  "/img/detail.jpg", "/img/text22.jpg", "/img/chronological.jpg", "/img/text.jpg",
//   "/img/text26.jpg", 
//   "/img/text7.jpg", 
//   "/img/text2.jpg", 
"/img/nature.jpg",
  "/img/text35.jpg",
  "/img/text10.jpg",  "/img/text34.jpg", "/img/text8.jpg", "/img/text40.jpg",
  "/img/text16.jpg",   "/img/text41.jpg","/img/text42.jpg",
];

const TextureGallery = () => {
  const floatingImages = photos.slice(0, 12);
  const gridImages = photos;  // next 16 for grid
  const sliderImages = photos;  // remaining for slider

  const sliderRef = useRef(null);
  const indicatorRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleScroll = () => {
    const slider = sliderRef.current;
    const indicator = indicatorRef.current;
    if (!slider || !indicator) return;

    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    const scrollRatio = maxScrollLeft === 0 ? 0 : slider.scrollLeft / maxScrollLeft;
    const trackWidth = indicator.parentElement.clientWidth - indicator.clientWidth;
    indicator.style.transform = `translateX(${scrollRatio * trackWidth}px)`;
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) slider.addEventListener("scroll", handleScroll);
    return () => slider && slider.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
<div className="floating-gallery">
  <div className="texture-title">TEXTURE</div>
  {floatingImages.map((src, index) => {
    // Control vertical & horizontal staggering
    const verticalStep = 22;
    const topOffset = (index % 4) * verticalStep + (index % 2 === 0 ? 0 : 10);
    const horizontalBase = (index % 6) * 16 + 2;
    const horizontalNudge = index % 2 === 0 ? -3 : 3;

    return (
      <div
        key={index}
        className="floating-image-wrapper"
        style={{
          top: `${topOffset}%`,
          left: `calc(${horizontalBase}% + ${horizontalNudge}px)`,
          animationDelay: `${index * 1.4}s`,
        }}
      >
        <div className="floating-label">(01.)</div>
        <img src={src} className="floating-img" alt={`Floating ${index}`} />
      </div>
    );
  })}
</div>


      {/* 📸 4-Column Grid */}
      <div className="texture-grid-section">
  <div className="texture-grid">
    {sliderImages.map((src, index) => (
      <div className="texture-grid-item" key={index}>
        <img
          src={src}
          alt={`Texture Grid ${index + 1}`}
          onClick={() => setSelectedImage(src)}
        />
      </div>
    ))}
  </div>
</div>


      {/* Horizontal Slider */}
      <div className="texture-slider-wrapper">
        <div className="texture-slider" ref={sliderRef}>
          {sliderImages.map((src, index) => (
            <div key={index} className="texture-slide">
              <img
                src={src}
                alt={`Texture ${index + 1}`}
                onClick={() => setSelectedImage(src)}
              />
            </div>
          ))}
        </div>

        <div className="texture-scroll-indicator">
          <div className="texture-scroll-bar" ref={indicatorRef}></div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Enlarged view" />
        </div>
      )}
    </>
  );
};

export default TextureGallery;
