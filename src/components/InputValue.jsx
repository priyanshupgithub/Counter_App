import React from "react";

const InputValue = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <input
          placeholder="enter number"
          type="number"
          name="input_number"
          value={0}
          className=" bg-gray-400 rounded-full w-[40%] mt-10 p-2"
        />
      </div>
    </>
  );
};

export default InputValue;
