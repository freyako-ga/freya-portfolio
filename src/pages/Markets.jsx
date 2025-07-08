import "./Markets.css";

const photos = [
  "/img/market3.jpg",
  "/img/market19.jpg",
  "/img/market6.jpg",
  "/img/market18.jpg",
  "/img/market20.jpg",
  "/img/market21.jpg",
  "/img/market30.jpg",
  "/img/market15.jpg",
  "/img/market8.jpg",
  "/img/market17.jpg",
  "/img/market7.jpg",
  "/img/market9.jpg",
  "/img/market2.jpg",
  "/img/market5.jpg",
  "/img/market.jpg",
  "/img/market11.jpg",
  // "/img/market13.jpg",
  "/img/market24.jpg",
  "/img/market25.jpg",
  "/img/market12.jpg",
  // "/img/tag8.jpg",
  "/img/market23.jpg",
  // "/img/market22.jpg",
  "/img/market14.jpg",
  "/img/market27.jpg",
  "/img/m23.jpg",
  "/img/m28.jpg",
]; 

const MarketsGallery = () => {
  return (
<div className="morocco-grid">
  {photos.map((photo, index) => (
    <img loading="lazy"
key={index} src={photo} alt={`Morocco ${index + 1}`} />
  ))}
</div>
  );
};

export default MarketsGallery;
