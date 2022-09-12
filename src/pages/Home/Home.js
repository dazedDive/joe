import { BsPersonFill,BsShieldFill } from "react-icons/bs"
import '../Home/Home.css'

const Home =()=>{

    return(
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-md-4">
                    <p>Connexion : </p>
                <span className="d-flex justify-content-start">
                <BsPersonFill className="fs-3 mt-1 orange"/>
                <input class="form-control" type="text" placeholder="email" aria-label="default input example"></input>
                </span>
                <span className="d-flex justify-content-start mt-2">
                <BsShieldFill className="fs-3 mt-1 orange"/>
                <input class="form-control" type="text" placeholder="mot de passe" aria-label="default input example"></input>
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
                <h5>Nous nous déplaçons dans les département du 02, 59 et 62 !</h5>
                
                </div>
                <div className="col-12 col-md-4">
                
                </div>
            </div>
        </div>
        </>
    )
}
export default Home