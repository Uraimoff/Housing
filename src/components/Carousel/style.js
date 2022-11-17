import styled from "styled-components";

const Container =styled.div`
width: 100%;
background: #000;
display: flex;
justify-content: center;
flex-direction: column;
`
const Content =styled.div`

height: fit-content;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
color: #fff;
line-height: 160px;
background: #364d79;
width: 100%;
opacity: 0.5;
`
const Content2 =styled.div`

/* background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  background-image: url(./../../assets/img/house2.png); */

  height: fit-content;
overflow: hidden;
display: flex;
width: 100%;
align-items: center;
justify-content: center;
color: #fff;
line-height: 160px;
background: #364d79;
opacity: 0.5;
`
const ContentC=styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
max-width: 500px;
min-width: 310px;
margin:auto;
background: #000;
@media only screen and(max-width: 768px) {
    display: none;
}
`
const Contents =styled.div`
width: 100%;
max-width: 1440px;
min-width: 310px;
margin:auto;
background: #000;
position: absolute;
width: 1440px;
top: 240px;
display: flex;
align-items: center;
justify-content: space-between;
@media only screen and(max-width: 768px) {
    display: none;
    opacity: 0;
}
`

const Text =styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const H1 = styled.h1`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 44px;
line-height: 48px;
color: white;
`
const P = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
color: white;
`
const Div = styled.div`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -0.02em;
    padding-bottom: 60px;
color: white;
`
const IMG =styled.img`
opacity: 0.6;
:hover{
    opacity: 1;
}
/* @media only screen and(max-width: 768px) {
    display: none;
} */
`

export {Container, Content, Content2, Contents, ContentC, Text, H1, P, Div, IMG}