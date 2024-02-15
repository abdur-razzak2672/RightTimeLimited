import React from "react";

function Benefit() {
  return (
    <div>
      <section className=" section-padding--top about-three about-three--home-one">
        <div
          className="about-three__shape wow fadeInRight"
          data-wow-duration="1500ms"
        >
          {/* // <!--style="background-image: url({{ asset('frontend/assets/images/shapes/about-three-s-1.png') }});"> --> */}
        </div>
        <div className="container">
          <div className="row gutter-y-60">
            <div style={{marginTop:"200px"}} className="col-lg-6  ">
              <div className="about-three__image">
                <img
                  src="/assets/images/home/foot.png"
                  className="wow fadeInUp"
                  data-wow-duration="1500ms"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-three__content">
                <div className="section-title ">
                  <p className="section-title__text">Company Benefits</p>
                  <h2 className="header">
                    Why You Should Choose Our Services
                  </h2>
                </div>
                <div className="about-three__text">
                Choose Right Time Limited for unparalleled cybersecurity expertise and tailored solutions to safeguard your digital assets effectively.
                </div>
                <ul className="about-three__list">
                  <li className="about-three__list__item">
                    <div className="about-three__list__icon">
                      <i className="icon-cloud"></i>
                    </div>
                    <div className="about-three__list__content">
                      <h3 className="about-three__list__title">
                        <a href="/">
                        Quality Service
                        </a>
                      </h3>
                      <p className="about-three__list__text">
                        Services address a range of simply free text application
                        and infrastructure needs.
                      </p>
                    </div>
                  </li>
                  <li className="about-three__list__item">
                    <div className="about-three__list__icon">
                      <i className="icon-group"></i>
                    </div>
                    <div className="about-three__list__content">
                      <h3 className="about-three__list__title">
                        <a href="/">Expert Team</a>
                      </h3>
                      <p className="about-three__list__text">
                        Services address a range of simply free text application
                        and infrastructure needs.
                      </p>



                 
                    </div>
                  </li>



                  <li className="about-three__list__item">
                    <div className="about-three__list__icon">
                      <i className="icon-cloud"></i>
                    </div>
                    <div className="about-three__list__content">
                      <h3 className="about-three__list__title">
                        <a href="/">
                        Excellent Support                      </a>
                      </h3>
                      <p className="about-three__list__text">
                        Services address a range of simply free text application
                        and infrastructure needs.
                      </p>
                    </div>
                  </li>
                  <li className="about-three__list__item">
                    <div className="about-three__list__icon">
                      <i className="icon-group"></i>
                    </div>
                    <div className="about-three__list__content">
                      <h3 className="about-three__list__title">
                        <a href="/">Sound Management</a>
                      </h3>
                      <p className="about-three__list__text">
                        Services address a range of simply free text application
                        and infrastructure needs.
                      </p>

                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br/><br/><br/> 
    </div>
  );
}

export default Benefit;
