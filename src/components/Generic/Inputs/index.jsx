import React from "react";
import { Icon, Inpt, Wrapper } from "./style";
// import loupe from "./../../../assets/icons/svg/loupeWhite.svg";

function Inputs({ width, height, border, placeholder, onChange, name, icon, defaultValue }) {
  return (
    <>
    <Wrapper style={{
      width: width ? `${width}px` : `100%`
    }}>
      <Icon src={icon}/>
      <Inpt
      icon={icon}
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={defaultValue}
        name={name}
        style={{
          width: width ? `${width}px` : `100%`,
          height: height ? `${height}px` : `44px`,
          paddingLeft: icon ? `30px` : "15px",
          border: border ? `${border}` : `1px solid #E6E9EC`,
          borderBottom: border ? `2px solid #E6E9EC` : `2px solid #E6E9EC`,
        }}
        type="text"
        />
        </Wrapper>
    </>
  );
}

export default Inputs;
