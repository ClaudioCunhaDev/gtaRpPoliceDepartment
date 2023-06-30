import React, { useState } from "react";
import SearchBar from "./share/search/SearchBar";
import vasili from "../assets/vasili.svg";
import Warrants from "./share/warrants/Warrants";
import arrow_left from "../assets/Arrow2.svg";
import arrow_right from "../assets/Arrow1.svg";
import { useNavigationState } from "../atoms/navigationAtom";
import { useModalState } from "../atoms/modalState";
import INCIDENTSMODAL1 from "../assets/INCIDENTSMODAL1.svg";
import InformationItem from "./share/informationDiv/InformationItem";

const Profiles = () => {
  const [navigationState, setNavigationState] = useNavigationState();
  const [showModal, setShowModal] = useModalState();

  return (
    <div className="w-full h-full select-none">
      <div className="grid-cols-12 gap-3 grid h-[79vh] pt-3">
        <div className="grid col-span-4">
          <div className="grid">
            <div className="flex flex-col gap-3">
              <div className="">
                <h1 className="text-lg font-bold">PROFILES</h1>
              </div>
              <div>
                <SearchBar />
              </div>
              <div
                className="flex flex-col gap-3 overflow-y-auto h-[66vh]"
                onClick={() => setShowModal({ incident: false, profile: true })}
              >
                <Warrants
                  name="VASILI   HUSAK"
                  description="id: 2423523"
                  image={vasili}
                />
                <Warrants
                  name="VASILI   HUSAK"
                  description="id: 2423523"
                  image={vasili}
                />
                <Warrants
                  name="VASILI   HUSAK"
                  description="id: 2423523"
                  image={vasili}
                />
                <Warrants
                  name="VASILI   HUSAK"
                  description="id: 2423523"
                  image={vasili}
                />
                <Warrants
                  name="VASILI   HUSAK"
                  description="id: 2423523"
                  image={vasili}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid col-span-8">
          <div className="grid grid-cols-6 gap-3">
            <div className="grid col-span-4">
              <div className="flex flex-col gap-3 h-[76.5vh]">
                <h1 className="h-[24px] text-lg font-bold">MANAGE PROFILE</h1>
                <div className="relative overflow-hidden bg-transparent rounded-lg flex cursor-pointer p-3 w-[100%] h-[20.7vh]">
                  <div className="flex gap-3 h-[30vh] ">
                    <img
                      className="pt-1 h-[15vh] w-[15vh]"
                      src={vasili}
                      alt=""
                    />
                    <div className="flex flex-col gap-2 h-[16vh] ">
                      <h1 className="text-2xl font-bold">VASILI HUSAK</h1>
                      <p className="text-sm overflow-y-auto">
                        LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND
                        TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN THE
                        INDUSTRY'S STANDARD DUMMY TEXT EVER SINCE THE 1500S,
                        WHEN AN UNKNOWN PRINTER TOOK A GALLEY OF TYPE AND
                        SCRAMBLED IT TO
                      </p>
                    </div>
                  </div>
                  <img
                    className="absolute right-0 top-1 -z-10"
                    src={INCIDENTSMODAL1}
                    alt=""
                  />
                </div>
                <div className="relative overflow-hidden bg-transparent h-[15.5vh] rounded-lg flex flex-col ">
                  <div className="flex pt-5 pl-5 items-center gap-3">
                    <h1 className="font-bold text-sm text-[#5C5C5C]">
                      LICENSES
                    </h1>
                    <div className="w-5 h-5 rounded flex justify-center items-center bg-[#4A4A4B] cursor-pointer">
                      <img src={arrow_left} alt="" />
                    </div>
                    <div className="w-5 h-5 rounded flex justify-center items-center bg-[#4A4A4B] cursor-pointer">
                      <img src={arrow_right} alt="" />
                    </div>
                  </div>
                  <div className="flex gap-3 pl-5 pt-5 text-3xs cursor-pointer">
                    <div className=" font-bold h-6 w-[80px] bg-blue-500 flex items-center rounded justify-center">
                      <h1>DRIVER</h1>
                    </div>
                    <div className="font-bold h-6 w-[80px] bg-blue-500 flex items-center rounded justify-center">
                      <h1>GUN</h1>
                    </div>
                    <div className="font-bold h-6 w-[80px] bg-blue-500 flex items-center rounded justify-center">
                      <h1>PASSPORT</h1>
                    </div>
                  </div>
                  <img
                    className="absolute right-0 top-1"
                    src={INCIDENTSMODAL1}
                    alt=""
                  />
                </div>

                <div className="relative overflow-hidden bg-transparent h-[15.5vh] rounded-lg">
                  <div className="flex pt-4 pl-4 items-center gap-3">
                    <h1 className="font-bold text-sm text-[#5C5C5C]">
                      VEHICLES
                    </h1>
                    <div className="w-5 h-5 rounded flex justify-center items-center bg-[#4A4A4B] cursor-pointer">
                      <img src={arrow_left} alt="" />
                    </div>
                    <div className="w-5 h-5 rounded flex justify-center items-center bg-[#4A4A4B] cursor-pointer">
                      <img src={arrow_right} alt="" />
                    </div>
                  </div>
                  <div className="flex gap-1 p-4 flex-wrap text-3xs ">
                    <div className="font-bold h-6 w-[120px] bg-[#393939] flex items-center rounded justify-center">
                      <h1>12314sff3 - zentorno</h1>
                    </div>
                    <div className="font-bold h-6 w-[120px] bg-[#393939] flex items-center rounded justify-center">
                      <h1>12314sff3 - zentorno</h1>
                    </div>
                    <div className="font-bold h-6 w-[120px] bg-[#393939] flex items-center rounded justify-center">
                      <h1>12314sff3 - zentorno</h1>
                    </div>
                    <div className="font-bold h-6 w-[120px] bg-[#393939] flex items-center rounded justify-center">
                      <h1>12314sff3 - zentorno</h1>
                    </div>
                    <div className="font-bold h-6 w-[120px] bg-[#393939] flex items-center rounded justify-center">
                      <h1>12314sff3 - zentorno</h1>
                    </div>
                    <div className="font-bold h-6 w-[120px] bg-[#393939] flex items-center rounded justify-center">
                      <h1>12314sff3 - zentorno</h1>
                    </div>
                  </div>
                  <img
                    className="absolute right-0 top-1"
                    src={INCIDENTSMODAL1}
                    alt=""
                  />
                </div>
                <div className="relative overflow-hidden bg-transparent h-[15.5vh] rounded-lg">
                  <div className="flex pt-4 pl-4 items-center gap-3">
                    <h1 className="font-bold text-sm text-[#5C5C5C]">
                      HOUSING
                    </h1>
                    <div className="w-5 h-5 rounded flex justify-center items-center bg-[#4A4A4B] cursor-pointer">
                      <img src={arrow_left} alt="" />
                    </div>
                    <div className="w-5 h-5 rounded flex justify-center items-center bg-[#4A4A4B] cursor-pointer">
                      <img src={arrow_right} alt="" />
                    </div>
                  </div>
                  <div className="flex gap-1 p-4 flex-wrap text-3xs">
                    <div className="font-bold h-6 w-[120px] bg-[#393939] flex items-center rounded justify-center">
                      <h1>1234 wild oats drive</h1>
                    </div>
                    <div className="font-bold h-6 w-[120px] bg-[#393939] flex items-center rounded justify-center">
                      <h1>1234 wild oats drive</h1>
                    </div>
                    <div className="font-bold h-6 w-[120px] bg-[#393939] flex items-center rounded justify-center">
                      <h1>1234 wild oats drive</h1>
                    </div>
                    <div className="font-bold h-6 w-[120px] bg-[#393939] flex items-center rounded justify-center">
                      <h1>1234 wild oats drive</h1>
                    </div>
                    <div className="font-bold h-6 w-[120px] bg-[#393939] flex items-center rounded justify-center">
                      <h1>1234 wild oats drive</h1>
                    </div>
                  </div>
                  <img
                    className="absolute right-0 top-1"
                    src={INCIDENTSMODAL1}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="grid col-span-2">
              <div className="h-[75vh]">
                <div className="flex flex-col gap-3">
                  <h1 className="font-bold text-lg">INFORMATION</h1>
                  <div className="flex flex-col gap-3 text-sm">
                    <InformationItem
                      info="CHITZEN ID:"
                      description="dx234525sfs2342"
                    />
                    <InformationItem
                      info="PROFILE IMAGE URL:"
                      description="https://efdasfas234524sf"
                    />

                    <InformationItem
                      info="BIRTHDAY:"
                      description="15.05.2000"
                    />

                    <InformationItem info="HEIGHT:" description="190" />

                    <InformationItem info="PHONE:" description="8866134454" />

                    <InformationItem info="PROFESSION:" description="EMS" />

                    <InformationItem info="GENDER" description="MAN" />
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

export default Profiles;
