import React from 'react';
import { useEffect } from 'react';
import { useState, useRef } from 'react';

const FraisAdmin = () => {
///////////////////////////////////////////////REQUETE API///////////
const [dataAdmin, setDataAdmnin]=useState(null);
const inputTextHomePage = useRef(null);
const inputPricePort = useRef(null);

useEffect(()=>{
    fetch('http://joe.api/statistique/2')
    .then(rep=>rep.json())
    .then(json=>{
        setDataAdmnin(json)
    })
},[])

//////////////////////////////////////////////////////

     




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
                            <p className="bg-info">{dataAdmin?.textHome}</p>
                            

                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mb-3">
                            <label htmlFor="textHomePage" className="form-label">nouveau text</label>
                            <textarea className="form-control" id="extHomePage" rows="5"></textarea>
                            <button type="button" className="btn btn-warning mt-2">Modifier</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <h5 className="bg-warning">Barème kilometrique : </h5>
                <div className="row">
                    <div className="col-6">
                        <p>Prix Actuel du Kilomètre :</p>
                        <h6 className="bg-info">{dataAdmin?.Prix_kilometre}€ / par Kilomètre</h6>
                    </div>
                    <div className="col-6">
                        <span className="d-flex justify-content-start">
                            
                            <input className="form-control" type="text" placeholder="Default input" aria-label="nouveau"></input>
                            <button type="button" className="btn btn-warning ms-2">Modifier</button>
                        </span>
                    </div>
                </div>
            </div>
            <div className="container mt-3 bg-light">
                <h5 className="bg-warning">Barème journalier : </h5>
                <div className="row">
                    <div className="col-6">
                        <p>Multiplicateur Actuel Samedi :</p>
                        <h6 className="bg-info">X par {dataAdmin?.multiplicateursamedi}</h6>
                        <p>Multiplicateur Actuel Dimanche :</p>
                        <h6 className="bg-info">X par {dataAdmin?.multiplicateurdimanche}</h6>
                        <p>Multiplicateur Actuel 2 jours :</p>
                        <h6 className="bg-info">X par {dataAdmin?.multiplicateur2j}</h6>
                    </div>
                    <div className="col-6">
                        <span className="d-flex justify-content-start">
                            <p className="me-3 mt-1">Samedi</p>
                            <input className="form-control" type="text" placeholder="Default input" aria-label="nouveau"></input>
                            <button type="button" className="btn btn-warning ms-2">Modifier</button>
                        </span>
                        <span className="d-flex justify-content-start mt-3">
                        <p className="me-3 mt-1">Dimanche</p>
                            <input className="form-control" type="text" placeholder="Default input" aria-label="nouveau"></input>
                            <button type="button" className="btn btn-warning ms-2">Modifier</button>
                        </span>
                        <span className="d-flex justify-content-start mt-3">
                        <p className="me-3 mt-1">2jours</p>
                            <input className="form-control" type="text" placeholder="Default input" aria-label="nouveau"></input>
                            <button type="button" className="btn btn-warning ms-2">Modifier</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FraisAdmin;