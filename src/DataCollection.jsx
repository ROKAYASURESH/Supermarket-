
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";


export default function DataCollection() {
    const axios = require('axios');
    const [suresh, setSuresh] = useState([]);
   
      // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = "suresh";

    // Make a request for a user with a given ID
axios.get('https://jsonplaceholder.typicode.com/users')
.then(function (response) {
  // handle success
  console.log(response);
  setSuresh(response.data)
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
});

// Option

  },[]);
  return (
    <div>
     
      <div className="container-fluid bg-warning">
      <h1 className='text-light aaa'>User DataCollection of Super Market  </h1>
        <div className="row">
          <div className="col-lg-2 "></div>
          <div className="col-lg-8 bg-info py-5 my-5">
          
            <table className="table table-striped table-hover text-light">
  <thead>
    <tr>
      <th scope="col">S.N</th>
      <th scope="col">FullName</th>
      <th scope="col">Username</th>
      <th scope="col">email</th>
      <th scope="col">Name </th>
      <th scope="col"></th>
      <th scope="col">Data Details</th>
    </tr>
  </thead>
  <tbody>
      {suresh.map((r)=>(
        <tr>
          <td>{r.id}</td>
          <td>{r.name}</td>
          <td>{r.username}</td>
          <td>{r.email}</td>
          <td>{r.street}</td>
          <td>{r.name}</td>
          <td><Link to={`/DataDetails/${r.id}`}>Views</Link> </td>
        </tr>
      ))}
  </tbody>
</table>
          
          </div>
         
        </div>
      </div>

    </div>
  )
}
