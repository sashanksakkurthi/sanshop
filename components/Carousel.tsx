import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Carousels = () => {
  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      autoPlay={true}
      showArrows={true}
    >
      <picture>
        <img
          className="h-40 sm:h-48 rounded-md object-cover md:h-72"
          src="/carousel1.jpg"
          alt=""
        />
      </picture>
      <picture>
        <img
          className="h-40 sm:h-48 rounded-md object-cover md:h-72"
          src="/carousel2.jpg"
          alt=""
        />
      </picture>
      <picture>
        <img
          className="h-40 sm:h-48 rounded-md object-cover md:h-72"
          src="/carousel3.jpg"
          alt=""
        />
      </picture>
    </Carousel>
  );
};

export default Carousels;
