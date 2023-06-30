import React from "react"
import ChargesItem from "../../share/chargesItem/ChargesItem";
import PROFILEMODALGOLD1 from "../../../assets/PROFILEMODALGOLD1.svg"
import PROFILEMODALGOLD2 from "../../../assets/PROFILEMODALGOLD2.svg"


const DrivingThroughtRedLightsCard = () =>{
    return(
        
<ChargesItem
              name="driving throught red lights"
              time="48 MONTHS"
              value="$20 000"
              colorName="#676530"
              img1={PROFILEMODALGOLD1}
              img2={PROFILEMODALGOLD2}
            />
        
    )
}

export default DrivingThroughtRedLightsCard