import React, { useState } from "react";

const LazyImage = ({ src, alt, className, onClick, style }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={`${className || ""} ${loaded ? "lazy-loaded" : "lazy-loading"}`}
      onLoad={() => setLoaded(true)}
      onClick={onClick}
      loading="lazy"
      style={style}
    />
  );
};

export default LazyImage;
