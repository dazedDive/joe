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
            <div className="row">
                <div className="col-1">
                <span className="mt-5">
                <GrCaretPrevious className='fs-1'/>  
                <p>Précedent</p>
                </span>
                </div>
                <div className="col-10">
                <ProductCard image={"./assets/images/twilightzone.jpg"} 
                title={"The TwilightZOne"}
                description="Twilight Zone de Bally est un flipper mythique, basé sur la célèbre série télévisé 
                du même nom (en français, la Quatrième Dimension). C'est un flipper large, 
                conçu par le célèbre Pat Lawlor. Il présente un distributeur de chewing-gums qui stocke les billes,
                 de nombreuses lampes flash, des rampes sous le plateau.."
                 price={119}
                 desciptionList={[{option1:"numéro 1 au classement IPDB",option2:"Présence d'une bille ceramique",
                 option3:"ecran DOT avec animation",option4:"Large plateau",
                 option5:"de nombreuses missions",option6:"un mode ultime avec 6 Billes"}]}/>  
                 
                </div>
                <div className="col-1">
                <span className="mt-5">
                <GrCaretNext className='fs-1'/>
                <p>Suivant</p>
                </span>
                </div>
    
            
            </div>
        </div>
        </>
    )
}

export default Machines;