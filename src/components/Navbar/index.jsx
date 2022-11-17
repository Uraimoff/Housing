import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Wrapper, Section, Logo, Link, H3, Main, Main2, Nav } from "./style";
import LogoIMG from "./../../assets/icons/svg/Logo.svg";
import { navbar } from "../../utils/navbar";
import { Buttons } from "../Generic";
import Filter from "../Filter";

function Navbar() {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
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
            <Buttons onClick={() => navigate("./signin")} txt={"Login"} />
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
