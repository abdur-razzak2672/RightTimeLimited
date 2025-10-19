import "./serviceStyle.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
function Header({ show }) {
  const handleLocationChange = (e) => {
    localStorage.setItem("location", e.target.value);
    window.location.reload();
  };

  return (
    <div>
      <nav className="main-menu sticky-header1">
        <div className="container-fluid  ">
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

          <ul className="main-menu__list steps-sampling text-light">
            <li className="menu-item-has-children">
              <a id="link1" href="/">
                Home
              </a>
            </li>

            <li className="menu-item-has-children servicNav steps-sampling">
              <Link to="/about-us" className="dropbtn1z">
                About Us
              </Link>
              <ul>
                <li className="menu-item-has-children">
                  <a href="/about-us">About Right Time</a>
                  <ul>
                    <li>
                      <a href="/mission-statement">Mission statement</a>
                    </li>
                    <li>
                      <a href="//advisory-board">Advisory Board</a>{" "}
                    </li>
                    <li>
                      <a href="/team">Team</a>{" "}
                    </li>
                    <li>
                      <a href="/careers">Careers</a>{" "}
                    </li>
                    <li>
                      <a href="/testmonial">Testimonials</a>
                    </li>

                    <li>
                      <a href="/contact-us">Contact (Get in Touch)</a>
                    </li>
                  </ul>
                </li>

                <li className="menu-item-has-children">
                  <a href="/events">News & Events</a>{" "}
                  <ul>
                    <li>
                      <a href="/press-release">Press Release </a>
                    </li>
                    <li>
                      <a href="/publication">Publications</a>
                    </li>
                    <li>
                      <a href="/events">Events</a>
                    </li>

                    <li>
                      <a href="/picture-gallery">Picture Galleries</a>
                    </li>
                  </ul>
                </li>

                <li className="menu-item-has-children servicNav steps-sampling">
                  <a href="/association-partners">Associations & Partners</a>
                  <ul>
                    <li className="menu-item-has-children">
                      <a className="" href="/association-body">
                        Association
                      </a>
                      <ul>
                        <li>
                          <a className="text-light" href="/Cca">
                            CCA, Ministry of ICT (First and 2022)
                          </a>
                        </li>
                        <li>
                          <Link className="text-light" to="/Pci">
                            PCI SSC, USA
                          </Link>{" "}
                        </li>
                        <li>
                          <Link className="text-light" to="/WorlBank">
                            World Bank Groups
                          </Link>{" "}
                        </li>
                        <li>
                          <Link className="text-light" to="/Swift">
                            SWIFT
                          </Link>
                        </li>

                        <li>
                          <Link className="text-light" to="/Basis">
                            BASIS
                          </Link>
                        </li>
                        <li>
                          <Link className="text-light" to="/Ecab">
                            E-Cab
                          </Link>
                        </li>
                        <li>
                          <Link className="text-light" to="/Bcs">
                            BCS
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <ul>
                    <li className="menu-item-has-children">
                      <a className="text-light" href="/partners">
                        Partner
                      </a>

                      <ul>
                        <li className="menu-item-has-children">
                          <a className="text-light" href="/service-partners">
                            Service Partner
                          </a>
                          <ul>
                            <li>
                              <a className="text-light" href="/EcCouncil">
                                EC-Council (Security Training Partner)
                              </a>
                            </li>
                            <li>
                              <a className="text-light" href="/PersonView">
                                Pearson Vue (Exam testing Center)
                              </a>
                            </li>
                            <li>
                              <a className="text-light" href="/Pecb">
                                PECB (ISO)
                              </a>
                            </li>
                            <li>
                              <a className="text-light" href="/Sck">
                                SCK & ARS (ISO)
                              </a>
                            </li>

                            <li>
                              <a className="text-light" href="/Acnabin">
                                ACNABIN (CA Firm for Financial Control)
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li className="menu-item-has-children">
                          <a className="text-light" href="/solution-partners">
                            Solution Partner
                          </a>

                          <ul>
                            <li>
                              <a className="text-light" href="/Invicti">
                                INVICTI
                              </a>
                            </li>
                            <li>
                              <a className="mx-3 text-light" href="/netsparker">
                                <i className="fas fa-caret-right "> </i> Net
                                Sparker
                              </a>{" "}
                            </li>
                            <li>
                              <a className="mx-3 text-light" href="/acunetix">
                                <i className="fas fa-caret-right "> </i>Acunetix
                                etc.
                              </a>{" "}
                            </li>
                            <li>
                              <a className="text-light" href="/PortSwigger">
                                {" "}
                                Port Swigger
                              </a>
                            </li>

                            <li>
                              <a className="mx-3 text-light" href="/BurpSuit">
                                <i className="fas fa-caret-right "> </i>- Burp
                                Suite
                              </a>
                            </li>
                            <li>
                              <a className="text-light" href="/Tenable">
                                Tenable (VA Management)”
                              </a>
                            </li>
                            <li>
                              <a className="mx-3 text-light" href="/Alltenable">
                                <i className="fas fa-caret-right "> </i>All
                                Tenable Products
                              </a>
                            </li>

                            <li>
                              <a className="text-light" href="/HelpSystem">
                                HelpSystems
                              </a>
                            </li>

                            <li>
                              <a
                                className="mx-3 text-light"
                                href="/core-impact"
                              >
                                <i className="fas fa-caret-right "> </i> Core
                                Impact
                              </a>
                            </li>

                            <li>
                              <a className="text-light" href="/SafeAen">
                                {" "}
                                Safe Aeon
                              </a>
                            </li>

                            <li>
                              <a
                                className="mx-3 text-light"
                                href="/ManageService"
                              >
                                <i className="fas fa-caret-right "> </i> Managed
                                service
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="dropdown serviceNav2 steps-sampling">
              <Link to="/about-us" className="dropbtn1z">
                About Us
              </Link>
              <div
                style={{ left: "-200px", minWidth: "700px", height: "330px" }}
                className=" dropdown-content"
              >
                <Container className="mt-4">
                  <Row>
                    <Col
                      className=""
                      style={{ borderRight: "1px solid #6f42c1" }}
                    >
                      <a
                        style={{ fontWeight: "bold", color: "orange" }}
                        href="/about-us"
                      >
                        About Right Time
                      </a>
                      <a className="mt-3" href="/mission-statement">
                        Mission statement
                      </a>
                      <a className="mt-3" href="/advisory-board">
                        Advisory Board
                      </a>
                      <a className="mt-3" href="/team">
                        Team
                      </a>
                      <a className="mt-3" href="/careers">
                        Careers
                      </a>

                      <a className="mt-3" href="/testmonial">
                        Testimonials
                      </a>
                      <a className="mt-3" href="/contact-us">
                        Contact (Get in Touch)
                      </a>
                    </Col>

                    <Col style={{ borderRight: "1px solid #6f42c1" }}>
                      <a
                        style={{ fontWeight: "bold", color: "orange" }}
                        href="/events"
                      >
                        News & Events
                      </a>
                      <a className="mt-3" href="/press-release">
                        Press Release{" "}
                      </a>

                      <a className="mt-2" href="/publication">
                        Publications
                      </a>

                      <a className="mt-2" href="/events">
                        Events
                      </a>

                      <a className="mt-2" href="/picture-gallery">
                        Picture Galleries
                      </a>
                    </Col>

                    <Col>
                      <a
                        style={{ fontWeight: "bold", color: "orange" }}
                        href="/association-partners"
                      >
                        Associations & Partners
                      </a>

                      <a className="mt-3  divClass" href="/association-body">
                        Association
                        <i className="fas fa-caret-right  mx-3"></i>
                        <span style={{ left: "200px" }} className="AnchorHide">
                          <a href="/Cca">
                            CCA, Ministry of ICT (First and 2022)
                          </a>

                          <Link to="/Pci">PCI SSC, USA</Link>

                          <Link to="/WorlBank">World Bank Groups</Link>

                          <Link to="/Swift">SWIFT</Link>

                          <Link to="/Basis">BASIS</Link>

                          <Link to="/Ecab">E-Cab</Link>

                          <Link to="/Bcs">BCS</Link>
                        </span>
                      </a>

                      <a className="mt-3  divClass" href="/partners">
                        Partner
                        <i className="fas fa-caret-right  mx-3"></i>
                        <span
                          style={{ left: "200px", width: "500px" }}
                          className="AnchorHide"
                        >
                          <Row>
                            <Col style={{ borderRight: "1px solid #6f42c1" }}>
                              <a
                                style={{ fontWeight: "bold", color: "orange" }}
                                href="/service-partners"
                              >
                                Service Partner
                              </a>

                              <a className="mt-3" href="/EcCouncil">
                                EC-Council (Security Training Partner)
                              </a>

                              <a className="mt-3" href="/PersonView">
                                Pearson Vue (Exam testing Center)
                              </a>

                              <a className="mt-3" href="/Pecb">
                                PECB (ISO)
                              </a>

                              <a className="mt-3" href="/Sck">
                                SCK & ARS (ISO)
                              </a>

                              <a className="mt-3" href="/Acnabin">
                                ACNABIN (CA Firm for Financial Control)
                              </a>
                            </Col>

                            <Col>
                              <a
                                style={{ fontWeight: "bold", color: "orange" }}
                                href="/solution-partners"
                              >
                                Solution Partner
                              </a>
                              <a className="mt-3" href="/Invicti">
                                INVICTI
                              </a>
                              <a className="mx-3" href="/netsparker">
                                <i className="fas fa-caret-right "> </i> Net
                                Sparker
                              </a>
                              <a className="mx-3" href="/acunetix">
                                <i className="fas fa-caret-right "> </i>Acunetix
                                etc.
                              </a>

                              <a className="mt-3" href="/PortSwigger">
                                {" "}
                                Port Swigger
                              </a>

                              <a className="mx-3" href="/BurpSuit">
                                <i className="fas fa-caret-right "> </i>- Burp
                                Suite
                              </a>

                              <a className="mt-3" href="/Tenable">
                                Tenable (VA Management)”
                              </a>
                              <a className="mx-3" href="/Nessus">
                                <i className="fas fa-caret-right "> </i> Nessus
                                Pro
                              </a>
                              <a className="mx-3" href="/Alltenable">
                                <i className="fas fa-caret-right "> </i>All
                                Tenable Products
                              </a>

                              <a className="mt-3" href="/HelpSystem">
                                HelpSystems
                              </a>

                              <a className="mx-3" href="/core-impact">
                                <i className="fas fa-caret-right "> </i> Core
                                Impact
                              </a>

                              <a className="mt-3" href="/SafeAen">
                                {" "}
                                Safe Aeon
                              </a>
                              <a className="mx-3" href="/ManageService">
                                <i className="fas fa-caret-right "> </i> Managed
                                service
                              </a>
                            </Col>
                          </Row>
                        </span>
                      </a>
                    </Col>
                  </Row>
                </Container>
              </div>
            </li>

            <li className="menu-item-has-children">
              <a href="/industries">Industry Coverage</a>
              <ul>
                <li>
                  <Link to="/bank-nbfi">FIs - Bank & NBFI</Link>
                </li>
                <li>
                  <Link className=" lineHght" to="/telecomunication">
                    Mobile & Telecommunications
                  </Link>
                </li>
                <li>
                  <Link className=" lineHght" to="payment-card">
                    Payment Gateways and Payment Processor
                  </Link>
                </li>
                <li>
                  <Link className=" lineHght" to="/educational-institutions">
                    Educational Institutions
                  </Link>
                </li>
                <li>
                  <Link className=" lineHght" to="/ecommerce-retail">
                    E-Commence & Retail Merchants
                  </Link>
                </li>
                <li>
                  <Link to="/insurance">Insurance</Link>
                </li>
                <li>
                  <Link to="/bpo-service">IT and BPO Services</Link>
                </li>
                <li>
                  <Link to="/health-care">Health Care</Link>
                </li>
                <li>
                  <Link to="/power-sector"> Power Sector</Link>
                </li>
              </ul>
            </li>

            <li className="dropdown serviceNav2 steps-sampling">
              <Link to="/services" className="dropbtn1">
                {" "}
                Services
              </Link>
              <div style={{ height: "650px" }} className="dropdown-content">
                <Container className="mt-4">
                  <Row>
                    <Col
                      md={3}
                      className="consultation"
                      style={{ borderRight: "1px solid #6f42c1" }}
                    >
                      <a
                        style={{ fontWeight: "bold", color: "orange" }}
                        href="/consultation"
                      >
                        Consultation
                      </a>

                      <a
                        className=" lineHght   mt-3 "
                        href="/information-security-Special"
                      >
                        <i className="fas fa-circle iconStyle "> </i>{" "}
                        Information Security & Cyber Security
                      </a>

                      <a
                        className=" lineHght   mt-3 "
                        href="/pci-dss-consultation"
                      >
                        <i className="fas fa-circle iconStyle "> </i> PCI DSS
                      </a>

                      <a
                        className=" lineHght   mt-3 "
                        href="/swift-cyber-security"
                      >
                        <i className="fas fa-circle iconStyle "> </i> Swift
                        Cyber Security Consulting
                      </a>

                      <a className=" lineHght  mt-3 " href="/iso-international">
                        <i className="fas fa-circle iconStyle "> </i> ISO
                        Consultation
                      </a>

                      <a className=" lineHght  mt-3 " href="/cmmi">
                        <i className="fas fa-circle iconStyle "> </i> CMMI
                        Consultation
                      </a>

                      <a
                        className=" lineHght  mt-3 "
                        href="/project-management"
                      >
                        <i className="fas fa-circle iconStyle "> </i> Project
                        Management
                      </a>
                      <a
                        className=" lineHght  mt-3 "
                        href="/consultation-on-shaping"
                      >
                        <i className="fas fa-circle iconStyle "> </i>{" "}
                        Consultation on Shaping up DC & DRS
                      </a>

                      <a
                        className=" lineHght  mt-3 "
                        href="/technical-documentation"
                      >
                        <i className="fas fa-circle iconStyle "> </i> Technical
                        Documentation On ITES
                      </a>

                      <a className=" lineHght  mt-3 " href="/zero-trust">
                        <i className="fas fa-circle iconStyle "> </i> Zero Trust
                        Architecture
                      </a>

                      <a className=" lineHght  mt-3 " href="/industry-4.0">
                        <i className="fas fa-circle iconStyle "> </i> Industry
                        4.0
                      </a>

                      <a className=" lineHght   mt-3 " href="/Six-sigma">
                        <i className="fas fa-circle iconStyle "> </i> Six Sigma
                        Consultation
                      </a>
                      <a className=" lineHght  mt-3 " href="/Lean-Consultation">
                        <i className="fas fa-circle iconStyle "> </i> Lean
                        Consultation
                      </a>
                      <a
                        className=" lineHght  mt-3 "
                        href="/tia-for-data-center"
                      >
                        <i className="fas fa-circle iconStyle "> </i> TIA 942
                        Preparatory Consultation for DC Certification
                      </a>
                    </Col>

                    <Col
                      md={2}
                      className="consultation"
                      style={{ borderRight: "1px solid #6f42c1" }}
                    >
                      <a
                        style={{ fontWeight: "bold", color: "orange" }}
                        href="/auditing"
                      >
                        {" "}
                        Auditing
                      </a>
                      <a
                        className=" lineHght  mt-3 "
                        href="/information-system"
                      >
                        <i className="fas fa-circle iconStyle "> </i>{" "}
                        Information System Audit
                      </a>
                      <a
                        className=" lineHght  mt-3 "
                        href="/information-technology"
                      >
                        <i className="fas fa-circle iconStyle "> </i>{" "}
                        Information Technology Audit
                      </a>
                      <a
                        className=" lineHght   mt-3 "
                        href="/information-security-graded"
                      >
                        <i className="fas fa-circle iconStyle "> </i>{" "}
                        Information Security Graded Audit
                      </a>
                      <a className=" lineHght  mt-3 " href="/dc-drs-auditing">
                        <i className="fas fa-circle iconStyle "> </i> DC & DRS
                        Auditing
                      </a>

                      <a className="mt-3" href="/soc-1">
                        <i className="fas fa-circle iconStyle "> </i> SOC1 Audit
                      </a>

                      <a className="mt-3" href="/soc-2">
                        <i className="fas fa-circle iconStyle "> </i> SOC2 Audit
                      </a>
                    </Col>

                    <Col
                      md={2}
                      className="consultation"
                      style={{ borderRight: "1px solid #6f42c1" }}
                    >
                      <a
                        style={{ fontWeight: "bold", color: "orange" }}
                        href="/security-testing"
                      >
                        Security Testing
                      </a>

                      <a
                        className=" lineHght  mt-3 "
                        href="/vulnerability-assessment"
                      >
                        <i className="fas fa-circle iconStyle "> </i>{" "}
                        Vulnerability Assessment & Penetration Testing Services
                      </a>

                      <a className=" lineHght  mt-3 " href="/swift-csp">
                        <i className="fas fa-circle iconStyle "> </i> Swift CSP
                        Independent Assessment
                      </a>

                      <a className=" lineHght   mt-3 " href="/software-quality">
                        <i className="fas fa-circle iconStyle "> </i> Software
                        Quality Assurance & Testing
                      </a>
                      <a className="mt-3" href="/code-review">
                        <i className="fas fa-circle iconStyle "> </i> Code
                        Review
                      </a>

                      <a className=" lineHght  mt-3 " href="/breach-attack">
                        <i className="fas fa-circle iconStyle "> </i> Breach
                        Attack Simulation
                      </a>
                      <a
                        className=" lineHght   mt-3 "
                        href="/poster-assessment"
                      >
                        <i className="fas fa-circle iconStyle "> </i> Cyber
                        Security Posture Assessment
                      </a>

                      <a className="mt-3" href="/digital-forensics">
                        <i className="fas fa-circle iconStyle "> </i> Digital
                        Forensics
                      </a>
                    </Col>

                    <Col
                      md={2}
                      className="consultation"
                      style={{ borderRight: "1px solid #6f42c1" }}
                    >
                      <a
                        style={{ fontWeight: "bold", color: "orange" }}
                        href="/certification"
                      >
                        Certification
                      </a>

                      <a className=" lineHght  mt-3 " href="/pci-dss-payment">
                        <i className="fas fa-circle iconStyle "> </i> PCI DSS
                        Certification
                      </a>

                      <a className=" lineHght  mt-3 " href="/iso-international">
                        <i className="fas fa-circle iconStyle "> </i> ISO
                        Certification
                      </a>

                      {/* <a
                         className=" lineHght" 
                        className="mt-3"
                        href="/iso-international"
                      >
                        <i className="fas fa-circle iconStyle "> </i> ISO 27001,
                        ISO 9001, ISO 20000-1, ISO 22301, ISO 13485, ISO 5001,
                        ISO 14001 etc.
                      </a> */}

                      <a className=" lineHght  mt-3 " href="/cmmi">
                        <i className="fas fa-circle iconStyle "> </i> CMMI
                        (Capability Maturity Model Integration)
                      </a>

                      <a
                        className=" lineHght  mt-3 "
                        href="/tia-for-data-center"
                      >
                        <i className="fas fa-circle iconStyle "> </i> TIA 942
                        For Data Center
                      </a>

                      <a className="mt-3" href="/gdpr-certification">
                        <i className="fas fa-circle iconStyle "> </i> GDPR
                        Certification
                      </a>
                      <a className="mt-3" href="/hippa-certification">
                        <i className="fas fa-circle iconStyle "> </i> HIPAA
                        Certification
                      </a>
                    </Col>

                    <Col md={3} className="consultation">
                      <a
                        style={{ fontWeight: "bold", color: "orange" }}
                        href="/managed-service"
                      >
                        Managed Services
                      </a>

                      <a className="mt-3" href="/soc-as-service">
                        <i className="fas fa-circle iconStyle "> </i> SOC as A
                        Service
                      </a>

                      <a className=" lineHght  mt-3 " href="/cloud-app">
                        <i className="fas fa-circle iconStyle "> </i> Cloud App
                        Monitoring as A Service
                      </a>

                      <a className=" lineHght  mt-3 " href="/mdr-as-service">
                        <i className="fas fa-circle iconStyle "> </i> MDR as A
                        Service (Managed End Point Detection and Response)
                      </a>

                      <a className=" lineHght  mt-3 " href="/managed-nextgen">
                        <i className="fas fa-circle iconStyle "> </i> Managed
                        Nextgen Firewall as A Service
                      </a>

                      <a className=" lineHght   mt-3 " href="/va-as-service">
                        <i className="fas fa-circle iconStyle "> </i>{" "}
                        Vulnerability Assessment (VA) As A Service{" "}
                      </a>

                      <a className=" lineHght  mt-3 " href="/pt-as-service">
                        <i className="fas fa-circle iconStyle "> </i>{" "}
                        Penetration Testing (PT) as a Service{" "}
                      </a>

                      <a className=" lineHght  mt-3 " href="/dam-as-service">
                        <i className="fas fa-circle iconStyle "> </i> DAM
                        (Database Auditing & Management) as a Service{" "}
                      </a>

                      <a className=" lineHght  mt-3 " href="/Attact-surface">
                        <i className="fas fa-circle iconStyle "> </i> Attack
                        Surface Management
                      </a>
                    </Col>
                  </Row>
                </Container>
              </div>
            </li>

            <li className="menu-item-has-children servicNav steps-sampling">
              <Link to="/services">Services</Link>
              <ul>
                <li className="menu-item-has-children">
                  <Link to="/consultation">Consultation</Link>

                  <ul>
                    <li>
                      <a
                        className=" lineHght   "
                        href="/information-security-Special"
                      >
                        Information Security & Cyber Security
                      </a>
                    </li>
                    <li>
                      <a className=" lineHght    " href="/pci-dss-consultation">
                        <i className="fas fa-circle iconStyle "> </i> PCI DSS
                      </a>{" "}
                    </li>
                    <li>
                      <a className=" lineHght " href="/swift-cyber-security">
                        <i className="fas fa-circle iconStyle "> </i> Swift
                        Cyber Security Consulting
                      </a>{" "}
                    </li>
                    <li>
                      <a className=" lineHght  " href="/iso-international">
                        <i className="fas fa-circle iconStyle "> </i> ISO
                        Consultation
                      </a>
                    </li>
                    <li>
                      <a className=" lineHght  " href="/cmmi">
                        <i className="fas fa-circle iconStyle "> </i> CMMI
                        Consultation
                      </a>
                    </li>
                    <li>
                      <a className=" lineHght   " href="/project-management">
                        <i className="fas fa-circle iconStyle "> </i> Project
                        Management
                      </a>
                    </li>
                    <li>
                      <a
                        className=" lineHght  "
                        href="/consultation-on-shaping"
                      >
                        <i className="fas fa-circle iconStyle "> </i>{" "}
                        Consultation on Shaping up DC & DRS
                      </a>
                    </li>

                    <li>
                      <a
                        className=" lineHght  "
                        href="/technical-documentation"
                      >
                        <i className="fas fa-circle iconStyle "> </i> Technical
                        Documentation On ITES
                      </a>
                    </li>

                    <li>
                      <a className=" lineHght   " href="/zero-trust">
                        <i className="fas fa-circle iconStyle "> </i> Zero Trust
                        Architecture
                      </a>
                    </li>

                    <li>
                      <a className=" lineHght  " href="/industry-4.0">
                        <i className="fas fa-circle iconStyle "> </i> Industry
                        4.0
                      </a>
                    </li>
                    <li>
                      <a className=" lineHght  " href="/Six-sigma">
                        <i className="fas fa-circle iconStyle "> </i> Six Sigma
                        Consultation
                      </a>
                    </li>
                    <li>
                      <a className=" lineHght  " href="/Lean-Consultation">
                        <i className="fas fa-circle iconStyle "> </i> Lean
                        Consultation
                      </a>
                    </li>

                    <li>
                      <a className=" lineHght  " href="/tia">
                        <i className="fas fa-circle iconStyle "> </i>TIA 942
                        Preparatory Consultation for DC Certification
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="menu-item-has-children">
                  <Link to="Auditing">Auditing</Link>
                  <ul>
                    <li>
                      <a className=" lineHght  " href="/information-system">
                        <i className="fas fa-circle iconStyle "> </i>{" "}
                        Information System Audit
                      </a>
                    </li>
                    <li>
                      <Link className=" lineHght" to="/information-technology">
                        Information Technology Audit
                      </Link>
                    </li>
                    <li>
                      <Link
                        className=" lineHght"
                        to="/information-security-graded"
                      >
                        Information Security Graded Audit
                      </Link>
                    </li>

                    <li>
                      <a href="/soc-1">
                        <i className="fas fa-circle iconStyle "> </i> SOC1 Audit
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="/soc-2">
                        <i className="fas fa-circle iconStyle "> </i> SOC2 Audit
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <Link to="/security-testing">Security Testing</Link>
                  <ul>
                    <li>
                      <Link
                        className=" lineHght"
                        to="/vulnerability-assessment"
                      >
                        Vulnerability Assessment & Penetration Testing Services
                      </Link>
                    </li>
                    <li>
                      <a className=" lineHght  " href="/swift-csp">
                        <i className="fas fa-circle iconStyle "> </i> Swift CSP
                        Independent Assessment
                      </a>{" "}
                    </li>
                    <li>
                      <a className=" lineHght" href="/software-quality">
                        Software Quality Assurance & Testing
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="/code-review">
                        <i className="fas fa-circle iconStyle "> </i> Code
                        Review
                      </a>
                    </li>
                    <li>
                      <a className=" lineHght  " href="/breach-attack">
                        <i className="fas fa-circle iconStyle "> </i> Breach
                        Attack Simulation
                      </a>
                    </li>

                    <li>
                      <a className=" lineHght  " href="/poster-assessment">
                        <i className="fas fa-circle iconStyle "> </i> Cyber
                        Security Posture Assessment
                      </a>
                    </li>

                    <li>
                      <a href="/digital-forensics">
                        <i className="fas fa-circle iconStyle "> </i> Digital
                        Forensics
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <Link to="/certification">Certification</Link>
                  <ul>
                    <li>
                      <a className=" lineHght   " href="/pci-dss-payment">
                        <i className="fas fa-circle iconStyle "> </i> PCI DSS
                        Certification
                      </a>
                    </li>
                    <li>
                      <a className=" lineHght " href="/iso-international">
                        <i className="fas fa-circle iconStyle "> </i> ISO
                        Certification
                      </a>
                    </li>
                    <li>
                      <a className=" lineHght  " href="/cmmi">
                        <i className="fas fa-circle iconStyle "> </i> CMMI
                        (Capability Maturity Model Integration)
                      </a>
                    </li>

                    <li>
                      <a className=" lineHght  " href="/tia-for-data-center">
                        <i className="fas fa-circle iconStyle "> </i> TIA 942
                        For Data Center
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="/gdpr-certification">
                        <i className="fas fa-circle iconStyle "> </i> GDPR
                        Certification
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="/hippa-certification">
                        <i className="fas fa-circle iconStyle "> </i> HIPAA
                        Certification
                      </a>{" "}
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="/managed-service">Managed Services</a>{" "}
                  <ul>
                    <li>
                      <a href="/soc-as-service">
                        <i className="fas fa-circle iconStyle "> </i> SOC as A
                        Service
                      </a>
                    </li>
                    <li>
                      <a className=" lineHght " href="/cloud-app">
                        <i className="fas fa-circle iconStyle "> </i> Cloud App
                        Monitoring as A Service
                      </a>
                    </li>
                    <li>
                      <a className=" lineHght  " href="/mdr-as-service">
                        <i className="fas fa-circle iconStyle "> </i> MDR as A
                        Service (Managed End Point Detection and Response)
                      </a>
                    </li>

                    <li>
                      <a className=" lineHgh  " href="/managed-nextgen">
                        <i className="fas fa-circle iconStyle "> </i> Managed
                        Nextgen Firewall as A Service
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className=" lineHght   " href="/va-as-service">
                        <i className="fas fa-circle iconStyle "> </i>{" "}
                        Vulnerability Assessment (VA) As A Service{" "}
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a className=" lineHght   " href="/pt-as-service">
                        <i className="fas fa-circle iconStyle "> </i>{" "}
                        Penetration Testing (PT) as a Service{" "}
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className=" lineHght " href="/dam-as-service">
                        <i className="fas fa-circle iconStyle "> </i> DAM
                        (Database Auditing & Management) as a Service{" "}
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className=" lineHght  mt-3 " href="/Attact-surface">
                        <i className="fas fa-circle iconStyle "> </i> Attack
                        Surface Management
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="dropdown serviceNav2 steps-sampling">
              <Link to="/solutions" className="dropbtn1">
                {" "}
                Solutions
              </Link>
              <div
                style={{ minWidth: "600px", left: "-280px", height: "400px" }}
                className="dropdown-content"
              >
                <Container className="mt-4">
                  <Row>
                    <Col style={{ borderRight: "1px solid #6f42c1" }}>
                      <a
                        style={{
                          fontWeight: "bold",
                          color: "orange",
                          lineHeight: "1.2",
                        }}
                        href="/secuirity-assessment"
                      >
                        Security assessment (VA & PT) Tools
                      </a>

                      <a className="mt-3" href="/burp-suite">
                        Burp Suite (web PT){" "}
                      </a>
                      <a className="mt-3" href="/netsparker">
                        Net Sparker (web assessment)
                      </a>

                      <a className=" lineHght  mt-3 " href="/tenable-sltn">
                        Tenable (Multiple Solutions)
                      </a>

                      <a className="mt-3" href="/acunetix">
                        Acunetix (web VA & PT)
                      </a>

                      <a className="mt-3" href="/core-impact">
                        Core Impact (PT)
                      </a>
                    </Col>

                    <Col>
                      <a
                        style={{
                          fontWeight: "bold",
                          color: "orange",
                          lineHeight: "1.2",
                        }}
                        href="/secuirity-management"
                      >
                        Cyber Security Management & Visibility solutions
                      </a>
                      <a className="mt-3" href="/digital-asset">
                        Digital Asset Protection
                      </a>
                      <a className="mt-3" href="/network-application">
                        Data, Network & Application Management
                      </a>

                      <a className="mt-3" href="/digital-transformation">
                        Digital Transformation Solutions
                      </a>
                      <a className=" lineHght  mt-3 " href="/work-from-home ">
                        Work From Home Solutions
                      </a>
                      <a className=" lineHght  mt-3 " href="/stack-for-alm">
                        Dx Stack for ALM & Infrastructure
                      </a>
                    </Col>
                  </Row>
                </Container>
              </div>
            </li>

            <li className="menu-item-has-children servicNav">
              <Link to="/solutions" className="dropbtn1">
                {" "}
                Solutions
              </Link>{" "}
              <ul>
                <li className="menu-item-has-children">
                  <a href="/secuirity-assessment">
                    Security assessment (VA & PT) Tools
                  </a>{" "}
                  <ul>
                    <li>
                      <a href="/burp-suite">Burp Suite (web PT) </a>
                    </li>
                    <li>
                      <a href="/netsparker">Net Sparker (web assessment)</a>
                    </li>
                    <li>
                      <a className=" lineHght " href="/tenable-sltn">
                        Tenable (Multiple Solutions)
                      </a>
                    </li>
                    <li>
                      <a href="/acunetix">Acunetix (web VA & PT)</a>
                    </li>
                    <li>
                      <a href="/core-impact">Core Impact (PT)</a>
                    </li>
                  </ul>
                </li>

                <li className="menu-item-has-children">
                  <a href="/secuirity-management">
                    Cyber Security Management & Visibility solutions
                  </a>{" "}
                  <ul>
                    <li>
                      <a href="/digital-asset">Digital Asset Protection</a>{" "}
                    </li>
                    <li>
                      <a href="/network-application">
                        Data, Network & Application Management
                      </a>
                    </li>
                    <li>
                      <a href="/digital-transformation">
                        Digital Transformation Solutions
                      </a>
                    </li>
                    <li>
                      <a className=" lineHght   " href="/work-from-home ">
                        Work From Home Solutions
                      </a>
                    </li>

                    <li>
                      <a className=" lineHght  " href="/stack-for-alm">
                        Dx Stack for ALM & Infrastructure
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="dropdown serviceNav2 steps-sampling">
              <a href="/training" className="dropbtn1z">
                Training
              </a>
              <div
                style={{ left: "-630px", minWidth: "1000px", height: "530px" }}
                className=" dropdown-content"
              >
                <Container className="mt-4">
                  <Row>
                    <Col style={{ borderRight: "1px solid #6f42c1" }}>
                      <a
                        style={{ fontWeight: "bold", color: "orange" }}
                        href="/assesment"
                      >
                        Assessment
                      </a>
                      <a className="mt-3" href="/penetration-testing">
                        Certified Penetration Testing Professional (CPENT)
                      </a>
                      <a className="mt-3" href="/Offensive">
                        Offensive Security Certified Professional (OSCP){" "}
                      </a>
                      <a className="mt-3" href="/certified-information">
                        Certified Information system Auditor (CISA)
                      </a>
                      <a className="mt-3" href="/computer-hacking">
                        Computer Hacking Forensic Investigation (Custom)
                      </a>
                      <a className="mt-2" href="/giac-penetration">
                        GIAC Penetration Testing (GPEN)
                      </a>
                      <a className="mt-2" href="/giac-web-application">
                        GIAC Web Application Penetration Testing (GWAPT){" "}
                      </a>
                    </Col>

                    <Col style={{ borderRight: "1px solid #6f42c1" }}>
                      <a
                        style={{ fontWeight: "bold", color: "orange" }}
                        href="/management"
                      >
                        Management
                      </a>
                      <a className="mt-3" href="/practical-hacker">
                        Certified Ethical Hacking (CEH)
                      </a>

                      <a className="mt-2" href="/certified-disaster">
                        Certified Disaster Recovery Professional (EDRP)
                      </a>

                      <a className="mt-2" href="/certified-incident-handler">
                        Certified Incident Handler (ECIH)
                      </a>

                      <a className="mt-2" href="/certified-soc-analyst">
                        Certified SOC Analyst (CSA)
                      </a>

                      <a className="mt-2" href="/certified-threat">
                        Certified Threat Intelligent Analyst (CTIA)
                      </a>

                      <a
                        className="mt-2"
                        href="/certified-information-security"
                      >
                        Certified Information security Manager (CISM)
                      </a>

                      <a
                        className="mt-2"
                        href="/certified-information-system-security"
                      >
                        Certified Information System Security Professional
                        (CISSP)
                      </a>
                      <a className="mt-2" href="/giac-certified-incident">
                        GIAC Certified Incident Handler (GCIH)
                      </a>
                      <a className="mt-2" href="/giac-certified-project">
                        GIAC Certified Project Manager (GCPM){" "}
                      </a>

                      <a className="mt-2" href="/open-source">
                        Open-Source Intelligence (OSINT){" "}
                      </a>
                    </Col>

                    <Col>
                      <a
                        style={{ fontWeight: "bold", color: "orange" }}
                        href="/Customized"
                      >
                        RightTime Customized
                      </a>

                      <a
                        className="mt-3 divClass"
                        href="/basic-corporate?title=foundation-track&id=1"
                      >
                        Foundation track - (Corporate){" "}
                        <i className="fas fa-caret-right "></i>
                        <span className="AnchorHide">
                          <a href="/basic-corporate?title=basic&id=1">Basic</a>
                          <a
                            href="/basic-corporate?title=certified-secure&id=1"
                            className="mx-3"
                          >
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Certified Secure Computer User (CSCU-112-12)
                          </a>

                          <a href="/basic-corporate?title=inermediate&id=1">
                            Intermediate
                          </a>
                          <a
                            href="/basic-corporate?title=network-security&id=1"
                            className="mx-3"
                          >
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Network Security Fundamentals (FNS)
                          </a>
                          <a
                            href="/basic-corporate?title=information-track&id=1"
                            className="mx-3"
                          >
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Information Security Fundamentals (FIS)
                          </a>

                          <a href="/basic-corporate?title=advance&id=1">
                            {" "}
                            Advance
                          </a>
                          <a
                            href="/basic-corporate?title=computer-forensic&id=1"
                            className="mx-3"
                          >
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Computer Forensic Fundamentals (CFF)
                          </a>
                        </span>
                      </a>

                      <a
                        className="mt-3 divClass"
                        href="/basic-corporate?title=network-defense&id=2"
                      >
                        Network Defense and Operations - (Corporate)
                        <i className="fas fa-caret-right "></i>
                        <span style={{ top: "-160px" }} className="AnchorHide">
                          <a href="/basic-corporate">Basic</a>
                          <a
                            href="/basic-corporate?title=certified-network&id=2"
                            className="mx-3"
                          >
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Certified Network Defense (CND-312-38)
                          </a>

                          <a href="/basic-corporate">Intermediate</a>
                          <a
                            href="/basic-corporate?title=ec-council-disaster&id=2"
                            className="mx-3"
                          >
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            EC-Council Disaster Recovery Professional
                            (EDRP-312-76)
                          </a>
                          <a
                            href="/basic-corporate?title=ec-council-disaster-certified&id=2"
                            className="mx-3"
                          >
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            EC-Council Certified Incident Handler (ECIH-212-89)
                          </a>

                          <a href="/basic-corporate"> Advance</a>
                          <a
                            href="/basic-corporate?title=security-windows&id=2"
                            className="mx-3"
                          >
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Securing Windows Infrastructure (CAST-616)
                          </a>
                          <a
                            href="/basic-corporate?title=advance-network&id=2"
                            className="mx-3"
                          >
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Advance Network Defense (CAST-614)
                          </a>
                        </span>
                      </a>

                      <a
                        className="mt-3 divClass"
                        href="/basic-corporate?title=software-security&id=3"
                      >
                        Software Security - (Corporate){" "}
                        <i className="fas fa-caret-right "></i>
                        <span style={{ top: "-260px" }} className="AnchorHide">
                          <a href="/basic-corporate">Basic</a>
                          <a
                            href="/basic-corporate?title=certified-secure&id=3"
                            className="mx-3"
                          >
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Certified Secure Computer User (CSCU-112-12)
                          </a>

                          <a href="/basic-corporate?title=certified&id=1">
                            Intermediate
                          </a>
                          <a
                            href="/basic-corporate?title=ec-council-certified-java&id=3"
                            className="mx-3"
                          >
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            EC-Council Certified Secure Programmer JAVA
                            (ECSP-312-94){" "}
                          </a>
                          <a
                            href="/basic-corporate?title=ec-council-certified-.net&id=3"
                            className="mx-3"
                          >
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            EC-Council Certified Secure Programmer .Net
                            (ECSP-312-93)
                          </a>

                          <a href="/basic-corporate?title=certified&id=3">
                            {" "}
                            Advance
                          </a>
                          <a
                            href="/basic-corporate?title=advance-penetration&id=3"
                            className="mx-3"
                          >
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Advanced Penetration testing (CAST-611)
                          </a>
                          <a
                            href="/basic-corporate?title=securing-windows&id=3"
                            className="mx-3"
                          >
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Securing Windows Infrastructure (CAST-616)
                          </a>
                        </span>
                      </a>

                      <a
                        className="mt-3 divClass"
                        href="/basic-corporate?title=vapt&id=4"
                      >
                        Vulnerability Assessment & Penetration Testing (VA & PT)
                        - (Corporate) <i className="fas fa-caret-right "></i>
                        <span style={{ top: "-360px" }} className="AnchorHide">
                          <a href="/basic-corporate?title=certified&id=1">
                            Basic
                          </a>
                          <a
                            href="/basic-corporate?title=certified-ethical&id=4"
                            className="mx-3"
                          >
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Certified Ethical hacker (CEH-312-50)
                          </a>
                          <a
                            href="/basic-corporate?title=certified-network-defense&id=4"
                            className="mx-3"
                          >
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Certified Network Defense (CND-312-38)
                          </a>

                          <a href="/basic-corporate?title=certified&id=1">
                            Intermediate
                          </a>
                          <a
                            href="/basic-corporate?title=licensed-penetration&id=4"
                            className="mx-3"
                          >
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Licensed Penetration Tester (LPT-412-79)
                          </a>
                          <a
                            href="/basic-corporate?title=ec-council-certified&id=4"
                            className="mx-3"
                          >
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            EC-Council Certified Security Analyst
                            (ECSA-412-79){" "}
                          </a>

                          <a href="/basic-corporate?title=certified&id=1">
                            {" "}
                            Advance
                          </a>
                          <a
                            href="/basic-corporate?title=advance-pentration&id=4"
                            className="mx-3"
                          >
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Advanced Penetration testing (CAST-611)
                          </a>
                          <a
                            href="/basic-corporate?title=hacking-hardening&id=4"
                            className="mx-3"
                          >
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Hacking and Hardening Your Corporate Web Application
                            (CAST-613)
                          </a>
                          <a
                            href="/basic-corporate?title=securing-windows&id=4"
                            className="mx-3"
                          >
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Securing Windows Infrastructure (CAST-616)
                          </a>
                        </span>
                      </a>

                      <a
                        className="mt-3 divClass"
                        href="/basic-corporate?title=cyber-forensic&id=5"
                      >
                        Cyber Forensic - (Corporate){" "}
                        <i className="fas fa-caret-right "></i>
                        <span style={{ top: "-360px" }} className="AnchorHide">
                          <a href="/basic-corporate">Basic</a>
                          <a
                            href="/basic-corporate?title=certified-ethical&id=5"
                            className="mx-3"
                          >
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Certified Ethical hacker (CEH-312-50)
                          </a>
                          <a
                            href="/basic-corporate?title=certified-network-defense&id=5"
                            className="mx-3"
                          >
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Certified Network Defense (CND-312-38)
                          </a>

                          <a href="/basic-corporate?title=certified&id=1">
                            Intermediate
                          </a>
                          <a
                            href="/basic-corporate?title=ec-council-certified&id=5"
                            className="mx-3"
                          >
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            EC-Council Certified Incident Handler (ECIH-212-89)
                          </a>
                          <a
                            href="/basic-corporate?title=computer-hacking&id=5"
                            className="mx-3"
                          >
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Computer Hacking Forensic Investigator (CHFI-312-49)
                          </a>

                          <a href="/basic-corporate"> Advance</a>
                          <a
                            href="/basic-corporate?title=advanced-mobile&id=5"
                            className="mx-3"
                          >
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Advanced Mobile Forensics And security (CAST-612)
                          </a>
                        </span>
                      </a>

                      <a
                        className="mt-3 divClass"
                        href="/basic-corporate?title=governance&id=6"
                      >
                        Governance - (Corporate){" "}
                        <i className="fas fa-caret-right "></i>
                        <span
                          style={{ height: "460px", top: "-200px" }}
                          className="AnchorHide"
                        >
                          <a href="/basic-corporate?title=certified-cheif&id=6">
                            {" "}
                            Certified Chief Information Security Officer (CCISO)
                          </a>
                        </span>
                      </a>
                    </Col>
                  </Row>
                </Container>
              </div>
            </li>

            <li className="menu-item-has-children servicNav">
              <a href="/training">Training</a>
              <ul>
                <li className="menu-item-has-children">
                  <Link to="/assesment">Assessment</Link>
                  <ul>
                    <li>
                      <a href="/penetration-testing">
                        Penetration Testing Professional (Custom)
                      </a>
                    </li>
                    <li>
                      <a href="/Offensive">
                        Offensive Security Certified Professional (OSCP)
                      </a>
                    </li>
                    <li>
                      <a href="/certified-information">
                        Certified Information system Auditor (CISA)
                      </a>
                    </li>
                    <li>
                      <a href="/computer-hacking">
                        Computer Hacking Forensic Investigation (Custom)
                      </a>
                    </li>
                    <li>
                      <a href="/penetration-testing">
                        Web Application Penetration Testing (Custom)
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="menu-item-has-children">
                  <Link to="/management">Management</Link>
                  <ul>
                    <li>
                      <a href="/practical-hacker">
                        Practical Ethical Hacking (Custom){" "}
                      </a>{" "}
                    </li>
                    <li>
                      <a href="/certified-disaster">
                        Disaster Recovery Professional (Custom)
                      </a>
                    </li>
                    <li>
                      <a href="/certified-incident-handler">
                        Incident Handler (Custom)
                      </a>
                    </li>
                    <li>
                      <a href="/certified-soc-analyst">
                        Cyber Security Analyst (Custom)
                      </a>
                    </li>

                    <li>
                      <a href="/certified-threat">
                        Threat Intelligent Analyst (Custom)
                      </a>
                    </li>
                    <li>
                      <a href="/certified-information-security">
                        Certified Information security Manager (CISM)
                      </a>
                    </li>
                    <li>
                      <a href="/certified-information-system-security">
                        Certified Information System Security Professional
                        (CISSP)
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="/giac-certified-incident">
                        GIAC Certified Incident Handler (GCIH)
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="/giac-certified-project">
                        GIAC Certified Project Manager (GCPM){" "}
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="/open-source">
                        Open-Source Intelligence (OSINT){" "}
                      </a>{" "}
                    </li>
                  </ul>
                </li>

                <li className="menu-item-has-children">
                  <a href="customized"> RightTime Customized</a>
                  <ul>
                    <li className="menu-item-has-children">
                      <a href="/basic-corporate?title=foundation-track&id=1">
                        {" "}
                        Foundation track - (Corporate){" "}
                      </a>
                      <ul>
                        <li>
                          <a className="text-light" href="/basic-corporate">
                            Basic
                          </a>
                        </li>
                        <li className="mx-3">
                          <a className="text-light" href="/basic-corporate">
                            {" "}
                            Certified Secure Computer User (CSCU-112-12)
                          </a>
                        </li>

                        <li>
                          <a className="text-light" href="/basic-corporate">
                            Intermediate
                          </a>
                        </li>
                        <li className="mx-3">
                          <a className="text-light" href="/basic-corporate">
                            {" "}
                            Network Security Fundamentals (FNS)
                          </a>
                        </li>
                        <li className="mx-3">
                          <a href="/basic-corporate" className="text-light">
                            {" "}
                            Information Security Fundamentals (FIS)
                          </a>
                        </li>
                        <li>
                          <a className="text-light" href="/basic-corporate">
                            Advance
                          </a>
                        </li>
                        <li className="mx-3">
                          <a className="text-light" href="/basic-corporate">
                            {" "}
                            Computer Forensic Fundamentals (CFF)
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="menu-item-has-children">
                      <a href="/basic-corporate">
                        {" "}
                        Network Defense and Operations - (Corporate){" "}
                      </a>
                      <ul>
                        <li>
                          <a className="text-light" href="/basic-corporate">
                            Basic
                          </a>
                        </li>
                        <li className="mx-3">
                          <a className="text-light" href="/basic-corporate">
                            {" "}
                            Certified Network Defense (CND-312-38)
                          </a>
                        </li>

                        <li>
                          <a className="text-light" href="/basic-corporate">
                            Intermediate
                          </a>
                        </li>
                        <li className="mx-3">
                          <a className="text-light" href="/basic-corporate">
                            {" "}
                            EC-Council Disaster Recovery Professional
                            (EDRP-312-76)
                          </a>
                        </li>
                        <li className="mx-3">
                          <a href="/basic-corporate" className="text-light">
                            {" "}
                            EC-Council Certified Incident Handler (ECIH-212-89)
                          </a>
                        </li>
                        <li>
                          <a className="text-light" href="/basic-corporate">
                            Advance
                          </a>
                        </li>
                        <li className="mx-3">
                          <a className="text-light" href="/basic-corporate">
                            {" "}
                            Securing Windows Infrastructure (CAST-616)
                          </a>
                        </li>
                        <li className="mx-3">
                          <a className="text-light" href="/basic-corporate">
                            {" "}
                            Advance Network Defense (CAST-614)
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="menu-item-has-children">
                      <a href="/basic-corporate">
                        {" "}
                        Software Security - (Corporate){" "}
                      </a>
                      <ul>
                        <li>
                          <a className="text-light" href="/basic-corporate">
                            Basic
                          </a>
                        </li>
                        <li className="mx-3">
                          <a className="text-light" href="/basic-corporate">
                            {" "}
                            Certified Secure Computer User (CSCU-112-12)
                          </a>
                        </li>

                        <li>
                          <a className="text-light" href="/basic-corporate">
                            Intermediate
                          </a>
                        </li>
                        <li className="mx-3">
                          <a className="text-light" href="/basic-corporate">
                            {" "}
                            EC-Council Certified Secure Programmer JAVA
                            (ECSP-312-94){" "}
                          </a>
                        </li>
                        <li className="mx-3">
                          <a href="/basic-corporate" className="text-light">
                            {" "}
                            EC-Council Certified Secure Programmer .Net
                            (ECSP-312-93){" "}
                          </a>
                        </li>
                        <li>
                          <a className="text-light" href="/basic-corporate">
                            Advance
                          </a>
                        </li>
                        <li className="mx-3">
                          <a className="text-light" href="/basic-corporate">
                            {" "}
                            Advanced Penetration testing (CAST-611)
                          </a>
                        </li>

                        <li className="mx-3">
                          <a className="text-light" href="/basic-corporate">
                            {" "}
                            Securing Windows Infrastructure (CAST-616)
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="menu-item-has-children">
                      <a href="/basic-corporate">
                        {" "}
                        Vulnerability Assessment & Penetration Testing (VA & PT)
                        - (Corporate){" "}
                      </a>
                      <ul>
                        <li>
                          <a className="text-light" href="/basic-corporate">
                            Basic
                          </a>
                        </li>
                        <li className="mx-3">
                          <a className="text-light" href="/basic-corporate">
                            {" "}
                            Certified Ethical hacker (CEH-312-50)
                          </a>
                        </li>
                        <li className="mx-3">
                          <a className="text-light" href="/basic-corporate">
                            {" "}
                            Certified Network Defense (CND-312-38)
                          </a>
                        </li>

                        <li>
                          <a className="text-light" href="/basic-corporate">
                            Intermediate
                          </a>
                        </li>
                        <li className="mx-3">
                          <a className="text-light" href="/basic-corporate">
                            {" "}
                            Licensed Penetration Tester (LPT-412-79)
                          </a>
                        </li>
                        <li className="mx-3">
                          <a href="/basic-corporate" className="text-light">
                            {" "}
                            EC-Council Certified Security Analyst
                            (ECSA-412-79){" "}
                          </a>
                        </li>
                        <li>
                          <a className="text-light" href="/basic-corporate">
                            Advance
                          </a>
                        </li>
                        <li className="mx-3">
                          <a className="text-light" href="/basic-corporate">
                            {" "}
                            Advanced Penetration testing (CAST-611)
                          </a>
                        </li>
                        <li className="mx-3">
                          <a className="text-light" href="/basic-corporate">
                            {" "}
                            Hacking and Hardening Your Corporate Web Application
                            (CAST-613)
                          </a>
                        </li>
                        <li className="mx-3">
                          <a className="text-light" href="/basic-corporate">
                            {" "}
                            Securing Windows Infrastructure (CAST-616)
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="menu-item-has-children">
                      <a href="/basic-corporate">
                        {" "}
                        Cyber Forensic - (Corporate){" "}
                      </a>
                      <ul>
                        <li>
                          <a className="text-light" href="/basic-corporate">
                            Basic
                          </a>
                        </li>
                        <li className="mx-3">
                          <a className="text-light" href="/basic-corporate">
                            {" "}
                            Certified Ethical hacker (CEH-312-50)
                          </a>
                        </li>
                        <li className="mx-3">
                          <a className="text-light" href="/basic-corporate">
                            {" "}
                            Certified Network Defense (CND-312-38)
                          </a>
                        </li>

                        <li>
                          <a className="text-light" href="/basic-corporate">
                            Intermediate
                          </a>
                        </li>
                        <li className="mx-3">
                          <a className="text-light" href="/basic-corporate">
                            {" "}
                            EC-Council Certified Incident Handler (ECIH-212-89)
                          </a>
                        </li>
                        <li className="mx-3">
                          <a href="/basic-corporate" className="text-light">
                            {" "}
                            Computer Hacking Forensic Investigator (CHFI-312-49)
                          </a>
                        </li>
                        <li>
                          <a className="text-light" href="/basic-corporate">
                            Advance
                          </a>
                        </li>
                        <li className="mx-3">
                          <a className="text-light" href="/basic-corporate">
                            {" "}
                            Advanced Mobile Forensics And security (CAST-612)
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="menu-item-has-children">
                      <a href="/basic-corporate"> Governance - (Corporate) </a>
                      <ul>
                        <li>
                          <a className="text-light" href="/basic-corporate">
                            {" "}
                            Certified Chief Information Security Officer (CCISO)
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="dropdown serviceNav2 steps-sampling">
              <Link className="dropbtn1z" to="/resources">
                Resources
              </Link>

              <div
                style={{ left: "-50px", minWidth: "250px", height: "370px" }}
                className=" dropdown-content"
              >
                <Container className="mt-4">
                  <Row>
                    <Col>
                      <Link className="mt-2  divClass" to="/blogs">
                        {" "}
                        Blogs
                      </Link>

                      <Link className="mt-2  divClass" to="/case-studies">
                        Case Studies
                      </Link>

                      <Link className="mt-2  divClass" to="/Checklists">
                        Checklists
                      </Link>

                      <Link className="mt-2  divClass" to="/WhitePapers">
                        WhitePapers
                      </Link>

                      <Link className="mt-2  divClass" to="/Infographics">
                        Infographics
                      </Link>

                      <Link className="mt-2  divClass" to="/DataSheets">
                        {" "}
                        DataSheets
                      </Link>

                      <Link className="mt-2  divClass" to="/Webinars">
                        {" "}
                        Webinars
                      </Link>

                      <a className="mt-2  divClass" href="/documents">
                        Documents
                        <i className="fas fa-caret-right  mx-3"></i>
                        <span style={{ left: "200px" }} className="AnchorHide">
                          <Link to="/guidance">Guidance</Link>

                          <Link to="/glossary">Glossary</Link>

                          <Link to="/standard">Standard</Link>

                          <Link to="/policy"> Policy</Link>

                          <Link to="/rules-regulation">
                            {" "}
                            Rules & Regulation
                          </Link>

                          <Link to="/faqs"> FAQs</Link>
                        </span>
                      </a>
                      <Link className="mt-2  divClass" to="/reports">
                        {" "}
                        Reports
                      </Link>
                    </Col>
                  </Row>
                </Container>
              </div>
            </li>

            {/* <li className="menu-item-has-children">
              <Link to="/resources">Resources</Link>
              <ul>
                
                 

              </ul>
            </li> */}

            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>

            <li>
              <Link to="/incident"> Incident !</Link>
            </li>
          </ul>

          <div className="main-menu__right">
            <Link to="/" className="mobile-nav__toggler">
              <span></span>
              <span></span>
              <span></span>
            </Link>

            {/* <!-- /.search-toggler --> */}
            <Link to="/#" className="main-menu__cta  ">
              <i className="fa fa-phone-alt"></i>
              {show === "1" ? (
                <>
                  <span className="main-menu__cta__text">
                    <b>(+88)-02-55012235</b>
                    <b>(+88)-01318-013300</b>
                    Call Anytime
                  </span>
                </>
              ) : show === "2" ? (
                <>
                  <span className="main-menu__cta__text">
                    <b>(+18)-779-0442</b>
                    Call Anytime
                  </span>
                </>
              ) : show === "3" ? (
                <>
                  <span className="main-menu__cta__text">
                    <b>(+61) 490517545</b>
                    Call Anytime
                  </span>
                </>
              ) : (
                <>
                  <span className="main-menu__cta__text">
                    <b>(+49)-01624069887</b>
                    Call Anytime
                  </span>
                </>
              )}
            </Link>
          </div>
        </div>
      </nav>

      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler"></div>
        <div className="mobile-nav__content">
          <Link to="/" className="mobile-nav__close mobile-nav__toggler">
            <span></span>
            <span></span>
          </Link>

          <div className="logo-box">
            <Link to="/" aria-label="logo image">
              <img
                src="assets/images/images-removebg-preview.png"
                width="78"
                height="53"
                alt="Cretech"
              />
            </Link>
          </div>

          <div className="mobile-nav__container"></div>

          <ul className="mobile-mobile-nav__country">
            <h5 className="text-light">Select Country</h5>

            <select
              className="mobileTopbar text-light"
              value={show}
              onChange={handleLocationChange}
            >
              <option value="1">
                <Link to="/">BD</Link>
              </option>
              <option value="2">
                <Link to="/">USA</Link>
              </option>
              <option value="3">
                <Link to="/">Australia</Link>
              </option>
              <option value="4">
                <Link to="/">Germany</Link>
              </option>
            </select>
          </ul>

          <ul className="mobile-nav__contact list-unstyled text-light">
            {show === "1" ? (
              <>
                <li>
                  <i className="/"></i>
                  <Link to="/">+88 02550 12235,</Link>
                </li>
                <li>
                  <i className="/"></i>
                  <Link to="/">+88 01318 013300</Link>
                </li>
                <li>
                  <i className="fa fa-envelope"></i>
                  <Link to="/">info@righttime.biz</Link>
                </li>
                <li>
                  <i className="fa fa-map-marker-alt"></i>
                  Level: 06 & 14 (west), BDBL Bhaban, 12, Karwan Bazar, Tejgaon
                  Post Code: 1215 <br />
                  Dhaka, Bangladesh
                </li>
              </>
            ) : show === "2" ? (
              <>
                <li>
                  <i className="fa fa-envelope"></i>
                  <Link to="mailto:info@righttime.biz">
                    coo.usa@righttime.biz
                  </Link>
                </li>
                <li>
                  <i className="fa fa-map-marker"></i>
                  5669 N Fresno St, Apt 232 Fresno, CA 93710{" "}
                </li>
              </>
            ) : show === "3" ? (
              <>
                <li>
                  <i className="fa fa-envelope"></i>
                  <Link to="mailto:info@righttime.biz">
                    coo.au@righttime.biz
                  </Link>
                </li>
                <li>
                  <i className="fa fa-map-marker"></i>
                  11 Dahlia St. Quakers Hill,NSW 2763,Sydney,Australia.
                </li>
              </>
            ) : (
              <>
                <li>
                  <i className="fa fa-envelope"></i>
                  <Link to="mailto:info@righttime.biz">
                    coo.de@righttime.biz
                  </Link>
                </li>
                <li>
                  <i className="fa fa-map-marker"></i>
                  Hausmann str-1.44139,Dortmund. Germany
                </li>
              </>
            )}
          </ul>
          <ul className="mobile-nav__social mx-4">
            <li>
              <a style={{ backgroundColor: "#2ea9f3" }} href="/">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a style={{ backgroundColor: "#008def" }} href="/">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a style={{ backgroundColor: "#d9387a" }} href="/">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </li>
            <li>
              <a style={{ backgroundColor: "#eb733b" }} href="/">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
