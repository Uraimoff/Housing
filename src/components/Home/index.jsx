import React from "react";
import Carousell from "../Carousel";
import PropertyCarousel from "../Carousel/PropertyCarousel";
import Text from "../Carousel/Text";
import GreyCard from "../GreyCard";
// import {Inputs} from '../Generic'
import { Container, Content, Wrapper } from "./style";
// import loupe from "./../../assets/icons/svg/loupeWhite.svg"
import trusted from "./../../assets/icons/svg/trusted.svg";
import properties from "./../../assets/icons/svg/properties.svg";
import calculator from "./../../assets/icons/svg/calculator.svg";
import map from "./../../assets/icons/svg/map.svg";

import "./style.css";

function Homec() {
  const chose = [
    {
      img: trusted,
      name: "Trusted By Thousands",
      txt: "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
    },
    {
      img: properties,
      name: "Wide Renge Of Properties",
      txt: "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
    },
    {
      img: calculator,
      name: "Financing Made Easy",
      txt: "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
    },
    {
      img: map,
      name: "See Neighborhoods",
      txt: "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
    },
  ];
  return (
    <Container>
      <Carousell />
      <div>
        <Text
          theme={"Recommended"}
          txt={
            "Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."
          }
        />
      </div>
      <Wrapper>
        <PropertyCarousel />
      </Wrapper>
      <div className="greyChoose">
        <Text
          theme={"Why Choose Us?"}
          txt={
            "Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."
          }
        />
        <Content>
          {chose.map((value) => (
            <GreyCard img={value.img} name={value.name} txt={value.txt} />
          ))}
        </Content>
      </div>
    </Container>
  );
}

export default Homec;
