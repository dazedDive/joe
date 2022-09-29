import React from 'react';
import '../NavBarAdmin/NavBarAdmin.css'
import { MdAlternateEmail} from "react-icons/md";
import { BsCalendarDateFill,
    BsFillPersonFill,
    BsCameraFill,
    BsFileBarGraphFill,
    BsFacebook,
    BsInstagram,
    BsFillEmojiAngryFill,
    BsGear} from "react-icons/bs";
import { GiPinballFlipper} from "react-icons/gi";
import { RiMoneyPoundCircleFill} from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';



const NavBarAdmin = () => {
    
    
    const [dataAdmin, setDataAdmnin]=useState(null);
    console.log(dataAdmin)
    useEffect(()=>{
        fetch('http://joe.api/statistique/2')
        .then(rep=>rep.json())
        .then(json=>{
            setDataAdmnin(json)
        })
    },[])




    return (
        <div>
            <nav>
                <ul className="navbar-nav ms-3 bg-light menubar">
                    <li className="item mt-2">
                        <Link  to="/admninjosh/date">      
                        <span className="d-flex justify-content-start item">
                        <BsCalendarDateFill className="fs-5"></BsCalendarDateFill>
                        <p className="ms-3 item">Gestion Dates</p>
                        </span>
                        </Link>
                    </li>

                    <li className="item mt-2">
                         <Link  to="/admninjosh/flipper"> 
                        <span className="d-flex justify-content-start item">
                        <GiPinballFlipper className="fs-5"></GiPinballFlipper>
                        <p className=" ms-3 item">Gestion Flippers</p>
                        </span>
                        </Link>
                    </li>

                    <li className="item mt-2">
                        <Link  to="/admninjosh/customer"> 
                        <span className="d-flex justify-content-start item">
                        <BsFillPersonFill className="fs-5"></BsFillPersonFill>
                        <p className=" ms-3 item">Gestion Clients</p>
                        </span>
                        </Link>
                    </li>

                    <li className="item mt-2">
                        <Link  to="/admninjosh/frais"> 
                        <span className="d-flex justify-content-start item">
                        <BsGear className="fs-5"></BsGear>
                        <p className=" ms-3 item">Gestion frais</p>
                        </span>
                        </Link>
                    </li>
                   
                    <li className="item mt-2">
                        <Link  to="/admninjosh/order"> 
                        <span className="d-flex justify-content-start item">
                        <RiMoneyPoundCircleFill className="fs-5"></RiMoneyPoundCircleFill>
                        <p className=" ms-3 item">Gestion Commandes</p>
                        </span>
                        </Link>
                    </li>

                    <li className="item mt-2">
                        <Link  to="/admninjosh/image"> 
                        <span className="d-flex justify-content-start item">
                        <BsCameraFill className="fs-5"></BsCameraFill>
                        <p className=" ms-3 item">Gestion Images</p>
                        </span>
                        </Link>
                    </li>

                    
                    <li className="item mt-2">
                        <Link  to="/admninjosh/stat"> 
                        <span className="d-flex justify-content-start item">
                        <BsFileBarGraphFill className="fs-5"></BsFileBarGraphFill>
                        <p className=" ms-3 item"> Statistiques</p>
                        </span>
                        </Link>
                    </li>

                    <li className="item mt-2">
                        <Link  to="dazed_dive@hotmail.fr"> 
                        <span className="d-flex justify-content-start item">
                        <MdAlternateEmail className="fs-5"></MdAlternateEmail>
                        <p className=" ms-3 item">Mon Email</p>
                        </span>
                        </Link>
                    </li>

                    <li className="item mt-2">
                        <Link  to="dazed_dive@hotmail.fr"> 
                        <span className="d-flex justify-content-start item">
                        <BsFacebook className="fs-5"></BsFacebook>
                        <p className=" ms-3 item">Mon Facebook</p>
                        </span>
                        </Link>
                    </li>

                    <li className="item mt-2">
                        <Link  to="dazed_dive@hotmail.fr"> 
                        <span className="d-flex justify-content-start item">
                        <BsInstagram className="fs-5"></BsInstagram>
                        <p className=" ms-3 item">Mon Instagram</p>
                        </span>
                        </Link>
                    </li>

                    <li className="item mt-2">
                        <Link  to="dazed_dive@hotmail.fr"> 
                        <span className="d-flex justify-content-start item">
                        <BsFillEmojiAngryFill className="fs-5"></BsFillEmojiAngryFill>
                        <p className=" ms-3 item">Help David !</p>
                        </span>
                        </Link>
                    </li>

                    <li className=" mt-2">
                    <span className="d-flex justifify-content-start">
                        <p className=" ms-3">Nb resa : </p>
                        <h5 className="orange"> {dataAdmin?.nbResaTotal} </h5>
                    </span>
                        <span className="d-flex justifify-content-start">
                        <p className=" ms-3">C.A total : </p>
                        <h5 className="orange"> {dataAdmin?.Chiffre_Affaire} €</h5>
                        </span>
                    </li>
                

                </ul>
            </nav>
        </div>
    );
};

export default NavBarAdmin;