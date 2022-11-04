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
    ///////////recupération du timestamp/////////////
const [dayIndex,setDayIndex]=useState(new Date().getDate())
const [yearIndex,setYearIndex]=useState(new Date().getFullYear()); /////ce setter mets a jour l'annee
const monthIndex = (new Date().getMonth()); ///////on recupere le moi de la Date Actuel afin de l'utiliser pour afficher le moi en cour
const navigate=useNavigate();
    



/////////////////////////////////Recuperation des bookings date//////////////
const [dateOfBooking, setDateOfBooking] = useState([])
useEffect(()=>{
    fetch('http://joe.api/booking')
    .then(rep=>rep.json())
    .then(json=>{
        setDateOfBooking(json)
    })
    },[])
///////////////////////Affichage des bon crénaux au chargement de la page///////////


////////////////////////////////////////////////////////////////////////////
const [flippers, setFlippers] = useState([]);
  ///////recuperation api  des flippers//////////:
  useEffect(() => {
    fetch("http://joe.api/flipper/0",{
    method : "post" , body : JSON.stringify({with:['image']})})
      .then((resp) => resp.json())
      .then((json) => {
        setFlippers(json)
          });
           
  }, []);

///////////////////////////////Recuperation des DataFrais ///////////////
    const [dataAdmin, setDataAdmnin]=useState(null);
    console.log(dataAdmin) 
    useEffect(()=>{
        fetch('http://joe.api/statistique/2')
        .then(rep=>rep.json())
        .then(json=>{
            setDataAdmnin(json)
        })
    },[])


const [cookies, setCookie] = useCookies(['dateEtFlipper']);
////////////fonction qui affiche le moi  et l'année en cour///////////



const monthName = ["janvier","février","mars","avril","mai","juin","juillet","aout","septembre","octobre"
,"novembre","decembre"]; /////on utilisera le moi en valeur numérique comme indice pour afficher le moi en string
const [month,setMonth]=useState(monthName[monthIndex]);//////ce seter sert a afficher le moi selon la navigation
const [countMonth,setCountMonth]=useState(monthIndex);////ce seter sert a naviguer a partir du getMonth
//// ce seter sert a enregistrer le choix de flipper

//////////////////Calcul du prix///////////////
const [priceByTime,setPriceByTime]=useState(1)

////////////////////////////////////////////////////fonction qui map les dates a redristribuer dans les pages

const [dateChoosen,setDateChoosen]= useState(['selectionnez une date','','']); ///ce setter enregistre la date de la carddate
const [timeRent, setTimeRent] = useState('selectionnez une durée de location');////ce setter enregistre la durée de location
const [pageDate, setPageDate]= useState(1); ////ce setter limite la navigation a (+7/-0) mois par rapport au moi en cour
const [dateFilter, setDateFilter]=useState([]); 
console.log(dateFilter)
const [dateControl, setDateControl]=useState(false);///controller qui verifie que le choix de date est ok
const [timeControl, setTimeControl]=useState(false);///controller qui verifie que le choix de temp est ok

////////////fonction pour le click de la duree de location

    
    ////////////setter du flipper pour la selection
    const [priceByFlipper,setPriceByFlipper] = useState(0)
    const [flipper,setFlipper]=useState("selectionnez un flipper"); 
    const [flipperControl, setFlipperControl]=useState(false);
    const [price, setPrice]=useState((priceByFlipper*priceByTime))

////////////////////////navigation du calendrier/////////////////////
const HandleNext = () =>{
    setPageDate(pageDate===7?1:pageDate+1)
    setCountMonth(countMonth===11?0:countMonth+1)
    setMonth(monthName[countMonth])
    setYearIndex(countMonth===11?yearIndex+1:yearIndex)
    console.log(dateOfBooking);
    console.log(dateFilter);
    
    

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
    setDateFilter([...dateOfBooking.filter(seance=>seance.month_location==countMonth+1 && seance.year_location==yearIndex &&seance.weekend_location>dayIndex)])
    },[dateOfBooking])

    /////codé un if moi en cour filtrer les jour>dayindex//////////////
    useEffect(()=>{
    setDateFilter([...dateOfBooking.filter(seance=>seance.month_location==countMonth+1 && seance.year_location==yearIndex)])
    },[pageDate])

    useEffect(()=>{
        setPrice((priceByFlipper*priceByTime).toFixed(2))
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
                <p className="orange"><strong>{dateChoosen}</strong></p>
            </div>
            <div className="col-12 col-md-6">
                <div className="row">
            <h1 className="resa-dot-2">{monthName[countMonth]}  {yearIndex}</h1>
           
           {dateFilter.map(({Id_booking,weekend_location,year_location,is_reserved}) =>
           <DateCard key={Id_booking} 
           days={weekend_location+"/"+ (parseInt(weekend_location)+1)+" "} 
           month={monthName[countMonth]+" "}
           year={year_location}
           setDateChoosen={setDateChoosen}
           setDateControl={setDateControl} 
           dateControl={dateControl}
           status={is_reserved=="0"?false:true}/>)}
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
            <p className="orange"><strong>{timeRent}</strong></p>
            </div>
            <div className="col-12 col-md-6">
            <div className="row">
                <div className="col-4">
                <button type="button" className="btn btn-secondary w-100 m-2" value="journée du Samedi" 
                onClick={()=>{setPriceByTime(dataAdmin?.multiplier_saturday);setTimeControl(true);setTimeRent("journée du Samedi")}}>1jour : SAMEDI</button>
                </div>
                <div className="col-4">
                <button type="button" className="btn btn-secondary w-100 m-2" value="journée du Dimanche" 
                onClick={()=>{setPriceByTime(dataAdmin?.multiplier_sunday);setTimeControl(true);setTimeRent("journée du Dimanche")}}>1jour : DIMANCHE </button>
                </div>
                <div className="col-4">
                <button type="button" className="btn btn-secondary w-100 m-2" value="2 jours : Samedi et dimanche" 
                onClick={()=>{setPriceByTime(dataAdmin?.multiplier_both);setTimeControl(true);setTimeRent("2 jours : Samedi et dimanche")}}>2 jours :  SAMEDI et DIMANCHE</button>
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
                    {flippers.map(flip=>{
                        return(
                    <SwiperSlide key={flip?.image_list[0]?.Id_image}>
                    <div className="card">
                    <img
                    
                    src={flip?.image_list[0]?.img_src} className="card-img-top w-100" alt="..."/>
                    <div className="card-body">
                    <h4 className="card-text title-dot">{flip?.name}</h4>
                    <button type="button" className="btn btn-secondary " value={flip?.price} 
                    onClick={()=>{setFlipperControl(true);setFlipper(flip?.name);setPriceByFlipper(flip?.price) }}>A partir de <strong>{flip?.price}€/TTC</strong>  (Journée du Samedi)</button>
                    </div>
                    </div> 
                    </SwiperSlide>
                        )
                    })}
                    
                </Swiper>
            </div>
            <div className="col-12 col-md-6 mt-5">
                <div className="bgorange">
                <h1 className="resa-dot text-white">recapitulatif: </h1>
                <p className={`${dateControl ===true ? "text-black fw-bold" : "text-white "}`} >Date du : {dateChoosen}</p>
                <p className={`${timeControl ===true ? "text-black fw-bold" : "text-white "}`}>Durée de location : {timeRent}</p>
                <p className={`${flipperControl ===true ? "text-black fw-bold" : "text-white "}`}>Flipper : {flipper}</p>
                <p className={`${flipperControl &&timeControl &&flipperControl===true ? "orange fw-bold d-block bg-light p-1" : "d-none "}`}>Prix TTC hors livraison : {price} €/TTC</p>
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