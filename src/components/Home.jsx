import React from "react";
function Home() {
  return (
    <div>
      <div className="page-headser">
        <div
          className="page-hfeader__bg"
        ></div>
        <div className=" ">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div
                style={{ paddingLeft: "15%",
                backgroundImage: "url(/assets/images/home/is.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "400px",
                 width: "100%",

               }}
                className="carousel-item active"
              >
                <ul
                 className="thm-breadcrumb list-unstyled ">
                  <li className="pt-5 mt-5">
                    <a style={{color:"white",fontWeight:"bold"}} href="/">Welcome to Right Time Limited</a>
                  </li>
                </ul>
                <h5 className="page-header__title">
                  Information Security Services and Solutions
                </h5>{" "}
              </div>
              <div style={{ paddingLeft: "15%",
              backgroundImage: "url(/assets/images/home/realhack.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "400px",
               width: "100%", 
            
            }} className="carousel-item">
                <ul className="thm-breadcrumb list-unstyled ">
                <li className="pt-5 mt-5">
                    <a style={{color:"white",fontWeight:"bold"}} href="/">We, Right Time Limited</a>
                  </li>
                </ul>
                <h5 className="page-header__title">Real Hackers !!!</h5>{" "}
              </div>
              <div style={{ paddingLeft: "15%" 
            ,
            backgroundImage: "url(/assets/images/home/qsa.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "400px",
             width: "100%", }} className="carousel-item">
                <ul className="thm-breadcrumb list-unstyled ">
                  <li  className="pt-5 mt-5">
                    <a style={{color:"white",fontWeight:"bold"}}href="/">Technology</a>
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
