import React, { useRef } from "react";
import { Buttons, Inputs } from "../Generic";
import { Filtr, H1, MenuWrapper, Section, Sections, Sectionss } from "./style";
import loupe from "./../../assets/icons/svg/loupeWhite.svg";
import setting from "./../../assets/icons/svg/Settings.svg";
import house from "./../../assets/icons/svg/house.svg";
import { Button, Dropdown } from "antd";
import { uzeReplace } from "./../../hooks/useReplace";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearch } from "../../hooks/uzeSearch";

function Filter() {
  // console.log(uzeReplace("address", "tashkent"))
  const location = useLocation();
  const navigate = useNavigate();
  const params = useSearch();

  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();
  const roomsRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();
  const minRef = useRef();
  const maxRef = useRef();

  // console.log(params.get("country"), "params");
  const onChange = ({ target: { name, value } }) => {
    navigate(`${location?.pathname}${uzeReplace(name, value)}`);
  };

  const menu = () => (
    <MenuWrapper>
      <Section>
        <H1>Address</H1>
        <Sectionss>
          <Inputs
            defaultValue={params.get("country")}
            onChange={onChange}
            ref={countryRef}
            width={200}
            name={"country"}
            placeholder={"Country"}
          />
          <Inputs
            defaultValue={params.get("region")}
            onChange={onChange}
            name={"region"}
            ref={regionRef}
            width={200}
            placeholder={"Region"}
          />
          <Inputs
          onChange={onChange}
            defaultValue={params.get("city")}
            ref={cityRef}
            width={200}
            name={"city"}
            placeholder={"City"}
          />
          <Inputs
            defaultValue={params.get("zip_code")}
            onChange={onChange}
            ref={zipRef}
            width={200}
            name={"zip_code"}
            placeholder={"Zip code"}
          />
        </Sectionss>
      </Section>
      <Section>
        <H1>Apartment info</H1>
        <Sectionss>
          <Inputs
            defaultValue={params.get("rooms")}
            name={"rooms"}
            onChange={onChange}
            ref={roomsRef}
            width={200}
            placeholder={"Rooms"}
          />
          <Inputs
            defaultValue={params.get("size")}
            onChange={onChange}
            name={"size"}
            ref={sizeRef}
            width={200}
            placeholder={"Size"}
          />
          <Inputs
            defaultValue={params.get("sort")}
            onChange={onChange}
            name={"sort"}
            ref={sortRef}
            width={200}
            placeholder={"Sort"}
          />
        </Sectionss>
      </Section>
      <Section>
        <H1>Price</H1>
        <Sectionss>
          <Inputs
            defaultValue={params.get("min_price")}
            onChange={onChange}
            name={"min_price"}
            ref={minRef}
            width={200}
            placeholder={"Min price"}
          />
          <Inputs
            defaultValue={params.get("max_price")}
            onChange={onChange}
            name={"max_price"}
            ref={maxRef}
            width={200}
            placeholder={"Max price"}
          />
        </Sectionss>
      </Section>
      <Sections>
        <Sectionss>
          <Buttons border={"#0D263B 2px solid"} txt={"Cancel"} />
          <Buttons background={"#0061DF"} color={"white"} txt={"Submit"} />
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
