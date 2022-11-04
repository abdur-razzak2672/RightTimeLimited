import React from "react";
import Card from 'react-bootstrap/Card';

function Footer({ setShow, show }) {

  console.log("Footer", show);



  return (
    <div>
      <div className="footer-main section-padding--bottom footer-main--top-padding section-padding--top">
        <div className="mx-5 px-5"  >
          <div className="row gutter-y-30">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget footer-widget--about">
                {/* <a href="/" className="footer-widget__logo">
                  <img
                    src="/assets/images/images-removebg-preview.png"
                    width="50"
                    height="50"
                    alt="Cretech"
                  />
                </a> */}

                {
                  show === '1' ? (
                    <>
                      <h3 className="footer-widget__title"> Bangladesh</h3>

                      <ul className="footer-widget__contact">
                        <li>
                          <i className="fa fa-phone"></i>
                          <a className="m-3" href="/"> +88 02550 12235,</a>
                        </li>
                        <li>
                          <i className="fa fa-phone"></i>
                          <a className="m-3" href="/"> +88 01318 013300,</a>
                        </li>
                        <li>
                          <i className="fa fa-envelope"></i>
                          <a className="m-3" href="/">info@righttime.biz</a>
                        </li>
                        <li>
                          <i className="fa fa-map-marker-alt"></i>
                          <p className="m-3"> Level: 06 & 14 (west), BDBL Bhaban, 12, Karwan Bazar,
                            Tejgaon Post Code: 1215 <br />
                            Dhaka, Bangladesh</p>
                        </li>
                      </ul>
                    </>

                  )

                    : show === '2' ?
                      <>
                        <h3 className="footer-widget__title"> USA</h3>

                        <ul className="footer-widget__contact">
                          <li>
                            <i className="fa fa-phone"></i>
                            <a className="m-3" href="tel:+18187790442"> (+1) 818 779 0442,</a>
                          </li>
                          <li>
                            <i className="fa fa-phone"></i>
                            <a className="m-3" href="tel:+18188625708"> (+1) 818 862 5708,</a>
                          </li>
                          <li>
                            <i className="fa fa-envelope"></i>
                            <a className="m-3" href="mailto:coo.usa@righttime.biz">coo.usa@righttime.biz</a>
                          </li>
                          <li>
                            <i className="fa fa-map-marker-alt"></i>
                            <p className="m-3">14108 Hamlin Street, Unit # 7, Van Nuys, CA-91401</p>
                          </li>
                        </ul>
                      </>
                      : show === '3' ?
                        <>
                          <h3 className="footer-widget__title">Australia</h3>

                          <ul className="footer-widget__contact">
                            <li>
                              <i className="fa fa-phone"></i>
                              <a className="m-3" href="tel:+61490517545"> (+61) 490517545,</a>
                            </li>
                            <li>
                              <i className="fa-solid fa-fax"></i>
                              <a className="m-3" href="tel:+61490517545"> (+61) 490517545,</a>
                            </li>
                            <li>
                              <i className="fa fa-envelope"></i>
                              <a className="m-3" href="mailto:coo.au@righttime.biz">coo.au@righttime.biz</a>
                            </li>
                            <li>
                              <i className="fa fa-map-marker-alt"></i>
                              <p className="m-3">11 Dahlia St. Quakers Hill,NSW 2763<br />
                                Sydney,Australia.</p>
                            </li>
                          </ul>
                        </>
                        :
                        <>
                          <h3 className="footer-widget__title">Germany</h3>

                          <ul className="footer-widget__contact">
                            <li>
                              <i className="fa fa-phone"></i>
                              <a className="m-3" href="tel:+492311377672"> (+49) 2311377672,</a>
                            </li>
                            <li>
                              <i className="fa-solid fa-fax"></i>
                              <a className="m-3" href="">(+49) 01624069887</a>
                            </li>
                            <li>
                              <i className="fa fa-envelope"></i>
                              <a className="m-3" href="mailto:coo.de@righttime.biz">coo.de@righttime.biz</a>
                            </li>
                            <li>
                              <i className="fa fa-map-marker-alt"></i>
                              <p> Hausmann str-1.44139, <br />Dortmund. Germany</p>
                            </li>
                          </ul>
                        </>


                }

                <br />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget footer-widget--links">
                <h3 className="footer-widget__title">Quick Links</h3>
                <ul className="footer-widget__contact">
                  <li>
                    <a href="/">Providing Security</a>
                  </li>
                  <li>
                    <a href="/">Telecomunications</a>
                  </li>
                  <li>
                    <a href="/">Solution Pertners</a>
                  </li>
                  <li>
                    <a href="/">Smart Conntact</a>
                  </li>
                  <li>
                    <a href="/">One To One Training</a>
                  </li>
                  <li>
                    <a href="/">Web Application</a>
                  </li>
                  <li>
                    <a href="/">One To One Training</a>
                  </li>
                  <li>
                    <a href="/">Web Application</a>
                  </li>

                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget footer-widget--newsletter">
                <h3 className="footer-widget__title">Services</h3>

                <ul className="footer-widget__contact">
                  <li>

                    <a href="/blogs">Show Our All Blogs</a>
                  </li>
                  <li>

                    <a href="/blog-details">Show Blog Details</a>
                  </li>
                  <li>

                    <a href="/">Information System Audit</a>
                  </li>
                  <li>

                    <a href="/">Swift Cyber Security</a>
                  </li>
                  <li>

                    <a href="/">Security Testing</a>
                  </li>
                  <li>

                    <a href="/">Information System Audit</a>
                  </li>
                  <li>

                    <a href="/">Swift Cyber Security</a>
                  </li>
                  <li className="mt-3">

                    <a className="text-bold text-light footer-widget__title" href="/blogs">Blogs</a>
                  </li>

                </ul>
                <div className="mc-form__response"></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget footer-widget--contact text-center">
                <h3 className="footer-widget__title">People Presence</h3>
                <ul className="footer-widget__contact">
                  <li>
                    <a onClick={() => setShow("1")} href="javascript:void(0)"><img style={{ border: "1px solid gray" }} className="m-2  " width="40%" src="assets/images/flag/bd.png" alt="" /></a>
                    <a onClick={() => setShow("4")} href="javascript:void(0)"><img style={{ border: "1px solid gray" }} className="m-2  " width="40%" src="assets/images/flag/de.png" alt="" /></a>

                  </li>

                  <li>
                    <a onClick={() => setShow("2")} href="javascript:void(0)"><img style={{ border: "1px solid gray" }} className="m-2  " width="40%" src="assets/images/flag/usa.png" alt="" /></a>
                    <a onClick={() => setShow("3")} href="javascript:void(0)"><img style={{ border: "1px solid gray" }} className="m-2  " width="40%" src="assets/images/flag/aus.png" alt="" /></a>

                  </li>
                </ul>
                <ul className="footer-widget__social mx-3 mt-3 ">
                  <li className="mx-4"><a href="/">< img src="assets/images/footer/9001.png" width="130%" alt="" /></a></li>
                  <li className="mx-4"><a href="/">< img src="assets/images/footer/14001.png" width="130%" alt="" /></a></li>

                  <li className="mx-4"><a href="/">< img src="assets/images/footer/27001.png" width="130%" alt="" /></a></li>


                </ul>
                <h6 className="mt-4 text-center">An ISO Certified Company</h6>
              </div>
            </div>


          </div>

          <br />
          <div class="container" style={{ paddingLeft: "40%", marginBottom: "-60px" }}>
            <ul class="footer-widget__social">
              <li><a href="/"><i class="fab fa-twitter"></i></a></li>
              <li><a href="/"><i class="fab fa-facebook-f"></i></a></li>
              <li><a href="/"><i class="fab fa-pinterest-p"></i></a></li>
              <li><a href="/"><i class="fab fa-instagram"></i></a></li>
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
