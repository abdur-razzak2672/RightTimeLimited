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
          <div class="container">
                    <div class="section-title text-center">
                        <p class="section-title__text">Popular Services</p>
                        <h2 class="section-title__title">We Provide Our Client Best <br />Information Security Solution & Services</h2>

                    </div>
                    <div class="owl-carousel  thm-owl__carousel thm-owl__carousel--with-shadow service-four__carousel"
                        data-owl-options='{"loop": true,
				"autoplay": true,
				"autoplayTimeout": 3000,
				"nav": false,
				"navText": ["<span class=\"fa fa-angle-left\"></span>","<span class=\"fa fa-angle-right\"></span>"],
				"dots": true,
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
				}}'>
                        <div class="item">
                            <div style={{ height :"300px" }}  class="service-card-three">
                                <div class="service-card-three__icon">
                                    <i class="icon-new-product"></i>
                                </div>
                                <div class="service-card-three__content">
                                    <h3 class="service-card-three__title"><a href="/consultation">Consultation
                                        <br /></a></h3>
                                    <div class="service-card-three__text">Providing the solutions for non-IT businesses.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div  style={{ height :"300px" }} class="service-card-three">
                                <div class="service-card-three__icon">
                                    <i class="icon-new-product"></i>
                                </div>
                                <div class="service-card-three__content">
                                    <h3 class="service-card-three__title"><a href="/auditing">Auditing</a></h3>
                                    <div class="service-card-three__text">Providing the solutions for non-IT businesses.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div style={{ height :"300px" }}  class="service-card-three">
                                <div class="service-card-three__icon">
                                    <i class="icon-protection"></i>
                                </div>
                                <div class="service-card-three__content">
                                    <h3 class="service-card-three__title"><a
                                        href="/">Security <br />
                                        Assessment & Testing</a></h3>
                                    <div class="service-card-three__text">Providing the solutions for non-IT businesses.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div style={{ height :"300px" }}  class="service-card-three">
                                <div class="service-card-three__icon">
                                    <i class="icon-web-development"></i>
                                </div>
                                <div class="service-card-three__content">
                                    <h3 class="service-card-three__title"><a href="/">Standard
                                        <br />
                                        Implementation & Certification</a></h3>
                                    <div class="service-card-three__text">Providing the solutions for non-IT businesses.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div style={{ height :"300px" }} class="service-card-three">
                                <div class="service-card-three__icon">
                                    <i class="icon-analysis"></i>
                                </div>
                                <div class="service-card-three__content">
                                    <h3 class="service-card-three__title"><a href="/">Security
                                        <br />
                                        Training</a></h3>
                                    <div class="service-card-three__text">Providing the solutions for non-IT businesses.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div style={{ height :"300px" }}  class="service-card-three">
                                <div class="service-card-three__icon">
                                    <i class="icon-analysis"></i>
                                </div>
                                <div class="service-card-three__content">
                                    <h3 class="service-card-three__title"><a href="{{ url('/services/solutions">Solutions</a></h3>
                                    <div class="service-card-three__text">Providing the solutions for non-IT businesses.
                                    </div>
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
