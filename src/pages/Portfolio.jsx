import "./Portfolio.css";

function Portfolio() {
  const projects = [
    { src: "/img/tag9.jpg", title: "Skatepark", link: "/Skatepark" },
    { src: "/img/ims7.jpg", title: "Observer", link: "/Observer" },
    { src: "/img/tag22.jpg", title: "Blues & oranges", link: "/Blues" },
    { src: "/img/m14.jpg", title: "Habibi", link: "/Morocco" },
    { src: "/img/text19.jpg", title: "Texture", link: "/Texture" },
    { src: "/img/market9.jpg", title: "To The Markets", link: "/Markets" },
    { src: "/img/ita9.jpg", title: "PRONTO?", link: "/Italia" },
    { src: "/img/ice7.jpg", title: "Mother Nature", link: "/Mothernature" },
    { src: "/img/comm10.jpg", title: "Commercial", link: "/Commercial" },
  ];

  return (
    <div className="portfolio-container">
        <h1 className="portfolio-title">PORTFOLIO</h1>
    <div className="grid">
      {projects.map((project, index) => (
        <div key={index} className="grid-item">
          <a href={project.link} className="image-link">
            <div className="image-wrapper">
              <img src={project.src} alt={project.title} />
              <div className="overlay">
                <span className="overlay-title">{project.title}</span>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  </div>
  
  );
}

export default Portfolio;
