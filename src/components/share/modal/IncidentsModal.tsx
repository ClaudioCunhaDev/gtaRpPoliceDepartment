import React, { useState } from "react";
import location from "../../../assets/location.svg";
import clock from "../../../assets/clock.svg";
import INCIDENTSMODAL1 from "../../../assets/INCIDENTSMODAL1.svg";
import INCIDENTSMODAL2 from "../../../assets/INCIDENTSMODAL2.svg";
import InvolmentItem from "../../share/involmentItem/InvolmentItem";
import IncidenceItem from "../../share/incidenceItem/IncidenceItem";
import InvolmentItemNoEdit from "../involmentItem/InvolmentItemNoEdit";

const IncidentsModal = () => {
  return (
    <div className="absolute top-[16%] left-[15%] w-[70%] h-[68vh] bg-[#17171C] rounded-lg flex justify-center items-center select-none">
      <div className="grid grid-cols-10 gap-3 w-[90%] h-[90%]">
        <div className="h-[61.3vh] grid col-span-7 rounded-lg w-full ">
          <div className="font-bold text-lg h-[5vh] pl-5">
            <h1>NEW INCIDENT</h1>
          </div>
          <div className="h-[37vh] relative overflow-hidden bg-transparent rounded-lg p-5">
            <div className="h-[39vh]">
              <div className="w-[70%] h-[5vh] border-b border-b-white">
                <h1 className="text-2xl font-bold ">ENTER TITLE</h1>
              </div>
              <div className="w-[38vh] h-[17vh]">
                <textarea
                  className="focus:outline-none pt-2 border-b border-b-white h-full w-full placeholder:text-[#8C8C8C] bg-transparent resize-none"
                  placeholder="ENTER TEXT DESCRIPTION"
                />
              </div>
              <div className="flex justify-between pt-2 ">
                <div className="flex items-center gap-3 w-[30vh]">
                  <img className="h-4" src={location} alt="" />
                  <h1 className="font-bold text-sm">LOCATION:</h1>
                  <input
                    className="placeholder:text-[#8C8C8C] block bg-transparent w-full border-none rounded-md focus:outline-none"
                    type="text"
                    placeholder="ENTER TEXT..."
                  />
                </div>
                <div className="flex items-center gap-1 w-[300px]">
                  <img className="h-4" src={clock} alt="" />
                  <h1 className="font-bold text-sm">TIME:</h1>
                  <p className="text-sm">--/--, 00.00.0000</p>
                </div>
              </div>
              <div className="flex gap-3 py-3 w-[38vh] h-[9.4vh]  items-center ">
                <div className="p-3 cursor-pointer text-xs font-bold h-10 w-[100px] bg-red-500 flex items-center rounded justify-center">
                  <h1>CANCEL</h1>
                </div>
                <div className="cursor-pointer text-xs font-bold h-10 w-[100px] bg-green-500 flex items-center rounded justify-center">
                  <h1>CREATE</h1>
                </div>
              </div>
            </div>
            <img
              className="absolute right-0 top-1"
              src={INCIDENTSMODAL1}
              alt=""
            />
            <img
              className="absolute right-0 top-1"
              src={INCIDENTSMODAL2}
              alt=""
            />
          </div>
          <div className="h-[18.5vh]">
            <div className="px-5 mb-1 flex gap-3 text-md font-bold ">
              <h1>EVIDENCE</h1>
              <p className="text-3xl text-[#8E8E8E]">+</p>
            </div>
            <div className="flex h-[16.5vh] gap-3">
              <div className="flex flex-col gap-3 w-[40%]">
                <IncidenceItem />
                <IncidenceItem />
              </div>
              <div className="flex flex-col gap-3 w-[40%]">
                <IncidenceItem />
                <IncidenceItem />
              </div>
              <div className="flex flex-col gap-3 w-[40%]">
                <IncidenceItem />
                <IncidenceItem />
              </div>
            </div>
          </div>
        </div>
        <div className="grid col-span-3 h-[64.5vh]">
          <div className="gap-3 pl-5">
            <div className="font-bold text-lg h-[5vh]">
              <h1>INVOLMENT</h1>
            </div>
            <div className="h-[37vh]">
              <div className="flex justify-between text-[#8E8E8E]">
                <h1 className="text-sm font-bold">CRIMINALS</h1>
                <h1 className="pr-3 text-3xl">+</h1>
              </div>
              <div className=" flex flex-col gap-3 h-[17vh]">
                <InvolmentItemNoEdit />
                <InvolmentItem />
              </div>
              <div className="">
                <div className="flex justify-between text-[#8E8E8E]">
                  <h1 className="text-sm font-bold">SPECTATORS</h1>
                  <h1 className="pr-3 text-3xl">+</h1>
                </div>
                <div className="flex flex-col gap-3 h-[17vh]">
                  <InvolmentItem />
                  <InvolmentItem />
                </div>
              </div>
            </div>
            <div className="w-full h-[21.5vh]">
              <div className="flex justify-between text-sm font-bold text-[#8E8E8E]">
                <h1>OFFICERS</h1>
                <h1 className="pr-3 text-3xl">+</h1>
              </div>
              <div className="flex flex-col gap-3 h-[16.5vh]">
                <div className="flex flex-col gap-3">
                  <div className="h-[vh]">
                    <InvolmentItem />
                  </div>
                  <div className="h-[vh]">
                    <InvolmentItem />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncidentsModal;
