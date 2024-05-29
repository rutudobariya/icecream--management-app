import React,{useRef} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import AdminFooter from './AdminFooter';
export default function AddCategory() {

// stored all data in variables 
const categoryname=useRef("");
const addeddate=useRef("");
const Navigate=useNavigate("");

const AddCategorytHandeler=(e)=>{
  var insert={
  categoryname:categoryname.current.value,
  addeddate:addeddate.current.value

  }
e.preventDefault();
//stored api data using  http://localhost:4000/contacts and post using axios.post()

axios.post("http://localhost:4000/addcategory",insert).then(()=>{
//pass a message using Swal
Swal.fire({
  title: "Wow",
  text: "Thanks for added your category",
  icon: "success"
});

Navigate("/admin-login/addcategory");

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
<h2 className="ms-3 p-4 mt-3">Add Category</h2>
<hr className="border border-1 border-dark w-50 ms-5" align="left" />
<form onSubmit={AddCategorytHandeler}>
<div className="form">
<div className="col-sm-6 form-group">
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
Add Category
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
