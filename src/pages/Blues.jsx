import "./Blues.css";

const photos = [
  "/img/blue7.jpg",
  "/img/blue4.jpg",
  "/img/chef6.jpg",
  "/img/blue3.jpg",
  // "/img/san.jpg",
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
  // "/img/san2.jpg",
  // "/img/san3.jpg",
  "/img/blue2.jpg",
  "/img/tag22.jpg",
  "/img/chef7.jpg",
  "/img/blue5.jpg",
  "/img/san4.jpg",
  "/img/door.jpg",
]; 

const BluesGallery = () => {
  return (
<div className="blues-grid">
  {photos.map((photo, index) => (
    <img loading="lazy" key={index} src={photo} alt={`Morocco ${index + 1}`} />
  ))}
</div>
  );
};

export default BluesGallery;