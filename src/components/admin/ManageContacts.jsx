import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link,useParams,useNavigate } from 'react-router-dom'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import AdminFooter from './AdminFooter'
import {ExportToExcel} from './ExportDataExcel'


export default function ManageContacts() {

  // destructuring data
  const[managedata,setManageData]=useState([]);
  const Navigate=useNavigate();
  const fileName = "contactdata";
//fetch data used useEffect()
 useEffect(()=>{
//get all data or manage all data
axios.get('http://localhost:4000/contacts').then((response)=>{

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
    <h2 className="ms-3 p-4 mt-3">Manage Contacts all data 
    {/* export all data in CSV or Excels files */}
     <ExportToExcel  apiData={managedata} fileName={fileName}  />
    </h2>
    <hr className="border border-1 border-dark w-50 ms-5" align="left" />
     
    <table className="table w-100" id='example'>
  <thead>
    <tr>
     
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Subject</th>
      <th scope="col">Phone</th>
      <th scope="col">Message</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
 
    {managedata && managedata.map((row)=>{

   return (
    // eslint-disable-next-line react/jsx-key
    <tr>
   
      <td key={row.name}>{row.name}</td>
      <td key={row.email}>{row.email}</td>
      <td key={row.subject}>{row.subject}</td>
      <td key={row.phone}>{row.phone}</td>
      <td key={row.message}>{row.message}</td>
      <td><button type='button' onClick={()=>Navigate(`/admin-login/delete-contacts/${row.id}`)} className='btn btn-danger text-white btn-sm'><i className='bi bi-trash'></i></button></td>
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
