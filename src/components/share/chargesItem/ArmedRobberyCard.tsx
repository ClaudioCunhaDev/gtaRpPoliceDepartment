import React from "react"
import PROFILEMODALRED1 from "../../../assets/PROFILEMODALRED1.svg"
import PROFILEMODALRED2 from "../../../assets/PROFILEMODALRED2.svg"
import ChargesItem from "./ChargesItem";


const ArmedRobbery = () => {
    return (
        <ChargesItem
            name="ARMED ROBBERY"
            time="48 MONTHS"
            value="$20 000"
            img1={PROFILEMODALRED1}
            img2={PROFILEMODALRED2}
            colorName="#673030"
        />
    )
}

export default ArmedRobbery