import React from "react";

const CurrentValue = ({ value }) => {
  return (
    <div className="text-center text-4xl mt-10 flex items-center justify-center">
      <span className="text-base mr-2">Current value :</span>
      <span>{value}</span>
    </div>
  );
};

export default CurrentValue;
