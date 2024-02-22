import React from "react";

const Button = ({ handleClick, text, icon, style }) => {
  return (
    <button
      onClick={handleClick}
      className={`border-2 ${style} flex items-center transition-all duration-300 ease-linear text-xl font-semibold  rounded-md px-3 py-2  `}
    >
      <p>{text}</p>
      <i className={`fa-solid ${icon} ml-2`}></i>
    </button>
  );
};

export default Button;
