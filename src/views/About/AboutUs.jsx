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

      <section>
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
      </section>

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
              <span>LEarn More</span>
            </a>
          </div>
        </div>
      </section>
      <section
        className="section-padding--bottom section-padding--top testimonials-two background-repeat-no background-position-top-center"
        style={{
          backgroundImage: `url('/assets/images/shapes/testi-bg-1-1.png')`,
        }}
      >
        <div className="container">
          <div className="row gutter-y-60">
            <div className="col-lg-5">
              <div className="testimonials-two__content">
                <div className="section-title ">
                  <p className="section-title__text">Our clients</p>
                  <h2 className="header">
                    We Are Trusted Worldwide Peoples
                  </h2>
                </div>
                <div className="testimonials-two__content__text">
                  Sed ut perspiciatis unde omnis natus error sit voluptatem
                  accusa ntium doloremque laudantium totam rem aperiamea queipsa
                  quae abillo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo.
                </div>
                <div className="testimonials-two__content__text">
                  Pellentesque gravida lectus vitae nisi luctus, Finibus aliquet
                  ligula ultrices.
                </div>
                <a href="/testmonial" className="thm-btn testimonials-two__content__btn">
                  <span>View All feedbacks</span>
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="testimonials-two__items">
                <div className="row gutter-y-30">
                  <div className="col-lg-12">
                    <div className="testimonials-one-card">
                    <div style={{width:"120px"}} className="testimonials-one-card__image">
                        <img
                          src="/assets/images/about/test2.jpg"
                          width="100%"
                          alt=""
                        />
                      </div>
                      <div className="testimonials-one-card__content">
                        <div className="testimonials-one-card__text">
                        "Our experience working with “Right Time Limited”, an IT Security firm to achieve the ISO 27001 
                        certification was fantastic. Their team of experts was incredibly knowledgeable and helpful throughout 
                        the entire process. They provided guidance and support every step of the way, and we were able to achieve 
                        the certification in a timely and efficient manner. Thanks to their expertise and dedication,
                         we have improved our information security posture and gained a competitive edge in our industry. We highly recommend “Right Time Limited” to any organization seeking to achieve the ISO 27001 certification."
                          <h3 className="testimonials-one-card__title">
                          Syed Masodul Bari
                          </h3>
                          <p className="testimonials-one-card__designation">
                          DMD & Head of ICT Wing<br/>Al-Arafah Islami Bank Limited, Bangladesh
                          </p>
                          <i className="icon-right-quote testimonials-one-card__icon"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 mt-2  ">
                      <div className="testimonials-one-card">
                      <div style={{width:"120px"}} className="testimonials-one-card__image">
                        <img
                          src="/assets/images/about/test1.jpeg"
                          width="100%"
                          alt=""
                        />
                         </div>
                        <div className="testimonials-one-card__content">
                          <div className="testimonials-one-card__text">
                          "Our organization recently completed the end-to-end Training and Consultation offered by the IT Security firm to achieve certification on Payment Card Industry Data Security Standard (PCI DSS) by PCI SSC, USA. We were thoroughly impressed with the IT Security firm's knowledgeable and experienced team, who guided us through the training and certification process from start to finish.

Thanks to their comprehensive training program and hands-on approach, we felt confident applying the PCI DSS standard to our organization's payment card data security practices. We appreciated their emphasis on practical solutions and real-world scenarios, which helped us understand the complexities of PCI DSS and how to implement it effectively.

Overall, we highly recommend the IT Security firm for their end-to-end Training and Consultation services on PCI DSS certification. Their expertise, dedication, and commitment to their clients' success are truly unmatched."

                          </div>
                          <h3 className="testimonials-one-card__title">
                          Abu Md. Sabbir Hassan Chowdhury                          </h3>
                          <p className="testimonials-one-card__designation">
                          SVP, Head of IT & ADC Operation<br/>  NRB Bank Ltd.                        </p>
                          <i className="icon-right-quote testimonials-one-card__icon"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
