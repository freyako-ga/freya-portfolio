import "./Observer.css";
import React from "react";


const photos = [
"/img/anza3.jpg",
  "/img/ims7.jpg",
  "/img/anza.jpg",
  "/img/anza11.jpg",
  "/img/anza5.jpg",
  "/img/anza6.jpg",
  "/img/anza7.jpg",
  "/img/anza8.jpg",
  "/img/anza9.jpg",
  "/img/anza10.jpg",
  "/img/anza44.jpg",
  "/img/anza2.jpg",
  "/img/tamri.jpg",
  "/img/observer2.jpg",
  "/img/ims11.jpg",
  "/img/ims1.jpg",
  "/img/anza12.jpg",
  "/img/cat.jpg",
]; 

const ObserverGallery = () => {
    return (
      <div className="observer-grid">
        {photos.map((photo, index) => (
          <React.Fragment key={index}>
<img loading="lazy"
             src={photo} alt={`Observer ${index + 1}`} />
            {index === 1 && (
              <div className="observer-description">
                <p>
                  These photographs were taken during a quiet walk through the coastal town of Anza, just north of Agadir. What struck me most was the poetry of ordinary life: towels drying in shadowed courtyards, boys laughing in the streets, a basketball tucked under one arm, and elders gathered with quiet camaraderie. I sought not spectacle but stillness — to witness moments as they are, uncurated and rich with texture.
                </p>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };
  

export default ObserverGallery;