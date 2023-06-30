import React from "react";
import AULPSD1 from "../../../assets/AULPSD1.svg";
import AULPSD2 from "../../../assets/AULPSD2.svg";

interface LpsdProps {
  number: number;
  name: string;
  value: number;
}

const Lpsd: React.FC<LpsdProps> = ({ number, name, value }) => {
  return (
    <div className="h-[5.4vh] relative overflow-hidden w-full rounded-lg bg-[#0D1017] flex justify-between items-center gap-1 text-2xs cursor-pointer">
      <div className="flex gap-3 items-center">
        <div className="ml-3 w-[3.5vh] h-[2vh] bg-[#2A4E93] z-10 flex justify-center items-center rounded-lg">
          <h1>LPSD</h1>
        </div>
        <div className="w-[3.5vh] h-[2vh] bg-[#292929] z-10  flex justify-center items-center rounded-lg">
          <h1>{`X-${number}`}</h1>
        </div>
        <h1 className="pl-3 text-2xs">{name}</h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="bg-[#313542] w-[2vh] h-[2vh] mr-3 border bg-darkgray-500 flex justify-center items-center rounded-full">
          {value}
        </div>
      </div>
      <img className="absolute left-6 top-1" src={AULPSD1} alt="" />
      <img className="absolute left-1 top-1" src={AULPSD2} alt="" />
    </div>
  );
};

export default Lpsd;
