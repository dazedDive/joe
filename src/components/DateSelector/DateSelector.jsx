import '../DateSelector/DateSelector.css'

import { useState } from 'react';
import { MdOutlineAvTimer } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft} from "react-icons/md";

import 'swiper/css'
import 'swiper/css/effect-cube'
import DateCard from '../DateCard/DateCard';
const DateSelector = () => {
    

const datePool = [{id:1,year:2022,month:9,days:"du 6 au 8"},{id:2,year:2022,month:9,days:"du 13 au 15"},
{id:3,year:2022,month:9,days:"du 20 au 22"},{id:4,year:2022,month:9,days:"du 27 au 1er Fevrier"},
{id:5,year:2022,month:10,days:"du 17 au 19"},{id:6,year:2022,month:10,days:"du 24 au 26"},
{id:7,year:2022,month:10,days:"du 3 au 5"},{id:8,year:2022,month:10,days:"du 10 au 12"},
{id:9,year:2022,month:11,days:"du 17 au 19"},{id:10,year:2022,month:11,days:"du 24 au 26"},
]    




////////////fonction qui affiche le moi  et l'année en cour///////////

const monthIndex = (new Date().getMonth())



const monthName = ["janvier","février","mars","avril","mai","juin","juillet","aout","septembre","octobre"
,"novembre","decembre"]
const [month,setMonth]=useState(monthName[monthIndex])
const [countMonth,setCountMonth]=useState(monthIndex)
////////////////////////////////////////////////////fonction qui map les dates a redristribuer dans les pages
const [monthList,setMontList]=useState([])
const [dateChoosen,setDateChoosen]= useState('selectionnez une date')
const [timeRent, setTimeRent] = useState('selectionnez une durée de location')
const [pageDate, setPageDate]= useState(1)
const [yearIndex,setYearIndex]=useState(new Date().getFullYear())
const HandleTime =(evt)=>{
    setTimeRent(evt.target.value)
    alert('click')
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
           
           {datePool.map(({id, days,year}) =><DateCard key={id} days={days+" "} year={year} />)}
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
            <h1 className="resa-dot">Selectionnez votre flipper  </h1>
            <p>Chaque flipper sera révisé et nettoyé avant location</p>
            </div>
            <div className="col-12 col-md-6">
                
            </div>
        </div>
    </div>
    </div >
    <h3> Recapitulatif : </h3>
    <h4> date : {dateChoosen}</h4>
    <h4> durée : {timeRent}</h4>
    <h4> votre Flipper :</h4>
    <h4> min bite</h4>

    </div>
  );
};

export default DateSelector