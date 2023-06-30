import React from "react";
import vasil from "../../../assets/vasil.svg";
import editImg from "../../../assets/editImg.svg";
import deleteImg from "../../../assets/deleteImg.svg";
import INVOLMENT1 from "../../../assets/INVOLMENT1.svg";

const InvolmentItem = () => {
  return (
    <div className="relative overflow-hidden bg-transparent p-2 rounded-lg cursor-pointer">
      <div className="flex justify-between items-center gap-1">
        <div className="flex justify-between items-center gap-3">
          <img className="h-[4.5vh]" src={vasil} alt="" />
          <h1 className="text-md">VASILI HUSAK</h1>
        </div>
        <div className="flex gap-1">
          <img className="cursor-pointer" src={editImg} alt="" />
          <img className="cursor-pointer" src={deleteImg} alt="" />
        </div>
      </div>
      <img className="absolute right-0 top-1 " src={INVOLMENT1} alt="" />
    </div>
  );
};

export default InvolmentItem;
