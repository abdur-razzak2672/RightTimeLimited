import React from "react";
import "./industries.css";
import Service from "../../components/Service";
import Association from "../../components/Association";
import Partner from "../../components/Partner";
import Information from "../../components/Information";

function IndustriusBody() {
  return (
    <div>
      <div className="page-header">
        <div
          className="page-header__bg"
          style={{ backgroundImage: `url('/assets/images/background/i1.png')` }}
        ></div>
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <a href="/}">Home</a>
            </li>
            <li>Industries</li>
          </ul>
          <h2 className="page-header__title">Industries</h2>
        </div>
      </div>

      <section className="    mt-5">
        <div className="   ">
          <div
            style={{ backgorundColor: "red", height: "100%" }}
            className="wrapper1 headerind  "
          >
            <div className="container">
              <p className="section-title__text  text-center pt-5  ">
                Our Focus Industries
              </p>
              <h2 className="header text-center text-light">
                Industries We Specialize In
              </h2>

              <p className="text-light mt-4">
                {" "}
                At our IT Security firm, we provide security solutions to
                businesses operating in a wide range of industries. Our team of
                experts has extensive knowledge and experience in designing and
                implementing customized security solutions to meet the specific
                needs of each industry.
              </p>
              <p className="text-light">
                {" "}
                We cover a variety of industries, including finance, healthcare,
                manufacturing, retail, and technology. Our solutions are
                tailored to address the unique challenges faced by businesses in
                each industry and are designed to protect against a range of
                cybersecurity threats, such as data breaches, malware, phishing,
                and ransomware attacks.
              </p>
              <p className="text-light">
                Our approach is based on a deep understanding of the
                industry-specific regulatory requirements, compliance standards,
                and best practices. We work closely with our clients to assess
                their unique security risks and design a comprehensive security
                program that meets their specific needs and budget.
              </p>
              <p className="text-light">
                {" "}
                At our IT Security firm, we are committed to providing our
                clients with the highest level of security and service. We pride
                ourselves on our ability to stay ahead of the latest threats and
                emerging trends in the cybersecurity landscape, enabling us to
                deliver innovative and effective solutions that help our clients
                achieve their security goals.
              </p>
              <ul className="img-grid mt-5 text-center cardHieght ">
                <li style={{ width: "180px" }} className="m-2 rounded border ">
                  <a href="/bank-nbfi" className="overlay-container">
                    <img loading="lazy" decoding="async"
                      src="assets/images/Industries/bank&nbfi.png"
                      alt="Image capture goes here 01"
                      className="overlay-img rounded-2"
                      width="60%"
                    />
                    <p className="text-light">Banking</p>
                  </a>
                </li>
                <li style={{ width: "180px" }} className="m-2 rounded border ">
                  <a href="/ecommerce-retail" className="overlay-container">
                    <img loading="lazy" decoding="async"
                      src="assets/images/Industries/ecommerce.png"
                      alt="Image capture goes here 01"
                      className="overlay-img rounded-2"
                      width="60%"
                    />
                    <p className="text-light">Ecommerce</p>
                  </a>
                </li>
                <li style={{ width: "180px" }} className="m-2 rounded border ">
                  <a
                    href="/educational-institutions"
                    className="overlay-container"
                  >
                    <img loading="lazy" decoding="async"
                      src="assets/images/Industries/education.png"
                      alt="Image capture goes here 01"
                      className="overlay-img rounded-2"
                      width="60%"
                    />
                    <p className="text-light">Education</p>
                  </a>
                </li>
                <li style={{ width: "180px" }} className="m-2 rounded border ">
                  <a href="/health-care" className="overlay-container">
                    <img loading="lazy" decoding="async"
                      src="assets/images/Industries/healthcare.png"
                      alt="Image capture goes here 01"
                      className="overlay-img rounded-2"
                      width="60%"
                    />
                    <p className="text-light">Health Care</p>
                  </a>
                </li>
                <li style={{ width: "180px" }} className="m-2 rounded border ">
                  <a href="/payment-card" className="overlay-container">
                    <img loading="lazy" decoding="async"
                      src="assets/images/Industries/pci.png"
                      alt="Image capture goes here 01"
                      className="overlay-img rounded-2"
                      width="60%"
                    />
                    <p className="text-light">PCI</p>
                  </a>
                </li>

                <li style={{ width: "180px" }} className="m-2 rounded border ">
                  <a href="/telecomunication">
                    <img loading="lazy" decoding="async"
                      src="assets/images/Industries/telecommunication.png"
                      alt="Image capture goes here 01"
                      className="overlay-img rounded-2"
                      width="60%"
                    />
                    <p className="text-light">Telecommunication</p>
                  </a>
                </li>

                <li style={{ width: "180px" }} className="m-2 rounded border ">
                  <a href="/health-care" className="overlay-container">
                    <img loading="lazy" decoding="async"
                      src="assets/images/Industries/insurance .png"
                      alt="Image capture goes here 01"
                      className="overlay-img rounded-2"
                      width="60%"
                    />
                    <p className="text-light">insurance</p>
                  </a>
                </li>
                <li style={{ width: "180px" }} className="m-2 rounded border ">
                  <a href="/bpo-service" className="overlay-container">
                    <img loading="lazy" decoding="async"
                      src="assets/images/Industries/bpo.png"
                      alt="Image capture goes here 01"
                      className="overlay-img rounded-2"
                      width="60%"
                    />
                    <p className="text-light">It & BPO Services</p>
                  </a>
                </li>

                <li style={{ width: "180px" }} className="m-2 rounded border ">
                  <a href="/power-sector">
                    <img loading="lazy" decoding="async"
                      src="assets/images/Industries/power.png"
                      alt="Image capture goes here 01"
                      className="overlay-img rounded-2"
                      width="60%"
                    />
                    <p className="text-light">Power Sector</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Service />
        <Association />
        <Partner />
        <Information />

        <section
          className="section-padding--top service-four gray-bg section-padding-lg--bottom section-has-bottom-margin background-repeat-no background-position-top-right"
          style={{
            backgroundImage: `url('assets/images/shapes/service-four-bg-1-1.png')`,
          }}
        >
          <div className="container">
            <div className="container">
              <div className="section-title text-center">
                <p className="section-title__text">Company Benefits</p>
                <h2 className="header"> Why You Should Choose Our Services</h2>
                <p className="text-dark">
                  Choose Right Time Limited for unparalleled cybersecurity
                  expertise and tailored solutions to safeguard your digital
                  assets effectively.
                </p>
              </div>
              <div
                className="owl-carousel  thm-owl__carousel thm-owl__carousel--with-shadow service-four__carousel"
                data-owl-options='{"loop": true,
				"autoplay": true,
				"autoplayTimeout": 3000,
				"nav": false,
				"navText": ["<span className=\"fa fa-angle-left\"></span>","<span className=\"fa fa-angle-right\"></span>"],
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
				}}'
              >
                <div className="item">
                  <div
                    style={{ height: "300px" }}
                    className="service-card-three"
                  >
                    <div className="service-card-three__icon  ">
                      <i className="icon-cloud  "></i>
                    </div>
                    <div className="service-card-three__content">
                      <h3 className="service-card-three__title">
                        <a href="/consultation">
                          {" "}
                          Quality Service
                          <br />
                        </a>
                      </h3>
                      <p className="text-warning">
                        {" "}
                        Services address a range of simply free text application
                        and infrastructure needs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div
                    style={{ height: "300px" }}
                    className="service-card-three"
                  >
                    <div className="service-card-three__icon  ">
                      <i className="icon-group"></i>
                    </div>
                    <div className="service-card-three__content">
                      <h3 className="service-card-three__title">
                        <a href="/consultation">
                          {" "}
                          Expert Team
                          <br />
                        </a>
                      </h3>
                      <p className="text-warning">
                        {" "}
                        Services address a range of simply free text application
                        and infrastructure needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div
                    style={{ height: "300px" }}
                    className="service-card-three"
                  >
                    <div className="service-card-three__icon  ">
                      <i className="icon-cloud  "></i>
                    </div>
                    <div className="service-card-three__content">
                      <h3 className="service-card-three__title">
                        <a href="/consultation">
                          {" "}
                          Excellent Support
                          <br />
                        </a>
                      </h3>
                      <p className="text-warning">
                        {" "}
                        Services address a range of simply free text application
                        and infrastructure needs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div
                    style={{ height: "300px" }}
                    className="service-card-three"
                  >
                    <div className="service-card-three__icon  ">
                      <i className="icon-group"></i>
                    </div>
                    <div className="service-card-three__content">
                      <h3 className="service-card-three__title">
                        <a href="/consultation">
                          {" "}
                          Sound Management
                          <br />
                        </a>
                      </h3>
                      <p className="text-warning">
                        {" "}
                        Services address a range of simply free text application
                        and infrastructure needs.
                      </p>
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
      </section>
    </div>
  );
}

export default IndustriusBody;
