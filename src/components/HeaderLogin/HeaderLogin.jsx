import '../HeaderLogin/HeaderLogin.css'
import { AuthContext } from "../../contexts/AuthContext"
import { useContext } from 'react';
import { MdPersonOff,MdPerson } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { useEffect } from 'react';
import { useState } from 'react';
import { setCookie,deleteCookie } from '../../helpers/CookieHelper';

 




const HeaderLogin = ({log})=>{
    const {setAuth,auth} = useContext (AuthContext);
    const [nameAccount,setNameAccount] = useState('');
    useEffect(()=>{
        fetch('http://joe.api/account/'+auth.id)
        .then(rep=>rep.json())
        .then(json=>{
            setNameAccount(json.login)
    })},[auth])

    const LogOut =()=>{
        console.log('Logout')
    }


    return(
        <>
        <div className="container-fluid bg-white">
            <span className="d-flex justify-content-end me-5 ">
             {auth?.result==true?<MdPerson className="text-dark fs-4"/> :
              <MdPersonOff className="text-dark fs-4"/>} 
             <p className="text-dark">
                {auth.result? "Bienvenue : " : ""}
                <strong>{nameAccount}</strong>
                {auth.result? <ImCross className="orange fs-6 ms-2 item"
                onClick={()=>{
                    deleteCookie("pinball");
                    setAuth({admin:0,result:false,id:0});
                    window.location.href="/"}}/> : ""}</p>   
            </span>
        </div>
        </>
    )
}

export default HeaderLogin;