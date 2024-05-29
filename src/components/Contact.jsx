import React,{useRef} from 'react'
import axios from 'axios'
import emailjs from '@emailjs/browser';
/* useRef() : this is an types of hooks 
              useRef() pass any data types as reference of user input
              const name=useRef("");  
              useRef() is used to render input data inside of api 
*/
import { Link,useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Header from './Header.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
export default function Contact() 
{
  const form = useRef();
  const name = useRef("");
  const email = useRef("");
  const phone = useRef("");
  const subject = useRef("");
  const message = useRef("");

  const Navigate = useNavigate();
 

  const SandData = (e) => {

    // store contact form data form of variable 
    const insert = {
      name: name.current.value,
      email: email.current.value,
      phone: phone.current.value,
      subject:subject.current.value,
      message: message.current.value
    }

    //add data in json file via link
    e.preventDefault();
    emailjs
      .sendForm('service_q88l0wf', 'template_ixovm9k', form.current, {
        publicKey: 'XSpVxjI1q64unxs7G',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    axios.post("http://localhost:4000/contacts", insert)
      .then(() => {
        Swal.fire({
             title: "Wow",
           text: "Thanks for contact with us we will contact with you soon",
            icon: "success"
           });
           window.location("/contact-us");
          });  
          e.target.reset();
  }

  return (
    <>
<Header />
<Navbar />
<div className="container-fluid py-5">
  <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <h1 className="section-title position-relative text-center mb-5">
          Contact Us For Any Query
        </h1>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-9">
        <div className="contact-form bg-light rounded p-5">
          <div id="success" />
          {/* <form onSubmit={AddContactHandeler}> */}
          <form ref={form} onSubmit={SandData}>
            <div className="form-row">
              <div className="col-sm-6 control-group">
                <input
                  type="text"
                  className="form-control p-4"
                  id="name"  name="from_name" ref={name}
                  placeholder="Your Name"
                  required="required"
                  data-validation-required-message="Please enter your name"
                />
                <p className="help-block text-danger" />
              </div>
              <div className="col-sm-6 control-group">
                <input
                  type="email" 
                  className="form-control p-4"
                  id="email"
                  placeholder="Your Email" ref={email}  name="from_email"
                  required="required"
                  data-validation-required-message="Please enter your email"
                />
                <p className="help-block text-danger" />
              </div>
            </div>
            <div className="control-group">
              <input
                type="text"
                className="form-control p-4" ref={subject}  name="from_subject"
                id="subject" 
                placeholder="Subject"
                required="required"
                data-validation-required-message="Please enter a subject"
              />
              <p className="help-block text-danger" />
            </div>

            <div className="control-group">
              <input
                type="text"
                className="form-control p-4"
                id="subject" 
                placeholder="Phone" name="from_phone"  ref={phone}
                required="required"
                data-validation-required-message="Please enter a Phone"
              />
              <p className="help-block text-danger" />
            </div>
            <div className="control-group">
              <textarea
                className="form-control p-4"
                rows={6}
                id="message" 
                placeholder="Message" name="message" ref={message} 
                required="required"
                data-validation-required-message="Please enter your message"
                defaultValue={""}
              />
              <p className="help-block text-danger" />
            </div>
            <div>
              <button
                className="btn btn-primary btn-block py-3 px-5"
                type="submit" 
                id="sendMessageButton">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer />
</>
  )
}
