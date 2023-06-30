import React from "react";
import SearchBar from "./share/search/SearchBar";
import magnifyingGlass from "../assets/magnifying_glass.svg";
import MagnifyingGlass from "./share/magnifying glass/MagnifyingGlass";
import evidencePolice from "../assets/evidencePolice.svg";
import Evidence2Div from "./share/evidence2Div/Evidence2Div";

const Evidence2 = () => {
  return (
    <div className="w-full h-full select-none">
      <div className="grid grid-cols-6 gap-3 h-[79vh]  pt-3">
        <div className="grid col-span-2">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-bold">EVIDENCE</h1>
              <div className="bg-gray-500 text-4xs rounded-sm flex justify-center items-center cursor-pointer w-[7vh]">
                <h1 className="">CREATE NEW</h1>
              </div>
            </div>
            <div className="">
              <SearchBar />
            </div>
            <div className="flex flex-col gap-3 h-[63.9vh] overflow-y-auto">
              <MagnifyingGlass
                name="#21"
                description="LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S"
                image={magnifyingGlass}
              />
              <MagnifyingGlass
                name="#22"
                description="LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S"
                image={magnifyingGlass}
              />
              <MagnifyingGlass
                name="#22"
                description="LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S"
                image={magnifyingGlass}
              />
              <MagnifyingGlass
                name="#22"
                description="LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S"
                image={magnifyingGlass}
              />
              <MagnifyingGlass
                name="#22"
                description="LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S"
                image={magnifyingGlass}
              />
            </div>
          </div>
        </div>
        <div className="grid col-span-4 flex-col gap-3">
          <div className="w-full flex flex-col gap-3">
            <div>
              <h1 className="font-bold w-full text-lg px-3">
                EVIDENCE <span className="text-blue-500">#21</span>
              </h1>
            </div>
            <div className="h-full w-full">
              <div className="w-[100%] flex gap-3">
                <div className="flex flex-col w-[50%] h-full gap-3">
                  <div className="flex flex-col h-[61vh] gap-3 ">
                    <Evidence2Div />
                    <Evidence2Div />
                  </div>
                  <div className="h-[8.2vh] w-[100%] flex items-center">
                    <div className="w-full">
                      <div className="flex justify-center gap-3 w-[100%] text-md">
                        <div className="bg-red-500 rounded-md px-3 py-1 w-[70px] flex cursor-pointer justify-center items-center">
                          <h1>DELETE</h1>
                        </div>
                        <div className="bg-blue-500 rounded-md px-3 py-1 w-[70px] flex cursor-pointer justify-center items-center">
                          <h1>EDIT</h1>
                        </div>
                        <div className="bg-green-500 rounded-md px-3 py-1 w-[70px] flex cursor-pointer justify-center items-center">
                          <h1>SAVE</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[45%]">
                  <div className="h-[69vh] w-full flex flex-col gap-3">
                    <div className="max-w-[35vh] min-w-[27vh]">
                      <img
                        className="w-full min-w-[27vh] h-full"
                        src={evidencePolice}
                        alt=""
                      />
                    </div>
                    <div className="max-w-[35vh] min-w-[27vh]">
                      <img
                        className="w-full min-w-[27vh]"
                        src={evidencePolice}
                        alt=""
                      />
                    </div>
                    <div className="max-w-[35vh] min-w-[27vh]">
                      <img
                        className="w-full min-w-[27vh]"
                        src={evidencePolice}
                        alt=""
                      />
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

export default Evidence2;
