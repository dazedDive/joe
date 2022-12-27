import React, { useState, useEffect } from 'react';
import { getCookie } from '../../helpers/CookieHelper';

const CustomerAdmin = () => {

    const [customers, setCustomers] = useState([])

    useEffect(() => {
        fetch("http://joe.api/customer",{
            credentials: "include",
            headers: {
                Authorization : getCookie("pinball"),
            },
        })
            .then(resp => resp.json())
            .then(json => {
                setCustomers(json)
            })
    }, [])

    const HandleAZ = () => {
    setCustomers([...customers.sort((a, b) => { 
        return a.last_name > b.last_name ? + 1 : -1 })]);
    }

    const HandleZA = () => {
    setCustomers([...customers.sort((a, b) => { 
        return a.last_name < b.last_name ? + 1 : -1 })]);
    }

    return (
        <div>
            <span className="d-flex align-items-start">
                <h1>Gestion Clients</h1>
                <span className="btn btn-warning mt-2 ms-2" onClick={HandleAZ}>A-Z</span>
                <span className="btn btn-warning mt-2 ms-2" onClick={HandleZA}>Z-A</span>
            </span>
            <div className="container-fluid">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">nom</th>
                            <th scope="col">prenom</th>
                            <th scope="col">tel</th>
                            <th scope="col">mail</th>
                            <th scope="col">adresse</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers?.map(customer => {
                            return (
                                <tr key={Math.random()*1000}>
                                    <td>{customer?.last_name}</td>
                                    <td>{customer?.first_name}</td>
                                    <td>{customer?.telephone.split(' ').join('')}</td>
                                    <td>{customer?.mail}</td>
                                    <td>{customer?.adresse_facturation}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CustomerAdmin;