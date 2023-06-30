import React from "react";

interface IWarrantsItemProps {
  name: string;
  description: string;
  image: string;
}

const WarrantsItem: React.FC<IWarrantsItemProps> = ({
  name,
  description,
  image,
}) => {
  return (
    <div className="flex h-[15vh] overflow-hidden bg-transparent rounded cursor-pointer gap-3 p-3">
      <img className="h-[9vh]" src={image} alt="" />
      <div className="flex flex-col gap-1 w-[70%] ">
        <h1 className="text-xl border-b border-b-white font-bold">{name}</h1>
        <p className="text-sm text-[#8C8C8C;] overflow-y-auto">{description}</p>
      </div>
    </div>
  );
};

export default WarrantsItem;
