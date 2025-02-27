import React from 'react'

export default function AdminSidebar() {
return (
<div className="admin-sidebar bg-dark col-md-2 m-0 p-3">
<ul className="sidebar-link m-0 p-0">
<li>
<a href="#">
<img
src="https://icon-library.com/images/admin-login-icon/admin-login-icon-11.jpg"
className="img-fluid w-50 "
/>
</a>
</li>
<li>
<a href="#">
<span className="bi bi-person" />ManageCustomers
</a>
</li>
<li className="dropdown">
<a className="dropdown-toggle" data-bs-toggle="dropdown" href="#">
<span className="bi bi-cart" />Add IceCategory
</a>
<ul className="dropdown-menu bg-white text-dark">
<li>
<a href="/admin-login/addcategory">
<span className="bi bi-cart" /> Add IceCategory
</a>
</li>
<li>
<a href="/admin-login/manage-category/">
<span className="bi bi-cart" /> Manage IceCategory
</a>
</li>
</ul>
</li>
<li className="dropdown">
<a className="dropdown-toggle" data-bs-toggle="dropdown" href="#">
<span className="bi bi-cart" />Add IceSubCategory
</a>
<ul className="dropdown-menu bg-white text-dark" style={{minWidth:"230px"}}>
<li>
<a href="/admin-login/add-subcategory">
<span className="bi bi-cart" /> Add IceSubCategory
</a>
</li>
<li>
<a href="/admin-login/manage-subcategory">
<span className="bi bi-cart" /> Manage IceSubCategory
</a>
</li>
</ul>
</li>
<li className="dropdown">
<a className="dropdown-toggle" data-bs-toggle="dropdown" href="#">
<span className="bi bi-cart" /> Add IceProducts
</a>
<ul className="dropdown-menu bg-white text-dark">
<li>
<a href="/admin-login/add-products">
<span className="bi bi-cart" /> Add IceProducts
</a>
</li>
<li>
<a href="/admin-login/manage-products">
<span className="bi bi-cart" /> Manage IceProducts
</a>
</li>
</ul>
</li>
<li>
<a href="#">
<span className="bi bi-bell" /> Manage Orders
</a>
</li>
<li>
<a href="/admin-login/manage-contacts">
<span className="bi bi-phone" /> Manage Contacts
</a>
</li>
<li>
<a href="#">
<span className="bi bi-command" /> Manage Reviews
</a>
</li>
{/* <li><a href="#" class="btn btn-sm btn-danger text-white" onclick="return confirm('Are you sure to Logout ?')"><span class="bi bi-power"></span> Logout ?</a></li> */}
<li>
<a
href="/admin-login/admin-logout"
className="btn btn-sm btn-danger text-white"
data-bs-toggle="modal"
data-bs-target="#lg"
>
<span className="bi bi-power" /> Logout ?
</a>
</li>
</ul>
</div>

)
}
