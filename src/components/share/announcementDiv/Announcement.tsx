import React from "react";
import ANNOUCEMENT1 from "../../../assets/ANNOUCEMENT1.svg";
import ANNOUCEMENT2 from "../../../assets/ANNOUCEMENT2.svg";

interface IAnnouncementProps {
  title: string;
  description: string;
  date: string;
  hour: string;
  time: string;
}

const Announcement: React.FC<IAnnouncementProps> = ({
  title,
  description,
  date,
  hour,
  time,
}) => {
  return (
    <div className="w-full h-full relative bg-transparent flex flex-col border-2-black rounded p-3">
      <h1 className="text-xl font-bold border-b-2 pb-2">{title}</h1>
      <div className="w-full h-[19.5vh] overflow-y-auto flex justify-center text-sm mt-2 text-[#8C8C8C;]">
        <p className="">{description}</p>
      </div>
      <div className="flex justify-between items-end mt-2 text-3xs">
        <p className="">
          {date} <span className="font-bold">{hour}</span>
        </p>
        <p className="font-bold">{time}</p>
      </div>
      <img className="absolute right-0 top-1 -z-10" src={ANNOUCEMENT1} alt="" />
      <img className="absolute right-0 top-1 -z-10" src={ANNOUCEMENT2} alt="" />
    </div>
  );
};

export default Announcement;
