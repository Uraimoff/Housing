import React from "react";
import { Container } from "./style.js";
import Slider from "react-slick";
import HousesCard from "../../HousesCard/index.jsx";
import { property } from "../../../mock/data.js";

function PropertyCarousel() {
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
            {property.map((value) => (
          <div>
              <HousesCard
                houseIMG={value.houseimg}
                avatar={value.avatar}
                name={value.name}
                address={value.address}
                beds={value.beds}
                baths={value.baths}
                garages={value.garages}
                squares={value.squares}
                noPrice={value.noprice}
                price={value.price}
              />
          </div>
            ))}
        </Slider>
      </Container>
    </>
  );
}

export default PropertyCarousel;
