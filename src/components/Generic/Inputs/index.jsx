import React from "react";
import { Inpt } from "./style";
// import loupe from "./../../../assets/icons/svg/loupeWhite.svg";

function Inputs({ width, height, border, background, placeholder, onChange, name }) {
  return (
    <>
      <Inpt
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        style={{
          width: width ? `${width}px` : `200px`,
          height: height ? `${height}px` : `44px`,
          background: background ? `${background}` : "none",
          paddingLeft: background ? `30px` : "15px",
          border: border ? `${border}` : `1px solid #E6E9EC`,
          borderBottom: border ? `2px solid #E6E9EC` : `2px solid #E6E9EC`,
        }}
        type="text"
      />
    </>
  );
}

export default Inputs;
