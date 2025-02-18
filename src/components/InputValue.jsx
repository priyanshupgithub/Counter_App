import React, { useState } from "react";

const InputValue = ({ inputValue, setInputValue }) => {
  const handleOnChange = (e) => {
    const value = e.target.value;
    setInputValue(value === "" ? 0 : Number(value)); // Allow empty value, but store as a number
  };

  const handleOnBlur = () => {
    if (inputValue === "" || isNaN(inputValue)) {
      setInputValue(0);
    } // Restore 0 if input is empty
  };

  return (
    <>
      <div className="w-full flex justify-center">
        <input
          placeholder="Type any value"
          type="number"
          name="input_number"
          value={inputValue === 0 ? "" : inputValue}
          onChange={handleOnChange}
          className=" bg-gray-400 rounded-full w-[40%] mt-10 p-2 appearance-none outline-none"
          onFocus={handleOnBlur} // Restore 0 when input is empty
          style={{
            WebkitAppearance: "none",
            MozAppearance: "textfield", // Ensures compatibility with Firefox
          }}
        />
      </div>
    </>
  );
};

export default InputValue;
