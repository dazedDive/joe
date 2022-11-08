
import { useState } from "react";
import { GiPinballFlipper } from "react-icons/gi";
import DateSelector from "../DateSelector/DateSelector";
const DateCard =({year,month,days,setDateChoosen,setDateControl,status,idresa})=>{
const [available,setAvailable]=useState(true)

    const HandleDate = (evt)=>{
        alert(`vous avez choisi la date : ${days} ${month} ${year}`)
        setDateChoosen([days,month,year,idresa])
        setDateControl(true)
    }


    return(
        <>
            <div className ="col-6">
            <span className="d-flex justify-content-start" idresa={idresa}>
                <button type="button" className="btn btn-secondary w-100 m-1" onClick={HandleDate}
                disabled={status}>
                <GiPinballFlipper className="fs-3" /> {days}{month}{year}</button>
            </span>
            </div>
        </>
    )
}

export default DateCard;
