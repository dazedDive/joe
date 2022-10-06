import React from 'react';

const DiapoImage = ({source,alt,name}) => {
    return (
        <div>
            <div className="col-6">
                <div class="card">
                <img src={source} class="card-img-top" alt={alt}/>
                <div class="card-body">
                <button type="button" class="btn btn-info">Modifier</button>
                <p>{name}</p>
                </div>
                </div> 
            </div>
        </div>
    );
};

export default DiapoImage;