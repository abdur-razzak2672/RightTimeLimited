import React from "react";
import Slider from "react-slick";

function SwiftInformation() {
  const clients = [
    {
      id: 1,
      name: "Sonali Bank Limited",
      image: "/assets/images/services/SwiftCyber/sonali.png",
    },
    {
      id: 2,
      name: "Social Islami Bank Limited",
      image: "/assets/images/services/SwiftCyber/sibl.png",
    },
    {
      id: 3,
      name: "Shimanto Bank Limited",
      image: "/assets/images/services/SwiftCyber/shimanto.png",
    },
    {
      id: 4,
      name: "Padma Bank Limited",
      image: "/assets/images/services/SwiftCyber/padma.png",
    },
    {
      id: 5,
      name: "South Bangla Agriculture Bank Limited",
      image: "/assets/images/services/SwiftCyber/sbac.png",
    },
    {
      id: 6,
      name: "Meghna Bank Limited",
      image: "/assets/images/services/SwiftCyber/meghna.png",
    },
    {
      id: 7,
      name: "NRB Bank Limited",
      image: "/assets/images/services/SwiftCyber/nrb.png",
    },
    {
      id: 8,
      name: "IFIC Bank Limited",
      image: "/assets/images/services/SwiftCyber/ific.png",
    },
  ];

  const settings = {
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
      <section
        className="section-padding mt-5 service-four gray-bg section-padding-l--bottom h-25 section-has-bottom-margin background-repeat-no background-position-top-right"
        style={{
          backgroundImage: `url("assets/images/shapes/service-four-bg-1-1.png")`,
        }}
      >
        <br />
        <div className="mx-5">
          <div className="section-title text-center">
            <h2 className="header">
              Some of our valued Customers: SWIFT CSP Audit , Cybersecurity
              Services (specially SWIFT)
            </h2>
          </div>

          <Slider {...settings}>
            {clients.map((client) => (
              <div key={client.id} className="item border-5">
                <img loading="lazy" decoding="async"
                  src={client.image}
                  alt={client.name || "Client logo"}
                  title={client.name}
                />
              </div>
            ))}
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

export default SwiftInformation;
