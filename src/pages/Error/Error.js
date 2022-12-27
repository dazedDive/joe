import '../Error/Error.css';
import errorimg from '../../img/error.jpg'
const Error = ()=>{
    return(
        <>
            <div className="container">
                <div className="col-12">
                    <h1 className="error-title mt-5 text-center">Error 404</h1>
                </div>
            <h4 className="error-para text-center"> La page recherché n'existe pas :( </h4>
            <div className="container d-flex justify-content-center">
                <button type="button" class="btn w-50   me-5  ms-5 mt-5" >Retour a l'acceuil</button>
            </div>
            <img src={errorimg} className="img-fluid mt-5 mb-5" alt="error"/>
            <h4 className="error-para text-center"> Game Over / Insert Coin </h4>
            </div>
        </>
    )
}

export default Error