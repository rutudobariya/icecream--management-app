import React,{ useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Badge, Button } from 'react-bootstrap';
import axios from 'axios';
export default function Navbar() {
   // COUNT CART ITEMS
   const [itemCount, setItemCount] = useState(0);
   useEffect(() => {
       axios.get("http://localhost:4000/view-cart")
           .then((result) => {
               setItemCount(result.data)
           })
   })
  return (
    <>
  {/* Navbar Start */}
  <div className="container-fluid position-relative nav-bar p-0">
    <div
      className="container-lg position-relative p-0 px-lg-3"
      style={{ zIndex: 9 }}
    >
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow p-lg-0">
        <a href="index.html" className="navbar-brand d-block d-lg-none">
          <h1 className="m-0 display-4 text-primary">
            <span className="text-secondary">i</span>CREAM
          </h1>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div className="navbar-nav ml-auto py-0">
            <a href="/" className="nav-item nav-link active">
              Home
            </a>
            <a href="/about-us" className="nav-item nav-link">
              About
            </a>
            <a href="/all-fruits" className="nav-item nav-link">
              All Icecream
            </a>
          </div>
          <a href="/" className="navbar-brand mx-5 d-none d-lg-block">
            <h1 className="m-0 display-4 text-primary">
              <span className="text-secondary">i</span>Cream
            </h1>
          </a>
          <div className="navbar-nav mr-auto py-0">
            <a href="/our-services" className="nav-item nav-link mt-2">
              Service
            </a>
          
            <a href="/contact-us" className="nav-item nav-link  mt-2">
              Contact
            </a>

            <a href="/view-cart" className="nav-item nav-link ">
              Cart
              <Badge className='bg-success rounded-3 p-2 m-2 ms-5 cartbadge'>{itemCount.length}</Badge>
            </a>

            <a href="/view-cart" className="nav-item nav-link">
              <Button>Admin</Button>
             
            </a>


          </div>
        </div>
      </nav>
    </div>
  </div>
  {/* Navbar End */}
</>

  )
}
