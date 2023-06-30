import React from "react";
import warningBG from "../../../assets/warningBG.svg";
import warningBG2 from "../../../assets/warningBG2.svg";

interface IWarningItemProps {
  name: string;
  description: string;
  image: string;
}

const Warning: React.FC<IWarningItemProps> = ({ name, description, image }) => {
  return (
    <div className="flex h-[15vh] relative overflow-hidden bg-transparent rounded cursor-pointer gap-3 p-2">
      <div className="pt-1">
        <div className="h-[9vh] w-[9vh] bg-[#FFC06124] rounded flex justify-center items-center">
          <img className="h-[50%]" src={image} alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-1 w-[70%] pt-1">
        <h1 className="text-xl border-b border-b-white font-bold">{name}</h1>
        <p className="text-sm text-[#8C8C8C;] overflow-y-auto">{description}</p>
      </div>
      <img className="absolute right-0 top-3 -z-10" src={warningBG} alt="" />
      <img className="absolute right-0 top-3 -z-10" src={warningBG2} alt="" />
    </div>
  );
};

export default Warning;
