import React from "react";
import feedBack from "../../../assets/feedback.svg";
import editImg from "../../../assets/editImg.svg";
import deleteImg from "../../../assets/deleteImg.svg";
import INCIDENCE1 from "../../../assets/INCIDENCE1.svg";

const IncidenceItem = () => {
  return (
    <div className="relative overflow-hidden bg-[#0D0F13] rounded-lg flex p-2 gap-2 h-[5.6vh] items-center justify-between cursor-pointer">
      <div className="flex gap-2 items-center">
        <div className="h-[3vh] w-[3vh] bg-amber-800">
          <img className="p-2" src={feedBack} alt="" />
        </div>
        <h1 className="text-xl font-bold">#4322</h1>
      </div>
      <div className="flex gap-1">
        <img className="cursor-pointer" src={editImg} alt="" />
        <img className="cursor-pointer" src={deleteImg} alt="" />
      </div>
      <img className="absolute right-0 top-1" src={INCIDENCE1} alt="" />
    </div>
  );
};

export default IncidenceItem;
