import React, { useEffect, useState } from 'react'

import http from './http';
import NavBar from './NavBar/NavBar'

export default function Home() {
    const [datas, setData] = useState([]);
    const [dat, setDat] = useState([]);
    // const [quent, setquent] = useState([]);
    useEffect(() => {
      fetchAllData();
    }, []);
    const fetchAllData = () => {
      
      http.get("/").then((res) => {
        setData(res.data);
     
      });
    };
 
    // const [quent, setquent] = useState([]);
    useEffect(() => {
      fetchAllDat();
    }, []);
    function fetchAllDat() {

    http.get("/qun").then((res) => {
      setDat(res.data);

    });
  }
   console.log(dat)
  return (
    <div >
<NavBar/>

<div className='container'>


<table className="table mt-5">
  <thead className="bg-dark text-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col"></th>
      <th scope="col">Name</th>
      <th scope="col">Quantity</th>
      
    </tr>
  </thead>

  <tbody>

  {datas.map((item, index) => (
    <tr key={index}>
      <th scope="row">{++index}</th>
    
      <td><img src={item.img} alt="" style={{width:"3rem", height:"3rem"}}/></td>
      <td>{item.name}</td>
      <td>{item.qun}</td>
      
    </tr>
   ))}
  </tbody>
</table>


</div>
    </div>
  )
}
