import React, { useState, useEffect } from 'react';


const CustomerAdmin = () => {
    const [customers,setCustomers]=useState([])
    useEffect(()=>{
        fetch("http://joe.api/app_user")
        .then(resp=>resp.json())
        .then(json=>{
            setCustomers(json)
        })
    },[customers])
    return (
        <div>
            <h1>Gestion Clients</h1>
            <div className="container-fluid">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">nom</th>
      <th scope="col">prenom</th>
      <th scope="col">tel</th>
      <th scope="col">mail</th>
      <th scope="col">adresse</th>
      <th scope="col">adresse</th>
      
    </tr>
  </thead>
  <tbody>
    {customers.map(customer=>{
        return(
            <tr key={customer.Id_customer}>
                <td>{customer.first_name}</td>
                <td>{customer.last_name}</td>
                <td>{customer.telephone}</td>
                <td>{customer.mail}</td>
                <td>{customer.adresse_facturation}</td>
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