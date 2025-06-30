import React from "react";
import Slider from "react-slick";

function SwiftInformation() {
 const clients = [
  {
    id: 1,
    name: "Sonali Bank Limited",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiomu7JOf1qAxqkCkAPlVGyqHZT71i0fekJg&s",
  },
  {
    id: 2,
    name: "Social Islami Bank Limited",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Logo_of_Social_Islami_Bank.svg/1200px-Logo_of_Social_Islami_Bank.svg.png",
  },
  {
    id: 3,
    name: "Shimanto Bank Limited",
    image: "https://www.shimantobank.com/wp-content/uploads/2023/12/Shimanto-Bank-Logo-PLC-01_150.png",
  },
  {
    id: 4,
    name: "Padma Bank Limited",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-_5x8f8C2_vZ3TgfiwYMztq7GInEWCWMITQ&s",
  },
  {
    id: 5,
    name: "South Bangla Agriculture Bank Limited",
    image: "https://www.sbacbank.com/images/logos/logo-full.png",
  },
  {
    id: 6,
    name: "Meghna Bank Limited",
    image: "https://www.zooinfotech.com/wp-content/uploads/2018/02/Meghna-bank_Ltd.jpg",
  },
  {
    id: 7,
    name: "NRB Bank Limited",
    image: "https://www.tbsnews.net/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/images/2021/09/14/4730-1445252557-n-1581437865052.jpg",
  },
  {
    id: 8,
    name: "IFIC Bank Limited",
    image: "https://tds-images.thedailystar.net/sites/default/files/styles/very_big_201/public/images/2022/01/03/ific-bank.jpg",
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
        <div className="mx-5">
          <div className="section-title text-center">
            <h2 className="header">
              Some of our valued customers swift : CSP Audit , Cybersecurity  Service
            </h2>
          </div>

          <Slider {...settings}>
  {clients.map((client) => (
    <div key={client.id} className="slider-card">
      <div className="slider-card-inner">
        <img
          src={client.image}
          alt={client.name || "Client logo"}
          title={client.name}
          className="slider-image"
        />
      </div>
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