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
            <h3 className="bg-dark text-white p-1">Flippers: </h3>
            <button className="btn btn-primary mt-2"
             onClick={()=>{naviguate(`/admninjosh/flipperAdd`)}}>Ajoutez un Flipper au Catalogue</button>
            <h3>Editer Ma collection : </h3>
            {flippers.map(flipper=>{
                return(
                <div className="card w-75 mt-2" key={flipper.Id_flipper}>
                <div className="card-body" >
                    <h5 className="card-title">{flipper.name}</h5>
                    <p className="card-text">{flipper.description}</p>
                    <ul>
                        <li>{flipper?.first_argument}</li>
                        <li>{flipper?.second_argument}</li>
                        <li>{flipper?.third_argument}</li>
                        <li>{flipper?.fourth_argument}</li>
                    </ul>
                  <h3 className="card-text">Prix de base : {flipper.price} €</h3>
                  <button className="btn btn-primary "
                     onClick={()=>{naviguate(`/admninjosh/flipper/${flipper.Id_flipper}`)}}>Editer</button>
                </div>
              </div>
            )})}
        </div>
    );
};

export default FlipperAdmin;