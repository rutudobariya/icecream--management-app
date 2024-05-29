import React,{useRef,useState,useEffect} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import AdminFooter from './AdminFooter';
export default function AddSubCategory() {
// destructuring data
const[managedata,setManageData]=useState([]);
const Navigate=useNavigate();
//fetch data used useEffect()
useEffect(()=>{
//get all data or manage all data
axios.get('http://localhost:4000/addcategory').then((response)=>{
setManageData(response.data);
}) 

},[]); // if we pass [] array one times renders data    

// stored all data in variables 
const categoryname=useRef("");
const subcategoryname=useRef("");
const addeddate=useRef("");

const AddSubCategorytHandeler=(e)=>{
  var insert={
  categoryname:categoryname.current.value,
  subcategoryname:subcategoryname.current.value,
  addeddate:addeddate.current.value

  }
e.preventDefault();
//stored api data using  http://localhost:4000/contacts and post using axios.post()

axios.post("http://localhost:4000/addsubcategory",insert).then(()=>{
//pass a message using Swal
Swal.fire({
  title: "Wow",
  text: "Thanks for added your Subcategory",
  icon: "success"
});

Navigate("/admin-login/add-subcategory");

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
<div className="admin-dashboard col-md-9 p-3">
<h2 className="ms-3 p-4 mt-3">Add Sub Category</h2>
<hr className="border border-1 border-dark w-50 ms-5" align="left" />
<form onSubmit={AddSubCategorytHandeler}>
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
<input
type="text" name="subcategoryname"
className="form-control p-3"
id="name" ref={subcategoryname} 
placeholder="Your SubCategory Name"
required="required"
data-validation-required-message="Please enter your name"
/>
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
Add SubCategory
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
