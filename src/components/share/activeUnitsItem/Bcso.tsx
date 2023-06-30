import React from "react";
import AUBCSO1 from "../../../assets/AUBCSO1.svg";
import AUBCSO2 from "../../../assets/AUBCSO2.svg";

interface BcsoProps {
  number: number;
  name: string;
  value: number;
}

const Bcso: React.FC<BcsoProps> = ({ number, name, value }) => {
  return (
    <div className="h-[5.4vh] relative overflow-hidden w-full rounded-lg bg-[#171616] flex justify-between items-center gap-1 text-2xs cursor-pointer font-bold">
      <div className="flex gap-3 items-center">
        <div className="ml-3 w-[3.5vh] h-[2vh] bg-[#927222] z-10 flex justify-center items-center rounded-lg">
          <h1>BCSO</h1>
        </div>
        <div className="w-[3.5vh] h-[2vh] bg-[#292929] z-10 flex justify-center items-center rounded-lg">
          <h1>{`x-${number}`}</h1>
        </div>
        <h1 className="pl-3 text-2xs">{name}</h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="bg-[#313542] w-[2vh] h-[2vh] mr-3 border bg-darkgray-500 flex justify-center items-center rounded-full">
          <h1>{value}</h1>
        </div>
      </div>
      <img className="absolute left-6 top-1" src={AUBCSO1} alt="" />
      <img className="absolute left-1 top-1" src={AUBCSO2} alt="" />
    </div>
  );
};

export default Bcso;
