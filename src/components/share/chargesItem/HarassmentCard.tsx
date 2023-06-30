import React from "react"
import ChargesItem from "./ChargesItem"
import PROFILEMODALBLUE1 from "../../../assets/PROFILEMODALBLUE1.svg"
import PROFILEMODALBLUE2 from "../../../assets/PROFILEMODALBLUE2.svg"

const Harassment = () =>{
    return(
            <ChargesItem
              name="HARASSMENT"
              time="48 MONTHS"
              value="$20 000"
              img1={PROFILEMODALBLUE1}
              img2={PROFILEMODALBLUE2}
              colorName="#305D67"
            />
    )
}

export default Harassment