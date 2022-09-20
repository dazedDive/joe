import DistanceCalculator from "../../components/DistanceCalculator/DistanceCalculator"
import "../Reserver/Reserver.css"
import DateSelector from "../../components/DateSelector/DateSelector"
import { Outlet, useParams } from "react-router-dom"
import NavBarAdmin from "../../components/NavBarAdmin/NavBarAdmin"

const Reserver =()=>{
const {step}=useParams();

    return(
        <>
        <DateSelector/>
       
        </>

    )
}
export default Reserver