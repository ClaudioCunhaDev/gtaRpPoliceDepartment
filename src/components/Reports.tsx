import React from "react";
import Warning from "./share/warning/Warning";
import SearchBar from "./share/search/SearchBar";
import warningIMG from "../assets/warning_amber.svg";
import REPORTS1 from "../assets/REPORTS1.svg";
import REPORTS2 from "../assets/REPORTS2.svg";
import SETTINGS1 from "../assets/SETTINGS1.svg";

const Reports = () => {
  return (
    <div className="w-full h-full select-none">
      <div className="grid grid-cols-6 gap-3 h-[79vh] pt-3">
        <div className="grid col-span-2">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center text-lg">
              <h1 className="font-bold">REPORTS</h1>
              <div className="bg-gray-500 text-4xs rounded-sm flex justify-center items-center cursor-pointer w-[7vh]">
                <h1 className="">CREATE NEW</h1>
              </div>
            </div>
            <div className="">
              <SearchBar />
            </div>
            <div className="flex flex-col gap-3 overflow-y-auto h-[63.9vh]">
              <Warning
                name="DRUG TRAFFICKING'S"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
                image={warningIMG}
              />
              <Warning
                name="DRUG TRAFFICKING'S"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
                image={warningIMG}
              />
              <Warning
                name="DRUG TRAFFICKING'S"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
                image={warningIMG}
              />
              <Warning
                name="DRUG TRAFFICKING'S"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
                image={warningIMG}
              />
              <Warning
                name="DRUG TRAFFICKING'S"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
                image={warningIMG}
              />
            </div>
          </div>
        </div>
        <div className="grid col-span-4">
          <div className="flex flex-col gap-3">
            <h1 className="text-lg font-bold px-3">REPORT INSTEAD</h1>
            <div className="h-[69.5vh] flex flex-col gap-3 pt-3 w-[97%]">
              <div className="relative overflow-hidden bg-transparent rounded-lg w-[100%] h-[35vh] px-5">
                <div className="flex justify-between items-center h-[10vh]">
                  <div className="border-b border-b-white">
                    <div className="">
                      <h1 className="text-3xs">TITLE</h1>
                      <h1 className="text-2xl font-bold">MISSING SUBJECT</h1>
                    </div>
                  </div>
                  <div className="border-b border-b-white">
                    <h1 className="text-3xs">INCIDENT ID</h1>
                    <h1 className="text-2xl font-bold"># 35345</h1>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pt-3">
                  <h1 className="text-3xs">DESCRIPTION</h1>
                  <p className="text-sm overflow-y-auto h-[12vh]">
                    LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND
                    TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S
                    STANDARD DUMMY TEXT EVER SINCE THE 1500S, WHEN AN UNKNOWN
                    PRINTER TOOK A GALLEY OF TYPE AND SCRAMBLED IT TO LOREM
                    IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING
                    INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S STANDARD DUMMY
                    TEXT EVER SINCE THE 1500S, WHEN AN UNKNOWN PRINTER TOOK A
                    GALLEY OF TYPE AND SCRAMBLED IT TO SUM HAS BEEN THE
                    INDUSTRY'S STANDARD DUMMY TEXT EVER SINCE THE 1500S, WHEN AN
                    UNKNOWN PRINTER TOOK A GALLEY OF TYPE AND SCRAMBLED IT TO
                  </p>
                </div>
                <img
                  className="absolute right-7 top-3 -z-10"
                  src={REPORTS1}
                  alt=""
                />
                <img
                  className="absolute right-0 top-3 -z-10"
                  src={REPORTS2}
                  alt=""
                />
              </div>
              <div className="w-full">
                <div className="flex flex-col gap-3">
                  <h1 className="text-lg font-bold px-3 pt-3">SETTINGS</h1>
                  <div className="h-[15vh] w-[100%] flex gap-3">
                    <div className="w-[60%] relative overflow-hidden bg-transparent p-5 flex flex-col rounded-md ">
                      <h1 className="text-sm">BROADCAST TO</h1>
                      <div className="font-bold h-[80%] flex text-xs gap-2 justify-center items-center cursor-pointer">
                        <div className="text-md p-1 h-[5vh] font-bold bg-blue-500 flex rounded items-center justify-center ">
                          <h1>POLICE OFFICERS</h1>
                        </div>
                        <div className="text-md p-1 h-[5vh] font-bold bg-[#272727] flex items-center rounded justify-center">
                          <h1>EMERGENY PERSONAL</h1>
                        </div>
                        <div className="text-md p-1 h-[5vh] font-bold bg-[#272727] flex items-center rounded justify-center">
                          <h1>EVERYONE</h1>
                        </div>
                      </div>
                      <img
                        className="absolute right-3 top-3"
                        src={SETTINGS1}
                        alt=""
                      />
                    </div>
                    <div className="h-[15vh] w-[40%] bg-transparent p-5 flex flex-col rounded-md">
                      <h1 className="text-sm">BROADCAST TO</h1>
                      <div className="flex text-md font-bold gap-5 h-[80%] items-center justify-center">
                        <div className="font-bold w-[10vh] h-[5vh] bg-blue-500 flex items-center rounded justify-center p-1 cursor-pointer">
                          <h1>RESOLVED</h1>
                        </div>
                        <div className="font-bold w-[10vh] h-[5vh] bg-[#272727] flex items-center rounded justify-center p-1 cursor-pointer">
                          <h1>ONGOING</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[15vh] flex gap-3">
                    <div className="h-[100%] w-[50%] bg-transparent p-5 rounded-md flex gap-3 justify-between items-center">
                      <div className="flex gap-3 text-xl">
                        <h1 className=" font-bold">TIME:</h1>
                        <div className="flex gap-2">
                          <p className="text-[#D1D1D1]">23:41</p>
                          <p className="text-[#8C8C8C]">12.11.22</p>
                        </div>
                      </div>
                      <div className="text-lg w-[8vh] h-[5vh] font-bold bg-[#272727] flex items-center rounded justify-center p-1 cursor-pointer">
                        <h1>NEVER EXPIRE</h1>
                      </div>
                    </div>
                    <div className="h-[100%] w-[55%] bg-transparent p-5 rounded-md flex gap-3 justify-center items-center text-xs">
                      <div className="font-bold w-[8vh] h-10 bg-red-500 flex items-center rounded justify-center p-3 cursor-pointer">
                        <h1>DELETE</h1>
                      </div>
                      <div className="font-bold w-[8vh] h-10 bg-blue-500 flex items-center rounded justify-center p-3 cursor-pointer">
                        <h1>EDIT</h1>
                      </div>
                      <div className="font-bold w-[8vh] h-10 bg-green-500 flex items-center rounded justify-center p-3 cursor-pointer">
                        <h1>SAVE</h1>
                      </div>
                    </div>
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

export default Reports;
