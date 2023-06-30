import React from "react";
import vasil from "../../../assets/vasil.svg";
import deleteImg from "../../../assets/deleteImg.svg";
import INVOLMENT1 from "../../../assets/INVOLMENT1.svg";

const InvolmentItemNoEdit = () => {
  return (
    <div className="relative overflow-hidden bg-transparent p-2 rounded-lg cursor-pointer">
      <div className="flex justify-between items-center gap-2">
        <div className="flex justify-between items-center gap-3">
          <img className="h-[4.5vh]" src={vasil} alt="" />
          <h1 className="text-md">VASILI HUSAK</h1>
        </div>
        <img className="cursor-pointer" src={deleteImg} alt="" />
      </div>
      <img className="absolute right-0 top-1" src={INVOLMENT1} alt="" />
    </div>
  );
};

export default InvolmentItemNoEdit;
