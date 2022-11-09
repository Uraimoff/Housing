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
        <Section onClick={()=>navigate("./")}><Logo src={LogoIMG}/><h3>Houzing</h3></Section>
        <Section>
            {
                navbar.map((value)=>(
                    <Link className={({isActive})=>isActive && 'active'} key={value.id} to={value.path}>{value.title}</Link>
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
