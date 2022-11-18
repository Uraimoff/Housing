import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Wrapper, Section, Logo, Link, H3, Main, Main2, Nav, PhoneNavbar, LoginButton, LoginIcon } from "./style";
import LogoIMG from "./../../assets/icons/svg/Logo.svg"; 
import login from "./../../assets/icons/svg/login.svg"; 
import { navbar } from "../../utils/navbar";
import { Buttons } from "../Generic";
import Filter from "../Filter";
import NavbarForPhone from "./ForPhone";

function Navbar() {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
          <PhoneNavbar>
          <NavbarForPhone/>
          </PhoneNavbar>
          <Section onClick={() => navigate("./home")}>
            <Logo src={LogoIMG} />
            <H3>Houzing</H3>
          </Section>
          <Section>
            <Nav>
            {navbar.map(
              (value, index) =>
              !value.hidden && (
                <Link
                key={index}
                className={({ isActive }) => isActive && "active"}
                to={value.path}
                >
                    {value.title}
                  </Link>
                )
                )}
                </Nav>
          </Section>
          <Section>
            <LoginButton>
            <Buttons width={128} onClick={() => navigate("./signin")} txt={"Login"} />
            </LoginButton>
            <LoginIcon onClick={() => navigate("./signin")}>
              <img  src={login} alt="" />
            </LoginIcon>
          </Section>
        </Wrapper>
      </Main>
      <Main2>
      <Filter />
      </Main2>
      <Outlet />
    </Container>
  );
}

export default Navbar;
