import React, { Fragment } from 'react'
import { Button, Col, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'
import AdminHeader from './AdminHeader'
import AdminFooter from './AdminFooter'

export default function AdminChangePassword() {
  return (
    <>

    <AdminHeader />
    <section id="dashboard-content" >
    <div className="container-fluid m-0 p-0">
    <div className="row">
    <AdminSidebar />
    <Container>
              <Col size={10} md={6} lg={6} className="mt-5 mb-4 p-1 mx-auto shadow rounded-2">
                <Col className='mt-3'>
                  <h1 className='text-center text-warning'>Change Password</h1>
                  <hr className='w-25 mx-auto border border-3 border-info rounded-pill' />
                </Col>

                <Form className='px-5 pb-3'>
                  <Form.Group className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='p-0 text-start'>
                      Email
                    </Form.Label>
                    <Form.Control type='email' placeholder='Your Email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='p-0 text-start'>
                      Old Passwore
                    </Form.Label>
                    <Form.Control type='text' placeholder='Old Password' title='Check Your Email for Code' lang='6' required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label className='p-0'>
                      New Password
                    </Form.Label>
                    <Form.Control type="password" placeholder="Password" pattern='{a-z}{0-9}' minLength={5} maxLength={10} title='use alphaban and numbers password must 5-10 charector' required />
                  </Form.Group>

                  <Form.Group>
                    <Button type='submit' variant='outline-warning' className='me-2'> Submit</Button>
                    <Link to="/admin-login" className='text-decoration-none text-info'>  Login Here?</Link>
                  </Form.Group>
                </Form>
              </Col>
            </Container>
    </div>
    </div>
    </section>    
    <AdminFooter />
    </>
  )
}