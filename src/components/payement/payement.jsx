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
    const [cookies, setCookie] = useCookies(['dateEtFlipper','coordonees']);
    ////////////importation des information Customer ///////////
    const [nameAccount,setNameAccount] = useState('');
    useEffect(()=>{
        (auth.id != 0) &&
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
   
    console.log(cookies)


    ////////////////OBJET DE LA COMMANDE QUI SERA INSERER EN DB////////////
    const booking = {
        idFLipper : cookies.dateEtFlipper.flipperId,
        flipperPrice : cookies.dateEtFlipper.price,
        idCustomer : nameAccount?.customer?.Id_customer,
        customerFirstName : nameAccount?.customer?.first_name,
        customerLastName : nameAccount?.customer?.last_name,
        customerTel : nameAccount?.customer?.telephone,
        customerMail : nameAccount?.customer?.mail,
        IdBooking : cookies.dateEtFlipper.dateChoosen[3],
        year : cookies.dateEtFlipper.dateChoosen[2],
        month : cookies.dateEtFlipper.dateChoosen[1],
        weekend : cookies.dateEtFlipper.dateChoosen[0],
        timeOfRent : cookies.dateEtFlipper.timeRent,
        multiplier : 1,
        deliveryPrice : cookies.coordonees.priceDelivery,
        tva : 20,
        total :(parseInt(cookies.coordonees.priceDelivery)+parseInt(cookies.dateEtFlipper.price)),
        adressFacture:nameAccount?.customer?.adresse_facturation,
        adressDelivery:cookies.coordonees.adressL,
        cpDelivery:cookies.coordonees.inputCp,
        cityDelivery:cookies.coordonees.cityLivraison,
        isdeleted:0,
        isReserved:1,
        isPayed:1
    
    }

    const HandleValidBooking =()=>{
        fetch('http://joe.api/booker/'+auth.id,{
        credentials: "include",
        headers: {
        Authorization : getCookie("pinball")},
        method : "post", body : JSON.stringify(booking)})
        
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
                <p className="fw-bold"> Week End du : {cookies.dateEtFlipper.dateChoosen[0]}
                {cookies.dateEtFlipper.dateChoosen[1]}
                {cookies.dateEtFlipper.dateChoosen[2]}
                </p>
                <p className="fw-bold"> durée : {cookies.dateEtFlipper.timeRent} </p>
                <span className ="d-flex justify-content-start">
                    <GiPinballFlipper className="fs-4 mx-1"/>
                <h5 className="fw-bold"> Prix TTC de la Location {cookies.dateEtFlipper.price}  €</h5>
                </span>
                <span className ="d-flex justify-content-start">
                    <FaTruck className="fs-4 mx-1"/>
                <h5 className="fw-bold"> Prix TTC de la Livraison : 
                {cookies?.coordonees.priceDelivery} €</h5>
                <h5> </h5>
                </span>
                <h3 className="fw-bold orange">PRIX TOTAL : 
                 {(parseInt(cookies.coordonees.priceDelivery)+parseInt(cookies.dateEtFlipper.price))} € TTC</h3>
            </div>
        </div>
        <div className="container p-5">
        <button type="button" className="btn w-100" onClick={HandleValidBooking}>Valider ma commande !</button>
        </div>
        </>
    )
}
export default Payement;
