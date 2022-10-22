import React from "react";
import './about.css'
function AboutUs() {
  return (
    <div>
      <div className="page-header">
        <div
          className="page-header__bg"
           style={{backgroundImage: `url('../images/resources/aboutbg1.png')`}}

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
                  <h2 className="section-title__title">
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
                  VA & PT, Forensic (with the use of multiple world class
                  Automated & Manual tools). As the first empaneled Security
                  Assessor firm we are serving for more than 13 years..
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="section-padding--bottom section-padding--top">
        <div className="container">
          <div className="section-title text-center">
            <p className="section-title__text">Our Team members</p>
            <h2 className="section-title__title">
              Our Expert Person to Provide <br /> IT Solution Services
            </h2>
          </div>

          <div className="body1">
            <section className="container">
              <div className="row active-with-click grid">
                <div className="grid-item">
                  <article className="material-card Red">
                    <h2 className="h21">
                      <span>Sahaly Yasmin Bhuiyan</span>
                      <strong>
                        <i className="fa fa-fw fa-star"></i>
                        Chairman
                      </strong>
                    </h2>
                    <div className="mc-content">
                      <div className="img-container">
                      <img
                         className = "img-responsive"
                          src= "/assets/images/team/Picsart_22-09-17_12-48-25-796.jpg"
                          alt=""
                        />
                        
                       </div>
                      <div className="mc-description">Chairman of the company.</div>
                    </div>
                    <a className="mc-btn-action">
                      <i className="fa fa-bars"></i>
                    </a>
                    <div className="mc-footer">
                      <a className="fa fa-fw fa-facebook"></a>
                      <a className="fa fa-fw fa-twitter"></a>
                      <a className="fa fa-fw fa-linkedin"></a>
                      <a className="fa fa-fw fa-google-plus"></a>
                    </div>
                  </article>
                </div>
                <div className="grid-item">
                  <article className="material-card Pink">
                    <h2 className="h21">
                      <span>Mohammad Tohidur Rahman Bhuiyan</span>
                      <strong>
                        <i className="fa fa-fw fa-star"></i>
                        MD & CEO and Lead Assessor
                      </strong>
                    </h2>
                    <div className="mc-content">
                      <div className="img-container">
                         <img
                         className = "img-responsive"
                          src= "/assets/images/team/Picsart_22-09-17_12-48-53-762.jpg"
                          alt=""
                        />
                      </div>
                      <div className="mc-description">
                        <p>MD & CEO and Lead Assessor of the company</p>
                      </div>
                    </div>
                    <a className="mc-btn-action">
                      <i className="fa fa-bars"></i>
                    </a>
                    <div className="mc-footer">
                      <a className="fa fa-fw fa-facebook"></a>
                      <a className="fa fa-fw fa-twitter"></a>
                      <a className="fa fa-fw fa-linkedin"></a>
                      <a className="fa fa-fw fa-google-plus"></a>
                    </div>
                  </article>
                </div>
                <div className="grid-item">
                  <article className="material-card Purple">
                    <h2 className="h21">
                      <span>Arshad Mahmud</span>
                      <strong>
                        <i className="fa fa-fw fa-star"></i>
                        Chief Operating Officer
                      </strong>
                    </h2>
                    <div className="mc-content">
                      <div className="img-container">
                      <img
                         className = "img-responsive"
                          src= "/assets/images/team/Picsart_22-09-17_12-49-21-996.jpg"
                          alt=""
                        />
                         
                      </div>
                      <div className="mc-description">
                        Chief Operating Officer of the company
                      </div>
                    </div>
                    <a className="mc-btn-action">
                      <i className="fa fa-bars"></i>
                    </a>
                    <div className="mc-footer">
                      <a className="fa fa-fw fa-facebook"></a>
                      <a className="fa fa-fw fa-twitter"></a>
                      <a className="fa fa-fw fa-linkedin"></a>
                      <a className="fa fa-fw fa-google-plus"></a>
                    </div>
                  </article>
                </div>

                <div className="grid-item">
                  <article className="material-card Deep-Purple">
                    <h2 className="h21">
                      <span>Rashed Sarwar</span>
                      <strong>
                        <i className="fa fa-fw fa-star"></i>
                        Country Head, USA
                      </strong>
                    </h2>
                    <div className="mc-content">
                      <div className="img-container">
                        
                        <img
                         className = "img-responsive"
                          src= "/assets/images/team/Picsart_22-09-17_12-50-14-322.jpg"
                          alt=""
                        />
                      </div>
                      <div className="mc-description">Country Head, USA</div>
                    </div>
                    <a className="mc-btn-action">
                      <i className="fa fa-bars"></i>
                    </a>
                    <div className="mc-footer">
                      <a className="fa fa-fw fa-facebook"></a>
                      <a className="fa fa-fw fa-twitter"></a>
                      <a className="fa fa-fw fa-linkedin"></a>
                      <a className="fa fa-fw fa-google-plus"></a>
                    </div>
                  </article>
                </div>
                <div className="grid-item">
                  <article className="material-card Indigo">
                    <h2 className="h21">
                      <span>Ms. Melinda</span>
                      <strong>
                        <i className="fa fa-fw fa-star"></i>
                        Country Head, Germany
                      </strong>
                    </h2>
                    <div className="mc-content">
                      <div className="img-container">
                         <img
                         className = "img-responsive"
                          src= "/assets/images/team/Picsart_22-09-17_12-49-43-090.jpg"
                          alt=""
                        />
                      </div>
                      <div className="mc-description">Country Head, Germany</div>
                    </div>
                    <a className="mc-btn-action">
                      <i className="fa fa-bars"></i>
                    </a>
                    <div className="mc-footer">
                      <a className="fa fa-fw fa-facebook"></a>
                      <a className="fa fa-fw fa-twitter"></a>
                      <a className="fa fa-fw fa-linkedin"></a>
                      <a className="fa fa-fw fa-google-plus"></a>
                    </div>
                  </article>
                </div>
                <div className="grid-item">
                  <article className="material-card Blue">
                    <h2 className="h21">
                      <span>Dr. Mahfuz Ashraf</span>
                      <strong>
                        <i className="fa fa-fw fa-star"></i>
                        Country Head, Australia
                      </strong>
                    </h2>
                    <div className="mc-content">
                      <div className="img-container">
                         <img
                         className = "img-responsive"
                          src= "/assets/images/team/Picsart_22-09-17_12-49-58-327.jpg"
                          alt=""
                        />
                      </div>
                      <div className="mc-description">Country Head, Australia</div>
                    </div>
                    <a className="mc-btn-action">
                      <i className="fa fa-bars"></i>
                    </a>
                    <div className="mc-footer">
                      <a className="fa fa-fw fa-facebook"></a>
                      <a className="fa fa-fw fa-twitter"></a>
                      <a className="fa fa-fw fa-linkedin"></a>
                      <a className="fa fa-fw fa-google-plus"></a>
                    </div>
                  </article>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="black-bg section-padding-lg--top section-padding-lg--bottom cta-two">
        <div
          className="cta-two__bg jarallax"
          data-jarallax
          data-speed="0.2"
          data-imgPosition="50% 0%"
          style={{backgroundImage: `url('/assets/images/background/s4.jpeg')`}}
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
         style={{backgroundImage: `url('/assets/images/shapes/testi-bg-1-1.png')`}}

        
      >
        <div className="container">
          <div className="row gutter-y-60">
            <div className="col-lg-5">
              <div className="testimonials-two__content">
                <div className="section-title ">
                  <p className="section-title__text">Our clients</p>
                  <h2 className="section-title__title">
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
                <a
                  href="/"
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
                      <div className="testimonials-one-card__image">
                        <img
                          src= "/assets/images/resources/testi-1-1.jpg"
                          alt=""
                        />
                        
                      </div>
                      <div className="testimonials-one-card__content">
                        <div className="testimonials-one-card__text">
                          On the other hand denounc with ghteo indignation and
                          dislike men who so beguiled and demoralized the charms
                          of pleasure the momen blinded by desire cannot foresee
                          the pain and trouble.
                        </div>

                        <h3 className="testimonials-one-card__title">
                          Michal Rahul
                        </h3>

                        <p className="testimonials-one-card__designation">
                          Ul - UX Designer
                        </p>
                        <i className="icon-right-quote testimonials-one-card__icon"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="testimonials-one-card">
                      <div className="testimonials-one-card__image">
                        <img
                          src="/assets/images/resources/testi-1-2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="testimonials-one-card__content">
                        <div className="testimonials-one-card__text">
                          On the other hand denounc with ghteo indignation and
                          dislike men who so beguiled and demoralized the charms
                          of pleasure the momen blinded by desire cannot foresee
                          the pain and trouble.
                        </div>

                        <h3 className="testimonials-one-card__title">
                          Jessica Brown
                        </h3>

                        <p className="testimonials-one-card__designation">
                          Ul - UX Designer
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
      </section>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default AboutUs;
