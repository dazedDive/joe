import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { GiPinballFlipper } from "react-icons/gi";
import { FaTruck } from "react-icons/fa";

import { useCookies } from 'react-cookie';
const Payement = () =>{



    /////recupération des infos Cookies /////
    const [cookies, setCookie] = useCookies(['dateEtFlipper','coordonees','fraislivraison']);
    
   
    console.log(cookies.coordonees.distanceLivraison)

    return (
        <>
        <div className="container mt-5">
        <span className="d-flex justify-content-center">
        <p>Etape 3/3</p>
        <BsFillCreditCard2BackFill className="fs-4 mx-1"/>
        <p>Paiement sécurisé</p>
        </span>
        </div>
        <div className="container mt-3 mb-2 bg-light p-2">
            <h3 className="title-dot"> Resumé de votre reservation</h3>
            <div className="row">
                <div className="col-6">
                <p> nom : {cookies.coordonees.name}</p>
                <p> telephone : {cookies.coordonees.tel}</p>
                </div>
                <div className="col-6">
                <p> prenom : {cookies.coordonees.firstName}</p>
                <p> mail : {cookies.coordonees.mail}</p>  
                </div>
            </div>
            <div className="row">
                <p>adresse de facturation : {cookies.coordonees.adress} , {cookies.coordonees.inputCp}-
                {cookies.coordonees.cityLivraison}</p>
                <p className="fw-bold">adresse de livraison : 
                {cookies.coordonees.adressL}, {cookies.coordonees.inputCp} - {cookies.coordonees.cityLivraison}</p>
                <p className="fw-bold"> Flipper : {cookies.dateEtFlipper.flipper} </p>
                <p className="fw-bold"> Week End du : {cookies.dateEtFlipper.dateChoosen}</p>
                <p className="fw-bold"> durée : {cookies.dateEtFlipper.timeRent} </p>
                <span className ="d-flex justify-content-start">
                    <GiPinballFlipper className="fs-4 mx-1"/>
                <h5 className="fw-bold"> Prix TTC de la Location {cookies.dateEtFlipper.price}  €</h5>
                </span>
                <span className ="d-flex justify-content-start">
                    <FaTruck className="fs-4 mx-1"/>
                <h5 className="fw-bold"> Prix TTC de la Livraison : 
                {((cookies.fraislivraison.distanceLivraison)/1000).toFixed()} €</h5>
                <h5> </h5>
                </span>
                <h3 className="fw-bold orange">PRIX TOTAL : 
                 {(((cookies.fraislivraison.distanceLivraison)/1000)+cookies.dateEtFlipper.price).toFixed()} € TTC, SOIT € de TVA</h3>
            </div>
        </div>
        <div className="container p-5">
        
        </div>
        </>
    )
}
export default Payement;
