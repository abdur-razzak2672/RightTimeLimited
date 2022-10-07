import React from "react";

function Information() {
  return (
    <div>
      <section
        className="section-padding service-four gray-bg section-padding-l--bottom h-25 section-has-bottom-margin background-repeat-no background-position-top-right"
        style={{
          backgroundImage: `url("assets/images/shapes/service-four-bg-1-1.png")`,
        }}
      >
        <br />
        <div className="container">
          <div className="section-title text-center">
            <h2 className="section-title__title">
              We Provide Our Client Best <br />
              Information Security Services
            </h2>
          </div>
          <div className="client-carousel client-carousel--two">
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
                  <img src=" assets/images/clients/bb1.jpg " alt="" />
                </div>
                <div className="item">
                  <img src=" assets/images/clients/nrbc logo.png " alt="" />
                </div>
                <div className="item">
                  <img src=" assets/images/clients/surjo.png " alt="" />
                </div>
                <div className="item">
                  <img src=" assets/images/clients/aibl.png " alt="" />
                </div>
                <div className="item">
                  <img
                    src=" assets/images/clients/ssf.png "
                    size="small"
                    alt=""
                  />
                </div>
                <div className="item">
                  <img src=" assets/images/resources/agrani bank.png " alt="" />
                </div>
                <div className="item">
                  <img src=" assets/images/resources/rupali bank.png " alt="" />
                </div>
                <div className="item">
                  <img src=" assets/images/resources/nrb-bank.png " alt="" />
                </div>
                <div className="item">
                  <img src=" assets/images/resources/IFIC-Logo.png " alt="" />
                </div>
                <div className="item">
                  <img src=" assets/images/resources/SMBL-Logo.png " alt="" />
                </div>
                <div className="item">
                  <img src=" assets/images/resources/IFC-Logo.svg " alt="" />
                </div>
                <div className="item">
                  <img
                    src=" assets/images/resources/Transparency International Bangladesh.png "
                    alt=""
                  />
                </div>
                <div className="item">
                  <img src=" assets/images/resources/paywell.png " alt="" />
                </div>
                <div className="item">
                  <img
                    src=" assets/images/resources/Shahajalal Islami Bank_Logo.png "
                    alt=""
                  />
                </div>
                <div className="item">
                  <img
                    src=" assets/images/resources/mutual-trust.png "
                    alt=""
                  />
                </div>
                <div className="item">
                  <img
                    src=" assets/images/resources/meghnagbanklogo.png "
                    alt=""
                  />
                </div>
                <div className="item">
                  <img src=" assets/images/resources/walletmix.png " alt="" />
                </div>
                <div className="item">
                  <img
                    src=" assets/images/resources/circle-fintech.png "
                    alt=""
                  />
                </div>
                <div className="item">
                  <img
                    src=" assets/images/resources/addiesoftlogo.svg "
                    alt=""
                  />
                </div>
                <div className="item">
                  <img src=" assets/images/resources/cca.jpg " alt="" />
                </div>
                <div className="item">
                  <img src=" assets/images/resources/genweb2.webp " alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />

      <section className="black-bg section-padding-lg--top section-padding-lg--bottom cta-two">
        <div
          className="cta-two__bg jarallax"
          data-jarallax
          data-speed="0.2"
          // data-imgPosition="50% 0%"
          style={{ backgroundImage: `url('assets/images/background/s4.jpeg')` }}
        ></div>
        <div className="container">
          <div className="cta-two__inner">
            <h3 className="cta-two__title">
              Better Information Security Services And Solutions At Your{" "}
              <span>Fingertips</span>
            </h3>
            <a href="/contact-us" className="thm-btn cta-two__btn">
              <span>LEarn More</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Information;
