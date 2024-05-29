import React,{useEffect,useRef} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import {Navigate, useNavigate,useParams} from 'react-router-dom'
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import AdminFooter from './AdminFooter';
export default function UpdateProducts()
{
//  stored all data for fetch inside of edit category input
const  categoryname=useRef("");
const  addeddate=useRef("");
const {id}=useParams();
const Navigate=useNavigate();
// fetch api  for edit data inside of edit form
useEffect(()=>{
// axios.get()
axios.get(`http://localhost:4000/addproducts/${id}`).then((response)=>{
   
    categoryname.current.value=response.data.categoryname,
    addeddate.current.value=response.data.addeddate
         
});

},[])

// update category 
const UpdateCategoryHandeler=(e)=>
{
      
  var updprod={
         
    categoryname:categoryname.current.value,
    addeddate:addeddate.current.value

  }  

// applied axios.put() for update api 
axios.put(`http://localhost:4000/addproducts/${id}`,updprod).then(()=>{
   //pass message for update
   Swal.fire({
    title: "success",
    text: "Data successfully Updated",
    icon: "success"
  });
  Navigate("/admin-login/manage-products");

});

e.preventDefault();

}

return (
<>
<AdminHeader />
<section id="dashboard-content" >
<div className="container-fluid m-0 p-0">
<div className="row">
<AdminSidebar />
<div className="admin-dashboard col-md-10 p-3">
<h2 className="ms-3 p-4 mt-3 text-success">Edit Products</h2>
<hr className="border border-1 border-dark w-50 ms-5" align="left" />
<form onSubmit={UpdateCategoryHandeler}>
<div className="form">
<div className="col-sm-6 form-group">
<label className='text-success'>Edit CategoryName</label>
<input
type="text" name="categoryname"
className="form-control p-4"
id="name" ref={categoryname} 
placeholder="Your Category Name"
required="required"
data-validation-required-message="Please enter your name"
/>
<p className="help-block text-danger" />
</div>

<div className="form-group col-sm-6">
<label className='text-success'>Edit Added date</label>
<input
type="date" name="addeddate"
className="form-control p-4"
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
Update Category
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
