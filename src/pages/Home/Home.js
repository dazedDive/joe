import { BsPersonFill,BsShieldFill } from "react-icons/bs"
import '../Home/Home.css'
import Bandeau from "../../../src/img/bandeHomePage.jpg"
import Kangoo from "../../../src/img/kangoo.png"
import { useState,useEffect,useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
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
        const regexPass = /^((?=\S*?[A-Z])(?=\S*?[a-z]).{6,})\S$/
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
            setAuth({admin:+json.is_admin})
            console.log(auth)
            auth.admin=="1" && navigate('/admninjosh');
          }   else {
            setAlertForm('compte innexistant, ou erreur de saisie')
          }
      })
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
                <div className="col-12 col-md-4 bg-white shadow p-1 mb-5 bg-body rounded">
                <form onSubmit={HandleConnexion} noValidate>
                <p className="orange">Connexion : </p>
                <span className="d-flex justify-content-start">
                <BsPersonFill className="fs-3 mt-1 orange"/>
                <input className="form-control" type="text" placeholder="email"
                name ="login" 
                onChange={HandleMail}></input>
                </span>
                <span className="d-flex justify-content-start mt-2">
                <BsShieldFill className="fs-3 mt-1 orange"/>
                <input className="form-control" type="password" placeholder="mot de passe" 
                name ="password" 
                onChange={HandlePass}></input>
                <button type="submit" className="btn  ms-1"
                disabled={!(checkMail&&checkPass)}>Connexion</button>
                </span>
                </form>
                <p className="orange">{alertForm}</p>
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
                <img className="img-fluid" src={Kangoo} alt="kangoo"></img>
                </div>
            </div>
        </div>
        </>
    )
}
export default Home