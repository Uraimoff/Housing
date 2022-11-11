import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Wrapper, Section, Logo, Link } from "./style";
import LogoIMG from "./../../assets/icons/svg/Logo.svg"
import { navbar } from "../../utils/navbar";

function Navbar() {
    const navigate = useNavigate()
  return (
    <Container>
      <Wrapper>
        <Section onClick={()=>navigate("./home")}><Logo src={LogoIMG}/><h3>Houzing</h3></Section>
        <Section>
            {
                navbar.map((value, index)=>(
                    <Link key={index} className={({isActive})=>isActive && 'active'} to={value.path}>{value.title}</Link>
                ))
            }
        </Section>
        <Section>Button</Section>
      </Wrapper>
      <Outlet />
    </Container>
  );
}

export default Navbar;
