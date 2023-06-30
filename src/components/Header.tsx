import React from "react";
import sealOfTheLosAngeles from "../assets/Seal_of_the_Los_Angeles_Police_Department.svg";
import ellipse from "../assets/Ellipse58.svg";

const Header = () => {
  return (
    <div className="flex justify-between items-center pl-5 mb-2 flex-wrap select-none">
      <div className="flex items-center text-3xl">
        <img src={sealOfTheLosAngeles} className="mr-3"></img>
        <div className="flex gap-2">
          <h1 className="font-bold">LOS SANTOS</h1>
          <h2 className="text-blue-600"> POLICE DEPARTMENT</h2>
        </div>
      </div>
      <div className="flex items-center text-xs">
        <div className="flex flex-col items-end mr-3">
          <h1 className="font-bold">VASILI HUSAK</h1>
          <p className="text-blue-600">OFFICER</p>
        </div>
        <img src={ellipse} className="mr-3 mb-3 " />
      </div>
    </div>
  );
};

export default Header;
