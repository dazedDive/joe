
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getCookie } from '../../helpers/CookieHelper';
const DateAdmin = () => {
    
    /////////////////fetch des Datas et Filtrage de celle ci //////////////////
    
const [dateOfBooking, setDateOfBooking] = useState([])
const yearIndex=(new Date().getFullYear()); 
const monthIndex = new Date().getMonth();

    useEffect(()=>{
        fetch('http://joe.api/booking',
        {
        credentials : "include",
        headers : {
            Authorization : getCookie("pinball")}
        })
        .then(rep=>rep.json())
        .then(json=>setDateOfBooking([...json?.filter(seance=>(seance?.month_location>(monthIndex+1)  || seance?.year_location>=yearIndex ))]))
    },[])
const monthName = ["janvier","février","mars","avril","mai","juin","juillet","aout","septembre","octobre"
    ,"novembre","decembre"];

/////////////////////////Bouton ADD////////////////

//////////////////////Bouton Remove //////////////////
const HandleRemove =(e)=>{
    console.log(e.target.getAttribute('id'))
    fetch('http://joe.api/booking/'+e.target.getAttribute('id'),
    {
    method : "PATCH",
    credentials : "include",
    headers : {
    Authorization : getCookie("pinball")}})
    .then(rep=>rep.json()) 
    .then(json=>([...json?.filter(seance=>(seance?.month_location>(monthIndex+1)  || seance?.year_location>=yearIndex ))]))
    }

    return (
        <div>
            <h4 className="bg-dark text-white p-1">Date Administration :</h4>
            <h5 className="bg-dark text-white p-1">Ajouter une date ici : </h5>
            <div className="row bg-white my-2">
            <div className="col-3">
                <input class="form-control" type="text" 
                placeholder="Jour" aria-label="default input example"/>
            </div>
            <div className="col-3">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Moi</option>
                    <option value="1">JANVIER</option>
                    <option value="2">FEVRIER</option>
                    <option value="3">MARS</option>
                    <option value="4">AVRIL</option>
                    <option value="5">MAI</option>
                    <option value="6">JUIN</option>
                    <option value="7">JUILLET</option>
                    <option value="8">AOUT</option>
                    <option value="9">SEPTEMBRE</option>
                    <option value="10">OCTOBRE</option>
                    <option value="11">NOVEMBRE</option>
                    <option value="12">DECEMBRE</option>
                </select>
            </div>
            <div className="col-3">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Année</option>
                    <option value="1">2022</option>
                    <option value="2">2023</option>
                    <option value="3">2024</option>
                    <option value="4">2025</option>
                    <option value="5">2026</option>
                </select> 
            </div>
            <div className="col-3">
                <button type="button" className="btn text-white ">Ajouter la date </button>  
            </div>
        </div>
        <h5 className="bg-dark text-white p-1">Calendrier </h5>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">week en du</th>
                    <th scope="col">moi</th>
                    <th scope="col">année</th>
                    <th scope="col">status</th>
                    <th scope="col">action</th>
                </tr>
            </thead>
            <tbody>
                {dateOfBooking?.map(date => {
                    return (
                        date?.is_deleted==0 && 
                            <tr key={date?.Id_booking}>
                                <td className={date?.is_reserved=="1"&&"bg-success text-white"}> {date?.weekend_location+"/"+ (parseInt(date?.weekend_location)+1)}</td>
                                <td className={date?.is_reserved=="1"&&"bg-success text-white"}> {monthName[(date?.month_location-1)]}</td> 
                                <td className={date?.is_reserved=="1"&&"bg-success text-white"}> {date?.year_location}</td> 
                                <td className={date?.is_reserved=="1"&&"bg-success text-white"}>
                                    {date?.is_reserved=="0"?"Disponible":"Réservé"}</td>
                                    {date?.is_reserved=="0"&&
                                <td> <button type="button" className="btn" id={date?.Id_booking} onClick={HandleRemove}>retirer du site </button></td> }
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
        </div>
    );
};

export default DateAdmin;