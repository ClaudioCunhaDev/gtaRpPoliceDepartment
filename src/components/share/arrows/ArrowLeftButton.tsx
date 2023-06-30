import React from "react";
import arrow_left from "../../../assets/Arrow2.svg";

const ArrowLeftButton = () => {
  return (
    <div className="cursor-pointer w-5 h-5 rounded flex justify-center items-center bg-blue-500">
      <img src={arrow_left} alt="" />
    </div>
  );
};

export default ArrowLeftButton;
