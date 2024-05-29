import React from 'react'
import about from '../assets/img/about.jpg'
import promotion from '../assets/img/promotion.jpg'
import team1 from '../assets/img/team-1.jpg'
import team2 from '../assets/img/team-2.jpg'
import team3 from '../assets/img/team-3.jpg'
import team4 from '../assets/img/team-4.jpg'
import test1 from '../assets/img/testimonial-1.jpg'
import test2 from '../assets/img/testimonial-2.jpg'
import test3 from '../assets/img/testimonial-3.jpg'

export default function Content() {
  return (
    <>

<div className="container-fluid py-5">
  <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-lg-7">
        <h1 className="section-title position-relative text-center mb-5">
          Traditional &amp; Delicious Ice Cream Since 1950
        </h1>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 py-5">
        <h4 className="font-weight-bold mb-3">About Us</h4>
        <h5 className="text-muted mb-3">
          Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed
          vero dolor sea
        </h5>
        <p>
          Takimata sed vero vero no sit sed, justo clita duo no duo amet et,
          nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no.
          Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut.
          Labor diam sed ipsum et eirmod
        </p>
        <a href="" className="btn btn-secondary mt-2">
          Learn More
        </a>
      </div>
      <div className="col-lg-4" style={{ minHeight: 400 }}>
        <div className="position-relative h-100 rounded overflow-hidden">
          <img
            className="position-absolute w-100 h-100"
            src={about}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="col-lg-4 py-5">
        <h4 className="font-weight-bold mb-3">Our Features</h4>
        <p>
          Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor
          lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo
          sed sed diam. Ea et erat ut sed diam sea ipsum est dolor
        </p>
        <h5 className="text-muted mb-3">
          <i className="fa fa-check text-secondary mr-3" />
          Eos kasd eos dolor
        </h5>
        <h5 className="text-muted mb-3">
          <i className="fa fa-check text-secondary mr-3" />
          Eos kasd eos dolor
        </h5>
        <h5 className="text-muted mb-3">
          <i className="fa fa-check text-secondary mr-3" />
          Eos kasd eos dolor
        </h5>
        <a href="" className="btn btn-primary mt-2">
          Learn More
        </a>
      </div>
    </div>
  </div>
</div>


  {/* Promotion Start */}
  <div className="container-fluid my-5 py-5 px-0">
    <div className="row bg-primary m-0">
      <div className="col-md-6 px-0" style={{ minHeight: 500 }}>
        <div className="position-relative h-100">
          <img
            className="position-absolute w-100 h-100"
            src={promotion}
            style={{ objectFit: "cover" }}
          />
          <button
            type="button"
            className="btn-play"
            data-toggle="modal"
            data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
            data-target="#videoModal"
          >
            <span />
          </button>
        </div>
      </div>
      <div className="col-md-6 py-5 py-md-0 px-0">
        <div className="h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
          <div
            className="d-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
            style={{ width: 100, height: 100 }}
          >
            <h3 className="font-weight-bold text-secondary mb-0">$199</h3>
          </div>
          <h3 className="font-weight-bold text-white mt-3 mb-4">
            Chocolate Ice Cream
          </h3>
          <p className="text-white mb-4">
            Lorem justo clita dolor ipsum ut sed eos, ipsum et dolor kasd sit ea
            justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum
          </p>
          <a href="" className="btn btn-secondary py-3 px-5 mt-2">
            Order Now
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Promotion End */}
  {/* Video Modal Start */}
  <div
    className="modal fade"
    id="videoModal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-body">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
          {/* 16:9 aspect ratio */}
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src=""
              id="video"
              allowscriptaccess="always"
              allow="autoplay"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Team Start */}
  <div className="container-fluid py-5">
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6">
          <h1 className="section-title position-relative mb-5">
            Experienced &amp; Most Famous Ice Cream Chefs
          </h1>
        </div>
        <div className="col-lg-6 mb-5 mb-lg-0 pb-5 pb-lg-0" />
      </div>
      <div className="row">
        <div className="col-12">
          <div className="owl-carousel team-carousel">
            <div className="team-item">
              <div className="team-img mx-auto">
                <img
                  className="rounded-circle w-100 h-100"
                  src={team1}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                className="position-relative text-center bg-light rounded px-4 py-5"
                style={{ marginTop: "-100px" }}
              >
                <h3 className="font-weight-bold mt-5 mb-3 pt-5">Full Name</h3>
                <h6 className="text-uppercase text-muted mb-4">Designation</h6>
                <div className="d-flex justify-content-center pt-1">
                  <a
                    className="btn btn-outline-secondary btn-social mr-2"
                    href="#"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-outline-secondary btn-social mr-2"
                    href="#"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-outline-secondary btn-social mr-2"
                    href="#"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-item">
              <div className="team-img mx-auto">
                <img
                  className="rounded-circle w-100 h-100"
                  src={team2}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                className="position-relative text-center bg-light rounded px-4 py-5"
                style={{ marginTop: "-100px" }}
              >
                <h3 className="font-weight-bold mt-5 mb-3 pt-5">Full Name</h3>
                <h6 className="text-uppercase text-muted mb-4">Designation</h6>
                <div className="d-flex justify-content-center pt-1">
                  <a
                    className="btn btn-outline-secondary btn-social mr-2"
                    href="#"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-outline-secondary btn-social mr-2"
                    href="#"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-outline-secondary btn-social mr-2"
                    href="#"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-item">
              <div className="team-img mx-auto">
                <img
                  className="rounded-circle w-100 h-100"
                  src={team3}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                className="position-relative text-center bg-light rounded px-4 py-5"
                style={{ marginTop: "-100px" }}
              >
                <h3 className="font-weight-bold mt-5 mb-3 pt-5">Full Name</h3>
                <h6 className="text-uppercase text-muted mb-4">Designation</h6>
                <div className="d-flex justify-content-center pt-1">
                  <a
                    className="btn btn-outline-secondary btn-social mr-2"
                    href="#"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-outline-secondary btn-social mr-2"
                    href="#"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-outline-secondary btn-social mr-2"
                    href="#"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-item">
              <div className="team-img mx-auto">
                <img
                  className="rounded-circle w-100 h-100"
                  src={team4}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                className="position-relative text-center bg-light rounded px-4 py-5"
                style={{ marginTop: "-100px" }}
              >
                <h3 className="font-weight-bold mt-5 mb-3 pt-5">Full Name</h3>
                <h6 className="text-uppercase text-muted mb-4">Designation</h6>
                <div className="d-flex justify-content-center pt-1">
                  <a
                    className="btn btn-outline-secondary btn-social mr-2"
                    href="#"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-outline-secondary btn-social mr-2"
                    href="#"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-outline-secondary btn-social mr-2"
                    href="#"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
  {/* Testimonial Start */}
  <div className="container-fluid py-5">
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h1 className="section-title position-relative text-center mb-5">
            Clients Say About Our Famous Ice Cream
          </h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="owl-carousel testimonial-carousel">
            <div className="text-center">
              <i className="fa fa-3x fa-quote-left text-primary mb-4" />
              <h4 className="font-weight-light mb-4">
                Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum
                elitr dolore et eos labore, stet justo sed est sed. Diam sed sed
                dolor stet amet eirmod eos labore diam
              </h4>
              <img
                className="img-fluid mx-auto mb-3"
                src={test1}
                alt=""
              />
              <h5 className="font-weight-bold m-0">Client Name</h5>
              <span>Profession</span>
            </div>
            <div className="text-center">
              <i className="fa fa-3x fa-quote-left text-primary mb-4" />
              <h4 className="font-weight-light mb-4">
                Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum
                elitr dolore et eos labore, stet justo sed est sed. Diam sed sed
                dolor stet amet eirmod eos labore diam
              </h4>
              <img
                className="img-fluid mx-auto mb-3"
                src={test2}
                alt=""
              />
              <h5 className="font-weight-bold m-0">Client Name</h5>
              <span>Profession</span>
            </div>
            <div className="text-center">
              <i className="fa fa-3x fa-quote-left text-primary mb-4" />
              <h4 className="font-weight-light mb-4">
                Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum
                elitr dolore et eos labore, stet justo sed est sed. Diam sed sed
                dolor stet amet eirmod eos labore diam
              </h4>
              <img
                className="img-fluid mx-auto mb-3"
                src={test3}
                alt=""
              />
              <h5 className="font-weight-bold m-0">Client Name</h5>
              <span>Profession</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}


</>

  )
}
