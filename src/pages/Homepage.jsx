import LazyImage from "../components/LazyImage";

function Homepage() {
  return (
    <>
      <div className="content-wrapper">
        <div className="inner-wrapper">
          <div className="homepage-left-image">
            <LazyImage
 src="/img/m22.jpg" alt="Description" />
          </div>
          <div className="right-content">
            <h1>Freya</h1>
            <p>A South Korean global travel and street photographer based in London, England</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;