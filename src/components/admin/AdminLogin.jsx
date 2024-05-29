import React from 'react'
import user from '../../assets/admin/images/user.webp'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function AdminLogin() {
  return (
    <div className="container m-0 p-5 mt-2 col-md-8 mx-auto shadow-lg">
  <div className="row">
    <div className="col-md-4 login-img">
      <img src={user} className="img-fluid" alt="users" />
     
    </div>
    <div className="col-md-8">
    <Form className='p-5' action='admin-login/admin-dashbord'>
        <h3 className="ms-5">Sign In</h3>
        <div className="input-group border border-0 w-75 mx-auto mt-3">
          <span className="input-group-text border border-0">
            <i className="bi bi-person-add" />
          </span>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email *"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            className="form-control border border-0 border-bottom border-dark"
          />
        </div>
        <div className="input-group border border-0 w-75 mx-auto mt-3">
          <span className="input-group-text border border-0">
            <i className="bi bi-lock" />
          </span>
          <input
            type="password"
            name="pwd"
            id="pwd"
            placeholder="Password *"
            pattern='{a-z}{0-9}' minLength={5} maxLength={10} title='use alphaban and numbers password must 5-10 charector' required
            className="form-control border border-0 border-bottom border-dark"
          />
        </div>
        <div className="input-group border border-0 w-75 mx-auto mt-3">
          

                                <Button href='/admin-login/admin-dashboard' type='submit' variant='outline-warning' className='me-2'> Submit</Button>
                                <Link to="/admin-login/admin-forgot-password" className='text-decoration-none text-info'> Forget password ?</Link>
                          
        </div>
        <div className="input-group border border-0 w-75 mx-auto mt-3">
          <p className="text-center">
            Like us On <i className="bi bi-facebook text-primary" />
            <i className="bi bi-twitter text-primary" />
            <i className="bi bi-google text-danger" />
          </p>
        </div>
      </Form>
    </div>
  </div>
</div>

  )
}
