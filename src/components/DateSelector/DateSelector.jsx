import '../DateSelector/DateSelector.css'

import { useEffect, useState } from 'react';
import { MdOutlineAvTimer,MdSwipe } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';

import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft} from "react-icons/md";


import 'swiper/css'

import DateCard from '../DateCard/DateCard';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const DateSelector = () => {
    

const datePool = [{id:1,year:2022,month:9,days:"du 6 au 8"},{id:2,year:2022,month:9,days:"du 13 au 15"},
{id:3,year:2022,month:9,days:"du 20 au 22"},{id:4,year:2022,month:9,days:"du 27 au 1er "},
{id:5,year:2022,month:10,days:"du 17 au 19"},{id:6,year:2022,month:10,days:"du 24 au 26"},
{id:7,year:2022,month:10,days:"du 3 au 5"},{id:8,year:2022,month:10,days:"du 10 au 12"},
{id:9,year:2022,month:11,days:"du 17 au 19"},{id:10,year:2022,month:11,days:"du 24 au 26"},
{id:11,year:2023,month:1,days:"du 24 au 26"}
]    

/////////////////////////////////Recuperation des Data Flipper//////////////
const [flippers, setFlippers] = useState([]);
  ///////recuperation api flipper//////////:
  useEffect(() => {
    fetch("http://joe.api/flipper/0",{
    method : "post" , body : JSON.stringify({with:['image']})})
      .then((resp) => resp.json())
      .then((json) => {
        setFlippers(json)
          });
      
  }, []);




const [cookies, setCookie] = useCookies(['dateEtFlipper']);
////////////fonction qui affiche le moi  et l'année en cour///////////

const monthIndex = (new Date().getMonth()); ///////on recupere le moi de la Date Actuel afin de l'utiliser pour afficher le moi en cour
const navigate=useNavigate();


const monthName = ["janvier","février","mars","avril","mai","juin","juillet","aout","septembre","octobre"
,"novembre","decembre"]; /////on utilisera le moi en valeur numérique comme indice pour afficher le moi en string
const [month,setMonth]=useState(monthName[monthIndex]);//////ce seter sert a afficher le moi selon la navigation
const [countMonth,setCountMonth]=useState(monthIndex);////ce seter sert a naviguer a partir du getMonth
const [flipper,setFlipper]=useState("selectionnez un flipper"); //// ce seter sert a enregistrer le choix de flipper

//////////////////Calcul du prix///////////////
const [priceByTime,setPriceByTime]=useState(1)
const [priceByFlipper,setPriceByFlipper] = useState(99)
const [price, setPrice]=useState(priceByFlipper*priceByTime)
////////////////////////////////////////////////////fonction qui map les dates a redristribuer dans les pages

const [dateChoosen,setDateChoosen]= useState(['selectionnez une date','','']); ///ce setter enregistre la date de la carddate
const [timeRent, setTimeRent] = useState('selectionnez une durée de location');////ce setter enregistre la durée de location
const [pageDate, setPageDate]= useState(1); ////ce setter limite la navigation a (+7/-0) mois par rapport au moi en cour
const [yearIndex,setYearIndex]=useState(new Date().getFullYear()); /////ce setter mets a jour l'annee
const [dateFilter, setDateFilter]=useState(datePool.filter(seance=>seance.month===countMonth+1 && seance.year===yearIndex)); /////ce setter filtre les seance=moi select
const [dateControl, setDateControl]=useState(false);///controller qui verifie que le choix de date est ok
const [timeControl, setTimeControl]=useState(false);///controller qui verifie que le choix de temp est ok
const [flipperControl, setFlipperControl]=useState(false);
////////////fonction pour le click de la duree de location
const HandleTime =(evt)=>{
        setTimeRent(evt.target.value)
        setTimeControl(true)
        if (evt.target.value==="2 jours : Samedi et dimanche"){
            setPriceByTime(1.75);
        }else if (evt.target.value==="journée du Dimanche"){
            setPriceByTime(1.35);
        }else{
            setPriceByTime(1);
        }
    
}

////////////fonction pour le click du flipper choisie
const HandleFlipper =(evt)=>{
    setFlipper(evt.target.value);
    setFlipperControl(true);
    if (evt.target.value==="The Twilight Zone"){
        setPriceByFlipper(99) 
    }else if (evt.target.value==="Tommy The Who"){
        setPriceByFlipper(79)
    }else if (evt.target.value==="Guns n Roses"){
        setPriceByFlipper(89)
    }else if (evt.target.value==="Poupoule"){
        setPriceByFlipper(69)}
    }



////////////////////////navigation du calendrier/////////////////////
const HandleNext = () =>{
    setPageDate(pageDate===7?1:pageDate+1)
    setCountMonth(countMonth===11?0:countMonth+1)
    setMonth(monthName[countMonth])
    setYearIndex(countMonth===11?yearIndex+1:yearIndex)
    
    

}
const HandlePrevious = ()=>{
    setPageDate(pageDate===1?7:pageDate-1)
    setCountMonth(countMonth===0?11:countMonth-1)
    setMonth(monthName[countMonth])
    setYearIndex(countMonth===0?yearIndex-1:yearIndex)
    

}

const HandleCookie = () =>{
    setCookie("dateEtFlipper",{price,flipper,dateChoosen,timeRent})
}


    useEffect(()=>{
    setDateFilter(datePool.filter(seance=>seance.month===countMonth+1 && seance.year===yearIndex))
    },[pageDate])

    useEffect(()=>{
        setPrice(priceByFlipper*priceByTime)
    },[priceByTime,priceByFlipper])




  return (
    <div className="container mt-4">
        <span className="d-flex justify-content-center">
        <p>Etape 1/3</p>
        <MdOutlineAvTimer className="fs-4"/>
        <p>Selectionnez une date et un Flipper</p>
        </span>
        <div className="row">

            <div className="col-12 col-md-6">
                <h1 className="resa-dot">Selectionnez une date  </h1>
                <p>Le flipper peux être livré au plus tôt le vendredi soir pour un retour au plus 
                    tard le Dimanche Midi.</p>
                <p className="orange">{dateChoosen}</p>
            </div>
            <div className="col-12 col-md-6">
                <div className="row">
            <h1 className="resa-dot-2">{monthName[countMonth]}  {yearIndex}</h1>
           
           {dateFilter.map(({id,days,year,month}) =>
           <DateCard key={id} 
           days={days+" "} 
           month={monthName[countMonth]+" "}
           year={year}
           setDateChoosen={setDateChoosen}
           setDateControl={setDateControl} 
           dateControl={dateControl}/>)}
                </div>
            
            <span className="d-flex justify-content-between mt-4">
            
            <MdOutlineKeyboardArrowLeft className={`btn fs-1 navbutton ${pageDate===1&&"disabled"  }`} onClick={HandlePrevious}/>
            <MdOutlineKeyboardArrowRight className={`btn fs-1 navbutton ${pageDate===7&&"disabled"  }`} onClick={HandleNext}/>
            </span>
            </div>
        
            
    
            <div className="container bg-light p-3 mt-2">
        <div className="row mt-5">
            <div className="col-12 col-md-6">
            <h1 className="resa-dot ">Durée de la location  </h1>
            <p>Choissisez pour 24 ou 48H, ainsi que la journée.</p>
            <p className="orange">{timeRent}</p>
            </div>
            <div className="col-12 col-md-6">
            <div className="row">
                <div className="col-4">
                <button type="button" className="btn btn-secondary w-100 m-2" value="journée du Samedi" onClick={HandleTime}>1jour : SAMEDI</button>
                </div>
                <div className="col-4">
                <button type="button" className="btn btn-secondary w-100 m-2" value="journée du Dimanche" onClick={HandleTime}>1jour : DIMANCHE </button>
                </div>
                <div className="col-4">
                <button type="button" className="btn btn-secondary w-100 m-2" value="2 jours : Samedi et dimanche" onClick={HandleTime}>2 jours :  SAMEDI et DIMANCHE</button>
                </div>
            </div>
            </div>
        </div>
    </div>
    </div>
    
    <div className="container">
        <div className="row mt-5">
            <div className="col-12 col-md-6">
                <h1 className="resa-dot">Selectionnez votre flipper :</h1>
                <p>Chaque flipper sera révisé et nettoyé avant location</p>
                <span className="d-flex justify-content-start">
                <MdSwipe className="fs-2 orange"/>
                <p className="orange fst-italic">Faites glisser pour défiler</p>
                
                </span>
                <Swiper className="mb-5">
                    <SwiperSlide>
                    <div className="card" >
                    <img src="./assets/images/popo.jpg" className="card-img-top w-50" alt="..."/>
                    <div className="card-body">
                    <h4 className="card-text ">the Twilight-Zone</h4>
                    <button type="button" className="btn btn-secondary  m-2" value="The Twilight Zone" 
                    onClick={HandleFlipper}>Selectionnez</button>
                    </div>
                    </div> 
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="card" >
                    <img src="./assets/images/popo.jpg" className="card-img-top w-50" alt="..."/>
                    <div className="card-body">
                    <p className="card-text">Tommy The Who</p>
                    <button type="button" className="btn btn-secondary  m-2" value="Tommy The Who" 
                    onClick={HandleFlipper}>Selectionnez</button>
                    </div>
                    </div> 
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="card" >
                    <img src="./assets/images/popo.jpg" className="card-img-top w-50" alt="..."/>
                    <div className="card-body">
                    <p className="card-text">Guns n' Roses</p>
                    <button type="button" className="btn btn-secondary  m-2" value="Guns n Roses" 
                    onClick={HandleFlipper}>Selectionnez</button>
                    </div>
                    </div> 
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="card" >
                    <img src="./assets/images/popo.jpg" className="card-img-top w-50" alt="..."/>
                    <div className="card-body">
                    <p className="card-text">Poupoule</p>
                    <button type="button" className="btn btn-secondary  m-2" value="Poupoule" 
                    onClick={HandleFlipper}>Selectionnez</button>
                    </div>
                    </div> 
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="card" >
                    <img src="./assets/images/popo.jpg" className="card-img-top w-50" alt="..."/>
                    <div className="card-body">
                    <p className="card-text">Aline aux pays des Pines</p>
                    <button type="button" className="btn btn-secondary  m-2" value="Guns n Roses" 
                    onClick={HandleFlipper}>Aline aux pays des Pines</button>
                    </div>
                    </div> 
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="col-12 col-md-6">
                <div className="bgorange">
                <h1 className="resa-dot text-white">recapitulatif: </h1>
                <p className={`${dateControl ===true ? "text-black fw-bold" : "text-white "}`} >Date du : {dateChoosen}</p>
                <p className={`${timeControl ===true ? "text-black fw-bold" : "text-white "}`}>Durée de location : {timeRent}</p>
                <p className={`${flipperControl ===true ? "text-black fw-bold" : "text-white "}`}>Flipper : {flipper}</p>
                <p className={`${flipperControl &&timeControl &&flipperControl===true ? "text-black fw-bold d-block" : "d-none "}`}>Prix TTC hors livraison : {price} €/TTC</p>
                </div>
                <button type="button" 
            className={`btn btn-secondary w-50 mt-5 ${!(dateControl &&timeControl &&flipperControl) &&"disabled"  }`}
         value={price} onClick={()=>{navigate('/reservation/second');HandleCookie()}}
         >Etape suivante</button>
            </div>
        </div>
    </div>
    </div>
  );
};

export default DateSelector