import React from "react";
import { Container } from "./style.js";
import Slider from "react-slick";
import "./style.css"
function PropertyCarousel({slideContent}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <Container>
        <Slider {...settings}>
              {slideContent}
        </Slider>
      </Container>
    </>
  );
}

export default PropertyCarousel;
