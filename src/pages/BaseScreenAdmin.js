import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBarAdmin from '../components/NavBarAdmin/NavBarAdmin';
import HeaderLogin from '../components/HeaderLogin/HeaderLogin';
const BaseScreenAdmin = () => {
    return (
        <div>
            <div className="container-fluid bg-dark">
                <HeaderLogin/>
                <h4 className="text-white ms-5"> DASHBOARD Administrateur JOE ARCADE, Bienvenue Joe !</h4>
                
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                 <NavBarAdmin />
                </div>
                <div className="col-10">
                <Outlet/> 
                </div>
            </div>
        </div>
        </div>
    );
};

export default BaseScreenAdmin;