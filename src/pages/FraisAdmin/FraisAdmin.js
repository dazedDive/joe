import React from 'react';

const FraisAdmin = () => {
    return (
        <div>
            <h3>Gestion des paramètres frais / autres :</h3>
            <div className="container bg-light">
                <div className="row">
                    <h5>text de la home page : </h5>
                    <div className="col-6">
                        <div className="mb-3">
                            <p>Text actuel :</p>
                            <p> </p>

                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mb-3">
                            <label htmlFor="textHomePage" className="form-label">nouveau text</label>
                            <textarea className="form-control" id="extHomePage" rows="3"></textarea>
                            <button type="button" className="btn btn-warning mt-2">Modifier</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <h5>Barème kilometrique : </h5>
                <div className="row">
                    <div className="col-6">
                        <p>Prix Actuel du Kilomètre :</p>
                        <h6>a remplacer   €</h6>
                    </div>
                    <div className="col-6">
                        <span className="d-flex justify-content-start">
                            
                            <input className="form-control" type="text" placeholder="Default input" aria-label="nouveau"></input>
                            <button type="button" className="btn btn-warning ms-2">Modifier</button>
                        </span>
                    </div>
                </div>
            </div>
            <div className="container mt-3 bg-light">
                <h5>Barème journalier : </h5>
                <div className="row">
                    <div className="col-6">
                        <p>Multiplicateur Actuel Samedi :</p>
                        <h6>X1</h6>
                        <p>Multiplicateur Actuel Dimanche :</p>
                        <h6>a remplacer</h6>
                        <p>Multiplicateur Actuel 2 jours :</p>
                        <h6>a remplacer</h6>
                    </div>
                    <div className="col-6">
                        <span className="d-flex justify-content-start">
                            <p className="me-3 mt-1">Samedi</p>
                            <input className="form-control" type="text" placeholder="Default input" aria-label="nouveau"></input>
                            <button type="button" className="btn btn-warning ms-2">Modifier</button>
                        </span>
                        <span className="d-flex justify-content-start mt-3">
                        <p className="me-3 mt-1">Dimanche</p>
                            <input className="form-control" type="text" placeholder="Default input" aria-label="nouveau"></input>
                            <button type="button" className="btn btn-warning ms-2">Modifier</button>
                        </span>
                        <span className="d-flex justify-content-start mt-3">
                        <p className="me-3 mt-1">2jours</p>
                            <input className="form-control" type="text" placeholder="Default input" aria-label="nouveau"></input>
                            <button type="button" className="btn btn-warning ms-2">Modifier</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FraisAdmin;