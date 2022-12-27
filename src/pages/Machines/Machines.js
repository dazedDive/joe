import '../Machines/Machines.css'
import ProductCard from "../../components/ProductCard/ProductCard";
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";
import MachineTitle from "../../../src/img/nos machines.png"
function Machines  (){
    return(
        <>
            <div className="container mt-5">
                <img src={MachineTitle} className="img-fluid" alt="machineTitle"></img>
                <p className="fw-bold">Tout nos flippers sont révisés et nettoyés par nos mécaniciens avant de vous être livrés .</p>
            </div>
            <div className="container-fluid">
                <ProductCard />  
            </div>
        </>
    )
}

export default Machines;