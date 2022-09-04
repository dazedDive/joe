import { useEffect, useState } from "react"
import LogoNav from "../../../src/img/NavBarLogo.png"
import { CgMenuRound } from "react-icons/cg";

import '../NavBar/NavBar.css'

const NavBar =()=>{

      const [toggleMenu,setToggleMenu] = useState  (true)
      const [largeur,setLargeur] = useState(window.innerWidth)
      const handleClickMenu = ()=>{
        setToggleMenu(!toggleMenu);
      }

      useEffect(()=>{
        const changeWidth =()=>{
            setLargeur(window.innerWidth);
            if(window.innerWidth>768){
                setToggleMenu(false)
            }
        }
        window.addEventListener('resize', changeWidth);
        return ()=>{
            window.removeEventListener('rezize', changeWidth);
        }

      },[])
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
                {toggleMenu &&(
                <ul className="liste">
                    <div className="items">Acceuil</div>
                    <div className="items">Nos Machines</div>
                    <div className="items">Reserver</div>
                    <div className="items">Contact</div>
                </ul>)}
                <button className="menuBurger" onClick={handleClickMenu}><CgMenuRound className="fs-1"/></button>
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
