import React, { useState } from "react";

const Button = ({ value, handleClick }) => {
  return (
    <>
      <button
        className="text-center text-sm md:text-base lg:text-lg font-bold border rounded-full aspect-square w-22 md:w-24 lg:w-28 flex items-center justify-center border-black m-3 hover:bg-gray-400"
        onClick={handleClick}
      >
        {value}
      </button>
    </>
  );
};

export default Button;
