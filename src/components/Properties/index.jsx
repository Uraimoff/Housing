import React, { useEffect, useState } from "react";
import { Container } from "./style";
import HousesCard from "./../Card/HousesCard";
import Text from "../Carousel/Text";
import {Wrapper} from "./../Home/style.js"
import { useLocation } from "react-router-dom";

const Propertys = () => {
  const [data, setData] = useState([]);
  const {search} = useLocation()

  const { REACT_APP_BASE_URL: url } = process.env;
  useEffect(() => {
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data  || []);
      });
  }, [url, search]);
  return (
    <>
        <Text
          theme={"Properties"}
          txt={
            "Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."
          }
        />
        <Wrapper>

      <Container>
        {data.map((value) => (
          <HousesCard id={value.id} data={value}/>
          ))}
      </Container>
          </Wrapper>
    </>
  );
};

export default Propertys;
