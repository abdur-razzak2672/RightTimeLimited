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
                            <a className="m-3" href="tel:+18187790442"> +1510 298 6114</a>
                          </li>
                        
                          <li>
                            <i className="fa fa-envelope"></i>
                            <a className="m-3" href="mailto:coo.usa@righttime.biz">  coo.usa@righttime.biz</a>
                          </li>
                          <li>
                            <i className="fa fa-map-marker-alt"></i>
                            <p className="m-3"> 5669 N Fresno St, Apt 232
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

                  <li className="mt-2">
                  <a style={{backgroundColor:"#9c2ede",fontSize:"15px"}} href="/contact-us" className="mt-3 p-2  rounded-5">
                    <span className="text-light">Subscrib Now<i className="mx-3 fas fa-arrow-right"></i></span> 
                  </a>
                  </li>
                 

                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget footer-widget--newsletter">
                <h3 className="footer-widget__title">Offering</h3>

                <ul className="footer-widget__contact">
                  <li>

                    <a href="/services">Services</a>
                  </li>
                  <li>

                    <a href="/solution">Solution</a>
                  </li>
                  <li>

                    <a href="/training">Training</a>
                  </li>
                  
                  
                  <li>
                    <a href="/incident">Incident</a>
                  </li>
                 

                  <li className="mt-5">
                  <a style={{backgroundColor:"#9c2ede",fontSize:"15px"}} href="/all-job" className="mt-3 p-2  rounded-5">
                    <span className="text-light text-center">Job Alert !<i className="mx-3 fas fa-arrow-right"></i></span> 
                  </a>
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
                    <a onClick={() => setShow("1")} href="javascript:void(0)"><img style={{ border: "1px solid gray" }}   width="47%" src="assets/images/flag/bd.png" alt="" /></a>
                    <a onClick={() => setShow("4")} href="javascript:void(0)"><img style={{ border: "1px solid gray",marginLeft:"15px" }} width="47%" src="assets/images/flag/de.png" alt="" /></a>

                  </li>

                  <li className="mt-2">
                    <a onClick={() => setShow("2")} href="javascript:void(0)"><img style={{ border: "1px solid gray" }}  width="47%" src="assets/images/flag/usa.png" alt="" /></a>
                    <a onClick={() => setShow("3")} href="javascript:void(0)"><img style={{ border: "1px solid gray" ,marginLeft:"15px"}}  width="47%" src="assets/images/flag/aus.png" alt="" /></a>

                  </li>

                  <li className="mt-2">
                  <img src="assets/images/footer/iso.png" width="100%" alt="" />
                  <h6 style={{fontSize:"10.7px",width:"100%"}}  className="mt-2 text-light">WE ARE ISO 27001 , ISO 14001 & ISO 9001 CERTIFIED COMPANY</h6>


                  </li>
                </ul>
           
               </div>
            </div>


          </div>

          <br />
           

        </div>

        <div>
        <ul class="footer-widget__social">
              <li><a style={{backgroundColor:"#2ea9f3"}} href="/"><i class="fab fa-twitter"></i></a></li>
              <li><a style={{backgroundColor:"#008def"}} href="/"><i class="fab fa-facebook-f"></i></a></li>
              <li><a style={{backgroundColor:"#d9387a"}} href="/"><i class="fab fa-pinterest-p"></i></a></li>
              <li><a style={{backgroundColor:"#eb733b"}} href="/"><i class="fab fa-instagram"></i></a></li>
            </ul>

        </div>


      </div>
      <div className="footer-bottom row">
        <div className="col-md-4 p-4 px-5 mx-5">
          <img width="120px" src="assets/images/footer/ssl.png" alt=""/>
          </div>
          <div className ="col-lg-7 mt-4 ">
          <p className="mx-5">
            &copy; All Copyright <span className="dynamic-year"></span> by Right
            Time Limited
          </p>
          </div>
          
        
      </div>
    </div>
  );
}

export default Footer;
