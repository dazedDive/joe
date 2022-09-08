import '../DateSelector/DateSelector.css'

import { useEffect, useState } from 'react';
import { MdOutlineAvTimer } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube } from 'swiper';
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft} from "react-icons/md";

import 'swiper/css'
import 'swiper/css/effect-cube'
import DateCard from '../DateCard/DateCard';
const DateSelector = () => {
    

const datePool = [{id:1,year:2022,month:9,days:"du 6 au 8"},{id:2,year:2022,month:9,days:"du 13 au 15"},
{id:3,year:2022,month:9,days:"du 20 au 22"},{id:4,year:2022,month:9,days:"du 27 au 1er "},
{id:5,year:2022,month:10,days:"du 17 au 19"},{id:6,year:2022,month:10,days:"du 24 au 26"},
{id:7,year:2022,month:10,days:"du 3 au 5"},{id:8,year:2022,month:10,days:"du 10 au 12"},
{id:9,year:2022,month:11,days:"du 17 au 19"},{id:10,year:2022,month:11,days:"du 24 au 26"},
]    




////////////fonction qui affiche le moi  et l'année en cour///////////

const monthIndex = (new Date().getMonth()); ///////on recupere le moi de la Date Actuel afin de l'utiliser pour afficher le moi en cour



const monthName = ["janvier","février","mars","avril","mai","juin","juillet","aout","septembre","octobre"
,"novembre","decembre"]; /////on utilisera le moi en valeur numérique comme indice pour afficher le moi en string
const [month,setMonth]=useState(monthName[monthIndex]);//////ce seter sert a afficher le moi selon la navigation
const [countMonth,setCountMonth]=useState(monthIndex);////ce seter sert a naviguer a partir du getMonth
const [flipper,setFlipper]=useState("The Twilight Zone"); //// ce seter sert a enregistrer le choix de flipper
////////////////////////////////////////////////////fonction qui map les dates a redristribuer dans les pages

const [dateChoosen,setDateChoosen]= useState('selectionnez une date'); ///ce setter enregistre la date de la carddate
const [timeRent, setTimeRent] = useState('selectionnez une durée de location');////ce setter enregistre la durée de location
const [pageDate, setPageDate]= useState(1); ////ce setter limite la navigation a (+7/-0) mois par rapport au moi en cour
const [yearIndex,setYearIndex]=useState(new Date().getFullYear()); /////ce setter mets a jour l'annee
const [dateFilter, setDateFilter]=useState(datePool.filter(seance=>seance.month===countMonth+1)); /////ce setter filtre les seance=moi select

////////////fonction pour le click de la duree de location
const HandleTime =(evt)=>{
    setTimeRent(evt.target.value)
    alert('click')
}
////////////fonction pour le click du flipper choisie
const HandleFlipper =(evt)=>{
    setFlipper(evt.target.value)
    alert(evt.target.value)
}
////////////////////////navigation du calendrier/////////////////////
const HandleNext = () =>{
    setPageDate(pageDate===7?1:pageDate+1)
    setCountMonth(countMonth===11?0:countMonth+1)
    setMonth(monthName[countMonth])
    setYearIndex(countMonth===11?yearIndex+1:yearIndex)
    setDateFilter(datePool.filter(seance=>seance.month===countMonth+2))
    console.log(dateFilter)

}
const HandlePrevious = ()=>{
    setPageDate(pageDate===1?7:pageDate-1)
    setCountMonth(countMonth===0?11:countMonth-1)
    setMonth(monthName[countMonth])
    setYearIndex(countMonth===0?yearIndex-1:yearIndex)
    setDateFilter(datePool.filter(seance=>seance.month===countMonth))

}




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
                <p>Le flipper peux être livré au plus tôt le vendredi soir pour un retour au plus tard le Dimanche Midi.</p>
            </div>
            <div className="col-12 col-md-6">
                <div className="row">
            <h1 className="resa-dot-2">{monthName[countMonth]}  {yearIndex}</h1>
           
           {dateFilter.map(({id,days,year}) =>
           <DateCard key={id} 
           days={days+" "} 
           year={year}
           setDateChoosen={setDateChoosen} />)}
                </div>
            
            <span className="d-flex justify-content-between mt-4">
            
            <MdOutlineKeyboardArrowLeft className={`btn fs-1 navbutton ${pageDate===1&&"disabled"  }`} onClick={HandlePrevious}/>
            <MdOutlineKeyboardArrowRight className={`btn fs-1 navbutton ${pageDate===7&&"disabled"  }`} onClick={HandleNext}/>
            </span>
            </div>
        
            
    
            <div className="container">
        <div className="row mt-5">
            <div className="col-12 col-md-6">
            <h1 className="resa-dot">Durée de la location  </h1>
            <p>Choissisez pour 24 ou 48H</p>
            </div>
            <div className="col-12 col-md-6">
            <div className="row">
                <div className="col-6">
                <button type="button" className="btn btn-secondary w-50 m-2" value="24H" onClick={HandleTime}>24H</button>
                </div>
                <div className="col-6">
                <button type="button" className="btn btn-secondary w-50 m-2" value="48H" onClick={HandleTime}>48H</button>
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
            </div>
            
                <Swiper modules={[EffectCube]} effect="cube">
                    <SwiperSlide>
                    <div className="card bg-dark text-white" >
                    <img src="./assets/images/twilightzone.jpg" className="card-img w-50" alt="..."/>
                    <div className="card-img-overlay" onClick={HandleFlipper} value="The Twilight Zone">
                    <h1 className="card-title text-dark bg-light">Twilight Zone</h1>
                    <p className="card-text bg-dark">Life is a one way street, expect, in the trwilight zone</p>
                    <p className="card-text bg-dark">A partie de 119€ TTC</p>
                    </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide >
                    <div className="card bg-dark text-white" onClick={HandleFlipper} value="Idiana Jones">
                    <img src="./assets/images/indianajones.jpg" className="card-img w-50" alt="..." />
                    <div className="card-img-overlay"  >
                    <h1 className="card-title text-dark bg-light">IndianaJones</h1>
                    <p className="card-text bg-dark">A ne pas confondre avec Lego India agence</p>
                    <p className="card-text bg-dark">A partie de 99€ TTC</p>
                    </div>
                    </div>
                    </SwiperSlide>
                </Swiper>
            
        </div>
    </div>
    </div >
    <h3> Recapitulatif : </h3>
    <h4> date : {dateChoosen}</h4>
    <h4> durée : {timeRent}</h4>
    <h4> votre Flipper : {flipper}</h4>
    <h4> min bite</h4>

    </div>
  );
};

export default DateSelector