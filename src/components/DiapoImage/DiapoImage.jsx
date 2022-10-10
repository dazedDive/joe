import React from 'react';

const DiapoImage = ({source,alt,name}) => {
    return (
        
            <div className="col-5 m-2">
                <div className="card">
                <img src={source} className="card-img-top" alt={alt}/>
                <div className="card-body bg-dark">
                <span className="d-flex justify-content-start">
                <p className="text-white"> ALT : {name}</p>
                <button type="button" className="btn btn-info m-1">Modifier</button>
                
                </span>
                </div>
                </div> 
            </div>
        
    );
};

export default DiapoImage;