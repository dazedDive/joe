import React from 'react';
import { useEffect } from 'react';
import { useState, useRef } from 'react';
import { getCookie } from '../../helpers/CookieHelper';
const FraisAdmin = () => {
///////////////////////////////////////////////REQUETE API///////////
const [dataAdmin, setDataAdmnin]=useState(null);
const inputTextHomePage = useRef(null);
const inputPricePort = useRef(null);
const inputPriceSamedi = useRef(null);
const inputPriceDimanche = useRef(null);
const inputPriceDeuxJours = useRef(null);
const [alertChange, setAlertChange] = useState(false)

useEffect(()=>{
    fetch('http://joe.api/statistique/2')
    .then(rep=>rep.json())
    .then(json=>{
        setDataAdmnin(json)
    })
},[])

//////////////////////////////////////////////////////
const HandleChangeCosts = () =>{
    fetch('http://joe.api/statistique/2',{
        method : "PUT",
        credentials: "include",
        headers: {
        Authorization : getCookie("pinball")},
        body : JSON.stringify(dataAdmin)
        
    })
    .then(rep=>rep.json())
    .then(json=>setDataAdmnin(json))
    .then(setAlertChange(true))
}
     




    return (
        <div>
            <h3>Gestion des paramètres frais / autres :</h3>
            <div className="container bg-light">
                <div className="row">
                    <h5 className="bg-warning">text de la home page : 
                    </h5>
                        
                    <div className="col-6">
                        <div className="mb-3">
                            <p className="orange">Text actuel :</p>
                            <p className="bg-info">{dataAdmin?.homepage_text}</p>
                            

                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mb-3">
                            <label htmlFor="textHomePage" className="form-label">nouveau text</label>
                            <textarea className="form-control" id="extHomePage" rows="5"
                            placeholder="Ce text apparaitra en en-tête de la page d'aceuille"
                            ref={inputTextHomePage}
                            onChange={()=>{setDataAdmnin({...dataAdmin,homepage_text : inputTextHomePage.current.value})}}></textarea>
                            <button type="button" className="btn btn-warning mt-2"
                            onClick={HandleChangeCosts}>Modifier</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <h5 className="bg-warning">Barème kilometrique : </h5>
                <div className="row">
                    <div className="col-6">
                        <p>Prix Actuel du Kilomètre :</p>
                        <h6 className="bg-info">{dataAdmin?.price_by_kilometer}€ / par Kilomètre</h6>
                    </div>
                    <div className="col-6">
                        <span className="d-flex justify-content-start">
                            
                            <input className="form-control mt-4" type="text" 
                            placeholder="Prix au kilomètre en euro" aria-label="nouveau"
                            ref={inputPricePort}
                            onChange={()=>{setDataAdmnin({...dataAdmin,price_by_kilometer : inputPricePort.current.value})}}
                            ></input>
                            <button type="button" className="btn btn-warning ms-2 mt-4"
                            onClick={HandleChangeCosts}>Modifier</button>
                        </span>
                    </div>
                </div>
            </div>
            <div className="container mt-3 bg-light">
                <h5 className="bg-warning">Barème journalier : </h5>
                <div className="row">
                    <div className="col-6">
                        <p>Multiplicateur Actuel Samedi :</p>
                        <h6 className="bg-info">X par {dataAdmin?.multiplier_saturday}</h6>
                        <p>Multiplicateur Actuel Dimanche :</p>
                        <h6 className="bg-info">X par {dataAdmin?.multiplier_sunday}</h6>
                        <p>Multiplicateur Actuel 2 jours :</p>
                        <h6 className="bg-info">X par {dataAdmin?.multiplier_both}</h6>
                    </div>
                    <div className="col-6">
                        <span className="d-flex justify-content-start">
                            <p className="me-3 mt-1">Samedi</p>
                            <input className="form-control" type="text" placeholder="Prix pour 1j, n'a pas de raison d'être modifié" 
                            aria-label="nouveau"
                            ref={inputPriceSamedi}
                            onChange={()=>{setDataAdmnin({...dataAdmin,multiplier_saturday : inputPriceSamedi.current.value})}}
                            ></input>
                            <button type="button" className="btn btn-warning ms-2"
                            onClick={HandleChangeCosts}>Modifier</button>
                        </span>
                        <span className="d-flex justify-content-start mt-2">
                        <p className="me-3 mt-1">Dimanche</p>
                            <input className="form-control" type="text" placeholder="Majoration Dimanche (multiplicateur)"
                            ref={inputPriceDimanche}
                            onChange={()=>{setDataAdmnin({...dataAdmin,multiplier_sunday : inputPriceDimanche.current.value})}}
                            aria-label="nouveau"></input>
                            <button type="button" className="btn btn-warning ms-2"
                            onClick={HandleChangeCosts}>Modifier</button>
                        </span>
                        <span className="d-flex justify-content-start mt-1">
                        <p className="me-3 mt-1">2jours</p>
                            <input className="form-control" type="text" placeholder="Majoration 2j (multiplicateur)"
                             ref={inputPriceDeuxJours}
                             onChange={()=>{setDataAdmnin({...dataAdmin,multiplier_both : inputPriceDeuxJours.current.value})}}
                            aria-label="nouveau"></input>
                            <button type="button" className="btn btn-warning ms-2"
                            onClick={HandleChangeCosts}>Modifier</button>
                        </span>
                    </div>
                </div>
            </div>
            <div className={`alert alert-success fade ${alertChange?"show":""}`} role="alert">
            Changement Enregistré
            </div>
        </div>
    );
};

export default FraisAdmin;