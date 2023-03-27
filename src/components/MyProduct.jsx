import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import http from './http';
import NavBar from './NavBar/NavBar'

export default function MyProduct() {
    const [datas, setData] = useState([]);
  
    // const [quent, setquent] = useState([]);
    useEffect(() => {
      fetchAllData();
    }, []);
    const fetchAllData = () => {
      
      http.get("/stock").then((res) => {
        setData(res.data);
     
      });
    };


  alert(
    "inventory is empty :  "+
    datas.map((item, index) => (
      ( item.qun === "0" ?"( "+(++index) +".  name : " + item.name +" "+
      ", Quentity : " + item.qun +")   " : null )

 
 )))
   
  return (
    <div >
<NavBar/>

<div className='container'>


<table className="table mt-2">
  <thead className="bg-dark text-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col"></th>
      <th scope="col">Name</th>
      <th scope="col">Quantity</th>
      <th scope="col">Action</th>
    </tr>
  </thead>

  <tbody>

 
  {datas.map((item, index) => (
    
    <tr key={index}>
      <th scope="row">{++index}</th>
 
      <td><img src={item.img} alt="" style={{width:"3rem", height:"3rem"}}/></td>
      <td>{item.name}</td>
      <td>{item.qun}</td>
      {alert()}
      <Link to={{ pathname: "/" + item._id }} key={++index}><button type="button" className="btn btn-primary">Update</button></Link>
    </tr>
   ))}
  </tbody>
</table>


</div>
    </div>
  )
}
