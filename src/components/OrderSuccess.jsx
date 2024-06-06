import React from 'react'
import Header from './Header.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

export default function OrderSuccess() {
  return (
 <div>

<Header />
<Navbar />
<div className="container-fluid">
<div className="container">
<div className="row justify-content-center">
<div className="col-lg-9 mx-auto">
<h1 className='text-center'>
    <img src='https://i.pinimg.com/originals/b9/88/b7/b988b7c3e84e1f83ef9447157831b460.gif' className='img-fluid w-75' />
</h1>
<h1 className="section-title position-relative text-center mb-5">Thanks for Order Now we will Delivered it Soon on Your Ordered Address</h1>
<h3 className='text-center fs-5'>Thanks again for believing our Best Services <span className='bi bi-emoji-heart-eyes'></span></h3>
</div>
</div>
</div>
</div>
 <Footer />
 </div>
  )
}
