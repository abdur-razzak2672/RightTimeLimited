import React from "react";
import Card from 'react-bootstrap/Card';

function Footer({  show }) {
 
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
            show === '1' ?(
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
                      Dhaka,Bangladesh</p>
                    </li>
                  </ul>
            </>
               
            )
          
            :show==='2'?
            <>
               <h3 className="footer-widget__title"> USA</h3>

               <ul class="footer-widget__contact">
                        <li>
                            <i class="fa fa-phone"></i>
                            <a className="m-3" href="tel:+18187790442"> (+1) 818 779 0442,</a>
                        </li>
                        <li>
                            <i class="fa fa-phone"></i>
                            <a className="m-3" href="tel:+18188625708"> (+1) 818 862 5708,</a>
                        </li>
                        <li>
                            <i class="fa fa-envelope"></i>
                            <a className="m-3" href="mailto:coo.usa@righttime.biz">coo.usa@righttime.biz</a>
                        </li>
                        <li>
                            <i class="fa fa-map-marker-alt"></i>
                            <p className="m-3">14108 Hamlin Street, Unit # 7, Van Nuys, CA-91401</p>
                        </li>
                    </ul>
            </>
            :show==='3'?
              <>
                 <h3 className="footer-widget__title">Australia</h3>

                 <ul class="footer-widget__contact">
                        <li>
                            <i class="fa fa-phone"></i>
                            <a className="m-3" href="tel:+61490517545"> (+61) 490517545,</a>
                        </li>
                         <li> 
                           <i class="fa-solid fa-fax"></i> 
                             <a className="m-3" href="tel:+61490517545"> (+61) 490517545,</a> 
                         </li> 
                        <li>
                            <i class="fa fa-envelope"></i>
                            <a className="m-3" href="mailto:coo.au@righttime.biz">coo.au@righttime.biz</a>
                        </li>
                        <li>
                            <i class="fa fa-map-marker-alt"></i>
                           <p className="m-3">11 Dahlia St. Quakers Hill,NSW 2763<br/>
                            Sydney,Australia.</p> 
                        </li>
                    </ul>
              </>
            :
            <>
               <h3 className="footer-widget__title">Germany</h3>

               <ul class="footer-widget__contact">
                        <li>
                            <i class="fa fa-phone"></i>
                            <a className="m-3" href="tel:+492311377672"> (+49) 2311377672,</a>
                        </li>
                        <li>
                            <i class="fa-solid fa-fax"></i>
                           <a className="m-3" href="">(+49) 01624069887</a> 
                        </li>
                        <li>
                            <i class="fa fa-envelope"></i>
                            <a className="m-3" href="mailto:coo.de@righttime.biz">coo.de@righttime.biz</a>
                        </li>
                        <li>
                            <i class="fa fa-map-marker-alt"></i>
                           <p> Hausmann str-1.44139, <br/>Dortmund. Germany</p>
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
                  
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="footer-widget footer-widget--newsletter">
                <h3 className="footer-widget__title  ">Services</h3>

                <ul className="footer-widget__contact">
                  <li>
                    
                    <a href="/">Project management</a>
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
                </ul>
                <div className="mc-form__response"></div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="footer-widget footer-widget--contact">
                <h3 className="footer-widget__title">People Presence</h3>
                <ul className="footer-widget__contact">
                  <li>
                     <img className="m-2" width = "40%" src = "assets/images/flag/bd.png" alt=""/>
                     <img className="m-2" width = "40%" src = "assets/images/flag/de.png" alt=""/>

                  </li>

                  <li>
                     <img className="m-2" width = "40%" src = "assets/images/flag/usa.png" alt=""/>
                     <img className="m-2" width = "40%" src = "assets/images/flag/aus.png" alt=""/>

                  </li>
                </ul>
              </div>
              </div>

              <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="footer-widget footer-widget--contact">
                <h3 className="footer-widget__title">News Letter</h3>
                <ul className="footer-widget__contact">
                <Card  bg="dark" className="rounded" style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Subscribe newsletter to receive latest news/updated from RTL</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text className="d-flex">
                     <input className="rounded" border="none" type="email" placeholder="Email Address" bg="dark" /><button className="btn btn-dark"> <i className="fab fa-twitter"></i>
</button>
                    </Card.Text>
      
                  </Card.Body>
                </Card>
                </ul>
                <div
            className="container mt-4"
            style={{ paddingLeft: "25px", marginBottom: "-60px" }}
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
            {/* <div className="col-lg-3 col-md-6 col-sm-12">
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
              </div> */}
            {/* </div> */}
          </div>
          <br />
         
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
