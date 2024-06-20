import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios'
import {useNavigate,useParams,Link} from 'react-router-dom';
import Header from './Header.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Swal from 'sweetalert2';
export default function ProductDetails() {
// destructuring od data to fetch all data 
const[data,setManageData]=useState([]);
const Navigate=useNavigate();
const {id}=useParams();
const productimages=useRef("");
const productimage=useRef("");
const productname=useRef("");
const oldprice=useRef("");
const newprice=useRef("");
const qty=useRef("");
const descriptions=useRef("");
const subtotal=useRef("");
// after addtocart product added in cart
const AddCartFormHandeler=(e)=>{
    
  e.preventDefault();

  var insert={
    productimage:productimage.current.value,
    productname:productname.current.value,
    oldprice:oldprice.current.value,
    newprice:newprice.current.value,
    qty:qty.current.value,
    descriptions:descriptions.current.value,
    subtotal:subtotal.current.value,   
  }
    // call api to add in cart
    axios.post(`http://localhost:4000/view-cart`,insert).then(()=>{

    Swal.fire({
      title: "Wow",
      text: "Thanks for added your Products",
      icon: "success"
    });
    Navigate('/view-cart');

    });

}


useEffect(()=>{
//get api to fetch data using axios.get() 
axios.get(`http://localhost:4000/addproducts/${id}`).then((response)=>{

productimages.current.src=response.data.productimage,
productimage.current.value=response.data.productimage,
productname.current.value=response.data.productname,
oldprice.current.value=response.data.oldprice,
newprice.current.value=response.data.newprice,
qty.current.value=response.data.qty,
descriptions.current.value=response.data.descriptions,
subtotal.current.value=response.data.newprice

});
// pass messages
// Navigate(`/product-details`);
// fetch data on products details
axios.get(`http://localhost:4000/addproducts`).then((response)=>{

setManageData(response.data);

});

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
Icecream Details
</h1>
</div>
</div>

<form onSubmit={AddCartFormHandeler}>
<div className="row">
<div className='col-lg-4'>
<input type='hidden' ref={productimage} />
<img src={productimages}  ref={productimages} alt='image' style={{width:"100%"}} />
</div>
<div className='col-lg-6 mt-2 ms-5 p-2'>
<h5 className="font-weight-bold mb-4"><input type='text' readOnly ref={productname} style={{border:"none" }} /></h5>

<h6 className="font-weight-bold mb-4"><del>Rs.<input type='text' readOnly ref={oldprice} style={{border:"none", width:"50px"}} /></del>Rs.<input type='text' readOnly ref={newprice} style={{border:"none", width:"50px" }} /></h6>

<h6 className="font-weight-bold mb-4">Select QTY :<input type='number' min='1' max='10' ref={qty} style={{width:"80px"}} /></h6>

<h6 className="font-weight-bold mb-4 fs-3">Subtotals of Products :<input type='text' min='1' max='10' ref={subtotal} style={{width:"80px",border:"none"}} /></h6>

<h6 className="font-weight-bold mb-4 mt-3">Descriptions : <br/> <br/><textarea   ref={descriptions} style={{width:"100%",border:"none"}}></textarea></h6>

<Link to='/all-fruits'><button type="button" className="btn btn-sm btn-success">
Continue shopping</button></Link>


<button type="submit" className="btn btn-sm btn-secondary ms-4">
AdToCart</button>

</div>


</div>
</form>
</div>
</div>

<Footer />
</>

)
}
