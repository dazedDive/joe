import '../DistanceCalculator/DistanceCalculator.css'
import { useState, useEffect } from "react"
import { MdLocationOn } from "react-icons/md";

const DistanceCalculator = ()=>{

    const [inputCp, setInputCp]=useState('')
    const [inputCpFact, setInputCpFact]=useState('')
    const [cityList, setCityList]=useState([])
    const [cityListFact, setCityListFact]=useState([])
    const [cityLivraison, setCityLivraison]=useState([])
    const [coordinates, Setcoordinates]=useState([])
    const [location, setLocation]=useState([])
    const [distance, setDistance]=useState()

    const HandleChange =(evt)=>{
        setInputCp(evt.target.value)
    }

    const HandleChangeFact =(evt)=>{
        setInputCpFact(evt.target.value)
    }

    const HandleSelected = (evt)=>{
        setCityLivraison(evt.target.value)
        console.log(evt.target.value)
    }

    useEffect(()=>{
        const apiLocalisation = `https://geo.api.gouv.fr/communes?nom=${cityLivraison}&fields=centre`
            fetch(apiLocalisation)
            .then((rep)=>rep.json())
            .then((rep)=>Setcoordinates(rep))
            
        },[cityLivraison])

    useEffect(()=>{
        if (cityLivraison){
        const test=coordinates.find(city=>city.nom === cityLivraison )  
        setLocation (test && test.centre.coordinates)}

        console.log(location);
        
        if (location){
        const livraisonLocation =location.toString() ;
        console.log("test : " + (livraisonLocation));
        const maretzLocation = "3.4079803,50.0523653";
        const apiDriveDistance =`http://router.project-osrm.org/route/v1/driving/${maretzLocation};${livraisonLocation}?overview=false`;
        fetch(apiDriveDistance)
        .then((rep)=>rep.json())
        .then((rep)=>setDistance(rep))}
            },[coordinates])
    



        useEffect(()=>{
        const apiCpUrl = `https://geo.api.gouv.fr/communes?codePostal=${inputCp}`
            fetch(apiCpUrl)
            .then((rep)=>rep.json())
            .then((rep)=>setCityList(rep))
        },[inputCp])
        
        useEffect(()=>{
            const apiCpUrl = `https://geo.api.gouv.fr/communes?codePostal=${inputCpFact}`
                fetch(apiCpUrl)
                .then((rep)=>rep.json())
                .then((rep)=>setCityListFact(rep))
            },[inputCpFact])




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
        <input className="form-control" type="text" placeholder="Nom" 
        aria-label="default input example"></input>
        </div>
        <div className="col-6">
        <input className="form-control" type="text" placeholder="Prenom" 
        aria-label="default input example"></input>    
        </div>   
        </div>
        
        <div className="row mt-3">
        <div className="col-6">
        <input className="form-control" type="text" placeholder="Telephone" 
        aria-label="default input example"></input>
        </div>
        <div className="col-6">
        <input className="form-control" type="text" placeholder="Adresse Email" 
        aria-label="default input example"></input>    
        </div>   
        </div>

        <h1 className="text-resa mt-3">Adresse de Facturation :</h1>
        <div className="row mt-3">
        <div className="col-12">
        <input className="form-control" type="text" placeholder="Adresse de Facturation" 
        aria-label="default input example"></input>
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
        {cityListFact.map(({nom}) => <option value="1">{nom}</option>)}
        
        </select>   
        </div>

        </div>


        <h1 className="text-resa mt-3">Adresse de Livraison :</h1>
        <div className="row mt-3">
        <div className="col-12">
        <input className="form-control" type="text" placeholder="Adresse de Livraison" 
        aria-label="default input example"></input>
        </div>
        </div>

        <div className="row mt-3">
        <div className="col-6">
        <input className="form-control" type="text" placeholder="Code Postal de Livraison" 
        aria-label="default input example" onChange={HandleChange}></input>
        </div>
        <div className="col-6">
        <select className="form-select" aria-label="Default select example" onChange={HandleSelected}>
        <option selected >Ville de Livraison</option>
        {cityList.map(({nom,code}) => <option key={code} value={nom}>{nom}</option>)}

        
        </select>   
        </div>

        </div>
        <span className="d-flex justify-content-end">
        <button type="button" className="btn btn-light mt-4 w-25 mb-5">Etape final</button>
        </span>
        </div>
        </>
    )
}

export default DistanceCalculator