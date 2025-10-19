import React from "react";

function Client() {
  return (
    <div>
      <section
        className=" mt-5 testimonials-two background-repeat-no background-position-top-center"
        style={{
          backgroundImage: `url('assets/images/background/testi-bg-1-1.png')`,
        }}
      >
        <div className="container">
          <div className="row gutter-y-60">
            <div className="col-lg-5">
              <div className="testimonials-two__content">
                <div className="section-title ">
                  <p className="section-title__text">Our clients</p>
                  <h2 className="header">We Are Trusted Worldwide Peoples</h2>
                </div>
                <div className="testimonials-two__content__text">
                  <p className="textJustify">
                    We assist customer for nursing their Information Technology
                    Enabled Services (ITES) through adopting collective methods,
                    technologies, and processes to help protect the
                    confidentiality, integrity, and availability, Authenticity
                    and reliability of computer systems, networks and data,
                    against cyber-attacks or unauthorized access.
                  </p>
                </div>
                <a
                  href="/testmonial"
                  className="thm-btn testimonials-two__content__btn"
                >
                  <span>View All feedbacks</span>
                </a>
              </div>

              <div className="testimonials-two__content">
                <div className="section-title mt-3">
                  <h2 className="header">
                    {" "}
                    WeLeading Information Security Company
                  </h2>
                </div>
                <div className="testimonials-two__content__text">
                  <p className="textJustify">
                    Right Time Limited (“RightTime”, short form) started its
                    journey in the year 2009. It’s purely an Information
                    Security Consultation, Assessment/Audit Service & Solutions
                    Provider. With all related International Standards and
                    Association, we are providing Information System Audit,
                    Technical Documentation, Project Management, Custom Skill
                    Development, ISO Consultation & Certification, SWIFT
                    Consultation & Auditing, PCI DSS Gap Assessment, Remediation
                    Consultation, Auditing & Certification. Conducting Security
                    Assessment e.g. VA & PT, Forensic (with the use of multiple
                    world className Automated & Manual tools). As the first
                    empaneled Security Assessor firm we are serving for more
                    than 14 years.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="testimonials-two__items">
                <div className="row gutter-y-30">
                  <div className="col-lg-12">
                    <div className="testimonials-one-card">
                      <div
                        style={{ width: "120px" }}
                        className="testimonials-one-card__image"
                      >
                        <img
                          src="/assets/images/about/test2.jpg"
                          width="100%"
                          alt=""
                        />
                      </div>
                      <div className="testimonials-one-card__content">
                        <div className="testimonials-one-card__text  textJustify">
                          Al-Arafah Islami Bank Limited has achieved the ISO
                          27001 certification with the help of Right Time
                          Limited , an Information Technology (IT) Security
                          Service Provider. RightTime's team of experts provided
                          guidance and support throughout the entire process,
                          enabling the bank to achieve certification in a timely
                          and efficient manner. We highly recommend RightTime to
                          any organization seeking to achieve ISO 27001
                          certification.{" "}
                          <span>
                            <a style={{ color: "orange" }} href="/testmonial">
                              Read More...
                            </a>
                          </span>
                          <h3 className="testimonials-one-card__title">
                            Syed Masodul Bari
                          </h3>
                          <p className="testimonials-one-card__designation">
                            DMD & Head of ICT Wing
                            <br />
                            Al-Arafah Islami Bank Limited, Bangladesh
                          </p>
                          <i className="icon-right-quote testimonials-one-card__icon"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 mt-2  ">
                      <div className="testimonials-one-card">
                        <div
                          style={{ width: "120px" }}
                          className="testimonials-one-card__image"
                        >
                          <img
                            src="/assets/images/about/test1.jpeg"
                            width="100%"
                            alt=""
                          />
                        </div>
                        <div className="testimonials-one-card__content">
                          <div className="testimonials-one-card__text textJustify">
                            NRB Bank Limited has achieved certification on
                            Payment Card Industry Data Security Standard (PCI
                            DSS) with the help of Right Time Limited -first
                            Bangladesh Based PCI QSA firm by PCI SSC, USA (Since
                            2013). We highly recommend RightTime for their
                            expertise, and commitment to their clients' success
                            in achieving PCI DSS certification.
                            <span>
                              <a style={{ color: "orange" }} href="/testmonial">
                                {" "}
                                Read More...
                              </a>
                            </span>
                          </div>
                          <h3 className="testimonials-one-card__title">
                            Abu Md. Sabbir Hassan Chowdhury{" "}
                          </h3>
                          <p className="testimonials-one-card__designation">
                            SVP, Head of IT & ADC Operation
                            <br /> NRB Bank Ltd.{" "}
                          </p>
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
    </div>
  );
}

export default Client;
