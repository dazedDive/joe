import '../Error/Error.css';

const Error = ()=>{



    return(
        <>
        <h1 className="error-title mt-5 text-center">Error 404</h1>
        <h4 className="error-para text-center"> La page recherché n'existe pas :( </h4>
        <div className="container d-flex justify-content-center">
        <button type="button" class="btn w-50   me-5  ms-5 mt-5" >Retour a l'acceuil</button>
        </div>
        </>
    )
}


export default Error