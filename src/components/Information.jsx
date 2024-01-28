import React from "react";
import Slider from "react-slick";
  function Information() {

    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,

      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 817,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <section
          className="section-padding mt-5 service-four gray-bg section-padding-l--bottom h-25 section-has-bottom-margin background-repeat-no background-position-top-right"
          style={{
            backgroundImage: `url("assets/images/shapes/service-four-bg-1-1.png")`,
          }}
        >
          <br />
          <div className="container">
            <div className="section-title text-center">
              <h2 className="header">
                Some of our valued customers
              </h2>
            </div>


            <Slider {...settings}>
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
                <img src=" assets/images/clients/bb1.jpg " alt="" />
              </div>

              <div className="item">
                <img src=" assets/images/clients/nrbc logo.png " alt="" />
              </div>
              <div className="item">
                <img src=" assets/images/resources/genweb2.webp " alt="" />
              </div>
              <div className="item">
                <img src=" assets/images/resources/cca.jpg " alt="" />
              </div>
              <div className="item">
                <img src=" assets/images/resources/addiesoftlogo.svg " alt="" />
              </div>
              <div className="item">
                <img
                  src=" assets/images/resources/circle-fintech.png "
                  alt=""
                />              </div>
              <div className="item">
                <img src=" assets/images/resources/walletmix.png " alt="" />
              </div>
              <div className="item">
                <img
                  src=" assets/images/resources/meghnagbanklogo.png "
                  alt=""
                />              </div>
              <div className="item">
                <img
                  src=" assets/images/resources/mutual-trust.png "
                  alt=""
                />              </div>
              <div className="item">
                <img
                  src=" assets/images/resources/Shahajalal Islami Bank_Logo.png "
                  alt=""
                />              </div>

              <div className="item">
                <img src=" assets/images/resources/paywell.png " alt="" />
              </div>
              <div className="item">
                <img
                  src=" assets/images/resources/Transparency International Bangladesh.png "
                  alt=""
                />              </div>
              <div className="item">
                <img src=" assets/images/resources/IFC-Logo.svg " alt="" />
              </div>
              

            </Slider>
          </div>
        </section>
        <br />
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
