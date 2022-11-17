import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container=styled.div`
display: flex;
width: 100%;
flex-direction: column;
justify-content: center;
min-width: 0;
`
const Main=styled.div`
width: 100%;
display: flex;
min-width: 0;
justify-content: center;
background: var(--colorPrimary);
`
const Main2=styled.div`
width: 100%;
display: flex;
justify-content: center;
`
const Wrapper=styled.div`
background: var(--colorPrimary);
color: white;
/* padding: var(--padding); */
max-width: 1440px;
min-width: 0;
height: 64px;
display: flex;
align-items: center;
width: 100%;
justify-content: space-between;
@media only screen and(max-width: 768px) {
    padding: 0 !important;
}


font-size:16px;
`
const Section =styled.div`
display: flex;
align-items: center;
font-weight: 400;
font-size: 16px;
line-height: 24px;
cursor: pointer;
`
const H3 = styled.h3`
color: white;
margin-bottom: 0;
`
const Logo =styled.img`
margin-right: 12px;
`

const Link = styled(NavLink)`
/* padding: 32px; */
color: white;
text-decoration:none;
/* background-color:  #253C4F; */
height: 30px;
padding: 0px 10px;
:hover{
    background-color:  #253C4F;
    padding: 0px 10px;
    height: 30px;
    /* margin: 12px; */
    border-radius: 5px;
    color: #f5f7da;
}
:active{
    padding: 0px 10px;
    height: 30px;
    background-color:#253C6a;
    /* padding: 5px 20px; */
    /* margin: 12px; */
    border-radius: 5px;
    color: #f5f7da;
}
`
const Nav = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
min-width: 400px;
max-width: 420px;
@media only screen and (max-width: 768px) {
    display: none;
}
`

export {Container,Wrapper, Section, Logo, Link, H3, Main, Main2, Nav}