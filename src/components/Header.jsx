 import React,{ useState } from "react";
function Header({ show,setShow }) {
 
  console.log("fdgf",show)
  return (
    <div>
      <nav className="main-menu sticky-header">
        <div className="container-fluid">
          <div className="main-menu__logo">
            <a href="/">
              <img
                src="/assets/images/images-removebg-preview.png"
                width="88"
                height="75"
                alt="Cretech"
              />
            </a>
          </div>

          <ul className="main-menu__list">
            <li className="menu-item-has-children">
              <a href="/">Home</a>
              {/* <ul>
							<li><a href="index.html">Home One</a></li>
							<li><a href="index-2.html">Home Two</a></li>
							<li><a href="index-3.html">Home Three</a></li>
							<li className="menu-item-has-children"><a href="index.html">Header Styles</a>
								<ul>
									<li><a href="index.html">Header One</a></li>
									<li><a href="index-2.html">Header Two</a></li>
									<li><a href="index-3.html">Header Three</a></li>
								</ul>
							</li>
						</ul> */}
            </li>
            <li className="menu-item-has-children">
              <a href="/about-us">About US</a>
              {/* <ul>
							<li><a href="about.html">About Us</a></li>
							<li><a href="team.html">Our Team</a></li>
						</ul> */}
            </li>
            <li className="menu-item-has-children">
              <a href="/industries">Industries</a>
              <ul>
                <li>
                  <a href="/bank-nbfi">Bank & NBFI</a>
                </li>
                <li>
                  <a href="/telecomunication">
                    Telecommunications
                  </a>
                </li>
                <li>
                  <a href="payment-card">
                    Payment Card Industry
                  </a>
                </li>
                <li>
                  <a href="/educational-institutions">
                    Educational Institutions
                  </a>
                </li>
                <li>
                  <a href="/ecommerce-retail">
                    eCommerce & Retail Merchants
                  </a>
                </li>
                <li>
                  <a href="/health-care">Health Care</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/partners">Partners</a>
              <ul>
                <li>
                  <a href="/service-partners">Service Partner</a>
                  <ul>
                    <li>
                      <a href="https://www.eccouncil.org/">EC Council</a>
                    </li>
                    <li>
                      <a href="https://home.pearsonvue.com/">Pearson Vue</a>
                    </li>
                    <li>
                      <a href="https://pecb.com/en">PECB ISO Certification</a>
                    </li>
                    <li>
                      <a href="https://arscert.com/certification/">ARS</a>
                    </li>
                    <li>
                      <a href="https://sckcerts.com/">SCK</a>
                    </li>
                    <li>
                      <a href="https://www.acnabin.com/">ACNABIN</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="/solution-partners">Solution Partner</a>
                  <ul>
                    <li>
                      <a href="https://www.invicti.com/">INVICTI</a>
                    </li>
                    <li>
                      <a href="https://www.coresecurity.com/products/core-impact">
                        Core Impact
                      </a>
                    </li>
                    <li>
                      <a href="https://portswigger.net/burp">Burp Suite</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/association-partners">Association</a>
                  <ul>
                    <li>
                      <a href="http://cca.gov.bd/site/office_head/5891f732-8e0f-40b0-9f85-1cb867657bfd/%E0%A6%AC%E0%A6%BF%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%A4">
                        CCA,Ministry of ICT
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pcisecuritystandards.org/">
                        PCI SSC, USA
                      </a>
                    </li>
                    <li>
                      <a href="https://www.worldbank.org/en/home">
                        WBGs (World Bank Group)
                      </a>
                    </li>
                    <li>
                      <a href="https://www.swift.com/">SWIFT</a>
                    </li>
                    <li>
                      <a href="https://basis.org.bd/">BASIS</a>
                    </li>
                    <li>
                      <a href="https://e-cab.net/">E-CAB</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <a href="/services">Services</a>
              <ul>
                <li className="menu-item-has-children">
                  <a href="/consultation">Consultation</a>

                  <ul>
                    <li>
                      <a href="/information-security-Special">
                        Information Security-Specially Cyber Security Consulting
                      </a>
                    </li>
                    <li>
                      <a href="/project-management">
                        Project Management
                      </a>
                    </li>
                    <li>
                      <a href="/providing-security">
                        Providing Security
                      </a>
                    </li>
                    <li>
                      <a href="/consultation-on-shaping">
                        Consultation on Shaping the DC & DRS
                      </a>
                    </li>
                    <li>
                      <a href="/swift-cyber-security">
                        Swift Cyber Security Consulting
                      </a>
                    </li>
                    <li>
                      <a href="/technical-documentation ">
                        Technical Documentation on ICT
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="menu-item-has-children">
                  <a href="Auditing">Auditing</a>
                  <ul>
                    <li>
                      <a href="/information-system">
                        Information System Audit
                      </a>
                    </li>
                    <li>
                      <a href="/information-technology">
                        Information Technology Audit
                      </a>
                    </li>
                    <li>
                      <a href="/information-security-graded">
                        Information Security Graded Audit
                      </a>
                    </li>
                    <li>
                      <a href="/swift-csp">
                        Swift Csp Indpended Assessment
                      </a>
                    </li>
                    <li>
                      <a href="/dc-drs-auditing">
                        DC & DRS Auditing
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="/security-testing">
                    Security Testing
                  </a>
                  <ul>
                    <li>
                      <a href="/vulnerability-assessment">
                        Vulnerability Assessment & Presentation Testing Services
                      </a>
                    </li>
                    <li>
                      <a href="/digital-forensics">
                        Digital Forensics
                      </a>
                    </li>
                    <li>
                      <a href="/code-review">
                        Code Review
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="/certification">
                    Certification
                  </a>
                  <ul>
                    <li>
                    
                      <a href="/pci-dss-payment">
                        Payment Card Industry Data Security Standards
                      </a>
                    </li>
                    <li>
                      <a href="/iso-international">
                        International Organization for Standardization-ISO
                      </a>
                    </li>
                    <li>
                      <a href="/cmmi">
                        CMMI
                      </a>
                    </li>
                   
                    <li>
                      <a href="/tia-for-data-center">
                        TIA 942 for Data Center
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <a href="/solutions">Solutions</a>
              <ul>
                <li>
                  <a href="/burp-suite">
                    BURP Suite
                  </a>
                </li>
                <li>
                  <a href="/acunetix">
                    Acunetix
                  </a>
                </li>
                <li>
                  <a href="/netsparker">
                    Net Sparker
                  </a>
                </li>
                <li>
                  <a href="/core-impact">
                    Core Impact
                  </a>
                </li>
                <li>
                  <a href="/siem">
                    SIEM
                  </a>
                </li>
                <li>
                  <a href="/firewall">
                    Firewall
                  </a>
                </li>
                <li>
                  <a href="/bulk-sms">
                    Bulk SMS
                  </a>
                </li>
                <li>
                  <a href="/smart-contact">
                    Smart Contract
                  </a>
                </li>
              </ul>
            </li>

            <li className="menu-item-has-children">
              <a href="/training">Training</a>
              <ul>
                <li className="menu-item-has-children">
                  <a href="/assessment">
                    Assessment
                  </a>
                  <ul>
                    <li>
                      <a href="/certified-ethical-hacker">
                        Certified Ethical Hacker (CEH)
                      </a>
                    </li>
                    <li>
                      <a href="/certified-penetration">
                        Certified Penetration Testing Professional(CPENT)
                      </a>
                    </li>
                    <li>
                      <a href="/computer-hacking">
                        Computer Hacking Forensic Investigator(CHFI)
                      </a>
                    </li>
                    <li>
                      <a href="/open-source">
                        Open Source Intelligence(OSINT)
                      </a>
                    </li>
                    <li>
                      <a href="/giac-penetration">
                        GIAC Penetration Tester(GPEN)
                      </a>
                    </li>
                    <li>
                      <a href="/giac-web-application">
                        GIAC Web Application Penetration Tester(GWAPT)
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="menu-item-has-children">
                  <a href="/management">
                    Management
                  </a>
                  <ul>
                    <li>
                      <a href="/certified-disaster">
                        Certified Disaster Recovery Professional
                      </a>
                    </li>
                    <li>
                      <a href="/certified-incident-handler">
                        Certified Incident Handler
                      </a>
                    </li>
                    <li>
                      <a href="/certified-soc-analyst">
                        Certified SOC Analyst(CSA)
                      </a>
                    </li>
                    <li>
                      <a href="/certified-threat">
                        Certified Threat Intelligence Analyst(CTIA)
                      </a>
                    </li>
                    <li>
                      <a href="/certified-information-system">
                        Certified Information Systems Auditor(CISA)
                      </a>
                    </li>
                    <li>
                      <a href="/certified-information-security">
                        Certified Information Security Manager(CISM)
                      </a>
                    </li>
                    <li>
                      <a href="/certified-information-system-security">
                        Certified Information Systems Security
                        Professional(CISSP)
                      </a>
                    </li>
                    <li>
                      <a href="/giac-certified-project">
                        GIAC Certified Project Manager (GCPM)
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="menu-item-has-children">
                  <a href="customized">
                    Customized
                  </a>
                  <ul>
                    <li>
                      <a href="/basic-corporate">
                        Basic (Corporate)
                      </a>
                    </li>
                    <li>
                      <a href="/advance-corporate">
                        Advance (Corporate)
                      </a>
                    </li>
                    <li>
                      <a href="/intermidiate-corporate">
                        Intermediate (Corporate)
                      </a>
                    </li>
                    <li>
                      <a href="/one-to-one-training">
                        One to One Training
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>

            <li>
              <a href="/contact-us">Contact Us</a>
            </li>
          </ul>

          <div className="main-menu__right">
            <a href="/" className="mobile-nav__toggler">
              <span></span>
              <span></span>
              <span></span>
            </a>

            {/* <!-- /.search-toggler --> */}
            <a href="/#" className="main-menu__cta  ">
              <i className="fa fa-phone-alt"></i>
              {
            show === '1' ?(
            <>
                <span className="main-menu__cta__text">
                <b>(+88)-02-55012235</b>
                <b>(+88)-01318-013300</b>
                Call Anytime
              </span>
            </>
               
            )
          
            :show==='2'?
            <>
              <span className="main-menu__cta__text">
							<b>(+18)-779-0442</b>
							Call Anytime
						</span>
            </>
            :show==='3'?
              <>
            <span className="main-menu__cta__text">
							<b>(+61) 490517545</b>
							Call Anytime
						</span>
              </>
            :
            <>
               <span className="main-menu__cta__text">
							<b>(+49)-01624069887</b>
							Call Anytime
						</span>
            </>
            
           
          }
              
              {/* <!-- /.main-menu__cta__text --> */}
            </a>
            {/* <!-- /.main-menu__cta --> */}
          </div>
          {/* <!-- /.main-menu__right --> */}
        </div>
        {/* <!-- /.container-fluid --> */}
      </nav>
      {/* <!-- /.main-menu --> */}

      <div className="mobile-nav__wrapper">
      <div className="mobile-nav__overlay mobile-nav__toggler"></div>
      <div className="mobile-nav__content">
        <a href="/" className="mobile-nav__close mobile-nav__toggler">
          <span></span>
          <span></span>
        </a>

        <div className="logo-box">
          <a href="/" aria-label="logo image"><img src="assets/images/images-removebg-preview.png" width="78"
              height="53" alt="Cretech"/></a>
        </div>

        <div className="mobile-nav__container"></div>


        <ul className="mobile-mobile-nav__country">
          <h5>Select Country</h5>
          {/* <li><a href="/"><img src="/assets/images/flag/usa.png" width="40px"/></a></li>
          <li><a href="/"><img src="/assets/images/flag/aus.png" width="40px"/></a></li>
          <li><a href="/"><img src="/assets/images/flag/de.png" width="40px"/></a></li>  */}
          <select className="mobileTopbar text-light"
                onChange={(event) => {
                  setShow(event.target.value);
                }}
                >
                <option value="1"><a href="/">BD</a></option>
                <option value="2"><a href="/">USA</a></option>
                <option value="3"><a href="/">Australia</a></option>
                <option value="4"><a href="/">Germany</a></option>
               </select>             
              
        </ul>

        <ul className="mobile-nav__contact list-unstyled">
        {
            show === '1' ?(
            <>
               <li>
            <i className="/"></i>
            <a href="/">+88 02550 12235,</a>
          </li>
          <li>
            <i className="/"></i>
            <a href="/">+88 01318 013300</a>
          </li>
          <li>
            <i className="fa fa-envelope"></i>
            <a href="/">info@righttime.biz</a>
          </li>
          <li>
            <i className="fa fa-map-marker-alt"></i>
            Level: 06 & 14 (west), BDBL Bhaban,
            12, Karwan Bazar, Tejgaon
            Post Code: 1215 <br/>Dhaka, Bangladesh
          </li>
            </>
               
            )
          
            :show==='2'?
            <>
                <li>
                <i className="fa fa-envelope"></i>
                <a href="mailto:info@righttime.biz">coo.usa@righttime.biz</a>
            </li>
            <li>
                <i className="fa fa-map-marker"></i>
                14108 Hamlin Street, Unit # 7, Van Nuys, CA-91401
            </li>
            </>
            :show==='3'?
              <>
                  <li>
                    <i className="fa fa-envelope"></i>
                    <a href="mailto:info@righttime.biz">coo.au@righttime.biz</a>
                </li>
                <li>
                    <i className="fa fa-map-marker"></i>
                    11 Dahlia St. Quakers Hill,NSW 2763,Sydney,Australia.
                </li>
              </>
            :
            <>
                <li>
                    <i className="fa fa-envelope"></i>
                    <a href="mailto:info@righttime.biz">coo.de@righttime.biz</a>
                </li>
                <li>
                    <i className="fa fa-map-marker"></i>
                    Hausmann str-1.44139,Dortmund. Germany
                </li>
            </>
            
           
          }
          
        </ul>
        <ul className="mobile-nav__social">
          <li><a href="/"><i className="fab fa-twitter"></i></a></li>
          <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="/"><i className="fab fa-pinterest-p"></i></a></li>
          <li><a href="/"><i className="fab fa-instagram"></i></a></li>
        </ul>



      </div>

    </div>



    </div> 
  );
}

export default Header;

