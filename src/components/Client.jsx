import React from "react";

function Client() {
  return (
    <div>
      <section
        className="section-padding--bottom section-padding--top testimonials-two background-repeat-no background-position-top-center"
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
                  <p>
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
                        <div className="testimonials-one-card__text">
                          Information Security Management System (ISMS) i.e. ISO
                          27001 Certification of Al-Arafah Islami Bank Limited
                          and Lead Auditor Training & Certification for related
                          professional. It was fantastic working with “Right
                          Time Limited” (RightTime, short form) an Information
                          Technology (IT) Security Service Provider- for
                          achieving the ISO 27001 Certification of Al-Arafah
                          Islami Bank Limited. Its team of experts was
                          incredibly knowledgeable and helpful throughout the
                          entire process. They provided guidance and support
                          every step of the way, and we were able to achieve the
                          certification in a timely and efficient manner. Thanks
                          to their expertise and dedication, we have improved
                          our information security posture and gained a
                          competitive edge in our industry. We highly recommend
                          “Right Time Limited” to any organization seeking to
                          achieve the ISO 27001 certification as well as
                          International Professional Lead Auditor Certification
                          for related Professional(s).
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
                          <div className="testimonials-one-card__text">
                            Payment Card Industry Data Security standard (PCI
                            DSS) Certification of NRB Bank Limited and Skill
                            Development Training for related professional. Our
                            organization recently completed the end-to-end
                            Training and Consultation offered by “Right Time
                            Limited” (RightTime, short form), an IT Security
                            firm to achieve certification on Payment Card
                            Industry Data Security Standard (PCI DSS) by PCI
                            SSC, USA for the NRB Bank Limited. We were
                            thoroughly impressed with RightTime's knowledgeable
                            and experienced team, who guided us through the
                            training and certification process from start to
                            finish. Thanks to their comprehensive training
                            program and hands-on approach, we felt confident
                            applying the PCI DSS standard to our organization's
                            payment card data security practices. We appreciate
                            their emphasis on practical solutions and real-world
                            scenarios, which helped us understand the
                            complexities of PCI DSS and how to implement it
                            effectively. Overall, we highly recommend “Right
                            Time Limited” for their end-to-end Training and
                            Consultation services on PCI DSS certification.
                            Their expertise, dedication, and commitment to their
                            clients' success are truly unmatched."
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
