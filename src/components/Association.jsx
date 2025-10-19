import React from "react";
import Slider from "react-slick";
function Association() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,

    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 817,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <section className=" mt-5 mx-5">
        <div className="section-title text-center">
          <h2 className="header">OUR ASSOCIATIONS</h2>
        </div>

        <Slider {...settings}>
          <div>
            <div className="item">
              <img src="assets/images/association/pci.jpg" alt="" />
            </div>
          </div>
          <div>
            <div className="item">
              <img src="assets/images/association/basis.jpg" alt="" />
            </div>
          </div>
          <div>
            <div className="item">
              <img src="assets/images/association/ecab.jpg" alt="" />
            </div>{" "}
          </div>
          <div>
            <div className="item">
              <img src="assets/images/association/bcs.jpg" alt="" />
            </div>
          </div>
          <div>
            <div className="item">
              <img src="assets/images/association/bf.jpg" alt="" />
            </div>
          </div>
          <div>
            <div className="item">
              <img src="assets/images/association/wbg.jpg" alt="" />
            </div>
          </div>
          <div>
            <div className="item">
              <img src="assets/images/association/cca.jpg" alt="" />
            </div>
          </div>
        </Slider>
      </section>
    </div>
  );
}

export default Association;
