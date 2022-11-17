import React from 'react';
import { useState,useEffect } from 'react';
import { getCookie } from '../../helpers/CookieHelper';
const OrderAdmin = () => {

    const [dateOfBooking, setDateOfBooking] = useState([])
    useEffect(()=>{
    
    fetch('http://joe.api/booking/0',
    {   
        method : "post" ,
        body : JSON.stringify({with:['customer','flipper']}),
        credentials : "include",
        headers : {
        Authorization : getCookie("pinball")}})
    .then(rep=>rep.json())
    .then(json=>setDateOfBooking([...json?.filter(seance=>(seance?.is_reserved==1))]))
    },[])

const monthName = ["janvier","février","mars","avril","mai","juin","juillet","aout","septembre","octobre"
    ,"novembre","decembre"];

    return (
        <div>
            <h4 className="bg-dark text-white p-1">Mon Planing</h4>
            <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Client</th>
                            <th scope="col">Adresse de livraison</th>
                            <th scope="col">Date</th>
                            <th scope="col">Flipper</th>
                            <th scope="col">Montant Total</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {dateOfBooking?.map(date => {
                            return (
                                <tr key={date?.Id_booking}>
                                <td className="bg-info">{date?.customer?.first_name}, {date?.customer?.last_name}</td>
                                <td className="bg-light"> {date?.adresse_delivery} {date?.cp_delivery} {date?.city_of_delivery}</td> 
                                <td className="bg-info"> {date?.weekend_location+"/"+ (parseInt(date?.weekend_location)+1)}
                                {monthName[(date?.month_location-1)]},
                                {date?.year_location} : {date?.time_of_rent}</td> 
                                <td className="bg-light">{date?.flipper?.name}</td>
                                    
                                <td className="bg-success text-white"><strong>{date?.total_price} € </strong></td> 
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
        </div>
    );
};

export default OrderAdmin;