import React from "react"
import ChargesItem from "./ChargesItem"
import PROFILEMODALGREEN1 from "../../../assets/PROFILEMODALGREEN1.svg"
import PROFILEMODALGREEN2 from "../../../assets/PROFILEMODALGREEN2.svg"


const ArsonCard = () =>{
    return(
        <ChargesItem
              name="ARSON"
              time="48 MONTHS"
              value="$10 000"
              colorName="#244224"
              img1={PROFILEMODALGREEN1}
              img2={PROFILEMODALGREEN2}
            />
    )
}

export default ArsonCard
