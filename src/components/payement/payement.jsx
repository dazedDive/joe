import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { GiPinballFlipper } from "react-icons/gi";
import { FaTruck } from "react-icons/fa";
import { useCookies } from 'react-cookie';
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useEffect } from "react";
import { getCookie } from "../../helpers/CookieHelper";

const Payement = () =>{



    const {setAuth,auth} = useContext (AuthContext);
    /////recupération des infos Cookies /////
    const [cookies, setCookie] = useCookies(['dateEtFlipper','fraislivraison']);
    ////////////importation des information Customer ///////////
    const [nameAccount,setNameAccount] = useState('');
    useEffect(()=>{
        fetch('http://joe.api/account/'+auth.id,{
            method : "post" ,
            credentials: "include",
            headers: {
            Authorization : getCookie("pinball")},
            body : JSON.stringify({with:['customer']})})
        .then(rep=>rep.json())
        .then(json=>{
            setNameAccount(json)
    })},[auth]);
   
    console.log(cookies.coordonees.distanceLivraison)

    ////////////////OBJET DE LA COMMANDE QUI SERA INSERER EN DB////////////
    const booking = {
        idFLipper : "nom du Flipper + (année)",
        idCustomer : "description de la machine",
        IdBooking : 0,
        year : "un argument de vente 1",
        month : "un argument de vente 2",
        weekend : "un argument de vente 3",
        timeOfRent : "un argument de vente 4",
        multiplier : 1,
        deliveryPrice : 0,
        tva : 0,
        total :0,
        adressFacture:0,
        cpFacture:0,
        cityFacture:0,
        adressDelivery:0,
        cpDelivery:0,
        cityDelivery:0,
        isdeleted:0,
        isReserved:1,
        isPayed:1
    
    }

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
                <p> nom : {nameAccount?.customer?.last_name}</p>
                <p> telephone : {nameAccount?.customer?.telephone}</p>
                </div>
                <div className="col-6">
                <p> prenom : {nameAccount?.customer?.first_name}</p>
                <p> mail : {nameAccount?.customer?.mail}</p>  
                </div>
            </div>
            <div className="row">
                <p>adresse de facturation : {nameAccount?.customer?.adresse_facturation}</p>
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
                {cookies?.fraislivraison.priceDelivery} €</h5>
                <h5> </h5>
                </span>
                <h3 className="fw-bold orange">PRIX TOTAL : 
                 {parseInt(cookies.fraislivraison.priceDelivery)+parseInt(cookies.dateEtFlipper.price)} € TTC, SOIT € de TVA</h3>
            </div>
        </div>
        <div className="container p-5">
        <button type="button" className="btn w-100">Valider ma commande !</button>
        </div>
        </>
    )
}
export default Payement;
