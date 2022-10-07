import React, { createContext } from 'react';
import { useContext } from 'react';
import { useState } from 'react';


const AuthContext = createContext();
const AuthProvider = ({children}) => {

        const [auth,setAuth] = useState({admin:0})

    return (
        <AuthContext.Provider value ={{auth,setAuth}}>
            {children}
        </AuthContext.Provider>
    );
};

export  {AuthContext, AuthProvider};