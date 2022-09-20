import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import HeaderLogin from '../components/HeaderLogin/HeaderLogin';

const BaseScreen = () => {
    return (
        <div>
          <HeaderLogin/>
          <NavBar/>
          <Outlet/>
          <Footer/>  
        </div>
    );
};

export default BaseScreen;