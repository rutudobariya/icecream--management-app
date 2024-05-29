import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import pagenotfound from '../assets/img/404.gif';
export default function PageNotFound() {
  return (
 <>   
 <Header />
 <Navbar />   
<div className="container-fluid py-5">
  <div className="container py-5">
  <p className='text-center'>
   <img src={pagenotfound} alt='page not found' className='img-fluid w-25 mx-auto text-center' />
   <br />
   <Link to="/"><button type='button' className='btn btn-dark text-white mt-3'>Go to Home</button></Link>
   </p>
</div>
</div>
<Footer />
</>

  )
}
