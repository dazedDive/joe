import React from 'react';
import { useState,useEffect } from 'react';

const CreationPage = () => {

    const [messageInfo,setMessageInfo] = useState('Veuillez remplir tout les champs !')
    
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
     const [checkFactCp, setCheckFactCp]= useState(false)
     const HandleChangeFact =(evt)=>{
         setInputCpFact(evt.target.value)
         setCheckFactCp(true)
         
     }
     //////////////////////////////////////////////
     const [cityListFact, setCityListFact]=useState([]);
     const [inputCpFact, setInputCpFact]=useState('');
     const [checkCity, setCheckCity] = useState(false)
     useEffect(()=>{
        const apiCpUrl = `https://geo.api.gouv.fr/communes?codePostal=${inputCpFact}`
            fetch(apiCpUrl)
            .then((rep)=>rep.json())
            .then((rep)=>setCityListFact(rep))
            
    },[inputCpFact]) 
   
    const HandleRegister =()=>{
        fetch('http://joe.api/auth/register',
        {
          method:"POST",
          body : JSON.stringify(mail)
        })
        .then(rep=> rep.json())
        .then(json=>setMessageInfo(json))
        
    }    
    return (
         <>
        <div className="container">
            <h1 className="title-dot mt-3">Création de compte</h1>
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
        <select className="form-select" aria-label="Default select example"
        onChange={()=>{setCheckCity(true)}}>
        <option selected>Ville de Facturation</option>
        {cityListFact.map(({nom,code}) => <option key={code} value={nom}>{nom}</option>)}
        </select>   
        </div>

        </div>
        <i className="text-warning pb-3">Info : {messageInfo}</i>
        <button type="button" className="btn  w-100 my-3"
        disabled={!(checkCity&&checkName&&checkFirstName&&checkFactCp&&checkMail&&checkTel&&checkAdress)}
        onClick={HandleRegister}>Je crée mon compte</button>
        </div>

       </>
    );
};

export default CreationPage;