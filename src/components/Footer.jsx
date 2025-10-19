import React from "react";
import Card from 'react-bootstrap/Card';

function Footer({ show }) {

  const handleLocationbd = () => {
    localStorage.setItem("location", "1")
    window.location.reload();
  }
  const handleLocationusa = () => {
    localStorage.setItem("location", "2")
    window.location.reload();
  }
  const handleLocationaus = () => {
    localStorage.setItem("location", "3")
    window.location.reload();
  }
  const handleLocationgar = () => {
    localStorage.setItem("location", "4")
    window.location.reload();
  }

  const countryList = [
    {
      id: "1",
      flag: "assets/images/flag/bd.png",
      onClick: handleLocationbd,
    },
    {
      id: "2",
      flag: "assets/images/flag/usa.png",
      onClick: handleLocationusa,
    },
    {
      id: "3",
      flag: "assets/images/flag/aus.png",
      onClick: handleLocationaus,
    },
    {
      id: "4",
      flag: "assets/images/flag/de.png",
      onClick: handleLocationgar,
    },
  ];

  const sortedFlags = [
    ...countryList.filter((c) => c.id === show),
    ...countryList.filter((c) => c.id !== show),
  ];
  const currentYear = new Date().getFullYear();


  return (
    <div  >
      <div className="footer-main section-padding--bottom footer-main--top-padding ">
        <div className=" px-5"  >
          <div className="row footitem gutter-y-30">
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
                          <i className="fa fa-phone  "></i>
                          <a className="mx-4" href="/"> +88 02550 12235,</a>
                        </li>
                        <li>
                          <i className="fa fa-phone"></i>
                          <a className="mx-4" href="/"> +88 01318 013300,</a>
                        </li>
                        <li>
                          <i className="fa fa-envelope"></i>
                          <a className="mx-4" href="/">info@righttime.biz</a>
                        </li>
                        <li>
                          <i className="fa fa-map-marker-alt"></i>
                          <p className="mx-4"> Level: 06 & 14 (west), BDBL Bhaban, 12, Karwan Bazar,
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
                            <a className="mx-4" href="tel:+18187790442"> +1510 298 6114</a>
                          </li>

                          <li>
                            <i className="fa fa-envelope"></i>
                            <a className="mx-4" href="mailto:coo.usa@righttime.biz">  coo.usa@righttime.biz</a>
                          </li>
                          <li>
                            <i className="fa fa-map-marker-alt"></i>
                            <p className="mx-4"> 5669 N Fresno St, Apt 232
                              Fresno, CA 93710</p>
                          </li>
                        </ul>
                      </>
                      : show === '3' ?
                        <>
                          <h3 className="footer-widget__title">Australia</h3>

                          <ul className="footer-widget__contact">
                            <li>
                              <i className="fa fa-phone"></i>
                              <a className="mx-4" href="tel:+61490517545"> (+61) 490517545,</a>
                            </li>
                            <li>
                              <i className="fa-solid fa-fax"></i>
                              <a className="mx-4" href="tel:+61490517545"> (+61) 490517545,</a>
                            </li>
                            <li>
                              <i className="fa fa-envelope"></i>
                              <a className="mx-4" href="mailto:coo.au@righttime.biz">coo.au@righttime.biz</a>
                            </li>
                            <li>
                              <i className="fa fa-map-marker-alt"></i>
                              <p className="mx-4">11 Dahlia St. Quakers Hill,NSW 2763
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
                              <a className="mx-4" href="tel:+492311377672"> (+49) 2311377672,</a>
                            </li>
                            <li>
                              <i className="fa-solid fa-fax"></i>
                              <a className="mx-4" href="">(+49) 01624069887</a>
                            </li>
                            <li>
                              <i className="fa fa-envelope"></i>
                              <a className="mx-4" href="mailto:coo.de@righttime.biz">coo.de@righttime.biz</a>
                            </li>
                            <li>
                              <i className="fa fa-map-marker-alt"></i>
                              <p className="mx-4"> Hausmann str-1.44139, <br />Dortmund. Germany</p>
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
                    <a href="/pci-dss-payment">PCI DSS Certification</a>
                  </li>
                  <li>
                    <a href="/iso-international">ISO Certification</a>
                  </li>
                  <li>
                    <a href="/swift-csp">SWIFT CSP Assesment</a>
                  </li>
                  <li>
                    <a href="/vulnerability-assessment">VAPT Services</a>
                  </li>
                  <li>
                    <a href="/digital-forensics">Digital Forensics</a>
                  </li>
                  <li>
                    <a href="/contact-us" className="mt-3 rounded-5">
                      <span className="text-light">Subscrib Now<i className="mx-3 fas fa-arrow-right"></i></span>
                    </a>                  </li>
                  <li> <a href="/all-job" className="mt-3 rounded-5">
                    <span className="text-light text-center">Job Alert !<i className="mx-3 fas fa-arrow-right"></i></span>
                  </a>                  </li>




                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget footer-widget--newsletter">
                <h3 className="footer-widget__title">Certification</h3>

                <ul className="footer-widget__contact">
                 

                  <li className="mt-2 mx-1">
                    <img className="rounded" src="/assets/images/footer/iso-1.png" width="100%" alt="" />
                  </li>


                  <li className="mt-2 mb-5 mx-1">
                    <img className="rounded" src="/assets/images/footer/pcaa.png" width="100%" alt="" />
                  </li>

                </ul>
                <div className="mc-form__response"></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget footer-widget--contact ">
                <h3 className="footer-widget__title">Our Presence</h3>
                <ul className="footer-widget__contact">
                  <li>
                    {sortedFlags.slice(0, 2).map((country, index) => (
                      <a
                        key={index}
                        className="mx-1"
                        onClick={country.onClick}
                        href="javascript:void(0)"
                      >
                        <img
                          className="mt-2"
                          style={{ border: "1px solid gray", width: '47%', height: '100px' }}
                          src={country.flag}
                          alt=""
                        />
                      </a>
                    ))}
                  </li>
                  <li>
                    {sortedFlags.slice(2, 4).map((country, index) => (
                      <a
                        key={index}
                        className="mx-1"
                        onClick={country.onClick}
                        href="javascript:void(0)"
                      >
                        <img
                          className="mt-2"
                          style={{ border: "1px solid gray", width: '47%',height:'100px'  }}
                          src={country.flag}
                          alt=""
                        />
                      </a>
                    ))}
                  </li>

                  <li className="mx-1 mt-2">
                    <img src="assets/images/footer/qr.png" width="98%" alt="" />
                    
                  </li>
                </ul>

              </div>
            </div>


          </div>

          <br />

        </div>

        <div className="social mt-0">
          <ul class="footer-widget__social">
            <li><a style={{ backgroundColor: "#d9387a" }} target="_blank" href="https://www.linkedin.com/company/right-time-limited/?viewAsMember=true"><i class="fab fa-linkedin"></i></a></li>
            <li><a style={{ backgroundColor: "#2ea9f3" }} target="_blank" href="/"><i class="fab fa-twitter"></i></a></li>
            <li><a style={{ backgroundColor: "#008def" }} target="_blank" href="https://www.facebook.com/RightTimeLimited"><i class="fab fa-facebook-f"></i></a></li>
            <li><a style={{ backgroundColor: "#eb733b" }} target="_blank" href="https://www.instagram.com/righttimelimited/"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">


        <div className=" container p-3">
          <div >
            <p className="text-center mt-2 ">
              <img className="mx-2" width="80px" src="assets/images/footer/sectigo.png" alt="" />
              Copyright © 2009 –  {currentYear} Right Time Limited (Private Limited Company) All rights reserved. Terms and Conditions.


            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
