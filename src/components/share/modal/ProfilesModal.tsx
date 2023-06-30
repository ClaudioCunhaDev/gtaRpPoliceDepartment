import React from "react";
import date_range from "../../../assets/date_range.svg";
import SearchBar from "../search/SearchBar";
import ArsonCard from "../chargesItem/ArsonCard";
import Harassment from "../chargesItem/HarassmentCard";
import ArmedRobbery from "../chargesItem/ArmedRobberyCard";
import DrivingThroughtRedLightsCard from "../chargesItem/DrivingThroughtRedLightsCard";

const ProfilesModal = () => {
  return (
    <div className="absolute top-[16%] left-[15%] w-[70%] h-[68vh] bg-[#17171C] rounded-lg flex justify-center items-center select-none">
      <div className="w-[90%] h-[90%] grid grid-rows-4 gap-3">
        <div className="flex row-span-1 items-center w-full h-full gap-5 justify-between">
          <div className="flex justify-center ">
            <h1 className="text-2xl font-bold">CHARGES</h1>
          </div>
          <div className="w-[35%]">
            <SearchBar />
          </div>
          <div className="bg-gray-500 rounded-md font-bold text-sm flex items-center justify-center w-[150px]">
            <h1>ISSUA A WARRANT</h1>
          </div>
          <div className="flex w-[20%] justify-center gap-3 text-lg">
            <p className="">00:00 00/00/0000</p>
            <img className="w-7 h-7" src={date_range} alt="" />
          </div>
        </div>
        <div className="row-span-1 items-center justify-between gap-3 flex">
          <div className="w-[33%] h-full flex rounded-lg gap-3">
            <ArsonCard />
          </div>
          <div className="w-[33%] h-full flex rounded-lg gap-3">
            <Harassment />
          </div>
          <div className="w-[33%] h-full flex rounded-lg gap-3">
            <ArmedRobbery />
          </div>
        </div>
        <div className="row-span-1 items-center justify-between gap-3 flex">
          <div className="w-[33%] h-full flex rounded-lg gap-3 first-letter">
            <DrivingThroughtRedLightsCard />
          </div>
          <div className="w-[33%] h-full flex rounded-lg gap-3">
            <Harassment />
          </div>
          <div className="w-[33%] h-full flex rounded-lg gap-3">
            <ArmedRobbery />
          </div>
        </div>
        <div className="row-span-1 items-center justify-between gap-3 flex">
          <div className="w-[33%] h-full flex rounded-lg gap-3">
            <ArsonCard />
          </div>
          <div className="w-[33%] h-full flex rounded-lg gap-3">
            <DrivingThroughtRedLightsCard />
          </div>
          <div className="w-[33%] h-full rounded-lg ">
            <DrivingThroughtRedLightsCard />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilesModal;
