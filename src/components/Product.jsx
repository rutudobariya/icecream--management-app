import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
import Header from './Header.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
export default function Product() {
// destructuring od data to fetch all data 
const[managedata,setManageData]=useState([]);
const Navigate=useNavigate();
useEffect(()=>{
//get api to fetch data using axios.get() 
axios.get(`http://localhost:4000/addproducts`).then((response)=>{

    setManageData(response.data);

});
// pass messages
Navigate('/all-fruits');
},[]); //renders one times 


  return (
    <>
    <Header />
    <Navbar />
    <div className="container-fluid py-5">
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h1 className="section-title position-relative text-center mb-5">
            Best Prices We Offer For Ice Cream Lovers
          </h1>
        </div>
      </div>
      <div className="row">
      {managedata && managedata.map((row)=>{

       return (

        // eslint-disable-next-line react/jsx-key
        <div className="col-lg-3 col-md-6 mb-4 pb-2">
          <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
            <div className="bg-primary mt-n5 py-3" style={{ width: 80 }}>
              <h4 className="font-weight-bold text-white mb-0"></h4>
            </div>
            <div
              className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3"
              style={{ width: 150, height: 150 }}
            >
              <img
                className="rounded-circle w-100 h-100"
                src={row.productimage}
                style={{ objectFit: "cover" }}
              />
            </div>
            <h6 className="font-weight-bold mb-4">{row.productname}</h6>
            <h6 className="font-weight-bold mb-4"><del>Rs.{row.oldprice}</del>Rs.{row.newprice}</h6>
            <button type='button' onClick={()=>Navigate(`/product-details/${row.id}`)} className="btn btn-sm btn-secondary">
              Order Now
            </button>
          </div>
        </div>
      
     
      );

})}

      
          <div className="col-12 text-center">
          <a href="" className="btn btn-primary py-3 px-5">
            Load More
          </a>
        </div>
      </div>
    </div>
  </div>

  <Footer />
  </>
  
  )
}
