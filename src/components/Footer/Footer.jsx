import '../Footer/Footer.css'
import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";

const Footer = () =>{



    return(
        <>
        <div className="container-fluid footerstyle py-2">
            <span className="d-flex justify-content-end">
                <p className="m-2 text-white">Mentions Légales</p>
                <SiFacebook className='item-nav fs-1 me-2 text-white'/>
                <SiInstagram className='item-nav fs-1 me-2 text-white'/>
                <SiWhatsapp className='item-nav fs-1 me-5 text-white'/>
            </span>
        </div>
        </>

    )
}
export default Footer
