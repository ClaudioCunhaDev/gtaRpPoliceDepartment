import React, { useState } from "react";
import Warning from "./share/warning/Warning";
import feedBack from "../assets/feedback.svg";
import SearchBar from "./share/search/SearchBar";
import ArrowLeft from "./share/arrows/ArrowLeftButton";
import ArrowRight from "./share/arrows/ArrowRightButton";
import { useNavigationState } from "../atoms/navigationAtom";

const Incidents = () => {
  const [navigationState, setNavigationState] = useNavigationState();

  return (
    <div className="w-full h-[79vh] select-none">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 text-xl">
          <h1 className="text-4xl">SEARCH RESULT</h1>
          <div className="bg-blue-500 rounded-md flex justify-center items-center h-[20px] p-3 text-xl">
            <h1>54 RESULT</h1>
          </div>
        </div>
        <div className="w-[32.5%]">
          <SearchBar />
        </div>
      </div>
      <div className="flex gap-3 text-sm">
        <p>TEXT</p>
        <p>TEXT</p>
        <p>TEXT</p>
      </div>
      <div className="grid grid-cols-3 gap-3 h-[65.7vh] pt-3">
        <div
          className="flex flex-col gap-3 overflow-y-auto h-[64vh]"
          onClick={() => {
            setNavigationState({ path: "incidents2" });
          }}
        >
          <Warning
            name="DRUG TRAFFICKING'S"
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
        <div
          className="flex flex-col gap-3 cursor-pointer overflow-y-auto h-[64vh]"
          onClick={() => {
            setNavigationState({ path: "incidents2" });
          }}
        >
          <Warning
            name="MISSING PERSON"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            image={feedBack}
          />
          <Warning
            name="MISSING PERSON"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            image={feedBack}
          />
          <Warning
            name="MISSING PERSON"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            image={feedBack}
          />
          <Warning
            name="MISSING PERSON"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            image={feedBack}
          />
          <Warning
            name="MISSING PERSON"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            image={feedBack}
          />
        </div>
        <div
          className="flex flex-col gap-3 cursor-pointer overflow-y-auto h-[64vh]"
          onClick={() => {
            setNavigationState({ path: "incidents2" });
          }}
        >
          <Warning
            name="MISSING PERSON"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            image={feedBack}
          />
          <Warning
            name="MISSING PERSON"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            image={feedBack}
          />
          <Warning
            name="MISSING PERSON"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            image={feedBack}
          />
          <Warning
            name="MISSING PERSON"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            image={feedBack}
          />
          <Warning
            name="MISSING PERSON"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            image={feedBack}
          />
        </div>
      </div>
      <div className="flex justify-center gap-3 pt-3 items-center">
        <ArrowLeft />
        <p className="">1/5</p>
        <ArrowRight />
      </div>
    </div>
  );
};

export default Incidents;
