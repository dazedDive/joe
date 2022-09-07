import '../DateSelector/DateSelector.css'

import { useState } from 'react';
import { MdOutlineAvTimer } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import {EffectCube} from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-cube'
import DateCard from '../DateCard/DateCard';
const DateSelector = () => {
    

const datePool = [{year:2023,month:9,days:"du 6 au 8"},{year:2023,month:9,days:"du 13 au 15"},
{year:2023,month:9,days:"du 20 au 22"},{year:2023,month:9,days:"du 27 au 1er Fevrier"},
{year:2023,month:10,days:"du 17 au 19"},{year:2023,month:10,days:"du 24 au 26"},
{year:2023,month:10,days:"du 3 au 5"},{year:2023,month:10,days:"du 10 au 12"},
{year:2023,month:11,days:"du 17 au 19"},{year:2023,month:11,days:"du 24 au 26"},
]    

////////////fonction qui affiche le moi  et l'année en cour///////////

const monthIndex = (new Date().getMonth())
console.log(monthIndex)
const year = (new Date().getFullYear())
console.log(year)
const monthName = ["janvier","février","mars","avril","mai","juin","juillet","aout","septembre","octobre"
,"novembre","decembre","janvier","février","mars","avril","mai","juin","juillet","aout","septembre","octobre"
,"novembre","decembre"]
    const monthPageUn=monthName[monthIndex]
    const monthPageDeux=monthName[monthIndex+1]
    const monthPageTrois=monthName[monthIndex+2]
    const monthPageQuatre=monthName[monthIndex+3]
    const monthPageCinq=monthName[monthIndex+4]
    const monthPageSix=monthName[monthIndex+5]
    const monthPageSept=monthName[monthIndex+6]
    const yearPageUn=year
    const yearPageDeux=(monthIndex>10?year+1:year)
    const yearPageTrois=(monthIndex+1>10?year+1:year)
    const yearPageQuatre=(monthIndex+2>10?year+1:year)
    const yearPageCinq=(monthIndex+3>10?year+1:year)
    const yearPageSix=(monthIndex+4>10?year+1:year)
    const yearPageSept=(monthIndex+5>10?year+1:year)
////////////////////////////////////////////////////fonction qui map les dates a redristribuer dans les pages

const [dateChoosen,setDateChoosen]= useState('selectionnez une date')


  return (
    <div className="container mt-4">
        <span className="d-flex justify-content-center">
        <p>Etape 1/3</p>
        <MdOutlineAvTimer className="fs-4"/>
        <p>Selectionnez une date et un Flipper</p>
        </span>
        <div className="row">

            <div className="col-12 col-md-6">
                <h1 className="resa-dot">Selectionnez un week-end</h1>
                <p>Le flipper peux être livré au plus tôt le vendredi soir pour un retour au plus tard le Dimanche Midi.</p>
                
            </div>
        
            <div className="col-12 col-md-6">
                <Swiper modules={[EffectCube]} effect="cube">
                    <SwiperSlide>
                    <h6 className="resa-dot-2">{monthPageUn} {yearPageUn}</h6>
                    <div className="container">
                        <div className="row mb-4">
                            <DateCard days={"du 9 au 11"} dateChoosen={dateChoosen} setDateChoosen={setDateChoosen}/>
                            <DateCard days={"du 9 au 11"}/>
                            <DateCard days={"du 9 au 11"}/>
                            <DateCard days={"du 9 au 11"}/>
                        
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <h6 className="resa-dot-2">{monthPageDeux} {yearPageDeux}</h6>
                    <div className="row mb-4">
                            <DateCard days={"du 9 au 11"}/>
                            <DateCard days={"du 9 au 11"}/>
                            <DateCard days={"du 9 au 11"}/>
                            <DateCard days={"du 9 au 11"}/>
                        
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <h6 className="resa-dot-2">{monthPageTrois} {yearPageTrois}</h6>
                    <div className="row mb-4">
                            <DateCard days={"du 9 au 11"}/>
                            <DateCard days={"du 9 au 11"}/>
                            <DateCard days={"du 9 au 11"}/>
                            <DateCard days={"du 9 au 11"}/>
                        
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <h6 className="resa-dot-2">{monthPageQuatre} {yearPageQuatre}</h6>
                    <div className="row mb-4">
                            <DateCard days={"du 9 au 11"}/>
                            <DateCard days={"du 9 au 11"}/>
                            <DateCard days={"du 9 au 11"}/>
                            <DateCard days={"du 9 au 11"}/>
                        
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <h6 className="resa-dot-2">{monthPageCinq} {yearPageCinq}</h6>
                    <div className="row mb-4">
                            <DateCard days={"du 9 au 11"}/>
                            <DateCard days={"du 9 au 11"}/>
                            <DateCard days={"du 9 au 11"}/>
                            <DateCard days={"du 9 au 11"}/>
                        
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <h6 className="resa-dot-2">{monthPageSix} {yearPageSix}</h6>
                    <div className="row mb-4">
                            <DateCard days={"du 9 au 11"}/>
                            <DateCard days={"du 9 au 11"}/>
                            <DateCard days={"du 9 au 11"}/>
                            <DateCard days={"du 9 au 11"}/>
                            <DateCard days={"du 9 au 11"}/>
                        
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <h6 className="resa-dot-2">{monthPageSept} {yearPageSept}</h6>
                    <div className="row mb-4">
                            <DateCard days={"du 9 au 11"}/>
                            <DateCard days={"du 9 au 11"}/>
                            <DateCard days={"du 9 au 11"}/>
                            <DateCard days={"du 9 au 11"}/>
                        
                        </div>
                    </SwiperSlide>
                </Swiper>
            
            </div>
        
        </div>
    <h1> date :{dateChoosen}</h1>
    </div>
  );
};

export default DateSelector