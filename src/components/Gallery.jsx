import React from 'react'
import Header from './Header.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
export default function Gallery() {
  return (
    <>
  {/* Portfolio Start */}
  <Header />
  <Navbar />
  <div className="container-fluid py-5 px-0">
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <h1 className="section-title position-relative text-center mb-5">
            Delicious Ice Cream Made From Our Very Own Organic Milk
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <ul className="list-inline mb-4 pb-2" id="portfolio-flters">
            <li
              className="btn btn-sm btn-outline-primary m-1 active"
              data-filter="*"
            >
              All
            </li>
            <li
              className="btn btn-sm btn-outline-primary m-1"
              data-filter=".first"
            >
              Cone
            </li>
            <li
              className="btn btn-sm btn-outline-primary m-1"
              data-filter=".second"
            >
              Vanilla
            </li>
            <li
              className="btn btn-sm btn-outline-primary m-1"
              data-filter=".third"
            >
              Chocolate
            </li>
          </ul>
        </div>
      </div>
      <div className="row m-0 portfolio-container">
        <div className="col-lg-4 col-md-6 p-0 portfolio-item first">
          <div className="position-relative overflow-hidden">
            <img className="img-fluid w-100" src="img/portfolio-1.jpg" alt="" />
            <a
              className="portfolio-btn"
              href="img/portfolio-1.jpg"
              data-lightbox="portfolio"
            >
              <i className="fa fa-plus text-primary" style={{ fontSize: 60 }} />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 p-0 portfolio-item second">
          <div className="position-relative overflow-hidden">
            <img className="img-fluid w-100" src="img/portfolio-2.jpg" alt="" />
            <a
              className="portfolio-btn"
              href="img/portfolio-2.jpg"
              data-lightbox="portfolio"
            >
              <i className="fa fa-plus text-primary" style={{ fontSize: 60 }} />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 p-0 portfolio-item third">
          <div className="position-relative overflow-hidden">
            <img className="img-fluid w-100" src="img/portfolio-3.jpg" alt="" />
            <a
              className="portfolio-btn"
              href="img/portfolio-3.jpg"
              data-lightbox="portfolio"
            >
              <i className="fa fa-plus text-primary" style={{ fontSize: 60 }} />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 p-0 portfolio-item first">
          <div className="position-relative overflow-hidden">
            <img className="img-fluid w-100" src="img/portfolio-4.jpg" alt="" />
            <a
              className="portfolio-btn"
              href="img/portfolio-4.jpg"
              data-lightbox="portfolio"
            >
              <i className="fa fa-plus text-primary" style={{ fontSize: 60 }} />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 p-0 portfolio-item second">
          <div className="position-relative overflow-hidden">
            <img className="img-fluid w-100" src="img/portfolio-5.jpg" alt="" />
            <a
              className="portfolio-btn"
              href="img/portfolio-5.jpg"
              data-lightbox="portfolio"
            >
              <i className="fa fa-plus text-primary" style={{ fontSize: 60 }} />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 p-0 portfolio-item third">
          <div className="position-relative overflow-hidden">
            <img className="img-fluid w-100" src="img/portfolio-6.jpg" alt="" />
            <a
              className="portfolio-btn"
              href="img/portfolio-6.jpg"
              data-lightbox="portfolio"
            >
              <i className="fa fa-plus text-primary" style={{ fontSize: 60 }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
  {/* Portfolio End */}
</>

  )
}
