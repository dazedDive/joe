import '../Machines/Machines.css'
import ProductCard from "../../components/ProductCard/ProductCard";
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";

function Machines  (){




    return(
        <>
        <div className="container mt-5">
        <h3 className="title-dot"> Nos Machines :</h3>
        <p>Tout nos flippers sont révisés et nettoyés par nos mécaniciens avant de vous être livrés .</p>
        </div>

        <div className="container">
            <ProductCard image={"./assets/images/twilightzone.jpg"}/>  
        </div>
                       
        </>
    )
}

export default Machines;