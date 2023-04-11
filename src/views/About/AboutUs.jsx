import React from "react";
import './about.css'
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
                  Assessor firm we are serving for more than 13 years..
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
    
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default AboutUs;
