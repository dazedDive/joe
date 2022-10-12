import React, { createContext } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { setCookie,deleteCookie  } from '../helpers/CookieHelper';

const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const getCookieValue = (name) => {
        return document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)")?.pop() || "";
    }
        const [auth,setAuth] = useState({admin:0,result:false,id:0})

useEffect(()=>{
    fetch('http://joe.api/auth/check',{
        credentials: "include",
        headers: {
            Authorization : getCookieValue("pinball"),
        },
    })
    .then(rep=>rep.json())
    .then(json=>{
        if (json.result) {
            setAuth({admin:+json.is_admin,result:+json.result,id:json.id})
        } else {
            setAuth({admin:0,result:false,id:0})
            deleteCookie("pinball");
        }
    })
},[])


    return (
        <AuthContext.Provider value ={{auth,setAuth}}>
            {children}
        </AuthContext.Provider>
    );
};

export  {AuthContext, AuthProvider};