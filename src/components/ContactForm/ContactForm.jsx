import { useState } from "react";
import { GiCrosshair } from "react-icons/gi";
import { GiPinballFlipper } from "react-icons/gi";
import { GiPoolTriangle } from "react-icons/gi";
import { GiDart } from "react-icons/gi";
import { ImPacman } from "react-icons/im";
import '../ContactForm/ContactForm.css'

const ContactForm =()=>{

    const [name,SetName]=useState('');
    const [lastName,SetLastName]=useState('');
    const [tel,SetTel]=useState('');
    const [mail,SetMail]=useState('');
    const [msg,SetMsg]=useState('');
   
    const [submit, setSubmit]=useState([])

    const handleName=(e)=>{
        SetName(e.target.value)
    }
    const handleFirstName=(e)=>{
        SetLastName(e.target.value)
    }
    const handleTel=(e)=>{
        SetTel(e.target.value)
    }
    const handleMail=(e)=>{
        SetMail(e.target.value)
    }
    const handleMsg=(e)=>{
        SetMsg(e.target.value)
    }
    const handleSend=()=>{
        setSubmit({name,lastName,tel,mail,msg})
    }
    console.log(submit)

    return (
        <>
        <div className="container mt-5 py-5 px-3  shadow-lg p-3 mb-5 bg-body rounded">
            <p className=" text-title">Contactez nous :</p>
            <div className="row">
                <div className="col-6">
                    <span className="d-flex justify-content-start">
                    <ImPacman className="fs-1 me-2 text-icon"/>
                    <input class="form-control" type="text" placeholder="Nom" aria-label="default input example" onChange={handleName}/>
                    </span>
                </div>
                <div className="col-6">
                    <span className="d-flex justify-content-start">
                    <GiPinballFlipper className="fs-1 me-2 text-icon"/>
                    <input class="form-control" type="text" placeholder="Prenom" aria-label="default input example" onChange={handleFirstName}/>
                    </span>
                </div>
                <div className="col-6 mt-4">
                    <span className="d-flex justify-content-start">
                    <GiPoolTriangle className="fs-1 me-2 text-icon"/>
                    <input class="form-control" type="text" placeholder="Telephone" aria-label="default input example"onChange={handleTel}/>
                    </span>
                </div>
                <div className="col-6 mt-4">
                    <span className="d-flex justify-content-start">
                    <GiDart className="fs-1 me-2 text-icon"/>
                    <input class="form-control" type="text" placeholder="Email" aria-label="default input example"onChange={handleMail}/>
                    </span>
                </div>
                <div className="col-12 mt-4">
                <label for="exampleFormControlTextarea1" className="form-label text-icon">Votre message :</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={handleMsg}></textarea>
                </div>
                <div className="col-12 mt-4">
                    <span className="d-flex justify-content-center">
                    <button type="button" class="btn" onClick={handleSend}>Envoyer</button> 
                    </span>
                </div>
            </div>
        </div>
        </>

    )
}
export default ContactForm