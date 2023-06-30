import React from "react";

interface IChargesItemProps {
  name: string;
  time: string;
  value: string;
  img1: string;
  img2: string;
  colorName: string;
}

const ChargesItem: React.FC<IChargesItemProps> = ({
  name,
  time,
  value,
  img1,
  img2,
  colorName,
}) => {
  return (
    <div
      className={`w-full relative overflow-hidden bg-transparent} p-5 cursor-pointer`}
    >
      <div className="flex justify-between w-full h-[5vh] items-center">
        <div
          className={`text-3xs flex h-[2vh] px-3 justify-center items-center rounded-md`}
          style={{ background: colorName }}
        >
          <h1>{name}</h1>
        </div>
        <div className="text-xs flex justify-center items-start w-[10vh] h-[3vh] ">
          <h1>{time}</h1>
        </div>
      </div>
      <div className="h-[5vh] text-2xl flex items-center">
        <h1>{value}</h1>
      </div>
      <img className="absolute right-1 top-3" src={img1} alt="" />
      <img className="absolute right-1 top-3" src={img2} alt="" />
    </div>
  );
};

export default ChargesItem;
