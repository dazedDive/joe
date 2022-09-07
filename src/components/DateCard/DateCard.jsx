
import { useState } from "react";
import { GiAbstract013 } from "react-icons/gi";
import DateSelector from "../DateSelector/DateSelector";
const DateCard =({year,month,days,setDateChoosen,dateChoosen})=>{
const [available,setAvailable]=useState(true)

    const HandleDate = (evt)=>{
        alert('click')
        setDateChoosen(days)
    }


    return(
        <>
            <div className ="col-6">
            <span className="d-flex justify-content-start ">
                <button type="button" className="btn btn-secondary w-75 m-2"><GiAbstract013 className="fs-3" onClick={HandleDate}/> {days}</button>
            </span>
            </div>
        </>
    )
}

export default DateCard;
