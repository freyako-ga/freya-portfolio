import { useEffect } from "react";

const useLazyLoadImages = () => {
  useEffect(() => {
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      if (!img.loading) {
        img.setAttribute("loading", "lazy");
      }
    });
  }, []);
};

export default useLazyLoadImages;
