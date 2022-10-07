import React from "react";

function Footer() {
  return (
    <div>
      <div className="footer-main section-padding--bottom footer-main--top-padding section-padding--top">
        <div className="container " style={{ paddingTop: "150px" }}>
          <div className="row gutter-y-30">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget footer-widget--about">
                <a href="/" className="footer-widget__logo">
                  <img
                    src="/assets/images/images-removebg-preview.png"
                    width="50"
                    height="50"
                    alt="Cretech"
                  />
                </a>
                <br />
                <br />
                <h3 className="footer-widget__title"> Bangladesh</h3>

                <ul className="footer-widget__contact">
                  <li>
                    <i className="fa fa-phone"></i>
                    <a href="/"> +88 02550 12235,</a>
                  </li>
                  <li>
                    <i className="fa fa-phone"></i>
                    <a href="/"> +88 01318 013300,</a>
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>
                    <a href="/">info@righttime.biz</a>
                  </li>
                  <li>
                    <i className="fa fa-map-marker-alt"></i>
                    Level: 06 & 14 (west), BDBL Bhaban, 12, Karwan Bazar,
                    Tejgaon Post Code: 1215 <br />
                    Dhaka, Bangladesh
                  </li>
                </ul>
                <br />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget footer-widget--links">
                <h3 className="footer-widget__title">Germany</h3>
                <ul className="footer-widget__contact">
                  <li>
                    <i className="fa fa-phone"></i>
                    <a href="/"> (+49) 2311377672,</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-fax"></i>
                    (+49) 01624069887
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>
                    <a href="/">
                      coo.de@righttime.biz
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-map-marker-alt"></i>
                    Hausmann str-1.44139, <br />
                    Dortmund. Germany
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget footer-widget--newsletter">
                <h3 className="footer-widget__title">USA</h3>

                <ul className="footer-widget__contact">
                  <li>
                    <i className="fa fa-phone"></i>
                    <a href="/"> (+1) 818 779 0442,</a>
                  </li>
                  <li>
                    <i className="fa fa-phone"></i>
                    <a href="/"> (+1) 818 862 5708,</a>
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>
                    <a href="mailto:coo.usa@righttime.biz">
                      coo.usa@righttime.biz
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-map-marker-alt"></i>
                    14108 Hamlin Street, Unit # 7, Van Nuys, CA-91401
                  </li>
                </ul>
                <div className="mc-form__response"></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget footer-widget--contact">
                <h3 className="footer-widget__title">Australia</h3>
                <ul className="footer-widget__contact">
                  <li>
                    <i className="fa fa-phone"></i>
                    <a href="/"> (+61) 490517545,</a>
                  </li>

                  <li>
                    <i className="fa fa-envelope"></i>
                    <a href="/">
                      coo.au@righttime.biz
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-map-marker-alt"></i>
                    11 Dahlia St. Quakers Hill,NSW 2763
                    <br />
                    Sydney,Australia.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <br />
          <div
            className="container"
            style={{ paddingLeft: "40%", marginBottom: "-60px" }}
          >
            <ul className="footer-widget__social">
              <li>
                <a href="/">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-pinterest-p"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; All Copyright <span className="dynamic-year"></span> by Right
            Time Limited
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
