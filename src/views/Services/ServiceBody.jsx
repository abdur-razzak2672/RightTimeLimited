import React, { useState } from "react";
import "./services.css";
 import BenitsConpany from "./ServicesBody/BenitsConpany";
 import Service from "../../components/Service";
 function ServiceBody() {
   return (
    <div>
      <div className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: `url('http://www.stemmonsservices.com/wp-content/uploads/2018/02/5064042-hd-business-wallpaper.jpg')`,
          }}
        ></div>

        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Services</li>
          </ul>
          <h2 className="page-header__title">Services</h2>
        </div>
      </div>

     

      <section
        className="  service-four gray-bg section-padding-lg--bottom section-has-bottom-margin background-repeat-no background-position-top-right"
        style={{
          backgroundImage: `url('/assets/images/shapes/service-four-bg-1-1.png')`,
        }}
      >
         <div>
        <div className="container pt-4">
          <p className="text-dark textJustify">“Right Time Limited”   is a highly esteemed security service provider, assisting businesses in fortifying their security posture. It offers expert consultation, meticulous testing, certification support, and reliable managed services to safeguard assets and mitigate risks. With industry insights, RightTime identify weaknesses, conduct thorough security testing, and provide certification guidance. Its managed services include 24/7 monitoring, incident response, and continuous security improvements. Its objective is to be a trusted partner, helping clients navigate cybersecurity challenges, minimize risks, and cultivate robust security resilience. </p>
          </div>
      </div>
        <section className="section-padding--bottom mt-3 ">
          <BenitsConpany />
        </section>


        <Service/>

        
      </section>
      <br />

      {/* <div className=''>
      <div className="box">
      <div id="card-container">
        <div id="card">
          <div className="front face text-center p-5">
          <img src ="assets/images/resources/1.jpg" width = "50%"/>
          <h5 className='pt-3'>Report</h5>

          </div>
          <div className="back face">
            <h1>Razzak</h1>
            <p className="artist">The icon</p>
            <p className="date">2015</p>
          </div>
        </div>
      </div>
      <div id="card-container">
        <div id="card2">
          <div className="front face text-center p-5">
          <img src ="assets/images/resources/1.jpg" width = "50%"/>
          <h5 className='pt-3'>Report</h5>

          </div>
          <div className="back face">
            <h1>icon</h1>
            <p className="artist">The icnon</p>
            <p className="date">2017</p>
          </div>
        </div>
      </div>
      <div id="card-container">
        <div id="card3">
          <div className="front face text-center p-5">
          <img src ="assets/images/resources/1.jpg" width = "50%"/>
          <h5 className='pt-3'>Report</h5>

          </div>
          <div className="back face">
            <h1>Waterbed</h1>
            <p className="artist">The icon</p>
            <p className="date">2015</p>
          </div>
        </div>
      </div>
      <div id="card-container">
        <div id="card3">
          <div className="front face text-center p-5">
          <img src ="assets/images/resources/1.jpg" width = "50%"/>
          <h5 className='pt-3'>Report</h5>
          </div>
          <div className="back face">
            <h1>icon</h1>
            <p className="artist">The icon</p>
            <p className="date">2015</p>
          </div>
        </div>
      </div>
      <div id="card-container">
        <div id="card3">
          <div className="front face text-center p-5">
          <img src ="assets/images/resources/1.jpg" width = "50%"/>
          <h5 className='pt-3'>Report</h5>
          </div>
          <div className="back face">
            <h1>icon</h1>
            <p className="artist">The icon</p>
            <p className="date">2015</p>
          </div>
        </div>
      </div>
      <div id="card-container">
        <div id="card3">
          <div className="front face text-center p-5">
          <img src ="assets/images/resources/1.jpg" width = "50%"/>
          <h5 className='pt-3'>Report</h5>
          </div>
          <div className="back face">
            <h1>icon</h1>
            <p className="artist">The icon</p>
            <p className="date">2015</p>
          </div>
        </div>
      </div>
      </div>
      </div> */}


      <section
        className="section-padding service-four gray-bg section-padding-l--bottom h-25 section-has-bottom-margin background-repeat-no background-position-top-right"
        style={{
          backgroundImage: `url('/assets/images/shapes/service-four-bg-1-1.png')`,
        }}
      >
        <br />
        <div className="container">
          <div className="section-title text-center"></div>
          <div className="owl-carousel client-carousel--two">
            <div className="container">
              <div
                className="owl-carousel thm-owl__carousel"
                data-owl-options='{"loop": true,
				"autoplay": true,
				"autoplayTimeout": 1500,
				"autoplayHoverPause": true,
				"nav": true,
				"navText": ["<span className=\"fa fa-angle-left\"></span>","<span className=\"fa fa-angle-right\"></span>"],
				"dots": false,
				"margin": 30,
                "items": 2,
				"smartSpeed": 700,
				"responsive": {
					"0": {
						"margin": 30,
						"items": 2
					},
					"375": {
						"margin": 30,
						"items": 2
					},
					"575": {
						"margin": 30,
						"items": 3
					},
					"767": {
						"margin": 50,
						"items": 4
					},
					"991": {
						"margin": 40,
						"items": 5
					},
					"1200": {
						"margin": 5,
						"items": 5
					}
				}}'
              >
                <div className="item">
                  <img
                    src="/assets/images/resources/bangladesh bank.png"
                    alt=""
                  />
                </div>
                <div className="item">
                  <img src="assets/images/resources/agrani bank.png" alt="" />
                </div>
                <div className="item">
                  <img src="assets/images/resources/rupali bank.png" alt="" />
                </div>
                <div className="item">
                  <img src="assets/images/resources/nrb-bank.png" alt="" />
                </div>
                <div className="item">
                  <img src="/assets/images/resources/IFIC-Logo.png" alt="" />
                </div>
                <div className="item">
                  <img src="/assets/images/resources/SMBL-Logo.png" alt="" />
                </div>
                <div className="item">
                  <img src="/assets/images/resources/IFC-Logo.svg" alt="" />
                </div>
                <div className="item">
                  <img
                    src="/assets/images/resources/Transparency International Bangladesh.png"
                    alt=""
                  />
                </div>
                <div className="item">
                  <img src="/assets/images/resources/paywell.png" alt="" />
                </div>
                <div className="item">
                  <img
                    src="/assets/images/resources/Shahajalal Islami Bank_Logo.png"
                    alt=""
                  />
                </div>
                <div className="item">
                  <img src="/assets/images/resources/shurjomikhi.png" alt="" />
                </div>
                <div className="item">
                  <img src="/assets/images/resources/padma bank.png" alt="" />
                </div>
                <div className="item">
                  <img src="/assets/images/resources/SBAC bank.png" alt="" />
                </div>
                <div className="item">
                  <img src="/assets/images/resources/mutual-trust.png" alt="" />
                </div>
                <div className="item">
                  <img
                    src="/assets/images/resources/meghnagbanklogo.png"
                    alt=""
                  />
                </div>
                <div className="item">
                  <img src="/assets/images/resources/walletmix.png" alt="" />
                </div>
                <div className="item">
                  <img
                    src="/assets/images/resources/circle-fintech.png"
                    alt=""
                  />
                </div>
                <div className="item">
                  <img
                    src="/assets/images/resources/addiesoftlogo.svg"
                    alt=""
                  />
                </div>
                <div className="item">
                  <img src="/assets/images/resources/aibl.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/assets/images/resources/cca.jpg" alt="" />
                </div>
                <div className="item">
                  <img src="/assets/images/resources/genweb2.webp" alt="" />
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
      <br />

      <section className="section-padding--bottom">
        <div className=" mx-5">
          <div className="section-title text-center">
            <p className="section-title__text">Company Benefits</p>
            <h2 className="header">
              We Provide Best Information Security <br /> Service and Solution
              For 14 Years
            </h2>
          </div>
          <div className="row gutter-y-30">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-card-two gray-bg">
                <h3 className="service-card-two__title">
                  <a href="services-1.html">Quality Service</a>
                </h3>

                <p style={{height:"230px"}}  className="service-card-two__text">
                we prioritize proactive measures, customized solutions, quick response times, compliance, and reputation to ensure your business stays protected from cyber threats.                </p>
                <div className="service-card-two__icon">
                  <i className="icon-smart-tv"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-card-two gray-bg">
                <h3 className="service-card-two__title">
                  <a href="team.html">Expert Team</a>
                </h3>

                <p style={{height:"230px"}} className="service-card-two__text">
                Our expert team brings experience, knowledge, up-to-date information, advanced technology, and tools, and the ability to provide customized solutions, ultimately ensuring our clients' security and peace of mind.
                </p>
                <div className="service-card-two__icon">
                  <i className="icon-link"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-card-two gray-bg">
                <h3 className="service-card-two__title">
                  <a href="contact.html">Excellent Support</a>
                </h3>

                <p style={{height:"230px"}} className="service-card-two__text">
                It ensures timely assistance, expert guidance, responsive communication, flexibility, and continuous improvement, ultimately providing our clients with the peace of mind they need to focus on their business.                </p>
                <div className="service-card-two__icon">
                  <i className="icon-technical-support"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-card-two gray-bg">
                <h3 className="service-card-two__title">
                  <a href="about.html">Sound Management</a>
                </h3>

                <p style={{height:"230px"}} className="service-card-two__text">
                with sound management, we can deliver high-quality security services to our clients, ensuring their satisfaction and building long-term partnerships based on trust and mutual success.                </p>
                <div className="service-card-two__icon">
                  <i className="icon-cctv"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-one" style={{ paddingBottom: "5%" }}>
        <div className="container">
          <div
            className="cta-one__inner text-center wow fadeInUp"
            data-wow-duration="1500ms"
          >
            <div className="cta-one__circle"></div>
            <div className="section-title ">
              <p className="section-title__text">
                Need Any Technology Solution
              </p>
              <h2 className="header header--light">
                Let’s Work Togather on Project
              </h2>
            </div>
            <a
              href="/contact-us"
              className="thm-btn thm-btn--light cta-one__btn"
            >
              <span>Start Now</span>
            </a>
          </div>
        </div>
        <br />
        <br />

        <br />
        <br />
      </section>
    </div>
  );
}

export default ServiceBody;
