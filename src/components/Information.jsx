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
          <div style={{paddingBottom:" 100px"}} className="mx-5 ">
            <div className="section-title text-center">
              <h2 className="header">
                Some of our valued customers
              </h2>
            </div>


            <Slider {...settings}>
              <div className="item">
                <img src=" assets/images/clients/1.jpg " alt="" />
              </div>
              <div className="item">
                <img src=" assets/images/clients/2.jpg " alt="" />
              </div>
              <div className="item">
                <img
                  src=" assets/images/clients/3.jpg "
                  alt=""
                />
              </div>
              <div className="item">
                <img src=" assets/images/clients/4.jpg " alt="" />
              </div>
              <div className="item">
                <img src=" assets/images/clients/5.jpg " alt="" />
              </div>
              <div className="item">
                <img src=" assets/images/clients/6.jpg " alt="" />
              </div>
              <div className="item">
                <img src=" assets/images/clients/7.jpg " alt="" />
              </div>
              <div className="item">
                <img src=" assets/images/clients/8.jpg " alt="" />
              </div>
              <div className="item">
                <img src=" assets/images/clients/9.jpg " alt="" />
              </div>
              <div className="item">
                <img src=" assets/images/clients/10.jpg " alt="" />
              </div>

              <div className="item">
                <img src=" assets/images/clients/11.jpg " alt="" />
              </div>
              <div className="item">
                <img src=" assets/images/clients/12.jpg " alt="" />
              </div>
              <div className="item">
                <img src=" assets/images/clients/13.jpg " alt="" />
              </div>
              <div className="item">
                <img src=" assets/images/clients/14.jpg " alt="" />
              </div>
              <div className="item">
                <img
                  src=" assets/images/clients/15.jpg "
                  alt=""
                />              </div>
              <div className="item">
                <img src=" assets/images/clients/16.jpg " alt="" />
              </div>
              <div className="item">
                <img
                  src=" assets/images/clients/17.jpg "
                  alt=""
                />              </div>
              <div className="item">
                <img
                  src=" assets/images/clients/18.jpg "
                  alt=""
                />              </div>
              <div className="item">
                <img
                  src=" assets/images/clients/19.jpg "
                  alt=""
                />              </div>

              <div className="item">
                <img src=" assets/images/clients/20.jpg " alt="" />
              </div>
              <div className="item">
                <img
                  src=" assets/images/clients/21.jpg "
                  alt=""
                />              </div>
              

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