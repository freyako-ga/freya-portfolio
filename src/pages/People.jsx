import "./people.css";

const photos = [
  "/img/leah.jpg",
  "/img/leah2.jpg",
  "/img/leah3.jpg",
  "/img/leah4.jpg",
  "/img/leah5.jpg",
  "/img/leah6.jpg",
  "/img/leah7.jpg",
  "/img/leah8.jpg",
  "/img/leah9.jpg",
  "/img/leah10.jpg",
  "/img/leah11.jpg",
  "/img/leah12.jpg",
  "/img/light.jpg",
  "/img/feet.jpg",
]; 

const PeopleGallery = () => {
  return (
<div className="morocco-grid">
  {photos.map((photo, index) => (
    <img loading="lazy"
key={index} src={photo} alt={`Morocco ${index + 1}`} />
  ))}
</div>
  );
};

export default PeopleGallery;
