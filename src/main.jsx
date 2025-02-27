import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/css/style.min.css';
import './assets/admin/css/style.css';
// fruit managements user panel components
import Layout from './Layout';
import About from './components/About';
import Product from './components/Product';
import Service from './components/Service';
import Gallery from './components/Gallery'
import Contact from './components/Contact';
import PageNotFound from './components/PageNotFound';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';
import ViewCart from './components/ViewCart';
import OrderSuccess from './components/OrderSuccess';

// fruit managements admin panel components
import AdminLogin from './components/admin/AdminLogin';
import AdminLayout from './AdminLayout';
import AdminForgotPassword from './components/admin/AdminForgotPassword';
import AdminChangePassword from './components/admin/AdminChangePassword';
import AdminLogout from './components/admin/AdminLogout';
import ManageContacts from './components/admin/ManageContacts';
import DeleteContact from './components/admin/DeleteContact';
import AddCategory from './components/admin/AddCategory';
import ManageCategory from './components/admin/ManageCategory';
import DeleteCategory from './components/admin/DeleteCategory';
import EditCategory from './components/admin/EditCategory';
import AddSubCategory from './components/admin/AddSubCategory';
import ManageSubCategory from './components/admin/ManageSubCategory';
import DeleteSubCategory from './components/admin/DeleteSubCategory';
import AddProducts from './components/admin/AddProducts';
import ManageProducts from './components/admin/ManageProducts';
import DeleteProducts from './components/admin/DeleteProducts';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element=<Layout /> />
        <Route path='/about-us' element=<About /> />
        <Route path='/all-fruits' element=<Product /> />
        <Route path='/our-services' element=<Service /> />
        <Route path='/fruits-gallery' element=<Gallery /> />
        <Route path='/contact-us' element=<Contact /> />
        <Route path='/product-details/:id' element=<ProductDetails /> />
        <Route path='/view-cart' element=<ViewCart /> />
        <Route path='/checkout' element=<Checkout /> />
         <Route path='/order-sucess' element=<OrderSuccess /> />
        <Route path='*' element=<PageNotFound /> />
        <Route path='/admin-login' element=<AdminLogin /> />
        <Route path='/admin-login/admin-dashboard' element=<AdminLayout /> />
        <Route path='/admin-login/admin-forgot-password' element=<AdminForgotPassword /> />
        <Route path='/admin-login/change-password' element=<AdminChangePassword /> />
        <Route path="/admin-login/admin-logout" element={<AdminLogout />} />
        <Route path='/admin-login/manage-contacts' element=<ManageContacts /> />
        <Route path='/admin-login/delete-contacts/:id' element=<DeleteContact /> />
        <Route path='/admin-login/addcategory' element=<AddCategory /> />
        <Route path='/admin-login/manage-category' element=<ManageCategory /> />
        <Route path='/admin-login/delete-category/:id' element=<DeleteCategory /> />
        <Route path='/admin-login/edit-category/:id' element=<EditCategory /> />
        <Route path='/admin-login/add-subcategory' element=<AddSubCategory /> />
        <Route path='/admin-login/manage-subcategory' element=<ManageSubCategory /> />
        <Route path='/admin-login/delete-subcategory/:id' element=<DeleteSubCategory /> />
        <Route path='/admin-login/add-products' element=<AddProducts /> />
        <Route path='/admin-login/manage-products' element=<ManageProducts /> />
        <Route path='/admin-login/delete-products/:id' element=<DeleteProducts /> />

       

      </Routes>
    </Router>
  </React.StrictMode>,
)
