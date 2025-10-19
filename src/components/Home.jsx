import React from "react";
import Slider from "react-slick";
function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: "ondemand",
  };
  return (
    <div>
      <div className="page-headser">
        <div className="page-hfeader__bg"></div>

        <Slider {...settings}>
          <img
            src="/assets/images/home/is.webp"
            loading="lazy"
            alt=""
            style={{ height: "400px", width: "100%" }}
          />
          <img
            src="/assets/images/home/realhack.webp"
            loading="lazy"
            alt=""
            style={{ height: "400px", width: "100%" }}
          />
          <img
            src="/assets/images/home/qsa.webp"
            loading="lazy"
            alt=""
            style={{ height: "400px", width: "100%" }}
          />
          <img
            src="/assets/images/home/Associations.webp"
            loading="lazy"
            alt=""
            style={{ height: "400px", width: "100%" }}
          />{" "}
          <img
            src="/assets/images/home/Auditing.webp"
            loading="lazy"
            alt=""
            style={{ height: "400px", width: "100%" }}
          />{" "}
          <img
            src="/assets/images/home/Consultation.webp"
            loading="lazy"
            alt=""
            style={{ height: "400px", width: "100%" }}
          />{" "}
          <img
            src="/assets/images/home/Managed Services (ITES, Specially Cyber Security).webp"
            loading="lazy"
            alt=""
            style={{ height: "400px", width: "100%" }}
          />{" "}
          <img
            src="/assets/images/home/Partners.webp"
            loading="lazy"
            alt=""
            style={{ height: "400px", width: "100%" }}
          />{" "}
          <img
            src="/assets/images/home/Security Assessment & Testing.webp"
            loading="lazy"
            alt=""
            style={{ height: "400px", width: "100%" }}
          />{" "}
          <img
            src="/assets/images/home/Solutions (Specially Cyber Security).webp"
            loading="lazy"
            alt=""
            style={{ height: "400px", width: "100%" }}
          />{" "}
          <img
            src="/assets/images/home/Standard Implementation & Certification.webp"
            loading="lazy"
            alt=""
            style={{ height: "400px", width: "100%" }}
          />{" "}
          <img
            src="/assets/images/home/Training (Custom Skill Development).webp"
            loading="lazy"
            alt=""
            style={{ height: "400px", width: "100%" }}
          />
        </Slider>
      </div>
    </div>
  );
}

export default Home;
