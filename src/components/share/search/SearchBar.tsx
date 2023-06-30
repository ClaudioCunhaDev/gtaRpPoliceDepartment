import React from "react";
import search from "../../../assets/search.svg";

const SearchBar = () => {
  return (
    <>
      <div className="w-full flex justify-end border-2 border-black rounded-lg bg-transparent p-2 cursor-text">
        <input
          className="placeholder:text-slate-400 block bg-transparent w-full border-none rounded-md focus:outline-none"
          type="text"
        />
        <div className="cursor-pointer bg-[#1774FF] h-8 w-8 flex justify-center items-center rounded">
          <img className="" src={search} alt="" />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
