import React from "react";
import { Btn, Icon } from "./style";
// import loupe from "./../../assets/icons/svg/loupeWhite.svg"

function Buttons({ txt, img, height, width, color, border, background, onClick }) {
  return (
    <>
      <Btn onClick={onClick}
        style={{
          height: height ? `${height}px` : `44px`,
          width: width ? `${width}px` : `128px`,
          color: color ? `${color}` : `inherit`,
          border: border ? `${border}` : `#E6E9EC 1px solid`,
          backgroundColor: background ? `${background}` : `transparent`,
        }}
      >
        <Icon src={img} />
        {txt}
      </Btn>
    </>
  );
}

export default Buttons;