import '../HeaderLogin/HeaderLogin.css'
import { AuthContext } from "../../contexts/AuthContext"
import { useContext } from 'react';
import { MdPersonOff,MdPerson,MdAlternateEmail } from "react-icons/md";
import { ImCross,ImHome3,ImUser } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { getCookie } from '../../helpers/CookieHelper';
import { useEffect } from 'react';
import { useState } from 'react';
import { setCookie,deleteCookie } from '../../helpers/CookieHelper';

 




const HeaderLogin = ({log})=>{
    const {setAuth,auth} = useContext (AuthContext);
    const [nameAccount,setNameAccount] = useState('');
    useEffect(()=>{
        fetch('http://joe.api/account/'+auth.id,{
            method : "post" ,
            credentials: "include",
            headers: {
            Authorization : getCookie("pinball")},
            body : JSON.stringify({with:['customer']})})
        .then(rep=>rep.json())
        .then(json=>{
            setNameAccount(json)
    })},[auth])

   

    





    return(
        <>
        <div className="container-fluid bg-white">
            <span className="d-flex justify-content-end me-5 ">
             {auth?.result==true?<MdPerson className="text-dark fs-4"/> :
              <MdPersonOff className="text-dark fs-4"/>} 
             <p className="text-dark" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" >
                {auth?.result? "Bienvenue : " : ""}
                <strong>{nameAccount?.login}</strong>
                {auth?.result? <ImCross className="orange fs-6 ms-2 item"
                onClick={()=>{
                    deleteCookie("pinball");
                    setAuth({admin:0,result:false,id:0});
                    window.location.href="/"}}/> : ""}</p>   
            </span>

            
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel" className="bg-dark text-white px-5 py-1">Mon compte : </h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
            <div className="offcanvas-body">
                    <h5>Mes infos : </h5>
                <div className="bg-white shadow p-1 mb-5 bg-body rounded">
                <span className="d-flex justify-content-start">
                 <ImUser className=" mx-2 fs-3 orange"/>
                 <p>{nameAccount?.customer?.first_name},{nameAccount?.customer?.last_name}</p>
                 </span>
                 
                 <span className="d-flex justify-content-start">
                 <ImHome3 className=" mx-2 fs-3 orange"/>
                 <p>{nameAccount?.customer?.adresse_facturation}</p>
                 </span>
                 <span className="d-flex justify-content-start">
                    <MdAlternateEmail className=" mx-2 fs-3 orange"/>
                 <p>{nameAccount?.customer?.mail}</p>
                 </span>
                 <span className="d-flex justify-content-start">
                    <BsFillTelephoneFill className=" mx-2 fs-3 orange"/>
                 <p>{nameAccount?.customer?.telephone}</p>
                 </span>
                </div>
                <h5>Mes Reservations : </h5>
                <div className="bg-white shadow p-1 mb-5 bg-body rounded">
                    <p>Vide</p>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default HeaderLogin;