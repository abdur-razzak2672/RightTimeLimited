import React from "react";
import "./about.css";
import Association from "../../components/Association";
import Partner from "../../components/Partner";
function AboutUs() {
  return (
    <div>
      <div className="page-header">
        <div
          className="page-header__bg"
          style={{ backgroundImage: `url('../images/resources/aboutbg1.png')` }}
        ></div>
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <a href="/">Home</a>
            </li>
            <li>About</li>
          </ul>
          <h2 className="page-header__title">About Us</h2>
        </div>
      </div>
      <section className="about-four section-padding--top">
        <div className="container">
          <div className="row gutter-y-60">
            <div className="col-lg-6">
              <div className="about-four__image">
                <img
                  src="/assets/images/resources/rt1.png"
                  className="wow fadeInUp"
                  data-wow-duration="1500ms"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-four__content">
                <div className="section-title ">
                  <p className="section-title__text">About Company</p>
                  <h2 className="header">
                    Leading Information Security Company
                  </h2>
                </div>
                <div className="about-four__text">
                  Right Time Limited (“RightTime”, short form) started its
                  journey in the year 2009. It’s purely an Information Security
                  Consultation, Assessment/Audit Service & Solutions Provider.
                  With all related International Standards and Association, we
                  are providing Information System Audit, Technical
                  Documentation, Project Management, Custom Skill Development,
                  ISO Consultation & Certification, SWIFT Consultation &
                  Auditing, PCI DSS Gap Assessment, Remediation Consultation,
                  Auditing & Certification. Conducting Security Assessment e.g.
                  VA & PT, Forensic (with the use of multiple world className
                  Automated & Manual tools). As the first empaneled Security
                  Assessor firm we are serving for more than 14 years..
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 text-center p-2">
              <img src="/assets/images/about/icon1.png" alt=""/>
              <h3 className="text-dark">Our Mission</h3>
              <p className="mx-5" >Right Time Limited (“RightTime”, short form) started its journey in the year 2009. It’s purely an Information Security Consultation.</p>

            </div>
            <div className="col-lg-4 text-center p-2">
              <img src="/assets/images/about/icon1.png" alt=""/>
              <h3 className="text-dark">Our Vission</h3>
              <p className="mx-5" >Right Time Limited (“RightTime”, short form) started its journey in the year 2009. It’s purely an Information Security Consultation.</p>

            </div>

            <div className="col-lg-4 text-center p-2">
              <img src="/assets/images/about/icon1.png" alt=""/>
              <h3 className="text-dark">Our Goals</h3>
              <p className="mx-5" >Right Time Limited (“RightTime”, short form) started its journey in the year 2009. It’s purely an Information Security Consultation.</p>

            </div>


          </div>
        </div>
      </section>*/}

      <section className="black-bg section-padding-lg--top section-padding-lg--bottom cta-two mt-5">
        <div
          className="cta-two__bg jarallax"
          data-jarallax
          data-speed="0.2"
          data-imgPosition="50% 0%"
          style={{
            backgroundImage: `url('/assets/images/background/s4.jpeg')`,
          }}
        ></div>
        <div className="container">
          <div className="cta-two__inner">
            <h3 className="cta-two__title">
              Better Information Security Services And Solutions At Your
              <span>Fingertips</span>
            </h3>
            <a href="/" className="thm-btn cta-two__btn">
              <span>Learn More</span>
            </a>
          </div>
        </div>
      </section>

      <Association />
      <Partner />

      <section>
        <div className="   ">
          <div
            style={{ backgorundColor: "red", height: "100%" }}
            className="wrapper1 headerind  "
          >
            <div className="  ">
              <p className="section-title__text  text-center pt-5  ">
                Our Focus Industries
              </p>
              <h2 className="header text-center text-light">
                Industries We Specialize In
              </h2>

              <ul className="img-grid mt-5 text-center pb-5 cardHieght1 ">
                <li style={{ width: "140px" }} className="m-2 rounded border ">
                  <a href="/bank-nbfi" className="overlay-container">
                    <img
                      src="assets/images/Industries/bank&nbfi.png"
                      alt="Image capture goes here 01"
                      className="overlay-img rounded-2"
                      width="60%"
                    />
                    <p>Banking</p>
                  </a>
                </li>
                <li style={{ width: "140px" }} className="m-2 rounded border ">
                  <a href="/ecommerce-retail" className="overlay-container">
                    <img
                      src="assets/images/Industries/ecommerce.png"
                      alt="Image capture goes here 01"
                      className="overlay-img rounded-2"
                      width="60%"
                    />
                    <p>Ecommerce</p>
                  </a>
                </li>
                <li style={{ width: "140px" }} className="m-2 rounded border ">
                  <a
                    href="/educational-institutions"
                    className="overlay-container"
                  >
                    <img
                      src="assets/images/Industries/education.png"
                      alt="Image capture goes here 01"
                      className="overlay-img rounded-2"
                      width="60%"
                    />
                    <p>Education</p>
                  </a>
                </li>
                <li style={{ width: "140px" }} className="m-2 rounded border ">
                  <a href="/health-care" className="overlay-container">
                    <img
                      src="assets/images/Industries/healthcare.png"
                      alt="Image capture goes here 01"
                      className="overlay-img rounded-2"
                      width="60%"
                    />
                    <p>Health Care</p>
                  </a>
                </li>
                <li style={{ width: "140px" }} className="m-2 rounded border ">
                  <a href="/payment-card" className="overlay-container">
                    <img
                      src="assets/images/Industries/pci.png"
                      alt="Image capture goes here 01"
                      className="overlay-img rounded-2"
                      width="60%"
                    />
                    <p>PCI</p>
                  </a>
                </li>

                <li style={{ width: "140px" }} className="m-2 rounded border ">
                  <a href="/telecomunication">
                    <img
                      src="assets/images/Industries/telecommunication.png"
                      alt="Image capture goes here 01"
                      className="overlay-img rounded-2"
                      width="60%"
                    />
                    <p>Telecommunication</p>
                  </a>
                </li>

                <li style={{ width: "140px" }} className="m-2 rounded border ">
                  <a href="/health-care" className="overlay-container">
                    <img
                      src="assets/images/Industries/insurance .png"
                      alt="Image capture goes here 01"
                      className="overlay-img rounded-2"
                      width="60%"
                    />
                    <p>insurance</p>
                  </a>
                </li>
                <li style={{ width: "140px" }} className="m-2 rounded border ">
                  <a href="/bpo-service" className="overlay-container">
                    <img
                      src="assets/images/Industries/bpo.png"
                      alt="Image capture goes here 01"
                      className="overlay-img rounded-2"
                      width="60%"
                    />
                    <p>It & BPO Services</p>
                  </a>
                </li>

                <li style={{ width: "140px" }} className="m-2 rounded border ">
                  <a href="/power-sector">
                    <img
                      src="assets/images/Industries/power.png"
                      alt="Image capture goes here 01"
                      className="overlay-img rounded-2"
                      width="60%"
                    />
                    <p>Power Sector</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default AboutUs;
