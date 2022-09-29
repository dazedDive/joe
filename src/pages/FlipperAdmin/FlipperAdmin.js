import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FlipperAdmin = () => {

    const [flippers,setFlippers]=useState([])
    const naviguate = useNavigate()



    useEffect(()=>{
        fetch("http://joe.api/flipper")
        .then(resp=>resp.json())
        .then(json=>{
            setFlippers(json)
        })
    },[flippers])

    return (
        <div>
            <h3>Flippers: </h3>
            
            <h5>Ma collection : </h5>
            {flippers.map(flipper=>{
                return(
                <div className="card w-75 mt-2" key={flipper.Id_Flipper}>
                <div className="card-body" >
                  <h5 className="card-title">{flipper.name}</h5>
                  <p className="card-text">{flipper.description}</p>
                  <ul>
                        <li>{flipper?.pointfort1}</li>
                        <li>{flipper?.pointfort2}</li>
                        <li>{flipper?.pointfort3}</li>
                        <li>{flipper?.pointfort4}</li>
                    </ul>
                  <h3 className="card-text">Prix de base : {flipper.price} €</h3>
                  <button className="btn btn-primary "
                  onClick={()=>{naviguate(`/admninjosh/flipper/${flipper.Id_Flipper}`)}}>Editer</button>
                </div>
              </div>
            )})}

        </div>
    );
};

export default FlipperAdmin;