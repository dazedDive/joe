import '../HeaderLogin/HeaderLogin.css'



const HeaderLogin = ({log,icone})=>{

    return(
        <>
        <div className="container-fluid bg-dark">
            <span className="d-flex justify-content-end me-5">
             {icone} 
             <p className="text-white">{log}</p>   
            </span>
        </div>
        </>
    )
}

export default HeaderLogin;