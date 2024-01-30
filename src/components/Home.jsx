import React from "react";
import Slider from "react-slick";
function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <div className="page-headser">
        <div
          className="page-hfeader__bg"
        ></div>

        <Slider {...settings}>
          <img src="/assets/images/home/is.png" alt=""
            style={{ height: "400px", width: "100%" }}
           />
           <img src="/assets/images/home/realhack.png" alt=""
            style={{ height: "400px", width: "100%" }}
           />
           <img src="/assets/images/home/qsa.png" alt=""
            style={{ height: "400px", width: "100%" }}
           />

          {/* <div
            style={{
              paddingLeft: "15%",
              backgroundImage: "url(/assets/images/home/is.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "400px",
              width: "100%",

            }}
          >
            <ul
              className="thm-breadcrumb list-unstyled ">
              <li className="pt-5 mt-5">
                <a style={{ color: "white", fontWeight: "bold" }} href="/">Welcome to Right Time Limited</a>
              </li>
            </ul>
            <h5 className="page-header__title">
              Information Security Services and Solutions
            </h5>{" "}
          </div>


          <div style={{
            paddingLeft: "15%",
            backgroundImage: "url(/assets/images/home/realhack.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "400px",
            width: "100%",

          }}>
            <ul className="thm-breadcrumb list-unstyled ">
              <li className="pt-5 mt-5">
                <a style={{ color: "white", fontWeight: "bold" }} href="/">We, Right Time Limited</a>
              </li>
            </ul>
            <h5 className="page-header__title">Real Hackers !!!</h5>{" "}
          </div>

          <div style={{

            backgroundImage: "url(/assets/images/home/qsa.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "400px",
            width: "100%",
          }} >
            <ul className="thm-breadcrumb list-unstyled ">
              <li className="pt-5 mt-5">
                <a style={{ color: "white", fontWeight: "bold" }} href="/">Technology</a>
              </li>
            </ul>
            <h5 className="page-header__title">
              First Ever QSA Firm in Bangladesh
            </h5>{" "}
          </div>
 */}

        </Slider>



      </div>
    </div>
  );
}

export default Home;
