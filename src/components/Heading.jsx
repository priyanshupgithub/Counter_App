import React, { useState } from "react";
import Button from "./Button";
import InputValue from "./InputValue";
import CurrentValue from "./CurrentValue";

const Heading = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const handleIncrement = () => {
    setCurrentValue((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setCurrentValue((prev) => prev - 1);
  };
  const handleReset = () => {
    setCurrentValue(0);
  };
  return (
    <div className="flex flex-col w-[90%] mx-auto h-[90%] items-center">
      <h1 className="text-4xl text-center mt-10 font-bold uppercase ">
        Counter App
      </h1>
      <div className="border bg-gray-200 mt-10 h-full flex flex-col w-full items-center">
        <CurrentValue value={currentValue} />
        <div className="flex mt-4 w-[30%] justify-center gap-4">
          <Button value="incrementor" handleClick={handleIncrement} />
          <Button value="decrementor" handleClick={handleDecrement} />
          <Button value="reset" handleClick={handleReset} />
        </div>
        <InputValue />
      </div>
    </div>
  );
};

export default Heading;
