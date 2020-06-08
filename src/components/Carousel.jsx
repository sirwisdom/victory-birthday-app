import React from "react";
import { birthdayImages } from "../services/images";
import { Gallery, GalleryImage } from "react-gesture-gallery";

const Carousel = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (index === birthdayImages.length - 1) {
        setIndex(0);
      } else setIndex(index + 1);
    }, 4500);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="carousel-div">
      <Gallery
        enableIndicators={false}
        index={index}
        onRequestChange={i => {
          setIndex(i);
        }}
      >
        {birthdayImages.map(image => (
          <GalleryImage
            objectFit="cover"
            src={image.img}
            alt="birthday"
            key={image.id}
          />
        ))}
      </Gallery>
    </div>
  );
};
export default Carousel;
