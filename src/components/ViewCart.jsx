import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios'
import {useNavigate,useParams,Link} from 'react-router-dom';
import Header from './Header.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
export default function ViewCart() {
// destructuring od data to fetch all data 
const[data,setData]=useState([]);
const Navigate=useNavigate();


useEffect(()=>{
//get api to fetch data using axios.get() 
axios.get(`http://localhost:4000/view-cart`).then((response)=>{
setData(response.data);

// total.current.value=response.data.total;

});
// pass messages
Navigate('/view-cart');
},[]); //renders one times 


//DELET ITEM FROM CART
const DeletProduct = (id) => {
    axios.delete(`http://localhost:4000/view-cart/${id}`)
      .then(() => {
        // toast('Product Remove From Cart', {
        //   position: "top-right",
        //   autoClose: 4000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "colored",
        // });
        window.location="/view-cart";
      })
  }

return (
<>
<Header />
<Navbar />


<Container fluid="true" id='cart'>
        <Row className='px-3 py-3 py-md-5 py-lg-5'>
          <Col sm={11} md={7} lg={7} className='col-12 mx-auto carttable p-0'>
              <table className='table table-striped table-bordered'>
                <thead align="center" className="tablehead">
                  <tr>
                    <th className='bg-dark text-white'>Products</th>
                    <th className='bg-dark text-white'>Price(&#8377;)</th>
                    <th className='bg-dark text-white'>Photo</th>
                    <th className='bg-dark text-white'>Quantity</th>
                    <th className='bg-dark text-white'>Total(&#8377;)</th>
                    <th className='bg-dark text-white'>Remove</th>
                  </tr>
                </thead>

                <tbody align="center">
                  {data && data.map((item,cartindex) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.productname}</td>
                        <td>{item.newprice}</td>
                        <td><img src={item.productimage} alt="product image" style={{ width: "50px", height: "70px" }} /></td>
                        <td>
                          <InputGroup className='quantity'>
                            <Button variant='primary' className="btn-minus rounded-0 py-1 d-flex justify-content-center align-items-center"  onClick={() => {
                              const Incqty = data.map((item, index) => {
                                return cartindex === index ? {...item, qty : parseInt(item.qty) - 1} : item
                              })
                              setData(Incqty)
                            }}>
                              <i className="fa fa-minus"></i>
                            </Button>
                            <Form.Control
                              value={item.qty}
                              className='rounded-0 text-center qty'
                              readOnly
                              minLength="0"
                            />
                            <button className="btn btn-sm btn-primary btn-plus rounded-0 py-1 d-flex justify-content-center align-items-center" onClick={() => {
                              const Incqty = data.map((item, index) => {
                                return cartindex === index ? {...item, qty : parseInt(item.qty) + 1} : item
                              })
                              setData(Incqty)
                            }}>
                              <i className="fa fa-plus"></i>
                            </button>
                          </InputGroup>
                        </td>
                        <td>{item.newprice * item.qty}</td>
                        <td><i className='fa fa-trash text-danger fs-4' onClick={() => DeletProduct(item.id)}></i></td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
          </Col>
          <Col sm={11} md={4} lg={4} className='col-12 mx-auto h-100'>
            <div className='mt-3 mt-md-0 mt-lg-0'>
              <div className='pb-3 added'>
                <h3><span className='text-primary'>{data.length}</span> Products Added In Cart</h3>
              </div>
              <InputGroup className="mb-3 mb-sm-3 mb-md-5 mb-lg-5 border border-black">
                <Form.Control
                  placeholder="Cupone Code"
                  className='rounded-0 py-3 py-sm-2 py-md-3 py-lg-3 border border-0'
                />
                <Button variant="warning" id="button-addon2" className='rounded-0 border border-bottom-0 border-top-0 border-start-1 border-end-0 border-black'>
                  Apply Cupone
                </Button>
              </InputGroup>
            </div>
            <div className='border border-black'>
              <h4 className='bg-dark text-white p-3 m-0'>Cart Summary</h4>
              <Col className=" d-flex">
                <p className='rounded-0 py-3 m-0 border border-bottom-1 border-top-0 border-start-0 border-end-0 border-black text-center w-50'
                >Subtotal</p>
                <p className='rounded-0 py-3 m-0 border border-bottom-1 border-top-0 border-start-0 border-end-0 border-black text-center w-50'
                >&#8377; {data.map(item => item.newprice * item.qty).reduce((total, value) =>(parseInt(total) + parseInt(value)), 0)
                  }</p>
              </Col>

              <Col className=" d-flex">
                <p className='rounded-0 py-3 m-0 border border-bottom-1 border-top-0 border-start-0 border-end-0 border-black text-center w-50'
                >Shipping</p>
                <p className='rounded-0 py-3 m-0 border border-bottom-1 border-top-0 border-start-0 border-end-0 border-black text-center w-50'>
                &#8377; 00
                </p>
              </Col>
              <div>
              <Link to="/checkout">
                <Button variant='warning' className='w-100 rounded-0 py-2 fs-5' >
                  CheckOut
                </Button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>


<Footer />
</>

)
}
