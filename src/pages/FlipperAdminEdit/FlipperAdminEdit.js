import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const FlipperAdminEdit = () => {

    const [flipper, setFlipper] = useState(null)
    const { id } = useParams();

    useEffect(() => {
        fetch("http://joe.api/flipper"+id)
            .then(resp => resp.json())
            .then(json => {
                setFlipper(json)
            })
    }, [flipper])

    return (
        <div>
            <h1>Flipper Editeur :</h1>
            <div classNameName='container'>
                <div classNameName="row">
                    <div classNameName="row">
                        {flipper.map(flip => {
                            return (
                                <>
                                    <div class="card">
                                        
                                            <div class="card-body">
                                                <h5 class="card-title">titre : {flip?.name}</h5>
                                                <p class="card-text">desciption : {flip?.description}</p>
                                                <p class="card-text">desciption : {flip?.price}</p>
                                            </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                    <div classNameName="row">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlipperAdminEdit;