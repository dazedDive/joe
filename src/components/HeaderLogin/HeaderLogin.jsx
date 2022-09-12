import '../HeaderLogin/HeaderLogin.css'

import { BsPersonXFill } from "react-icons/bs";

const HeaderLogin = ()=>{

    return(
        <>
        <div className="container-fluid bg-white">
            <span className="d-flex justify-content-end me-5">
             <BsPersonXFill className="mt-1 me-2 orange"/>
             <p> : non connecté</p>   
            </span>
        </div>
        </>
    )
}

export default HeaderLogin;