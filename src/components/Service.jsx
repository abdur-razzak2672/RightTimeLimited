import React from "react";

function Service() {
  return (
    <div>
      <section
        className="section-padding--top service-four gray-bg section-padding-lg--bottom section-has-bottom-margin background-repeat-no background-position-top-right"
        style={{
          backgroundImage: `url('assets/images/shapes/service-four-bg-1-1.png')`,
        }}
      >
        <div className="container">
          <div className="section-title text-center">
            <p className="section-title__text">Popular Services</p>
            <h2 className="section-title__title">
              We Provide Our Client Best <br />
              Information Security Solution & Services
            </h2>
          </div>
          <div
            className="owl-carousel thm-owl__carousel thm-owl__carousel--with-shadow service-four__carousel"
            data-owl-options='{"loop": true,
				"autoplay": true,
				"autoplayTimeout": 3000,
				"nav": false,
				"navText": ["<span className=\"fa fa-angle-left\"></span>","<span className=\"fa fa-angle-right\"></span>"],
				"dots": false,
				"margin": 0,
                "items": 1,
				"smartSpeed": 700,
				"responsive": {
					"0": {
						"margin": 0,
						"items": 1
					},
					"576": {
						"margin": 30,
						"items": 2
					},
					"768": {
						"margin": 30,
						"items": 3
					},
					"992": {
						"margin": 30,
						"items": 4
					},
					"1200": {
						"margin": 30,
						"items": 4
					}
				}}'
          >
            <div className="item">
              <div className="service-card-three">
                <div className="service-card-three__icon">
                  <i className="icon-new-product"></i>
                </div>
                <div className="service-card-three__content">
                  <h3 className="service-card-three__title">
                    <a href="{{ url('/services/consultation') }}">
                      Consultation
                      <br />
                    </a>
                  </h3>
                  <div className="service-card-three__text"></div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="service-card-three">
                <div className="service-card-three__icon">
                  <i className="icon-new-product"></i>
                </div>
                <div className="service-card-three__content">
                  <h3 className="service-card-three__title">
                    <a href="{{ url('/services/auditing') }}">Auditing </a>
                  </h3>
                  <div className="service-card-three__text"></div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="service-card-three">
                <div className="service-card-three__icon">
                  <i className="icon-protection"></i>
                </div>
                <div className="service-card-three__content">
                  <h3 className="service-card-three__title">
                    <a href="{{ url('/services/security-assessment-testing') }}">
                      Security <br />
                      Assessment & Testing
                    </a>
                  </h3>
                  <div className="service-card-three__text"></div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="service-card-three">
                <div className="service-card-three__icon">
                  <i className="icon-web-development"></i>
                </div>
                <div className="service-card-three__content">
                  <h3 className="service-card-three__title">
                    <a href="{{ url('/services/standard-implementation-certification') }}">
                      Standard
                      <br />
                      Implementation & Certification
                    </a>
                  </h3>
                  <div className="service-card-three__text"></div>
                </div>
              </div>
              .
              <div className="item">
                <div className="service-card-three">
                  <div className="service-card-three__icon">
                    <i className="icon-analysis"></i>
                  </div>
                  <div className="service-card-three__content">
                    <h3 className="service-card-three__title">
                      <a href="{{ url('/services/solutions') }}">Solutions</a>
                    </h3>
                    <div className="service-card-three__text"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="funfact-one">
        <div className="container">
          <div
            className="funfact-one__inner wow fadeInUp background-size-cover"
            data-wow-duration="1500ms"
            style={{
              backgroundImage: `url('assets/images/shapes/funfact-one-bg.png')`,
            }}
          >
            <ul className="funfact-one__list">
              <li className="funfact-one__list__item">
                <h3 className="funfact-one__list__title count-box">
                  <span data-stop="255" data-speed="2500" className="count-text">
                    00
                  </span>
                </h3>
                <p className="funfact-one__list__text">Business Interogation</p>
              </li>
              <li className="funfact-one__list__item">
                <h3 className="funfact-one__list__title count-box">
                  <span data-stop="325" data-speed="2500" className="count-text">
                    00
                  </span>
                </h3>
                <p className="funfact-one__list__text">Strategies Planned</p>
              </li>
              <li className="funfact-one__list__item">
                <h3 className="funfact-one__list__title count-box">
                  <span data-stop="569" data-speed="2500" className="count-text">
                    00
                  </span>
                </h3>
                <p className="funfact-one__list__text">Projects Relased</p>
              </li>
              <li className="funfact-one__list__item">
                <h3 className="funfact-one__list__title count-box">
                  <span data-stop="769" data-speed="2500" className="count-text">
                    00
                  </span>
                </h3>
                <p className="funfact-one__list__text">Satisfied Clients </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
