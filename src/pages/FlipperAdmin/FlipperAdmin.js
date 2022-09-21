import React, { useEffect, useState } from 'react';

const FlipperAdmin = () => {

    const [flippers,setFlippers]=useState([])
    useEffect(()=>{
        fetch("http://joe.api/flipper")
        .then(resp=>resp.json())
        .then(json=>{
            setFlippers(json)
        })
    },[flippers])

    return (
        <div>
            <h1>Flippers: </h1>
            {flippers.map(flipper=>{
                return(
                <div className="card w-75 mt-2">
                <div className="card-body" key={flipper.Id_Flipper}>
                  <h5 className="card-title">{flipper.name}</h5>
                  <p className="card-text">{flipper.description}</p>
                  <h3 className="card-text">Prix de base : {flipper.price} €</h3>
                  <a href="#" className="btn btn-primary ">Editer</a>
                </div>
              </div>
            )})}

        </div>
    );
};

export default FlipperAdmin;