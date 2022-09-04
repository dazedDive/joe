import { useEffect, useState } from "react"
import LogoNav from "../../../src/img/NavBarLogo.png"

import '../NavBar/NavBar.css'

const NavBar =()=>{

        

    return (
    <>
    <div class="container">
        <div className="row mt-3">
            <div className="col-2">
            
            </div>
            <div className="col-8 d-flex justify-content-center">
                <span className="">
            <img src={LogoNav} className="img-fluid d-none d-md-block"/>
            <nav>
                <ul className="liste">
                    <div className="items">Acceuil</div>
                    <div className="items">Nos Machines</div>
                    <div className="items">Reserver</div>
                    <div className="items">Contact</div>
                </ul>
            </nav>
            </span>
            </div>
            <div className="col-2">
                
            </div>
    </div>
    </div>
    </>
    )
}
export default NavBar;
