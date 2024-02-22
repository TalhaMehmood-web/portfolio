import React from "react";
import { TypeAnimation } from "react-type-animation";
const Typer = ({ textArray }) => {
  return (
    <div>
      <TypeAnimation
        sequence={textArray}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </div>
  );
};

export default Typer;
