import React from "react";
import MAGNIFYING1 from "../../../assets/MAGNIFYING1.svg";
import MAGNIFYING2 from "../../../assets/MAGNIFYING2.svg";

interface MagnifyingGlassItemProps {
  name: string;
  description: string;
  image: string;
}

const MagnifyingGlass: React.FC<MagnifyingGlassItemProps> = ({
  name,
  description,
  image,
}) => {
  return (
    <div className="flex h-[15vh] relative overflow-hidden bg-transparent rounded cursor-pointer gap-3 p-2">
      <div className="w-[30%] pt-1">
        <div className="h-[10vh] bg-[#FF618724] rounded flex justify-center items-center">
          <img className="h-[50%]" src={image} alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-1 w-[70%] pt-1">
        <h1 className="text-xl border-b border-b-white font-bold">{name}</h1>
        <p className="text-sm text-[#8C8C8C;] overflow-y-auto">{description}</p>
      </div>
      <img className="absolute right-0 top-3 -z-10" src={MAGNIFYING1} alt="" />
      <img className="absolute right-0 top-3 -z-10" src={MAGNIFYING2} alt="" />
    </div>
  );
};

export default MagnifyingGlass;
