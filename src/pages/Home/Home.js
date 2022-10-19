import { BsPersonFill,BsShieldFill } from "react-icons/bs"
import '../Home/Home.css'
import Bandeau from "../../../src/img/bandeHomePage.jpg"
import Kangoo from "../../../src/img/kangoo.png"
import { useState,useEffect,useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"
const Home =()=>{
    const navigate = useNavigate();
    const [alertForm, setAlertForm] = useState('Deja client ? connectez vous')
    const [homeText, setHomeText]=useState(null);
    const [checkMail,setCheckMail] = useState();
    const [checkPass,setCheckPass] = useState();  
    const {setAuth,auth} = useContext (AuthContext);
    const HandleMail = (e) => {
        const regexMail = /^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/
        setCheckMail(regexMail.test(e.target.value))
      }
      
      const HandlePass = (e) => {
        const regexPass = /^[a-zA-Z0-9]{5,20}$/
        setCheckPass(regexPass.test(e.target.value))
      }

    useEffect(()=>{
    fetch('http://joe.api/statistique/2')
    .then(rep=>rep.json())
    .then(json=>{
        setHomeText(json)
    })
},[])

   

    const HandleConnexion =(e) =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const jsonData = Object.fromEntries(formData.entries()); 
        console.log(jsonData);
        fetch('http://joe.api/auth/login',{
        method : "post", body : JSON.stringify(jsonData)})
        .then(resp => resp.json())
        .then(json => {
          console.log(json);
          if (json.result) {
            setAuth({admin:+json.is_admin,result:+json.result,id:json.id});
            document.cookie = `pinball=${json.token};max-age=${60*60*24};`
            console.log(auth)
            json.is_admin==true && navigate('/admninjosh');
          }   else {
            setAlertForm('compte innexistant, ou erreur de saisie')
            document.cookie = `pinball=null;max-age=0;`
          }
      })
    }
    const [resetPassForm, setResetPassForm]=useState('');
    const ResetPassForm =(e)=>{
        setResetPassForm(e.target.value);
    }
    const [resetPassInfoText,setResetPassInfoText]=useState('')
    const SendMailResetPass =()=>{
        setResetPassInfoText('*Un Email pour réenitialiser votre mot de passe à été envoyé')
        fetch('http://joe.api/auth/reset',{
        method : "post", body : JSON.stringify(resetPassForm)})
        .then(rep=>rep.json())
        .then(json=>setResetPassInfoText(json));
        ;
    }


    return(
        <>
        <div className="container-fluid mt-5">
            <span className="d-flex justify-content-start cadre">
            <img src={Bandeau} className="bandeau" height={"300px"}></img>
            <img src={Bandeau} className="bandeau" height={"300px"}></img>
            </span>
        </div>
        <div className="container mt-5">
        <h3 className='title-anim'>What's up?</h3>
        <h5 className="orange">{homeText?.textHome}</h5>
        </div>
        <div className="container-fluid mt-2 d-flex justify-content-center">
        
        </div>
        <p></p>
        <div className="container mt-5">
            <div className="row">
            <div className={`col-12 col-md-4 bg-white shadow p-1 mb-5 bg-body rounded ${auth?.result==true && "d-none"}`}>
                <form onSubmit={HandleConnexion} noValidate>
                <span className="d-flex justify-content-start">
                <p className="orange"><strong className="me-3 ms-1">Connexion </strong> </p>
                <p className="orange"> {alertForm} :</p>
                </span>
                <span className="d-flex justify-content-start">
                <BsPersonFill className="fs-3 mt-1 mx-1 orange"/>
                <input className="form-control" type="text" placeholder="email"
                name ="login" 
                onChange={HandleMail}></input>
                </span>
                <span className="d-flex justify-content-start mt-2">
                <BsShieldFill className="fs-3 mt-1 mx-1 orange"/>
                <input className="form-control" type="password" placeholder="mot de passe" 
                name ="password" 
                onChange={HandlePass}></input>
                <button type="submit" className="btn  ms-1"
                disabled={!(checkMail&&checkPass)}>Connexion</button>
                </span>
                </form>
                <span className="bg-light ">
                <Link to="/creation" className="text-black item">Pas de compte? cliquez ici</Link>
                </span>
                <span className="bg-light ">
                <p data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="text-black item">Mot de passe oublié..</p>
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
        
        
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
         <div class="modal-dialog">
         <div class="modal-content">
         <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Nouveau mot de passe</h5>
         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <p>Veuillez renseigner votre Email de login</p>
         <input class="form-control" type="text" placeholder="Default input"
         aria-label="default input example" onChange={ResetPassForm}></input>
        </div>
        <div class="modal-footer">
         <i className="orange">{resetPassInfoText}</i>
         <button type="button" class="btn btn" onClick={SendMailResetPass}>M'envoyer un Lien</button>
        </div>
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
                <img className="img-fluid" src={Kangoo} alt="kangoo"></img>
                </div>
            </div>
        </div>
        </>
    )
}
export default Home