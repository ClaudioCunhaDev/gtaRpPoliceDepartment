import React from "react";
import done from "../../../assets/done.svg";

const IssueWarrantGray = () => {
  return (
    <div>
      <div className="bg-transparent h-[8.7vh] p-3 rounded-lgselect-none">
        <div className="flex justify-between items-center">
          <h1 className="text-md">ISSUE A WARRANT</h1>
          <div className="flex w-5 h-5 justify-center items-center bg-[#353535]">
            <img src={done} alt="" />
          </div>
        </div>
        <div className="font-bold overflow-y-auto h-[6.5vh]">
          <h1 className="text-[#606060] text-3xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </h1>
        </div>
      </div>
    </div>
  );
};

export default IssueWarrantGray;
