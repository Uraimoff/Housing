import React, { useEffect, useState } from "react";
import Carousell from "../Carousel";
import PropertyCarousel from "../Carousel/PropertyCarousel";
import Text from "../Carousel/Text";
import GreyCard from "../Card/GreyCard";
// import {Inputs} from '../Generic'
import { Container, Content, Wrapper } from "./style";
// import loupe from "./../../assets/icons/svg/loupeWhite.svg"
import trusted from "./../../assets/icons/svg/trusted.svg";
import properties from "./../../assets/icons/svg/properties.svg";
import calculator from "./../../assets/icons/svg/calculator.svg";
import map from "./../../assets/icons/svg/map.svg";
import { property } from "../../mock/data";
import { categorydata } from "../../utils/navbar";

import "./style.css";
import HousesCard from "../Card/HousesCard";
import CategoryCard from "../Card/CategoryCard";
import ReadMore from "../Card/More";
import TestimonialCard from "../Card/TestimonialCard";

function Homec() {
  const [data, setData] = useState([]);

  const { REACT_APP_BASE_URL: url } = process.env;
  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data  || []);
        console.log(res);
      });
  }, [url]);
  // useEffect(() => {
  //   fetch(`${url}/categories/list`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setData(res?.data  || []);
  //       console.log(res);
  //     });
  // }, [url]);

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
        <PropertyCarousel
          slideContent={data.map((value) => (
            <HousesCard
              data={value}
            />
          ))}
        />
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
      <div>
        <Text
          theme={"Category"}
          txt={
            "Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."
          }
        />
        <Wrapper>
          <PropertyCarousel
          slideToShow={"four"}
            slideContent={categorydata.map((value) => (
              <CategoryCard
                img={value.img}
                name={value.name}
                categoryIcon={value.icon}
              />
            ))}
          />
        </Wrapper>
      </div>
      <div>
        <ReadMore />
      </div>
      <div>
        <Text
          theme={"Recent Properties for Rent"}
          txt={
            "Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."
          }
        />
      </div>
      <Wrapper>
        <PropertyCarousel
          slideContent={data.map((value) => (
            <HousesCard
              data={value}
            />
          ))}
        />
      </Wrapper>
      <div className="greyChoose">
        <Text
          theme={"Testimonials"}
          txt={
            "Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."
          }
        />
        <Wrapper>

      <PropertyCarousel
        slideContent={property.map((value) => (
          <TestimonialCard
          opinion={
            "“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “"
          }
          avatar={value.avatar}
          name={value.name}
          profession={value.address}
          />
          ))}
          />
          </Wrapper>
          </div>
    </Container>
  );
}

export default Homec;
