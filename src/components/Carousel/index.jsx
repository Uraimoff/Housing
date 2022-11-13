import React, { useRef } from 'react'
import { Carousel } from 'antd';
import { Container, Content, ContentC, Contents, Div, H1, IMG, P, Text } from './style';
import house1 from "./../../assets/img/house1.png"
import house2 from "./../../assets/img/house2.png"
import prev from "./../../assets/icons/svg/prev.svg"
import next from "./../../assets/icons/svg/next.svg"
import { Buttons } from '../Generic';

function Carousell() {
    const ref = useRef()
  return (
    <>
    <Container>
    <Carousel autoplay ref={ref} draggable>
    <div>
      <Content><img src={house1} alt="" /></Content>
    </div>
    <div>
      <Content><img src={house2} alt="" /></Content>
    </div>
  </Carousel>
  <ContentC>
        <Contents>
            <IMG onClick={()=> {ref.current.prev()}} src={prev} alt="" />
            <Text>
                <H1>Skyper Pool Partment</H1>
                <P>112 Glenwood Ave Hyde Park, Boston, MA</P>
                <Div>5,250 / month</Div>
                <Buttons txt={"Read more"} color={"white"}/>
            </Text>
            <IMG onClick={()=> {ref.current.next()}} src={next} alt="" />
        </Contents>
  </ContentC>
    </Container>
    </>
  )
}

export default Carousell