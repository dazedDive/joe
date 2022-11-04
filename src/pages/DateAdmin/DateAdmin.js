import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
const DateAdmin = () => {
    

    const [dateOfBooking, setDateOfBooking] = useState([])
useEffect(()=>{
    fetch('http://joe.api/booking')
    .then(rep=>rep.json())
    .then(json=>{
        setDateOfBooking(json)
    })
    },[])
const monthName = ["janvier","février","mars","avril","mai","juin","juillet","aout","septembre","octobre"
    ,"novembre","decembre"];

    return (
        <div>
            <h4 className="bg-dark text-white p-1">Date Administration :</h4>
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
                                <tr key={Math.random()*1000}>
                                <td> {date?.weekend_location+"/"+ (parseInt(date?.weekend_location)+1)}</td>
                                <td> {monthName[(date?.month_location-1)]}</td> 
                                <td> {date?.year_location}</td> 
                                <td> {date?.is_reserved=="0"?"Disponible":"Réservé"}</td> 
                                <td> <button type="button" class="btn ">retirer du site </button></td> 
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
        </div>
    );
};

export default DateAdmin;