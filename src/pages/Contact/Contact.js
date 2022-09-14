import '../Contact/Contact.css'
import ContactForm from "../../components/ContactForm/ContactForm"
import {BsFillTelephoneFill} from "react-icons/bs"
import {MdAlternateEmail} from "react-icons/md"
import carte from '../.././img/carte.png'

const Contact = () =>{

    return(
        <>
        <div className="container mt-5">
        <div className="row">
            <div className="col -12 col-md-6">
            <h5 className="title-contact">Une question? </h5>
            <h5 className="title-contact">Un renseignement?</h5>
            
            </div>
            <div className="col-12 col-md-2">
            <h5>Joe Arcade</h5>
            <p> 12 rue du Renard, 59878 Maretz</p>
            <span className="d-flex justify-content-start">
            <BsFillTelephoneFill className="fs-4"/>
            <p className="ms-2">06 66 77 44 33</p>
            </span>
            <span className="d-flex justify-content-start">
            <MdAlternateEmail className="fs-4"/>
            <p className="ms-2">joearcade@gmail.com</p>
            </span>
            </div>
            <div className="col-12 col-md-4">
            <img src={carte} alt="carte" className="img-fluid"></img>
            </div>
        </div>
        </div>
            <ContactForm className="mb-5"/>

        </>

    )
}

export default Contact