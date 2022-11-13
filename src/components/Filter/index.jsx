import React from "react";
import { Buttons, Inputs } from "../Generic";
import { Filtr, H1, MenuWrapper, Section, Sections, Sectionss } from "./style";
import loupe from "./../../assets/icons/svg/loupeWhite.svg";
import setting from "./../../assets/icons/svg/Settings.svg";
import house from "./../../assets/icons/svg/house.svg";
import { Button, Dropdown } from "antd";

function Filter() {
  const menu = () => (
    <MenuWrapper>
      <Section>
        <H1>Address</H1>
        <Sectionss>
        <Inputs width={200} placeholder={"Country"}/>
        <Inputs width={200} placeholder={"Region"}/>
        <Inputs width={200} placeholder={"City"}/>
        <Inputs width={200} placeholder={"Zip code"}/>
        </Sectionss>
      </Section>
      <Section>
        <H1>Apartment info</H1>
        <Sectionss>
        <Inputs width={200} placeholder={"Rooms"}/>
        <Inputs width={200} placeholder={"Size"}/>
        <Inputs width={200} placeholder={"Sort"}/>
        </Sectionss>
      </Section>
      <Section>
        <H1>Price</H1>
        <Sectionss>
        <Inputs width={200} placeholder={"Min price"}/>
        <Inputs width={200} placeholder={"Max price"}/>
        </Sectionss>
      </Section>
      <Sections>
        <Sectionss>
          <Buttons border={"#0D263B 2px solid"} txt={"Cancel"}/>
          <Buttons background={"#0061DF"} color={"white"} txt={"Submit"}/>
        </Sectionss>
      </Sections>
    </MenuWrapper>
  );

  return (
    <>
      <Filtr>
        <Inputs
          icon={house}
          placeholder={"Enter an address, neighborhood, city, or ZIP code"}
        />
        <Dropdown
          trigger={["click"]}
          overlay={menu}
          placement="bottomRight"
          arrow
        >
          <Button
            style={{
              width: "140px",
              height: "44px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Buttons
              img={setting}
              // width={140}
              border={"none"}
              background={""}
              txt={"Advanced"}
            />
          </Button>
        </Dropdown>

        <Buttons
          img={loupe}
          background="#0061df"
          width={180}
          color="white"
          txt={"Search"}
        />
      </Filtr>
    </>
  );
}

export default Filter;
