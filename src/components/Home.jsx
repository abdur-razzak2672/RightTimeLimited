import React from "react";
function Home() {
  return (
    <div>
      <div className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: `url('/assets/images/resources/contact.png')`,
          }}
        ></div>
        <div className=" ">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div
                style={{ paddingLeft: "15%" }}
                className="carousel-item active"
              >
                <ul className="thm-breadcrumb list-unstyled ">
                  <li>
                    <a href="/">Welcome to Right Time Limited</a>
                  </li>
                </ul>
                <h5 className="page-header__title">
                  Information Security Services and Solutions
                </h5>{" "}
              </div>
              <div style={{ paddingLeft: "15%" }} className="carousel-item">
                <ul className="thm-breadcrumb list-unstyled ">
                  <li>
                    <a href="/">We, Right Time Limited</a>
                  </li>
                </ul>
                <h5 className="page-header__title">Real Hackers !!!</h5>{" "}
              </div>
              <div style={{ paddingLeft: "15%" }} className="carousel-item">
                <ul className="thm-breadcrumb list-unstyled ">
                  <li>
                    <a href="/">Technology</a>
                  </li>
                </ul>
                <h5 className="page-header__title">
                  First Ever QSA Firm in Bangladesh
                </h5>{" "}
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
      
        </div>
      </div>
    </div>
  );
}

export default Home;
