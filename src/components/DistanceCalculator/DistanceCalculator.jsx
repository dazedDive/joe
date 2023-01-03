import '../DistanceCalculator/DistanceCalculator.css'
import { useState, useEffect } from "react"
import { MdLocationOn } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useCookies} from 'react-cookie';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { getCookie } from '../../helpers/CookieHelper';
import { MdAlternateEmail } from "react-icons/md";
import { ImHome3,ImUser } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";

const DistanceCalculator = ()=>{
        ////////////importation des information Customer ///////////
const {setAuth,auth} = useContext (AuthContext);
const [nameAccount,setNameAccount] = useState('');
useEffect(()=>{
    fetch('http://joe.api/account/'+auth?.id,{
        method : "post" ,
        credentials: "include",
        headers: {
            Authorization : getCookie("pinball")},
        body : JSON.stringify({with:['customer']})})
        .then(rep=>rep.json())
        .then(json=>{
            setNameAccount(json)
    })},[auth]);
/////////////AdresseLivraison REGEX AND SET/////////////
const [adressL,setAdressL]=useState("")
const [checkAdressL, setCheckAdressL]=useState(false)
const HandleAdressL=(evt)=>{
        setAdressL(evt.target.value)
        const adressRegexL = /[0-9]+\s*([a-zA-Z]+\s*[a-zA-Z]+\s)*[0-9]*/
        setCheckAdressL(adressRegexL.test(evt.target.value))
    }
 //////////////setter pour la requetes des API GEOGRAPHIQUE///////
const [inputCp, setInputCp]=useState('')
const [inputCpFact, setInputCpFact]=useState('')
const [cityList, setCityList]=useState([])
const [cityLivraison, setCityLivraison]=useState([])
const [coordinates, Setcoordinates]=useState([])
const [location, setLocation]=useState([])
const [distanceLivraison, setDistanceLivraison]=useState('0')
const [cookies, setCookie, removeCookie] = useCookies(["coordonees"]);
const [priceDelivery,setPriceDelivery]=useState();

const navigate = useNavigate();
const HandleChange =(evt)=>{
        setInputCp(evt.target.value)
    }
/////recupération de la table statistique////
const [dataAdmin, setDataAdmnin]=useState(null);
    
useEffect(()=>{
    fetch('http://joe.api/statistique/2')
    .then(rep=>rep.json())
    .then(json=>{
        setDataAdmnin(json)
        })
    },[])

const [checkCity, setCheckCity] =useState(false)
const HandleSelected = (evt)=>{
        setCityLivraison(evt.target.value)
        console.log(evt.target.value)
        setCheckCity(true);
        setCheckFinal(true)
    }
    
useEffect(()=>{
    if (cityLivraison){
        const test=coordinates.find(city=>city.nom === cityLivraison )  
        setLocation (test && (test.centre.coordinates).toString())
    };
    },[coordinates])
/////////////////bouton FINAL pour ETAPE 3 ///////////////
const HandlePrice = ()=>{
    const maretzLocation = "3.4079803,50.0523653";
    const apiDriveDistance =`http://router.project-osrm.org/route/v1/driving/${maretzLocation};${(location).toString()}?overview=false`;
        fetch(apiDriveDistance)
        .then((rep)=>rep.json())
        .then((rep)=>setDistanceLivraison(rep.routes[0].distance))
        .then(_=>console.log(cookies))
    }
        
    useEffect(()=>{
        setPriceDelivery(((distanceLivraison/1000)*dataAdmin?.price_by_kilometer).toFixed());
    },[distanceLivraison])    
    
    useEffect(()=>{
        setCookie("coordonees",{adressL,cityLivraison,inputCp,priceDelivery})
    },[priceDelivery])

const [checkFinal,setCheckFinal]=useState(false)

useEffect(()=>{
    const apiLocalisation = `https://geo.api.gouv.fr/communes?nom=${cityLivraison}&fields=centre`
            fetch(apiLocalisation)
            .then((rep)=>rep.json())
            .then((rep)=>Setcoordinates(rep))
        },
        [cityLivraison])

    //////////////////////////////////RECUPERATION DES VILLES AVEC LE CP///////////
    /////////////////////CILLE DE LIVRAISON/////////////////////
useEffect(()=>{
    const apiCpUrl = `https://geo.api.gouv.fr/communes?codePostal=${inputCp}`
        fetch(apiCpUrl)
            .then((rep)=>rep.json())
            .then((rep)=>setCityList(rep))
        },
    [inputCp])
    
useEffect(()=>{
    setCheckFinal(true)
    },
    [cityLivraison,inputCp])

    //////////////////////declaration du Cookies qui recupére les infos////////
    return(
        <>
        <div className="container mt-5">
            <span className="d-flex justify-content-center">
                <p>Etape 2/3</p>
                <MdLocationOn className="fs-4"/>
                <p>Adresse de livraison</p>
            </span>
            <h1 className="text-resa mt-3">Adresse de Facturation :</h1>
            <span className="d-flex justify-content-start">
                 <ImUser className=" mx-2 fs-3 orange"/>
                 <h5>{nameAccount?.customer?.first_name},{nameAccount?.customer?.last_name}</h5>
            </span>
            <span className="d-flex justify-content-start">
                 <ImHome3 className=" mx-2 fs-3 orange"/>
                 <h5>{nameAccount?.customer?.adresse_facturation}</h5>
            </span>
            <span className="d-flex justify-content-start">
                <MdAlternateEmail className=" mx-2 fs-3 orange"/>
                <h5>{nameAccount?.customer?.mail}</h5>
            </span>
            <span className="d-flex justify-content-start">
                <BsFillTelephoneFill className=" mx-2 fs-3 orange"/>
                <h5>{nameAccount?.customer?.telephone}</h5>
            </span>
            <h1 className="text-resa mt-3">Adresse de Livraison :</h1>
            <div className="row mt-3">
                <div className="col-12">
                <input className={`form-control ${!checkAdressL  &&"text-danger"}`}
                value={adressL} type="text" placeholder="Adresse de Livraison" 
                aria-label="default input example" onChange={HandleAdressL}></input>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-6">
                <input className="form-control" type="text" placeholder="Code Postal de Livraison" 
                aria-label="default input example" onChange={HandleChange}></input>
            </div>
            <div className="col-6">
                <select className="form-select" aria-label="Default select example" 
                onChange={HandleSelected}>
                    <option selected >Ville de Livraison</option>
                    {cityList.map(({nom,code}) => <option key={code} value={nom}>{nom}</option>)}
                </select>   
            </div>
        </div>
        <span className="d-flex justify-content-start ">
            <button type="button" className="btn btn-light mt-4 w-25 mb-5" 
            disabled={!( checkAdressL  && checkCity)}
            onClick={()=>{HandlePrice();setCheckFinal(false);}}>Estimation du prix de Transport</button>
                <h4 className="mx-2 mt-4 orange  ">Frais de Livraison : {((distanceLivraison/1000)*dataAdmin?.price_by_kilometer).toFixed()} €</h4>
            <button type="button" className="btn btn-light mt-4 w-25 mb-5"
                disabled={checkFinal} 
                onClick={()=>{navigate('/reservation/final')}}>
                Paiement
            </button>
        </span>
        </div>
        </>
    )
}

export default DistanceCalculator