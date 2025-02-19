import React, { useState } from "react";
import Button from "./Button";
import InputValue from "./InputValue";
import CurrentValue from "./CurrentValue";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByValue,
  decrementByValue,
} from "../utils/counterSlice";
import { toggleTheme } from "../utils/themeSlice";

const Heading = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const currentValue = useSelector((state) => state.counter.value);

  // Store input value in Heading so it can be used in the buttons
  const [inputValue, setInputValue] = useState(0);

  const handleClick = () => {
    dispatch(reset()); // Reset the current/counter value
    setInputValue(0); // Reset the input field value
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
        onClick={() => dispatch(toggleTheme())}
      >
        {theme === "Light" ? <MdDarkMode /> : <CiLight />}
      </span>
      <div
        className={`border mt-10 h-full flex flex-col w-full items-center
        
        ${theme === "Dark" ? "bg-black text-white" : "bg-gray-200 text-black"}`}
      >
        <CurrentValue value={currentValue} />
        <div className="flex mt-4 w-full justify-center gap-1 flex-wrap md:flex-nowrap lg:flex-nowrap ">
          <Button
            value="incrementor"
            handleClick={() => dispatch(increment())}
          />
          <Button
            value="decrementor"
            handleClick={() => dispatch(decrement())}
          />
          <Button value="reset" handleClick={handleClick} />
        </div>
        <InputValue inputValue={inputValue} setInputValue={setInputValue} />
        <div className="flex mt-4 w-[30%] justify-center gap-1">
          <Button
            value="increment by value"
            handleClick={() => dispatch(incrementByValue(Number(inputValue)))}
          />
          <Button
            value="decrement by value"
            handleClick={() => dispatch(decrementByValue(Number(inputValue)))}
          />
        </div>
      </div>
    </div>
  );
};

export default Heading;
