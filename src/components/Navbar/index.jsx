import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Wrapper, Section, Logo, Link, H3, Main, Main2 } from "./style";
import LogoIMG from "./../../assets/icons/svg/Logo.svg";
import { navbar } from "../../utils/navbar";
import { Buttons } from "../Generic";
import Filter from "../Filter";
// import loupe from "./../../assets/icons/svg/loupeWhite.svg"

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
