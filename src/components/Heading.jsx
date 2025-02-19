import React, { useContext, useState } from "react";
import Button from "./Button";
import InputValue from "./InputValue";
import CurrentValue from "./CurrentValue";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { ThemeSwitcherContext } from "../context/ThemeSwitcherContext";

const Heading = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const { theme, setTheme, handleSetTheme } = useContext(ThemeSwitcherContext);
  const handleIncrement = () => {
    setCurrentValue((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setCurrentValue((prev) => prev - 1);
  };
  const handleReset = () => {
    setCurrentValue(0);
    setInputValue(0);
  };

  const handleIncrementByValue = () => {
    setCurrentValue((prev) => prev + Number(inputValue));
  };

  const handleDecrementByValue = () => {
    setCurrentValue((prev) => prev - Number(inputValue));
  };
  return (
    <div
      className={`flex flex-col w-full mx-auto h-full items-center 
      ${theme === "Dark" ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center mt-10 font-bold uppercase ">
        Counter App
      </h1>
      <span
        className="absolute text-4xl top-[5%] right-[5%] cursor-pointer"
        onClick={handleSetTheme}
      >
        {theme === "Light" ? <MdDarkMode /> : <CiLight />}
      </span>
      <div
        className={`border mt-10 h-full flex flex-col w-full items-center
        
        ${theme === "Dark" ? "bg-black text-white" : "bg-gray-200 text-black"}`}
      >
        <CurrentValue value={currentValue} />
        <div className="flex mt-4 w-full justify-center gap-1 flex-wrap md:flex-nowrap lg:flex-nowrap ">
          <Button value="incrementor" handleClick={handleIncrement} />
          <Button value="decrementor" handleClick={handleDecrement} />
          <Button value="reset" handleClick={handleReset} />
        </div>
        <InputValue inputValue={inputValue} setInputValue={setInputValue} />
        <div className="flex mt-4 w-[30%] justify-center gap-1">
          <Button
            value="increment by value"
            handleClick={handleIncrementByValue}
          />
          <Button
            value="decrement by value"
            handleClick={handleDecrementByValue}
          />
        </div>
      </div>
    </div>
  );
};

export default Heading;
