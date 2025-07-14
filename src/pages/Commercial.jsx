import { useState } from "react";
import "./Commercial.css";

const photos = [
  "/img/comm244.jpg",
  "/img/tene7.jpg",
  "/img/dj.jpg",
  "/img/comm36.jpg",
  "/img/comm7.jpg",
  "/img/comm1.jpg",
  "/img/comm12.jpg",
  "/img/comm13.jpg",
  "/img/comm245.jpg",
  "/img/comm16.jpg",
  "/img/comm17.jpg",
  "/img/comm18.jpg",
  "/img/comm19.jpg",
  "/img/comm37.jpg",
  "/img/comm20.jpg",
  "/img/comm21.jpg",
  "/img/comm22.jpg",
  "/img/comm23.jpg",
  "/img/comm25.jpg",
  "/img/comm26.jpg",
  "/img/yoga.jpg",
  "/img/comm32.jpg",
  "/img/ims2.jpg",
  "/img/ims3.jpg",
  "/img/comm33.jpg",
  // "/img/ims44.jpg",
  "/img/ims5.jpg",
  "/img/comm4.jpg",
  "/img/comm8.jpg",
  "/img/comm31.jpg",
  "/img/comm9.jpg",
  "/img/market16.jpg",
  "/img/comm3.jpg",
  "/img/comm2.jpg",
  "/img/comm34.jpg",
  "/img/comm29.jpg",
  "/img/comm6.jpg",
  "/img/san2.jpg",
  "/img/place2.jpg",
  "/img/comm10.jpg",
  "/img/comm11.jpg",
  "/img/mara.jpg",
  "/img/comm30.jpg",
  "/img/ims.jpg",
  "/img/anzasurf.jpg",
];

const CommercialGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="commercial-page">
      <div className="hero-image">
      <img loading="lazy" src="/img/tene6.jpg" alt="Hero commercial" />
      </div>

      <div className="commercial-description">
        <p>
          A curated collection of commercial captures — from dynamic branding moments
          to intimate spaces, showcasing narrative and impact through imagery.
        </p>
      </div>

      <div className="commercial-grid">
        {photos.map((photo, index) => (
          <img loading="lazy"
            key={index}
            src={photo}
            alt={`Commercial ${index + 1}`}
            onClick={() => setSelectedImage(photo)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
<img loading="lazy" src={selectedImage} alt="Enlarged view" />
        </div>
      )}
    </div>
  );
};

export default CommercialGallery;
