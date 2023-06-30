import React from "react";
import EVIDENCE3 from "../../../assets/EVIDENCE3.svg";
import EVIDENCE4 from "../../../assets/EVIDENCE4.svg";

const Evidence2Div = () => {
  return (
    <div className="relative overflow-hidden bg-transparent rounded-lg flex flex-col px-5 w-[100%] h-[30vh]">
      <div className="flex flex-col p-3 gap-2">
        <h1 className="text-3xs">DESCRIPTION #1</h1>
        <p className="text-sm overflow-y-auto h-[25vh] text-[#8C8C8C]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to sum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to
        </p>
      </div>
      <img className="absolute right-1 top-3 -z-10" src={EVIDENCE3} alt="" />
      <img className="absolute right-1 top-3 -z-10" src={EVIDENCE4} alt="" />
    </div>
  );
};

export default Evidence2Div;
