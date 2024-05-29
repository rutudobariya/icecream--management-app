import React,{useRef,useState,useEffect} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import AdminFooter from './AdminFooter';
export default function AddProducts() {
// destructuring data
const[managedata,setManageData]=useState([]);
const[managedata1,setManageData1]=useState([]);
const Navigate=useNavigate();
//fetch data used useEffect()
useEffect(()=>{
//get all data or manage all data
axios.get('http://localhost:4000/addcategory').then((response)=>{
setManageData(response.data);
}) 

},[]); // if we pass [] array one times renders data    

//fetch data used useEffect()
useEffect(()=>{
    //get all data or manage all data
    axios.get('http://localhost:4000/addsubcategory').then((response)=>{
    setManageData1(response.data);
    }) 
    
    },[]); // if we pass [] array one times renders data    
    
// stored all data in variables 
const categoryname=useRef("");
const subcategoryname=useRef("");
const productname=useRef("");
const productimage=useRef("");
const oldprice=useRef("");
const newprice=useRef("");
const qty=useRef("");
const descriptions=useRef("");
const addeddate=useRef("");

const AddProductsHandeler=(e)=>{
  var insert={
  categoryname:categoryname.current.value,
  subcategoryname:subcategoryname.current.value,
  productname:productname.current.value,
  productimage:productimage.current.value,
  oldprice:oldprice.current.value,
  newprice:newprice.current.value,
  qty:qty.current.value,
  descriptions:descriptions.current.value,
  addeddate:addeddate.current.value

  }
e.preventDefault();
axios.post("http://localhost:4000/addproducts",insert).then(()=>{
//pass a message using Swal
Swal.fire({
  title: "Wow",
  text: "Thanks for added your Products",
  icon: "success"
});

Navigate("/admin-login/add-products");

});  

e.target.reset();

}

    
return (
<>

<AdminHeader />
<section id="dashboard-content" >
<div className="container-fluid m-0 p-0">
<div className="row">
<AdminSidebar />
<div className="admin-dashboard col-md-8 p-3">
<h2 className="ms-3 p-4 mt-3">Add Icecream Products</h2>
<hr className="border border-1 border-dark w-50 ms-5" align="left" />
<form onSubmit={AddProductsHandeler}>
<div className="form">

<div className="col-sm-6 form-group">
<select name="categoryname"
className="form-control"
id="name" ref={categoryname} required="required">
    <option value="">-select category-</option>
    {managedata && managedata.map((row)=>{
        return (
        <>    
        <option value={row.categoryname}>{row.categoryname}</option>
        </>
        )

    })}
   
</select>
<p className="help-block text-danger" />
</div>


<div className="col-sm-6 form-group">
<select name="subcategoryname"
className="form-control"
id="name" ref={subcategoryname} required="required">
    <option value="">-select subcategory-</option>
    {managedata1 && managedata1.map((row)=>{
        return (
        <>    
        <option value={row.subcategoryname}>{row.subcategoryname}</option>
        </>
        )

    })}
   
</select>
<p className="help-block text-danger" />
</div>

<div className="col-sm-6 form-group">
<input
type="text" name="productname"
className="form-control p-3"
id="name" ref={productname} 
placeholder="Your Product Name"
required="required"
data-validation-required-message="Please enter your name"
/>
<p className="help-block text-danger" />
</div>



<div className="col-sm-6 form-group">
<input
type="text" name="productimage"
className="form-control p-3"
id="name" ref={productimage} 
placeholder="Your Product image URL"
required="required"
data-validation-required-message="Please enter your image url"
/>
<p className="help-block text-danger" />
</div>

<div className="col-sm-6 form-group">
<input
type="text" name="oldprice"
className="form-control p-3"
id="name" ref={oldprice} 
placeholder="Your Product Old price"
required="required"
data-validation-required-message="Please enter your image url"
/>
<p className="help-block text-danger" />
</div>


<div className="col-sm-6 form-group">
<input
type="text" name="newprice"
className="form-control p-3"
id="name" ref={newprice} 
placeholder="Your New  price"
required="required"
data-validation-required-message="Please enter your image url"
/>
<p className="help-block text-danger" />
</div>


<div className="col-sm-6 form-group">
<input
type="text" name="qty"
className="form-control p-3"
id="name" ref={qty} 
placeholder="Your qty"
required="required"
data-validation-required-message="Please enter your image url" />
<p className="help-block text-danger" />
</div>

<div className="col-sm-6 form-group">
<textarea
type="text" name="qty"
className="form-control p-3"
id="name" ref={descriptions} 
placeholder="Your Product descriptions"
required="required"
data-validation-required-message="Please enter your image url"></textarea>
<p className="help-block text-danger" />
</div>

<div className="form-group col-sm-6">
<input
type="date" name="addeddate"
className="form-control p-2"
id="subject" ref={addeddate}
placeholder="Added date"
required="required"
data-validation-required-message="Please enter a date"
/>
<p className="help-block text-danger" />
</div>

<div className="col-sm-6">
<button
className="btn btn-primary btn-block py-3 px-5"
type="submit"
id="sendMessageButton">
Add Products
</button>
</div>
</div>
</form>

</div>
</div>
</div>
</section>    
<AdminFooter />
</>
)
}
