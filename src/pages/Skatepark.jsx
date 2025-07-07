import "./Skatepark.css";
import React from "react";

const photos = [
  "/img/skatepark11.jpg",
  "/img/skatepark14.jpg",
  "/img/skatepark9.jpg",
  "/img/skatepark16.jpg",
  "/img/people.jpg",
  "/img/skatepark19.jpg",
  "/img/skatepark2.jpg",
  "/img/skatepark4.jpg",
  "/img/skatepark5.jpg",
  "/img/skatepark3.jpg",
  "/img/skatepark7.jpg",
  "/img/skatepark10.jpg",
  "/img/skatepark12.jpg",
  "/img/skatepark13.jpg",
  "/img/skatepark15.jpg",
  "/img/skatepark18.jpg",
  "/img/skatepark.jpg",
  "/img/skatepark88.jpg",
  "/img/skatepark89.jpg", 
   "/img/skatepark23.jpg",
  // "/img/skatepark21.jpg",
  "/img/tag9.jpg",
  "/img/skatepark20.jpg",
  "/img/tag18.jpg",
  "/img/tag10.jpg",
  "/img/tag17.jpg",
  "/img/tag11.jpg",
  "/img/tag31.jpg",
  // "/img/tag32.jpg",
  "/img/tag24.jpg",
  "/img/tag13.jpg",
  "/img/skatepark29.jpg",
  "/img/skatepark8.jpg",
];

const SkateparkGallery = () => {
  return (
    <div className="skatepark-gallery">
      {/* First 4 images as pairs in rows */}
      <div className="skatepark-paired">
        <img src={photos[0]} alt="Skatepark 1" />
        <img src={photos[1]} alt="Skatepark 2" />
      </div>
      <div className="skatepark-paired">
        <div className="skatepark-description">
          <p>
            Perched on a hilltop overlooking the Atlantic, the Taghazout Skatepark is a vibrant collision of movement, color, and community. Here, kids, teens, and travelers gather in the golden hour — carving, flying, and cheering with a sense of freedom that feels both raw and deeply rooted. The graffiti-splashed bowls and dust-lined edges become more than a stage — they are a canvas for self-expression. In capturing this space, I wanted to preserve not just the energy of each trick, but the spirit of togetherness and youth culture uniquely alive in this corner of Morocco.
          </p>
        </div>
        <img src={photos[2]} alt="Skatepark 3" />
      </div>
      <div className="skatepark-paired">
        <img src={photos[3]} alt="Skatepark 4" />
        <img src={photos[4]} alt="Skatepark 5" />
      </div>

      {/* Remaining photos in masonry-style grid */}
      <div className="skatepark-grid">
        {photos.slice(5).map((src, index) => (
          <img key={index} src={src} alt={`Skatepark ${index + 6}`} />
        ))}
      </div>
    </div>
  );
};

export default SkateparkGallery;
