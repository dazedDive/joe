import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { MdAddTask } from "react-icons/md";
import { getCookie } from '../../helpers/CookieHelper';

const FlipperAdminAdd = () => {
const flipperNaked = {
    name : "nom du Flipper + (année)",
    description : "description de la machine",
    price : 0,
    first_argument : "un argument de vente 1",
    second_argument : "un argument de vente 2",
    third_argument : "un argument de vente 3",
    fourth_argument : "un argument de vente 4",
    is_available : 1,
    is_deleted : 0
}

const TitleRef = useRef(null);
    const DescriptionRef = useRef(null);
    const PriceRef = useRef(null);
    const option1Ref = useRef(null);
    const option2Ref = useRef(null);
    const option3Ref = useRef(null);
    const option4Ref = useRef(null);
    
const [flipperDetail,setFlipperDetail] = useState(flipperNaked)
const [alertAdd,setAlertAdd]= useState(false)
const HandleAdd = () =>{
    fetch('http://joe.api/flipper/',{
        credentials: "include",
        headers: {
        Authorization : getCookie("pinball")},
        method : "POST",
        body : JSON.stringify(flipperDetail)})
        .then(rep=>rep.json())
        .then(json=>setFlipperDetail(json))
        .then (setAlertAdd(true));
}

    return (
        <div>
            <h4 className="bg-dark text-white p-1">Ajouter une machine :</h4>
            <div className="container">
                <div className="row">
                    <div className="col-10">
                        <h3 className="bg-light">Nouveau Flipper</h3>
                        <span className="d-flex justify-content-start mb-5"
                            key={777}>
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
            </div>
            <div className="container">
            <div className={`alert alert-success fade ${alertAdd?"show":""}`} role="alert">
            Flipper ajouté 
            </div>
            <button type="button" className="btn bg-success text-white m-1 w-75"
            onClick={HandleAdd}>
            <MdAddTask className="fs-4 m-1"/>
            AJOUTER LE FLIPPER
            <MdAddTask className="fs-4 m-1"/>
            </button>
            </div>
        </div>
    );
};

export default FlipperAdminAdd;