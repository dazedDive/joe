import '../DistanceCalculator/DistanceCalculator.css'
import { useState, useEffect } from "react"
import { MdLocationOn } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const DistanceCalculator = ()=>{

    ////////////setter des controles de champs et regex ///////////
    ///NoM///
    const [name,setName]=useState("")
    const [checkName, setCheckName]=useState(false)
    const HandleName=(evt)=>{
        setName(evt.target.value)
        const regexName =/^((?:(?:[a-zA-Z]+)(?:-(?:[a-zA-Z]+))+)|(?:[a-zA-Z]+))$/
        setCheckName(regexName.test(evt.target.value)) 
    }
    /////prenom/////////
    const [firstName,setFirstName]=useState("")
    const [checkFirstName, setCheckFirstName]=useState(false)
    const HandleFirstName=(evt)=>{
        setFirstName(evt.target.value)
        const regexFirstName =/^((?:(?:[a-zA-Z]+)(?:-(?:[a-zA-Z]+))+)|(?:[a-zA-Z]+))$/
        setCheckFirstName(regexFirstName.test(evt.target.value))
    }

    /////////TELEPHONE/////////
    const [tel,setTel]=useState("")
    const [checkTel, setCheckTel]=useState(false)
    const HandleTel=(evt)=>{
        setTel(evt.target.value)
        const telRegex =/^(?:0|\+33 ?|0?0?33 ?|)([1-9] ?(?:[0-9] ?){8})$/
        setCheckTel(telRegex.test(evt.target.value))
    }
    /////////mail//////////////
    const [mail,setMail]=useState("")
    const [checkMail, setCheckMail]=useState(false)
    const HandleMail=(evt)=>{
        setMail(evt.target.value)
        const mailRegex =/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
        setCheckMail(mailRegex.test(evt.target.value))
    }
    //////////adresse//////////////////
    const [adress,setAdress]=useState("")
    const [checkAdress, setCheckAdress]=useState(false)
    const HandleAdress=(evt)=>{
        setAdress(evt.target.value)
        const adressRegex = /[0-9]+\s*([a-zA-Z]+\s*[a-zA-Z]+\s)*[0-9]*/
        setCheckAdress(adressRegex.test(evt.target.value))
    }

    /////////////AdresseLivraison/////////////
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
    const [cityListFact, setCityListFact]=useState([])
    const [cityLivraison, setCityLivraison]=useState([])
    const [coordinates, Setcoordinates]=useState([])
    const [location, setLocation]=useState([])
    const [distanceLivraison, setDistanceLivraison]=useState('0')
    

    const navigate = useNavigate();

    
    const HandleChange =(evt)=>{
        setInputCp(evt.target.value)
    }


    const [checkFactCity, setCheckFactCity]= useState(false)
    const HandleChangeFact =(evt)=>{
        setInputCpFact(evt.target.value)
        setCheckFactCity(true)
        
    }

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
        setLocation (test && (test.centre.coordinates).toString())};
        },[coordinates])


/////////////////bouton FINAL pour ETAPE 3 ///////////////
    const HandlePrice = ()=>{
        const maretzLocation = "3.4079803,50.0523653";
        const apiDriveDistance =`http://router.project-osrm.org/route/v1/driving/${maretzLocation};${(location).toString()}?overview=false`;
        fetch(apiDriveDistance)
        .then((rep)=>rep.json())
        .then((rep)=>setDistanceLivraison(rep.routes[0].distance))
        .then(setCookie("coordonees",{name,firstName,adress,adressL,tel,mail,cityLivraison,
            cityList,inputCp,inputCpFact}))        
    }

   

    const [checkFinal,setCheckFinal]=useState(false)
    useEffect(()=>{
        setCookie("fraislivraison",{distanceLivraison})
        console.log(distanceLivraison)
       
    },[distanceLivraison])

  

    useEffect(()=>{
        const apiLocalisation = `https://geo.api.gouv.fr/communes?nom=${cityLivraison}&fields=centre`
            fetch(apiLocalisation)
            .then((rep)=>rep.json())
            .then((rep)=>Setcoordinates(rep))
            
        },[cityLivraison])

    //////////////////////////////////RECUPERATION DES VILLES AVEC LE CP///////////
    /////////////////////CILLE DE LIVRAISON/////////////////////
        useEffect(()=>{
        const apiCpUrl = `https://geo.api.gouv.fr/communes?codePostal=${inputCp}`
            fetch(apiCpUrl)
            .then((rep)=>rep.json())
            .then((rep)=>setCityList(rep))
        },[inputCp])
    /////////////////////////////VILLE DE FACTURATION//////////////
        useEffect(()=>{
            const apiCpUrl = `https://geo.api.gouv.fr/communes?codePostal=${inputCpFact}`
                fetch(apiCpUrl)
                .then((rep)=>rep.json())
                .then((rep)=>setCityListFact(rep))
                
        },[inputCpFact])

        useEffect(()=>{
            setCheckFinal(true)
        },[cityLivraison,inputCp])

    //////////////////////declaration du Cookies qui recupére les infos////////
    const [cookies, setCookie] = useCookies(['coordonees','fraislivraison']);
    
        
    
    
    return(
        <>
        <div className="container mt-5">
        <span className="d-flex justify-content-center">
        <p>Etape 2/3</p>
        <MdLocationOn className="fs-4"/>
        <p>Adresses de facturation et de livraison</p>
        </span>
        </div>
        <div className="container">
        <div className="row mt-5">
        <h1 className="text-resa ">Identité : </h1>
        <div className="col-6">
        <input className={`form-control ${!checkName  &&"text-danger"}`} 
        type="text" 
        value={name} placeholder="Nom" aria-label="default input example" onChange={HandleName}>
        </input>

        </div>
        <div className="col-6">
        <input className={`form-control ${!checkFirstName  &&"text-danger"}`} 
        type="text" value={firstName} placeholder="Prenom" 
        aria-label="default input example" onChange={HandleFirstName}></input>    
        </div>   
        </div>
        
        <div className="row mt-3">
        <div className="col-6">
        <input className={`form-control ${!checkTel  &&"text-danger"}`} 
        type="text" value={tel} placeholder="Telephone" 
        aria-label="default input example" onChange={HandleTel}></input>
        </div>
        <div className="col-6">
        <input className={`form-control ${!checkMail  &&"text-danger"}`} 
        type="text" value={mail}placeholder="Adresse Email" 
        aria-label="default input example" onChange={HandleMail}></input>    
        </div>   
        </div>

        <h1 className="text-resa mt-3">Adresse de Facturation :</h1>
        <div className="row mt-3">
        <div className="col-12">
        <input className={`form-control ${!checkAdress  &&"text-danger"}`}  type="text" 
        value={adress} placeholder="Adresse de Facturation" 
        aria-label="default input example" onChange={HandleAdress}></input>
        </div>
        </div>

        <div className="row mt-3">
        <div className="col-6">
        <input className="form-control" type="text" placeholder="Code Postal de Facturation" 
        aria-label="default input example" onChange={HandleChangeFact}></input>
        </div>
        <div className="col-6">
        <select className="form-select" aria-label="Default select example">
        <option selected>Ville de Facturation</option>
        {cityListFact.map(({nom,code}) => <option key={code} value={nom}>{nom}</option>)}
        
        </select>   
        </div>

        </div>


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
        
        disabled={!(checkName && checkFirstName && checkAdress && checkAdressL && checkTel 
            && checkMail && checkFactCity && checkCity)}
            onClick={()=>{HandlePrice();setCheckFinal(false)}}>Estimation du prix de Transport</button>
        <h4 className="mx-2 mt-4 orange  ">Frais de Livraison : {(distanceLivraison/1000).toFixed()} €</h4>
        <button type="button" className="btn btn-light mt-4 w-25 mb-5"
        disabled={checkFinal} >
            Paiement
        </button>
        
        </span>
        </div>
               
        </>
    )
}

export default DistanceCalculator