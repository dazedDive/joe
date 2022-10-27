import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { useRef } from 'react';
import { getCookie } from '../../helpers/CookieHelper';
const FlipperAdminEdit = () => {

    const { id } = useParams();
    const [flipperDetail, setFlipperDetail] = useState(null)

    const TitleRef = useRef(null);
    const DescriptionRef = useRef(null);
    const PriceRef = useRef(null);
    const option1Ref = useRef(null);
    const option2Ref = useRef(null);
    const option3Ref = useRef(null);
    const option4Ref = useRef(null);
    


    useEffect(() => {
        fetch('http://joe.api/flipper/' + id)
            .then(resp => resp.json())
            .then(json => {
                setFlipperDetail(json)
                console.log(json)
            })

        }, [id])
        
    const HandleStatus =()=>{
            flipperDetail.is_available==1? 
            setFlipperDetail(false):
            setFlipperDetail(flipperDetail.is_available=1);
    }  
      
    const [alertUpdate, setAlertUpdate] = useState(false)
    

    const HandleAddChange=  () =>{
        console.log(flipperDetail)
        fetch('http://joe.api/flipper/'+id,{
        method : "PUT",
        credentials: "include",
        headers: {
        Authorization : getCookie("pinball")},
        body : JSON.stringify(flipperDetail)
        })
        .then(rep=> rep.json())
        .then(json=>setFlipperDetail(json))
        .then(setAlertUpdate(!alertUpdate));
    }

    return (
        <div>
            <h4 className="bg-dark text-white p-1">Flipper Editeur :</h4>
            <div className="container">
                <div className="row">
                    
                    <div className="col-10">
                        <h3 className="bg-light">Editer : </h3>
                        <span className="d-flex justify-content-start mb-5"
                        key={flipperDetail?.Id_flipper}>
                            <h5 className="bg-warning p-3  me-2">TITRE:</h5>
                            <input className="form-control form-control-lg mb-1" type="text"
                                ref={TitleRef}
                                value={flipperDetail?.name} aria-label=".form-control-lg example"
                                onChange={()=>{setFlipperDetail({...flipperDetail, name : TitleRef?.current.value})}}></input>
                        </span>
                        
                            
                            <div className="bg-info">
                                <label htmlFor="descriptionFlipper" className="form-label">DESCRIPTION</label>
                                <textarea className="form-control" id="flipperDescription" 
                                ref={DescriptionRef}
                                value={flipperDetail?.description} rows="5"
                                
                                onChange={()=>{setFlipperDetail({...flipperDetail, description : DescriptionRef?.current.value})}}></textarea>
                            </div>
                            
                        <span className="d-flex justify-content-start mt-2">
                            <p className="bg-warning p-1  me-2 ">option1</p>
                            <input className="form-control form-control-sm" type="text"
                                ref={option1Ref}
                                value={flipperDetail?.first_argument}aria-label=".form-control-lg example"
                                onChange={()=>{setFlipperDetail({...flipperDetail, first_argument : option1Ref?.current.value})}}></input>
                        </span>

                        <span className="d-flex justify-content-start mt-2">
                            <p className="bg-warning p-1  me-2 ">option2</p>
                            <input className="form-control form-control-sm" type="text"
                                ref={option2Ref}
                                value={flipperDetail?.second_argument}aria-label=".form-control-lg example"
                                onChange={()=>{setFlipperDetail({...flipperDetail, second_argument : option2Ref?.current.value})}}></input>
                        </span>

                        <span className="d-flex justify-content-start mt-2">
                            <p className="bg-warning p-1  me-2 ">option3</p>
                            <input className="form-control form-control-sm" type="text"
                                 ref={option3Ref}
                                value={flipperDetail?.third_argument}aria-label=".form-control-lg example"
                                onChange={()=>{setFlipperDetail({...flipperDetail, third_argument : option3Ref?.current.value})}}></input>
                        </span>

                        <span className="d-flex justify-content-start mt-2">
                            <p className="bg-warning p-1  me-2 ">option4</p>
                            <input className="form-control form-control-sm" type="text"
                                ref={option4Ref}
                                value={flipperDetail?.fourth_argument}aria-label=".form-control-lg example"
                                onChange={()=>{setFlipperDetail({...flipperDetail, fourth_argument : option4Ref?.current.value})}}></input>
                        </span>
                            
                        <span className="d-flex justify-content-start mt-5">
                            <h3 className="bg-success p-3  me-2">PRIX:</h3>
                            <input className="form-control form-control-lg mb-1" type="text"
                            value={flipperDetail?.price} 
                            ref={PriceRef}
                            aria-label=".form-control-lg example"
                            onChange={()=>{setFlipperDetail({...flipperDetail, price : PriceRef?.current.value})}}></input>
                        </span>
                    </div>
                </div>
            </div>
            <div className="container mt-2 bg-light p-2">
                <span className="d-flex justify-content-start">
                <h3>Status du flipper : </h3>
                <h5 className={`mt-2 ms-2 ${flipperDetail?.is_available==1?"text-success":"text-danger"}`}>
                {(flipperDetail?.is_available==1?" EN LOCATION" : " INDISPONIBLE a la location" )}
                </h5>
                <button type="button" className={(flipperDetail?.is_available==1?" mx-2 bg-danger" : "mx-2 bg-success text-white" )}
                onClick={HandleStatus}>
                {(flipperDetail?.is_available==1?" RETIRER DE LA LOCATION" : " REMETTRE EN LOCATION" )}
                </button>
                </span>
            </div>
            <div className="container">
            <div className={`alert alert-success fade ${alertUpdate?"show":""}`} role="alert">
            Mise à jour OK
            </div>
            <button type="button" className="btn bg-success text-white m-1 w-75"
            onClick={HandleAddChange}>
            <MdOutlinePublishedWithChanges className="fs-4 m-1"/>
            VALIDER LES MISES A JOUR DU FLIPPER
            <MdOutlinePublishedWithChanges className="fs-4 m-1"/>
            </button>
            </div>
        </div>
    );
};

export default FlipperAdminEdit;