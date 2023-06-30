import React from "react";
import Annoucements from "./Annoucements";
import ActiveUnits from "./ActiveUnits";

const Home = () => {
  return (
    <div className="grid grid-cols-12 w-full h-full">
      <div className="col-span-8 h-full">
        <Annoucements />
      </div>
      <div className="col-span-4 h-full">
        <ActiveUnits />
      </div>
    </div>
  );
};

export default Home;
