import React from "react";
import Bcso from "./share/activeUnitsItem/Bcso";
import Lpsd from "./share/activeUnitsItem/Lspd";

const ActiveUnits = () => {
  return (
    <div className="h-[79vh] flex flex-col gap-3 p-3 pt-3 overflow-y-auto select-none">
      <h1 className="font-bold text-lg">ACTIVE UNITS</h1>
      <Lpsd name="VASILI HUSAK" number={100} value={0} />
      <Bcso name="JFOSTER" number={101} value={0} />
      <Bcso name="FILDON" number={102} value={0} />
      <Lpsd name="DASTEX" number={103} value={0} />
      <Bcso name="FILDON" number={102} value={0} />
      <Lpsd name="DASTEX" number={103} value={0} />
      <Lpsd name="DASTEX" number={103} value={0} />
      <Lpsd name="VASILI HUSAK" number={100} value={0} />
      <Bcso name="JFOSTER" number={101} value={0} />
      <Bcso name="FILDON" number={102} value={0} />
      <Bcso name="FILDON" number={102} value={0} />
    </div>
  );
};

export default ActiveUnits;
