import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MdOutlinePublishedWithChanges } from "react-icons/md";
const FlipperAdminEdit = () => {

    const { id } = useParams();
    const [flipperDetail, setFlipperDetail] = useState(null)

    useEffect(() => {
        fetch('http://joe.api/flipper/' + id)
            .then(resp => resp.json())
            .then(json => {
                setFlipperDetail(json)

            })

        }, [id])
        
        
        
        const[title,setTitle]=useState('');
        const[description,setDescription]=useState('');
        const[price,setPrice]=useState('');
    const HandleTitle =(e)=>{
        setTitle(e.target.value)
    }
    const HandleDescription =(e)=>{
        setDescription(e.target.value)
    }
    const HandlePrice =(e)=>{
        setPrice(e.target.value)
    }


    return (
        <div>
            <h1>Flipper Editeur :</h1>
            <div className="container">
                <div className="row">
                    
                    <div className="col-10">
                        <p>Editer : </p>
                        <span className="d-flex justify-content-start mb-5">
                            <h5 className="bg-warning p-3  me-2">TITRE:</h5>
                            <input className="form-control form-control-lg mb-1" type="text"
                                placeholder={flipperDetail?.name} 
                                value={title}aria-label=".form-control-lg example"
                                onChange={HandleTitle}></input>
                        </span>
                        
                            
                            <div className="bg-info">
                                <label htmlFor="descriptionFlipper" className="form-label">DESCRIPTION</label>
                                <textarea className="form-control" id="descriptionFlipper" 
                                value={description} rows="5"
                                placeholder={flipperDetail?.description} 
                                onChange={HandleDescription}></textarea>
                            </div>
                            
                        <span className="d-flex justify-content-start mt-2">
                            <p className="bg-warning p-1  me-2 ">option1</p>
                            <input className="form-control form-control-sm" type="text"
                                placeholder={flipperDetail?.pointfort1} 
                                value={title}aria-label=".form-control-lg example"
                                onChange={HandleTitle}></input>
                        </span>

                        <span className="d-flex justify-content-start mt-2">
                            <p className="bg-warning p-1  me-2 ">option2</p>
                            <input className="form-control form-control-sm" type="text"
                                placeholder={flipperDetail?.pointfort2} 
                                value={title}aria-label=".form-control-lg example"
                                onChange={HandleTitle}></input>
                        </span>

                        <span className="d-flex justify-content-start mt-2">
                            <p className="bg-warning p-1  me-2 ">option3</p>
                            <input className="form-control form-control-sm" type="text"
                                placeholder={flipperDetail?.pointfort3} 
                                value={title}aria-label=".form-control-lg example"
                                onChange={HandleTitle}></input>
                        </span>

                        <span className="d-flex justify-content-start mt-2">
                            <p className="bg-warning p-1  me-2 ">option4</p>
                            <input className="form-control form-control-sm" type="text"
                                placeholder={flipperDetail?.pointfort4} 
                                value={title}aria-label=".form-control-lg example"
                                onChange={HandleTitle}></input>
                        </span>
                            
                        <span className="d-flex justify-content-start mt-5">
                            <h3 className="bg-success p-3  me-2">PRIX:</h3>
                            <input className="form-control form-control-lg mb-1" type="text"
                            value={price} 
                            placeholder={flipperDetail?.price} 
                            aria-label=".form-control-lg example"
                            onChange={HandlePrice}></input>
                        </span>
                    </div>
                </div>
            </div>
            <div className="container mt-2 bg-light p-2">
                <span className="d-flex justify-content-start">
                <h3>Status du flipper : </h3>
                <h5 className="text-success mt-2 ms-2">
                {(flipperDetail?.is_available==1?" EN LOCATION" : " INDISPONIBLE a la location" )}
                </h5>
                <button type="button" class="btn bg-danger text-white ms-2">
                {(flipperDetail?.is_available==1?" RETIRER DE LA LACOATION" : " REMETTRE EN LOCATION" )}
                </button>
                </span>
            </div>
            <div className="container">
            <button type="button" class="btn bg-danger text-white m-5 w-100">
            <MdOutlinePublishedWithChanges className="fs-4 m-1"/>
            VALIDER LES MISES A JOUR DU FLIPPER
            <MdOutlinePublishedWithChanges className="fs-4 m-1"/>
            </button>
            </div>
        </div>
    );
};

export default FlipperAdminEdit;