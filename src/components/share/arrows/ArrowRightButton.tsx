import React from "react";

import arrow_right from "../../../assets/Arrow1.svg";

const ArrowRightButton = () => {
  return (
    <div className="cursor-pointer w-5 h-5 rounded flex justify-center items-center bg-blue-500">
      <img src={arrow_right} alt="" />
    </div>
  );
};

export default ArrowRightButton;
