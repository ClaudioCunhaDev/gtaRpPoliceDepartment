import React from "react";
import INFORMATION1 from "../../../assets/INFORMATION1.svg";


interface InformationProps {
  info: string;
  description: string;
}

const InformationItem: React.FC<InformationProps> = ({ info, description }) => {
  return (
    <div className="relative overflow-hidden bg-transparent w-[100%] rounded-lg h-[9.1vh] justify-center p-3 flex flex-col flex-wrap">
      <p className="">{info}</p>
      <p>{description}</p>
      <img className="absolute left-1 top-3" src={INFORMATION1} alt="" />
    </div>
  );
};

export default InformationItem;
