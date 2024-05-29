import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link,useParams,useNavigate } from 'react-router-dom'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import AdminFooter from './AdminFooter'
export default function ManageProducts() {
// destructuring data
const[managedata,setManageData]=useState([]);
const Navigate=useNavigate();
//fetch data used useEffect()
useEffect(()=>{
//get all data or manage all data
axios.get('http://localhost:4000/addproducts').then((response)=>{
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
<h2 className="ms-3 p-4 mt-3">Manage Icecream all data</h2>
<hr className="border border-1 border-dark w-50 ms-5" align="left" />
<div style={{overflow:"auto"}}>
<table className="table w-100" id='example'>
<thead>
<tr>
<th scope="col">Category Name</th>
<th scope="col">SubCategory Name</th>
<th scope="col">ProductName</th>
<th scope="col">ProductImage</th>
<th scope="col">OldPrice</th>
<th scope="col">OfferPrice</th>
<th scope="col">Qty</th>
<th scope="col">descriptions</th>
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
<td key={row.productname}>{row.productname}</td>
<td key={row.productimage}><img src={row.productimage} alt='product image' className='img-fluid w-25' /></td>
<td key={row.oldprice}>{row.oldprice}</td>
<td key={row.newprice}>{row.newprice}</td>
<td key={row.qty}>{row.qty}</td>
<td key={row.descriptions}><div style={{width:"150px",height:"150px",overflow:"auto"}}>{row.descriptions}</div></td>
<td key={row.addeddate}>{row.addeddate}</td>

<td><div style={{minWidth:"150px"}}><button type='button' onClick={()=>Navigate(`/admin-login/delete-products/${row.id}`)} className='btn btn-danger text-white btn-sm'><i className='bi bi-trash'></i></button>

<button type='button' onClick={()=>Navigate(`/admin-login/edit-products/${row.id}`)} className='btn btn-info text-white btn-sm ms-2'><i className='bi bi-pencil '></i></button>
</div>
</td>
</tr>

);

})}

</tbody>
</table>
</div>

</div>
</div>
</div>
</section>

<AdminFooter />
</>
)
}
