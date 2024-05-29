import React from 'react'
import AdminHeader from './components/admin/AdminHeader'
import Dashboard from './components/admin/Dashboard'
import AdminSidebar from './components/admin/AdminSidebar'
import AdminFooter from './components/admin/AdminFooter'
export default function AdminLayout() {
  return (
    <>
    <AdminHeader />
    <section id="dashboard-content" >
        <div className="container-fluid m-0 p-0">
        <div className="row">
         <AdminSidebar />
         <Dashboard />
        </div>
        </div>
    </section>
    <AdminFooter />
    </>
  )
}
