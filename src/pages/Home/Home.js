import { BsPersonFill,BsShieldFill } from "react-icons/bs"
import '../Home/Home.css'
import ReactPlayer from 'react-player'
import { useState,useEffect } from "react"

const Home =()=>{

    const [homeText, setHomeText]=useState(null);
    
    useEffect(()=>{
    fetch('http://joe.api/statistique/2')
    .then(rep=>rep.json())
    .then(json=>{
        setHomeText(json)
    })
},[])

    const HandleConnexion =() =>{
        alert('site pas fini connard')
    }

    return(
        <>
        <div className="container mt-5">
        <h3 className='title-anim'>What's up?</h3>
        <p className="orange">{homeText?.textHome}</p>
        </div>
        <div className="container-fluid mt-2 d-flex justify-content-center">
        <ReactPlayer src='../../src/img/video.mp4'/>
        </div>
        <p></p>
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-md-4">
                    <p className="orange">Connexion : </p>
                <span className="d-flex justify-content-start">
                <BsPersonFill className="fs-3 mt-1 orange"/>
                <input class="form-control" type="text" placeholder="email" aria-label="default input example"></input>
                </span>
                <span className="d-flex justify-content-start mt-2">
                <BsShieldFill className="fs-3 mt-1 orange"/>
                <input class="form-control" type="text" placeholder="mot de passe" aria-label="default input example"></input>
                <button type="button" class="btn  ms-1" onClick={HandleConnexion}>Connexion</button>
                </span>
                </div>
                <div className="col-12 col-md-8">
        <h3 className='title-dot'>Location de Flippers et Machines d'Arcades</h3>
        <h5>Louez facilement votre flipper pour un évenement ! </h5>
        <p> Un anniverssaire? un mariage? Séminaire? ou simplement pour le plaisir, louer un de nos flippers,
            nous nous occupons de tout ! Livraison de la machine sur le lieu de votre événement, jouez gratuitement !
            Nos machines sont régulièrement entretenue et néttoyé.
        </p>

                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-8">
                <h3 className='title-dot'>Livraison dans le Nord de la france</h3>
                <h5> Basé sur Maretz, nous nous déplaçons dans les département du 02, 59 et 62 !</h5>
                <p>Indiquez simplement votre adresse de livraison lors de votre reservation,
                    nous vous communiquerons automatique un prix de transport.
                </p>

                </div>
                <div className="col-12 col-md-4">
                
                </div>
            </div>
        </div>
        </>
    )
}
export default Home