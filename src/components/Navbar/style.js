import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container=styled.div`
`
const Wrapper=styled.div`
background: var(--colorPrimary);
color: white;
padding: var(--padding);
height: 64px;
display: flex;
align-items: center;
justify-content: space-between;


font-size:16px;
`
const Section =styled.div`
display: flex;
align-items: center;
cursor: pointer;

.active{
    color: #000;
}
`
const Logo =styled.img`
margin-right: 12px;
`

const Link = styled(NavLink)`
padding: 32px;
color: white;
text-decoration:none
`

export {Container,Wrapper, Section, Logo, Link}