import React from "react";
import location from "../../../assets/location.svg";
import clock from "../../../assets/clock.svg";
import incidents2Div from "../../../assets/incidents2Div.svg";

const Incidents2Div = () => {
  return (
    <div className="w-[100%] h-[35vh] relative rounded-md">
      <div className="flex gap-3 items-center border-b-2 p-3">
        <h1 className="text-2xl font-bold">INCIDENT</h1>
        <div className="bg-[#444444] text-sm rounded-md flex justify-center items-center h-[2.8vh] p-3">
          <h1>#543555</h1>
        </div>
      </div>
      <div className="relative border-b-2 p-3 text-sm overflow-y-auto h-[18vh]  ">
        <p className="text-[#8C8C8C]">
          LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING
          INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S STANDARD DUMMY TEXT
          EVERSINCE THE 1500S, WHEN AN UNKNOWN PRINTER TOOK A GALLEY OF TYPE AND
          SCRAMBLED IT TO MAKE A TYPE SPECIMEN BOOK. IT HAS SURVIVED NOT ONLY
          FIVE CENTURIES, BUT ALSO THE LEAP INTO ELECTRONIC TYPESETTING,
          REMAINING ESSENTIALLY UNCHANGED. IT WAS POPULARISED IN ELECTRONIC
          TYPESETTING, REMAINING ESSENTIALLY
        </p>
      </div>
      <div className="flex gap-1 w-full text-sm justify-between">
        <div className="flex items-center gap-1 p-3">
          <img src={location} alt="" />
          <h1 className="font-bold">LOCATION:</h1>
          <p className="text-[#8C8C8C]">VINEWOOD, 234A, 23</p>
        </div>
        <div className="p-3 flex items-center gap-1">
          <img src={clock} alt="" />
          <h1 className="font-bold">TIME:</h1>
          <p>23:41</p>
          <p className="text-[#8C8C8C]">12.11.22</p>
        </div>
      </div>
      <div className="flex gap-3 pt-3 px-3 justify-start text-xs">
        <div className="cursor-pointer font-bold h-10 w-[11vh] bg-red-500 flex items-center rounded justify-center">
          <h1>DELETE</h1>
        </div>
        <div className="cursor-pointer font-bold h-10 w-[11vh] bg-blue-500 flex items-center rounded justify-center">
          <h1>EDIT</h1>
        </div>
        <div className="cursor-pointer font-bold h-10 w-[11vh] bg-green-500 flex items-center rounded justify-center">
          <h1>SAVE</h1>
        </div>
      </div>
      <img
        className="absolute right-0 top-0 -z-10"
        src={incidents2Div}
        alt=""
      />
    </div>
  );
};

export default Incidents2Div;
