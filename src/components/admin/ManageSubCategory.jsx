import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link,useParams,useNavigate } from 'react-router-dom'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import AdminFooter from './AdminFooter'
export default function ManageSubCategory() {
// destructuring data
const[managedata,setManageData]=useState([]);
const Navigate=useNavigate();
//fetch data used useEffect()
useEffect(()=>{
//get all data or manage all data
axios.get('http://localhost:4000/addsubcategory').then((response)=>{
setManageData(response.data);
}) 
},[]); // if we pass [] array one times renders data

return (
<>

<AdminHeader />
<section id="dashboard-content" >
<div className="container-fluid m-0 p-0">
<div className="row">
<AdminSidebar />
<div className="admin-dashboard col-md-9 p-3">
<h2 className="ms-3 p-4 mt-3">Manage SubCategory all data</h2>
<hr className="border border-1 border-dark w-50 ms-5" align="left" />

<table className="table w-100" id='example'>
<thead>
<tr>
<th scope="col">Category Name</th>
<th scope="col">SubCategory Name</th>
<th scope="col">Added Date</th>
<th scope="col">Action</th>
</tr>
</thead>
<tbody>
{managedata && managedata.map((row)=>{
return (
// eslint-disable-next-line react/jsx-key
<tr>

<td key={row.categoryname}>{row.categoryname}</td>
<td key={row.subcategoryname}>{row.subcategoryname}</td>
<td key={row.addeddate}>{row.addeddate}</td>
<td><button type='button' onClick={()=>Navigate(`/admin-login/delete-subcategory/${row.id}`)} className='btn btn-danger text-white btn-sm'><i className='bi bi-trash'></i></button>

<button type='button' onClick={()=>Navigate(`/admin-login/edit-subcategory/${row.id}`)} className='btn btn-info text-white btn-sm ms-2'><i className='bi bi-pencil '></i></button>

</td>
</tr>

);

})}

</tbody>
</table>
</div>
</div>
</div>
</section>

<AdminFooter />
</>
)
}
