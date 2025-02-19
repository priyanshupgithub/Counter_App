import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";

const Button = ({ value, handleClick }) => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <>
      <button
        className={`text-center text-xs md:text-sm lg:text-base font-bold  rounded-full aspect-square w-20 md:w-24 lg:w-28 flex items-center justify-center  m-2 hover:bg-gray-400 border
          ${theme === "Dark" ? "border-white" : "border border-black"}`}
        onClick={handleClick}
      >
        {value}
      </button>
    </>
  );
};

export default Button;
