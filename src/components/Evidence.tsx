import React from "react";
import SearchBar from "./share/search/SearchBar";
import magnifyingGlass from "../assets/magnifying_glass.svg";
import MagnifyingGlass from "./share/magnifying glass/MagnifyingGlass";
import { useNavigationState } from "../atoms/navigationAtom";
import EVIDENCE1 from "../assets/EVIDENCE1.svg";
import EVIDENCE2 from "../assets/EVIDENCE2.svg";
import DATANOFOUND1 from "../assets/DATANOFOUND1.svg";
import DATANOFOUND2 from "../assets/DATANOFOUND2.svg";

const Evidence2 = () => {
  const [navigationState, setNavigationState] = useNavigationState();

  return (
    <div className="w-full h-full ">
      <div className="grid grid-cols-6 gap-3 h-[79vh] overflow-auto pt-3 select-none">
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
            <div
              className="flex flex-col gap-3 h-[63.9vh] overflow-y-auto"
              onClick={() => {
                setNavigationState({ path: "evidence2" });
              }}
            >
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
          <div className="flex flex-col gap-3 h-full text-xl">
            <div className="flex">
              <h1 className="font-bold px-3">EVIDENCE</h1>
              <h1 className="text-blue-500">#21</h1>
            </div>
            <div className="h-[30%] relative overflow-hidden bg-transparent rounded-lg flex flex-col justify-center px-5 mr-5">
              <div className="h-[50%] flex items-center p-3">
                <div className="text-3xs font-bold bg-[#202020] w-[15vh] flex justify-center items-center rounded-lg h-10">
                  <h1>EVIDENCE #1 (BULLET)</h1>
                </div>
              </div>
              <div className="h-[50%] flex w-[60%] justify-between px-3">
                <div className="">
                  <h1 className="text-3xs text-[#7A7A7C]">FIRST NAME</h1>
                  <h1 className="font-bold text-2xl border-b border-b-white">
                    VASILI
                  </h1>
                </div>
                <div>
                  <h1 className="text-3xs text-[#7A7A7C]">LAST NAME</h1>
                  <h1 className="font-bold text-2xl border-b border-b-white">
                    HUSAK
                  </h1>
                </div>
              </div>
              <img className="absolute right-6 top-3" src={EVIDENCE1} alt="" />
              <img className="absolute right-0 top-3" src={EVIDENCE2} alt="" />
            </div>
            <div className="h-[25%] rounded-lg flex gap-3 mr-5">
              <div className="w-[50%] relative overflow-hidden bg-transparent p-3">
                <div className="h-[50%] flex items-center p-3">
                  <div className="text-3xs font-bold bg-[#202020] w-[15vh] flex justify-center items-center rounded-lg h-10">
                    <h1>EVIDENCE #2 (BULLET)</h1>
                  </div>
                </div>
                <div className="h-[50%] flex w-[100%] justify-between px-3">
                  <div>
                    <p className="text-3xs">ERROR</p>
                    <h1 className="font-bold text-2xl border-b border-b-white">
                      DATA NOT FOUND
                    </h1>
                  </div>
                </div>
                <img
                  className="absolute right-0 top-3"
                  src={DATANOFOUND1}
                  alt=""
                />
                <img
                  className="absolute right-0 top-3"
                  src={DATANOFOUND2}
                  alt=""
                />
              </div>
              <div className="w-[50%] relative overflow-hidden bg-transparent p-3">
                <div className="h-[50%] flex items-center p-3">
                  <div className="text-3xs font-bold bg-[#202020] w-[15vh] flex justify-center items-center rounded-lg h-10">
                    <h1>EVIDENCE #3 (BULLET)</h1>
                  </div>
                </div>
                <div className="h-[50%] flex w-[100%] justify-between px-3">
                  <div>
                    <p className="text-3xs">ERROR</p>
                    <h1 className="font-bold text-2xl border-b border-b-white">
                      DATA NOT FOUND
                    </h1>
                  </div>
                </div>
                <img
                  className="absolute right-0 top-3"
                  src={DATANOFOUND1}
                  alt=""
                />
                <img
                  className="absolute right-0 top-3"
                  src={DATANOFOUND2}
                  alt=""
                />
              </div>
            </div>
            <div className="h-[25%] rounded-lg flex gap-3 mr-5">
              <div className="w-[50%] relative overflow-hidden bg-transparent p-3">
                <div className="h-[50%] flex items-center p-3">
                  <div className="text-3xs font-bold bg-[#202020] w-[15vh] flex justify-center items-center rounded-lg h-10">
                    <h1>EVIDENCE #2 (BULLET)</h1>
                  </div>
                </div>
                <div className="h-[50%] flex w-[100%] justify-between px-3">
                  <div>
                    <h1 className="text-3xs">ERROR</h1>
                    <h1 className="font-bold text-2xl border-b border-b-white">
                      DATA NOT FOUND
                    </h1>
                  </div>
                </div>
                <img
                  className="absolute right-0 top-3"
                  src={DATANOFOUND1}
                  alt=""
                />
                <img
                  className="absolute right-0 top-3"
                  src={DATANOFOUND2}
                  alt=""
                />
              </div>
              <div className="w-[50%] relative overflow-hidden bg-transparent p-3">
                <div className="h-[50%] flex items-center p-3">
                  <div className="text-3xs font-bold bg-[#202020] w-[15vh] flex justify-center items-center rounded-lg h-10">
                    <h1>EVIDENCE #3 (BULLET)</h1>
                  </div>
                </div>
                <div className="h-[50%] flex w-[100%] justify-between px-3">
                  <div>
                    <p className="text-3xs">ERROR</p>
                    <h1 className="font-bold text-2xl border-b border-b-white">
                      DATA NOT FOUND
                    </h1>
                  </div>
                </div>
                <img
                  className="absolute right-0 top-3"
                  src={DATANOFOUND1}
                  alt=""
                />
                <img
                  className="absolute right-0 top-3"
                  src={DATANOFOUND2}
                  alt=""
                />
              </div>
            </div>
            <div className="h-[20%] flex justify-center items-center gap-3 mr-5 text-md">
              <div className="bg-red-500 rounded-lg px-3 py-1 w-[20%] flex cursor-pointer justify-center items-center">
                <h1>DELETE</h1>
              </div>
              <div className="bg-blue-500 rounded-lg px-3 py-1 w-[20%] flex cursor-pointer justify-center items-center">
                <h1>EDIT</h1>
              </div>
              <div className="bg-green-500 rounded-lg px-3 py-1 w-[20%] flex cursor-pointer justify-center items-center">
                <h1>SAVE</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evidence2;
