import React from "react";
import Slider from "react-slick";
function Partner() {
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
          <h2 className="header">OUR PARTNER</h2>
        </div>

        <Slider {...settings}>
          <div>
            <div className="item">
              <img loading="lazy" decoding="async"
                style={{
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: "6px",
                }}
                src="/assets/images/partners/1.jpg"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="item">
              <img loading="lazy" decoding="async"
                style={{
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: "6px",
                }}
                src="/assets/images/partners/2.jpg"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="item">
              <img loading="lazy" decoding="async"
                style={{
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: "6px",
                }}
                src="/assets/images/partners/3.jpg"
                alt=""
              />
            </div>{" "}
          </div>
          <div>
            <div className="item">
              <img loading="lazy" decoding="async"
                style={{
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: "6px",
                }}
                src="/assets/images/partners/4.jpg"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="item">
              <img loading="lazy" decoding="async"
                style={{
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: "6px",
                }}
                src="/assets/images/partners/5.jpg"
                alt=""
              />
            </div>
          </div>
        </Slider>
      </section>
    </div>
  );
}

export default Partner;
