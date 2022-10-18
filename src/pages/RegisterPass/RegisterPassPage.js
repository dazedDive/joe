import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GiCheckedShield,GiFireShield,GiEdgedShield } from "react-icons/gi";
import { ImEye } from "react-icons/im";
import { useState } from 'react';
import { useEffect } from 'react';
const RegisterPassPage = () => {

    const token = useParams('token');
    const navigate = useNavigate
    ///////////recuperation des Datas du Token//////////////////////
    const [decryptedToken,setDecryptedToken]=useState(null)
    useEffect(()=>{
        fetch('http://joe.api/auth/validate',{
            method:"POST",
            body:JSON.stringify(token)})
        .then(rep=>rep.json())
        .then(json=>setDecryptedToken(json));
    },[])

    const [passOne, setPassOne]=useState('')
    const [securityPassLevel, setSecurityPassLevel]=useState(0)
    const HandlePassOne = (e) =>{
        setPassOne(e.target.value)
        
        const regexPass = /^[a-zA-Z0-9]{5,7}$/
        if (regexPass.test(e.target.value)){
            setSecurityPassLevel(1)
        }
        else if ((regexPass.test(e.target.value))||(e.target.value.length>7)&&(e.target.value.length<12)){
            setSecurityPassLevel(2)
        }
        else if ((regexPass.test(e.target.value))||e.target.value.length>11){
            setSecurityPassLevel(3)
        }
        else {
            setSecurityPassLevel(0)
        }
    }
    const [passTwo, setPassTwo]=useState('');
    const [checkPassTwo,setCheckPassTwo]=useState(false);
    const HandlePassTwo = (e) =>{
        setPassTwo(e.target.value)
        if(passOne==e.target.value){
            setCheckPassTwo(true)
        }else{
            setCheckPassTwo(false)
        }

        
    }

    const HandleSubmit = async (e) =>{
        e.preventDefault();
        const dataToWriteInDataBase = {...decryptedToken, password:passOne};
        await fetch ('http://joe.api/auth/create',{
            method:"POST",
            body:JSON.stringify(dataToWriteInDataBase)})
            .then (()=>navigate('/'));

        
    }
    const [visible,setVisible]=useState(false)
    const ToggleView = () => {
        setVisible(!visible)
    }
    const [visibleBis,setVisibleBis]=useState(false)
    const ToggleViewBis = () => {
        setVisibleBis(!visibleBis)
    }


    return (

            <div>
            <div className="container bg-light p-5">
                <h3 className="title-dot">{decryptedToken?.userFirstName}, definissez votre mot de passe</h3>
                <p>{decryptedToken?.login}</p>
                <p> Afin de finaliser la création de votre compte, definissez un mot de passe</p>
                <div className="row">
                <div className="col-sm-6">
                <label htmlFor="inputPassword" className="col-sm-6 col-form-label">Taper un mot de passe :</label>
                <span className="d-flex justify-content-end">
                <input type={visible?"text":"password"} className="form-control" id="inputPasswordOne"
                onChange={HandlePassOne}/>
                <ImEye className={`fs-3 mt-1 mx-3 ${visible ? "orange" : "black"}`}
                onClick={ToggleView}/>
                </span>
                <span className="d-flex justify-content-start">
                <p className="mt-2">Niveau de sécuritée : </p>
                    {securityPassLevel===1? <GiCheckedShield className="mt-1 text-info fs-3"/> : ""}
                    {securityPassLevel===2? <GiEdgedShield className="mt-1 orange fs-3"/> :""}
                    {securityPassLevel===3? <GiFireShield className="mt-1 text-danger fs-3"/> :""}
                </span>
                </div>
                
                <div className="row">
                <div className="col-sm-6">
                <label htmlFor="inputPassword" className="col-sm-6 col-form-label"> Retapez ce mot de passe, 6 charactères minimum :</label>
                <span className="d-flex justify-content-end">
                <input type={visibleBis?"text":"password"} className="form-control" id="inputPasswordTwo"
                onChange={HandlePassTwo}/>
                <ImEye className={`fs-3 mt-1 mx-3 ${visibleBis ? "orange" : "black"}`}
                onClick={ToggleViewBis}/>
                </span>
                <span className="d-flex justify-content-start">
                <p>Conformitée : </p>
                {!checkPassTwo &&<p className="text-danger">Différent!</p>}
                {checkPassTwo && <p className="text-success">Ok!</p>}
                </span>
                </div>
                </div>
                </div>
                <button type="button" className="btn btn-orange w-100"
                disabled={((securityPassLevel===0) || (!checkPassTwo))}
                onClick={HandleSubmit}>Finaliser la création de mon compte</button>
            </div>
        </div>
    );
};

export default RegisterPassPage;