import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container=styled.div`
display: flex;
width: 100%;
flex-direction: column;
justify-content: center;
`
const Main=styled.div`
width: 100%;
display: flex;
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
padding: var(--padding);
max-width: 1440px;
height: 64px;
display: flex;
align-items: center;
width: 100%;
justify-content: space-between;


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
padding: 32px;
color: white;
text-decoration:none;
:hover{
    background-color:  #253C4F;
    padding: 5px 20px;
    margin: 12px;
    border-radius: 5px;
    color: #f5f7da;
}
:active{
    background-color:#253C6a;
    padding: 5px 20px;
    margin: 12px;
    border-radius: 5px;
    color: #f5f7da;
}
`

export {Container,Wrapper, Section, Logo, Link, H3, Main, Main2}