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
          className="h-40 object-cover sm:h-52 md:h-72 xl:h-full"
          src="/carousel1.jpg"
          alt=""
        />
      </picture>
      <picture>
        <img
          className="h-40 object-cover sm:h-52 md:h-72 xl:h-full"
          src="/carousel2.jpg"
          alt=""
        />
      </picture>
      <picture>
        <img
          className="h-40 object-cover sm:h-52 md:h-72 xl:h-full"
          src="/carousel3.jpg"
          alt=""
        />
      </picture>
    </Carousel>
  );
};

export default Carousels;
