import React, { useState } from "react";
import Warning from "./share/warning/Warning";
import feedBack from "../assets/feedback.svg";
import SearchBar from "./share/search/SearchBar";
import { useModalState } from "../atoms/modalState";
import InvolmentItem from "./share/involmentItem/InvolmentItem";
import InvolmentItemNoEdit from "./share/involmentItem/InvolmentItemNoEdit";
import IncidenceItem from "./share/incidenceItem/IncidenceItem";
import Incidents2Div from "./share/incidents2Div/Incidents2Div";

const Incidents2 = () => {
  const [showModal, setShowModal] = useModalState();
  
  return (
    <div className="w-full h-[79vh] select-none">
      <div className={`grid gap-3 pt-3 grid-cols-12`}>
        <div className="grid col-span-4 w-full">
          <div className="flex flex-col gap-3 ">
            <div className="flex justify-between gap-3 ">
              <h1 className="text-lg font-bold">Incidents</h1>
              <div
                className="bg-gray-500 text-4xs rounded-sm flex justify-center items-center cursor-pointer w-[7vh]"
                onClick={() => setShowModal({ incident: true, profile: false })}
              >
                <h1 className="">CREATE NEW</h1>
              </div>
            </div>
            <div className="w-full">
              <SearchBar />
            </div>
            <div className="flex flex-col gap-3 overflow-y-auto h-[64vh]">
              <Warning
                name="Drug Trafficking's"
                description="LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S"
                image={feedBack}
              />
              <Warning
                name="MISSING PERSON"
                description="LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S"
                image={feedBack}
              />
              <Warning
                name="MISSING PERSON"
                description="LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S"
                image={feedBack}
              />
              <Warning
                name="MISSING PERSON"
                description="LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S"
                image={feedBack}
              />
              <Warning
                name="MISSING PERSON"
                description="LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S"
                image={feedBack}
              />
            </div>
          </div>
        </div>
        <div className="grid col-span-8">
          <div className="grid gap-3 grid-rows-2">
            <div className="grid grid-rows-1 grid-cols-6 gap-3">
              <div className="grid col-span-4">
                <h1 className="font-bold text-lg ml-3 mb-3">Incident</h1>
                <Incidents2Div />
              </div>
              <div className="grid col-span-2">
                <h1 className="font-bold text-lg mb-3">Incidence</h1>
                <IncidenceItem />
                <IncidenceItem />
                <IncidenceItem />
                <IncidenceItem />
                <IncidenceItem />
              </div>
            </div>
            <div className="">
              <h1 className="text-lg font-bold p-3">INVOLMENT</h1>
              <div className="grid grid-cols-3 gap-3">
                <div className="grid col-span-1 gap-3 h-[24.5vh]">
                  <div className="flex justify-between px-3 text-sm text-[#8E8E8E] ">
                    <h1>CRIMINALS</h1>
                    <h1>+</h1>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <div className="">
                      <InvolmentItemNoEdit />
                    </div>
                    <div className="">
                      <InvolmentItem />
                    </div>
                    <div className="">
                      <InvolmentItem />
                    </div>
                  </div>
                </div>
                <div className="grid col-span-1 gap-3 h-[24.5vh]">
                  <div className="flex justify-between px-3 text-sm text-[#8E8E8E]">
                    <h1>OFFICERS</h1>
                    <h1>+</h1>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <div className="">
                      <InvolmentItem />
                    </div>
                    <div className="">
                      <InvolmentItem />
                    </div>
                    <div className="">
                      <InvolmentItem />
                    </div>
                  </div>
                </div>
                <div className="grid col-span-1 gap-3 h-[24.5vh]">
                  <div className="flex justify-between px-3 text-sm text-[#8E8E8E]">
                    <h1>SPECTATORS</h1>
                    <h1>+</h1>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <div className="">
                      <InvolmentItem />
                    </div>
                    <div className="">
                      <InvolmentItem />
                    </div>
                    <div className="">
                      <InvolmentItem />
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

export default Incidents2;
