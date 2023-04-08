import React from "react";
import "./serviceStyle.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
function Header({ show, setShow }) {
  console.log("fdgf", show);
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

          <ul className="main-menu__list steps-sampling">
            <li className="menu-item-has-children">
              <a id="link1" href="/">
                Home
              </a>
             
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
                    <Col style={{ borderRight: "1px solid #6f42c1" }}>
                      <a
                        style={{ fontWeight: "bold", color: "orange" }}
                        href="/about-us"
                      >
                        About Right Time
                      </a>
                      <a className="mt-3" href="/team">
                        Team
                      </a>
                      <a className="mt-3" href="/careers">
                        Careers
                      </a>
                      <a className="mt-3" href="/mission-statement">
                        Mission statement
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

                    
                      <a className="mt-3  divClass" href="/association-partners">
                      Association
                         <i className="fas fa-caret-right  mx-3"></i>
                        <span style={{ left: "200px"}} className="AnchorHide">
                          <a href="https://portswigger.net/burp">
                          CCA, Ministry of ICT (First and 2022)
                          </a>

                          <Link to="https://portswigger.net/burp">
                            PCI SSC, USA
                          </Link>

                          <Link to="https://portswigger.net/burp">
                            World Bank Groups  
                          </Link>

                          <Link to="https://portswigger.net/burp">SWIFT</Link>

                          <Link to="https://portswigger.net/burp">BASIS</Link>

                          <Link to="https://portswigger.net/burp">E-Cab</Link>

                          <Link to="https://portswigger.net/burp">BCS</Link>
                        </span>
                      </a>


                      <a className="mt-3  divClass" href="/partners">
                      Partner
                         <i className="fas fa-caret-right  mx-3"></i>
                        <span style={{ left: "200px",width:"500px"}} className="AnchorHide">
                        <Row>
                    <Col style={{borderRight:"1px solid #6f42c1"}}>
                    <a  style={{fontWeight:"bold",color:"orange"}}href="/service-partners">Service Partner</a>
 
                      <a className="mt-3" href="https://www.eccouncil.org/">EC-Council (Security Training Partner)</a>
                 
                      <a className="mt-3"  href="https://home.pearsonvue.com/">Pearson Vue (Exam testing Center)</a>
                    
                      <a className="mt-3"  href="https://pecb.com/en">PECB (ISO)</a>
                   
                    
                      <a className="mt-3"  href="https://sckcerts.com/">SCK & ARS (ISO)</a>
                   
                      <a className="mt-3"  href="https://www.acnabin.com/">ACNABIN (CA Firm for Financial Control)</a>

                    </Col>

                  <Col>
                  
                  <a  style={{fontWeight:"bold",color:"orange"}}href="/solution-partners">Solution Partner</a>
                   <a className="mt-3"  href="https://www.invicti.com/">INVICTI</a>
                      <a className="mx-3" href="https://www.invicti.com/">
                         <i className="fas fa-caret-right "> </i> Net Sparker

                      </a>
                      <a className="mx-3" href="https://www.invicti.com/">
                         <i className="fas fa-caret-right "> </i>Acunetix etc.
                      </a>


                      <a className="mt-3"  href="https://www.invicti.com/"> Port Swigger</a>
                     
                      <a className="mx-3" href="/burp-suite">
                         <i className="fas fa-caret-right "> </i>-	Burp Suite
                      </a>



                      <a className="mt-3"  href="https://www.invicti.com/">Tenable</a>
                      <a className="mx-3" href="https://www.invicti.com/">
                         <i className="fas fa-caret-right "> </i> Nessus Pro

                      </a>
                      <a className="mx-3" href="https://www.invicti.com/">
                         <i className="fas fa-caret-right "> </i>All Tenable Products
                      </a>

 
                      <a className="mt-3"  href="https://www.coresecurity.com/products/core-impact">
                         HelpSystems
                      </a>

                      <a className="mx-3" href="https://www.invicti.com/">
                         <i className="fas fa-caret-right "> </i> Core Impact
                      </a>

                      <a className="mt-3"  href="https://www.invicti.com/"> Safe Aeon</a>
                      <a className="mx-3" href="https://www.invicti.com/">
                         <i className="fas fa-caret-right "> </i> Managed service

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
              <Link to="/industries">Industry Coverage</Link>
              <ul>
                <li>
                  <Link to="/bank-nbfi">FIs - Bank & NBFI</Link>
                </li>
                <li>
                  <Link style={{ lineHeight: "1.2" }} to="/telecomunication">
                    Mobile & Telecommunications
                  </Link>
                </li>
                <li>
                  <Link style={{ lineHeight: "1.2" }} to="payment-card">
                    Payment Gateways and Payment Processor
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ lineHeight: "1.2" }}
                    to="/educational-institutions"
                  >
                    Educational Institutions
                  </Link>
                </li>
                <li>
                  <Link style={{ lineHeight: "1.2" }} to="/ecommerce-retail">
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
              <div className="dropdown-content">
                <Container className="mt-4">
                  <Row>
                    <Col md={3} 
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
                        style={{ lineHeight: "1.2" }}
                        className="mt-3"
                        href="/information-security-Special"
                      >
                        <i className="fas fa-circle iconStyle "> </i>{" "}
                        Information Security  & Cyber Security 
                      </a>

                    

                      <a
                        style={{ lineHeight: "1.2" }}
                        className="mt-3"
                        href="/pci-dss-consultation"
                      >
                        <i className="fas fa-circle iconStyle "> </i> PCI DSS
                      </a>

                      <a
                        style={{ lineHeight: "1.2" }}
                        className="mt-3"
                        href="/swift-cyber-security"
                      >
                        <i className="fas fa-circle iconStyle "> </i> Swift
                        Cyber Security Consulting
                      </a>

                      <a
                        style={{ lineHeight: "1.2" }}
                        className="mt-3"
                        href="/providing-security"
                      >
                        <i className="fas fa-circle iconStyle "> </i>   ISO  Consultation
                      </a>

                      <a
                        style={{ lineHeight: "1.2" }}
                        className="mt-3"
                        href="/providing-security"
                      >
                        <i className="fas fa-circle iconStyle "> </i>    CMMI Consultation
                      </a>
                      

                      <a
                        style={{ lineHeight: "1.2" }}
                        className="mt-3"
                        href="/consultation-on-shaping"
                      >
                        <i className="fas fa-circle iconStyle "> </i>{" "}
                        Project Management 
                      </a>
                      <a
                        style={{ lineHeight: "1.2" }}
                        className="mt-3"
                        href="/consultation-on-shaping"
                      >
                        <i className="fas fa-circle iconStyle "> </i>{" "}
                        Consultation on Shaping up DC & DRS
                      </a>
                   
                      

                      <a
                        style={{ lineHeight: "1.2" }}
                        className="mt-3"
                        href="/providing-security"
                      >
                        <i className="fas fa-circle iconStyle "> </i> Technical
                        Documentation On ITES
                      </a>

                  

                      <a
                        style={{ lineHeight: "1.2" }}
                        className="mt-3"
                        href="/providing-security"
                      >
                        <i className="fas fa-circle iconStyle "> </i>  Zero Trust Architecture
                      </a>
                     
                      <a
                        style={{ lineHeight: "1.2" }}
                        className="mt-3"
                        href="/providing-security"
                      >
                        <i className="fas fa-circle iconStyle "> </i> Industry 4.0
                      </a>

                      <a
                        style={{ lineHeight: "1.2" }}
                        className="mt-3"
                        href="/"
                      >
                        <i className="fas fa-circle iconStyle "> </i> Six Sigma Consultation
                      </a>
                      <a
                        style={{ lineHeight: "1.2" }}
                        className="mt-3"
                        href="/"
                      >
                        <i className="fas fa-circle iconStyle "> </i> Lean  Consultation
                      </a>


                   

                      

                       
                    </Col>

                    <Col md={2} 
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
                        style={{ lineHeight: "1.2" }}
                        className="mt-3"
                        href="/information-system"
                      >
                        <i className="fas fa-circle iconStyle "> </i>{" "}
                        Information System Audit
                      </a>
                      <a
                        style={{ lineHeight: "1.2" }}
                        className="mt-3"
                        href="/information-technology"
                      >
                        <i className="fas fa-circle iconStyle "> </i>{" "}
                        Information Technology Audit
                      </a>
                      <a
                        style={{ lineHeight: "1.2" }}
                        className="mt-3"
                        href="/information-security-graded"
                      >
                        <i className="fas fa-circle iconStyle "> </i>{" "}
                        Information Security Graded Audit
                      </a>
                      <a
                        style={{ lineHeight: "1.2" }}
                        className="mt-3"
                        href="/dc-drs-auditing"
                      >
                        <i className="fas fa-circle iconStyle "> </i> DC & DRS
                        Auditing
                      </a>

                      <a className="mt-3" href="/tia-for-data-center">
                        <i className="fas fa-circle iconStyle "> </i>  SOC1 Audit 
                      </a>

                      <a className="mt-3" href="/tia-for-data-center">
                        <i className="fas fa-circle iconStyle "> </i> SOC2 Audit 
                      </a>
                    </Col>

                    <Col md={2} 
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
                        style={{ lineHeight: "1.2" }}
                        className="mt-3"
                        href="/vulnerability-assessment"
                      >
                        <i className="fas fa-circle iconStyle "> </i>{" "}
                        Vulnerability Assessment & Penetration  Testing Services
                      </a>

                      <a
                        style={{ lineHeight: "1.2" }}
                        className="mt-3"
                        href="/swift-csp"
                      >
                        <i className="fas fa-circle iconStyle "> </i> Swift CSP
                        Independent Assessment
                      </a>

                      <a
                        style={{ lineHeight: "1.2" }}
                        className="mt-3"
                        href="/software-quality"
                      >
                        <i className="fas fa-circle iconStyle "> </i> Software
                        Quality Assurance & Testing
                      </a>
                      <a className="mt-3" href="/code-review">
                        <i className="fas fa-circle iconStyle "> </i> Code
                        Review
                      </a>

                      <a
                        style={{ lineHeight: "1.2" }}
                        className="mt-3"
                        href="/swift-csp"
                      >
                        <i className="fas fa-circle iconStyle "> </i>  Breach Attack Simulation
                      </a>
                      <a
                        style={{ lineHeight: "1.2" }}
                        className="mt-3"
                        href="/"
                      >
                        <i className="fas fa-circle iconStyle "> </i> Security Posture Assessment
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

                      <a
                        style={{ lineHeight: "1.2" }}
                        className="mt-3"
                        href="/pci-dss-payment"
                      >
                        <i className="fas fa-circle iconStyle "> </i> PCI DSS
                        Certification
                      </a>

                      <a
                        style={{ lineHeight: "1.2" }}
                        className="mt-3"
                        href="/iso-international"
                      >
                        <i className="fas fa-circle iconStyle "> </i> 	ISO Certification
                      </a>

                      {/* <a
                        style={{ lineHeight: "1.2" }}
                        className="mt-3"
                        href="/iso-international"
                      >
                        <i className="fas fa-circle iconStyle "> </i> ISO 27001,
                        ISO 9001, ISO 20000-1, ISO 22301, ISO 13485, ISO 5001,
                        ISO 14001 etc.
                      </a> */}

                      <a
                        style={{ lineHeight: "1.2" }}
                        className="mt-3"
                        href="/cmmi"
                      >
                        <i className="fas fa-circle iconStyle "> </i> CMMI
                        (Capability Maturity Model Integration)
                      </a>

                      <a
                        style={{ lineHeight: "1.2" }}
                        className="mt-3"
                        href="/tia-for-data-center"
                      >
                        <i className="fas fa-circle iconStyle "> </i> TIA 942
                        For Data Center
                      </a>

                      <a className="mt-3" href="/tia-for-data-center">
                        <i className="fas fa-circle iconStyle "> </i> GDPR
                        Certification
                      </a>
                      <a className="mt-3" href="/tia-for-data-center">
                        <i className="fas fa-circle iconStyle "> </i> HIPAA
                        Certification
                      </a>

                     
                    </Col>

                    <Col md={3}  className="consultation">
                      <a
                        style={{ fontWeight: "bold", color: "orange" }}
                        href="/managed-service"
                      >
                        Managed Services
                      </a>

                      <a className="mt-3" href="/pci-dss-payment">
                        <i className="fas fa-circle iconStyle "> </i> SOC as A
                        Service
                      </a>

                      

                      <a
                        style={{ lineHeight: "1.2" }}
                        className="mt-3"
                        href="/iso-international"
                      >
                        <i className="fas fa-circle iconStyle "> </i> Cloud App
                        Monitoring as A Service
                      </a>

                      <a
                        style={{ lineHeight: "1.2" }}
                        className="mt-3"
                        href="/cmmi"
                      >
                        <i className="fas fa-circle iconStyle "> </i> MDR as A
                        Service (Managed End Point Detection and Response)
                      </a>

                      <a
                        style={{ lineHeight: "1.2" }}
                        className="mt-3"
                        href="/tia-for-data-center"
                      >
                        <i className="fas fa-circle iconStyle "> </i> Managed
                        Nextgen Firewall as A Service
                      </a>

                      <a
                        style={{ lineHeight: "1.2" }}
                        className="mt-3"
                        href="/tia-for-data-center"
                      >
                        <i className="fas fa-circle iconStyle "> </i>{" "}
                        	Vulnerability Assessment (VA) As A Service </a>

                          <a
                        style={{ lineHeight: "1.2" }}
                        className="mt-3"
                        href="/tia-for-data-center"
                      >
                        <i className="fas fa-circle iconStyle "> </i>{" "}
                      	Penetration Testing (PT) as a Service  </a>

                        <a
                        style={{ lineHeight: "1.2" }}
                        className="mt-3"
                        href="/tia-for-data-center"
                      >
                        <i className="fas fa-circle iconStyle "> </i>{" "}
                      	 	DAM (Database Auditing & Management) as a Service </a>

                        
                    
                         <a
                        style={{ lineHeight: "1.2" }}
                        className="mt-3"
                        href="/tia-for-data-center"
                      >
                        <i className="fas fa-circle iconStyle "> </i> 	Attack Surface Management
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
                      <Link
                        style={{ lineHeight: "1.2" }}
                        to="/information-security-Special"
                      >
                        Information Security-Specially Cyber Security Consulting
                      </Link>
                    </li>
                    <li>
                      <Link to="/project-management">Project Management</Link>
                    </li>
                    <li>
                      <Link to="/providing-security">Providing Security</Link>
                    </li>
                    <li>
                      <Link
                        style={{ lineHeight: "1.2" }}
                        to="/consultation-on-shaping"
                      >
                        Consultation on Shaping the DC & DRS
                      </Link>
                    </li>
                    <li>
                      <Link to="/swift-cyber-security">
                        Swift Cyber Security Consulting
                      </Link>
                    </li>
                    <li>
                      <Link to="/technical-documentation ">
                        Technical Documentation on ICT
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="menu-item-has-children">
                  <Link to="Auditing">Auditing</Link>
                  <ul>
                    <li>
                      <Link to="/information-system">
                        Information System Audit
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ lineHeight: "1.2" }}
                        to="/information-technology"
                      >
                        Information Technology Audit
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ lineHeight: "1.2" }}
                        to="/information-security-graded"
                      >
                        Information Security Graded Audit
                      </Link>
                    </li>

                    <li>
                      <Link to="/dc-drs-auditing">DC & DRS Auditing</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <Link to="/security-testing">Security Testing</Link>
                  <ul>
                    <li>
                      <Link
                        style={{ lineHeight: "1.2" }}
                        to="/vulnerability-assessment"
                      >
                        Vulnerability Assessment & Penetration Testing Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/digital-forensics">Digital Forensics</Link>
                    </li>
                    <li>
                      <Link to="/code-review">Code Review</Link>
                      <a style={{ lineHeight: "1.2" }} href="/software-quality">
                        Software Quality Assurance & Testing
                      </a>
                      <Link style={{ lineHeight: "1.2" }} to="/swift-csp">
                        Swift Csp Indpended Assessment
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <Link to="/certification">Certification</Link>
                  <ul>
                    <li>
                      <Link style={{ lineHeight: "1.2" }} to="/pci-dss-payment">
                        Payment Card Industry Data Security Standards
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ lineHeight: "1.2" }}
                        to="/iso-international"
                      >
                        International Organization for Standardization-ISO
                      </Link>
                    </li>
                    <li>
                      <Link style={{ lineHeight: "1.2" }} to="/cmmi">
                        Capability Maturity Model Integration (CMMI)
                      </Link>
                    </li>

                    <li>
                      <Link to="/tia-for-data-center">
                        TIA 942 for Data Center
                      </Link>
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
                        href="/siem"
                      >
                        Security assessment (VA & PT) Tools
                      </a>

                      <a className="mt-3" href="/burp-suite">
                        Burp Suite
                      </a>
                      <a className="mt-3" href="/acunetix">
                        Net Sparker
                      </a>

                      <a
                        style={{ lineHeight: "1.2" }}
                        className="mt-3"
                        href="/netsparker"
                      >
                        Tenable (multiple solutions)
                      </a>

                      <a className="mt-3" href="/acunetix">
                        Acunetix
                      </a>

                      <a className="mt-3" href="/core-impact">
                        Core Impact
                      </a>
                    </Col>

                    <Col>
                      <a
                        style={{
                          fontWeight: "bold",
                          color: "orange",
                          lineHeight: "1.2",
                        }}
                        href="/association-partners"
                      >
                        Cyber Security Management & Visibility solutions
                      </a>
                      <a className="mt-3" href="/siem">
                        SIEM
                      </a>
                      <a className="mt-3" href="/firewall">
                        Firewall (Especially Next Gen)
                      </a>
                     
                       <a className="mt-3" href="/smart-contact">
                        Patch management{" "}
                      </a>
                      <a
                        className="mt-3"
                        style={{ lineHeight: "1.2" }}
                        href="/smart-contact"
                      >
                        Privilege Access Management (PAM)
                      </a>
                    </Col>
                  </Row>
                </Container>
              </div>
            </li>

            <li className="servicNav">
              <Link style={{ lineHeight: "1.2" }} to="/Solution">
                Security Assessment (VA & Tools)
              </Link>
              <ul>
                <li>
                  <Link to="/service-partners">Burp Suite</Link>
                  <ul>
                    <li>
                      <Link to="https://www.eccouncil.org/">Acunetix</Link>
                    </li>
                    <li>
                      <Link to="https://home.pearsonvue.com/">Netsparker</Link>
                    </li>
                    <li>
                      <Link to="https://pecb.com/en">
                        Tenable (multiple solutions)
                      </Link>
                    </li>
                    <li>
                      <Link to="https://arscert.com/certification/">
                        Core Impact
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    style={{ lineHeight: "1.2" }}
                    to="/association-partners"
                  >
                    Cyber Security Visibility & management Solutions
                  </Link>
                  <ul>
                    <li>
                      <Link to="https://sckcerts.com/">SIEM</Link>
                    </li>
                    <li>
                      <Link to="https://www.acnabin.com/">Firewall</Link>
                    </li>
                    <li>
                      <Link to="http://cca.gov.bd/site/office_head/5891f732-8e0f-40b0-9f85-1cb867657bfd/%E0%A6%AC%E0%A6%BF%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%A4">
                        Log Management
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.pcisecuritystandards.org/">
                        Patch management
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.worldbank.org/en/home">
                        Smart Contact
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.swift.com/">SMS Services</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="dropdown serviceNav2 steps-sampling">
              <Link to="/training" className="dropbtn1z">
                Training
              </Link>
              <div
                style={{ left: "-500px", minWidth: "1000px", height: "530px" }}
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
                      <a className="mt-3" href="/certified-ethical-hacker">
                        Penetration Testing Professional (Custom)
                      </a>
                      <a className="mt-3" href="/certified-ethical-hacker">
                        Certified Information system Auditor (CISA)
                      </a>
                      <a className="mt-3" href="/certified-ethical-hacker">
                        Computer Hacking Forensic Investigation (Custom)
                      </a>
                      <a className="mt-3" href="/certified-ethical-hacker">
                        Web Application Penetration Testing (Custom)
                      </a>
                      {/* <a className="mt-3"  href="/giac-penetration">
                      GIAC Penetration Testing (GPEN)

                      </a>
                      <a className="mt-3"  href="/giac-web-application">
                      GIAC Web Application Penetration Testing (GWAPT)
                      </a> */}
                    </Col>

                    <Col style={{ borderRight: "1px solid #6f42c1" }}>
                      <a
                        style={{ fontWeight: "bold", color: "orange" }}
                        href="/management"
                      >
                        Management
                      </a>
                      <a className="mt-3" href="/certified-ethical-hacker">
                        Practical Ethical Hacking (Custom){" "}
                      </a>

                      <a className="mt-2" href="/certified-incident-handler">
                        Disaster Recovery Professional (Custom)
                      </a>

                      <a className="mt-2" href="/certified-soc-analyst">
                        Incident Handler (Custom)
                      </a>

                      <a className="mt-2" href="/certified-threat">
                        Cyber Security Analyst (Custom)
                      </a>

                      <a
                        className="mt-2"
                        href="/certified-information-security"
                      >
                        Threat Intelligent Analyst (Custom)
                      </a>

                      <a
                        className="mt-2"
                        href="/certified-information-system-security"
                      >
                        Certified Information security Manager (CISM)
                      </a>

                      <a className="mt-2" href="/giac-certified-project">
                        Certified Information System Security Professional
                        (CISSP)
                      </a>
                      <a className="mt-2" href="/giac-certified-project">
                        GIAC Certified Incident Handler (GCIH){" "}
                      </a>
                      <a className="mt-2" href="/giac-certified-project">
                        GIAC Certified Project Manager (GCPM){" "}
                      </a>

                      <a className="mt-2" href="/giac-certified-project">
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

                      <a className="mt-3 divClass" href="/basic-corporate">
                        Foundation track - (Corporate){" "}
                        <i className="fas fa-caret-right "></i>
                        <span className="AnchorHide">
                          <a href="/service">Basic</a>
                          <a href="/" className="mx-3">
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Certified Secure Computer User (CSCU-112-12)
                          </a>

                          <a href="/service">Intermediate</a>
                          <a href="/" className="mx-3">
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            	Network Security Fundamentals (FNS)
                          </a>
                          <a href="/" className="mx-3">
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Information Security Fundamentals (FIS)
                          </a>

                          <a href="/service"> Advance</a>
                          <a href="/" className="mx-3">
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Computer Forensic Fundamentals (CFF)
                          </a>
                        </span>
                      </a>

                      <a className="mt-3 divClass" href="/basic-corporate">
                        Network Defense and Operations - (Corporate)
                        <i className="fas fa-caret-right "></i>
                        <span className="AnchorHide">
                          <a href="/service">Basic</a>
                          <a href="/" className="mx-3">
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Certified Network Defense (CND-312-38)
                          </a>

                          <a href="/service">Intermediate</a>
                          <a href="/" className="mx-3">
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            EC-Council Disaster Recovery Professional
                            (EDRP-312-76)
                          </a>
                          <a href="/" className="mx-3">
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            EC-Council Certified Incident Handler (ECIH-212-89)
                          </a>

                          <a href="/service"> Advance</a>
                          <a href="/" className="mx-3">
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Securing Windows Infrastructure (CAST-616)
                          </a>
                          <a href="/" className="mx-3">
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Advance Network Defense (CAST-614)
                          </a>
                        </span>
                      </a>

                      <a className="mt-3 divClass" href="/basic-corporate">
                        Software Security - (Corporate){" "}
                        <i className="fas fa-caret-right "></i>
                        <span className="AnchorHide">
                          <a href="/service">Basic</a>
                          <a href="/" className="mx-3">
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Certified Secure Computer User (CSCU-112-12)
                          </a>

                          <a href="/service">Intermediate</a>
                          <a href="/" className="mx-3">
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            EC-Council Certified Secure Programmer JAVA
                            (ECSP-312-94){" "}
                          </a>
                          <a href="/" className="mx-3">
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            EC-Council Certified Secure Programmer .Net
                            (ECSP-312-93)
                          </a>

                          <a href="/service"> Advance</a>
                          <a href="/" className="mx-3">
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Advanced Penetration testing (CAST-611)
                          </a>
                          <a href="/" className="mx-3">
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Securing Windows Infrastructure (CAST-616)
                          </a>
                        </span>
                      </a>

                      <a className="mt-3 divClass" href="/basic-corporate">
                        Vulnerability Assessment & Penetration Testing (VA & PT)
                        - (Corporate) <i className="fas fa-caret-right "></i>
                        <span className="AnchorHide">
                          <a href="/service">Basic</a>
                          <a href="/" className="mx-3">
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Certified Ethical hacker (CEH-312-50)
                          </a>
                          <a href="/" className="mx-3">
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Certified Network Defense (CND-312-38)
                          </a>

                          <a href="/service">Intermediate</a>
                          <a href="/" className="mx-3">
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Licensed Penetration Tester (LPT-412-79)
                          </a>
                          <a href="/" className="mx-3">
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            EC-Council Certified Security Analyst (ECSA-412-79){" "}
                          </a>

                          <a href="/service"> Advance</a>
                          <a href="/" className="mx-3">
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Advanced Penetration testing (CAST-611)
                          </a>
                          <a href="/" className="mx-3">
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Hacking and Hardening Your Corporate Web Application
                            (CAST-613)
                          </a>
                          <a href="/" className="mx-3">
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Securing Windows Infrastructure (CAST-616)
                          </a>
                        </span>
                      </a>

                      <a className="mt-3 divClass" href="/basic-corporate">
                        Cyber Forensic - (Corporate){" "}
                        <i className="fas fa-caret-right "></i>
                        <span className="AnchorHide">
                          <a href="/service">Basic</a>
                          <a href="/" className="mx-3">
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Certified Ethical hacker (CEH-312-50)
                          </a>
                          <a href="/" className="mx-3">
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Certified Network Defense (CND-312-38)
                          </a>

                          <a href="/service">Intermediate</a>
                          <a href="/" className="mx-3">
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            EC-Council Certified Incident Handler (ECIH-212-89)
                          </a>
                          <a href="/" className="mx-3">
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Computer Hacking Forensic Investigator (CHFI-312-49)
                          </a>

                          <a href="/service"> Advance</a>
                          <a href="/" className="mx-3">
                            {" "}
                            <i className="fas fa-circle iconStyle "> </i>{" "}
                            Advanced Mobile Forensics And security (CAST-612)
                          </a>
                        </span>
                      </a>
                      <a className="mt-3 divClass" href="/basic-corporate">
                        Governance - (Corporate){" "}
                        <i className="fas fa-caret-right "></i>
                        <span className="AnchorHide">
                          <a href="/service">
                            {" "}
                            Certified Chief Information Security Officer (CCISO)
                          </a>
                        </span>
                      </a>

                      {/* <a className=" mx-3"  href="/basic-corporate">
                      <i className="fas fa-caret-right "> </i> Basic

                      </a>
                      <a className=" mx-4"  href="/basic-corporate">
                       Certified Secure Computer User (CSCU-112-12)

                      </a>
                      <a className=" mx-3"  href="/basic-corporate">
                      <i className="fas fa-caret-right "> </i> Intermediate
                      </a>
                      <a className=" mx-4"  href="/basic-corporate">
                      Security Fundamentals (FNS)

                      </a>
                      <a style={{lineHeight:"1.2"}}   className=" mx-4"  href="/basic-corporate">
                      Information Security Fundamentals (FIS)

                      </a>
                     

                    <a className="mt-3"   href="/intermidiate-corporate">
                    <i className="fas fa-caret-right "></i>  Advance
                      </a>
                      <a className=" mx-4"  style={{lineHeight:"1.2"}}   href="/basic-corporate">
                    Computer Forensic Fundamentals (CFF)

                      </a>
                       */}
                    </Col>
                  </Row>
                </Container>
              </div>
            </li>

            <li className="menu-item-has-children servicNav">
              <Link to="/training">Training</Link>
              <ul>
                <li className="menu-item-has-children">
                  <Link to="/assesment">Assessment</Link>
                  <ul>
                    <li>
                      <Link
                        style={{ lineHeight: "1.2" }}
                        to="/certified-ethical-hacker"
                      >
                        Certified Ethical Hacker (CEH)
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ lineHeight: "1.2" }}
                        to="/certified-penetration"
                      >
                        Certified Penetration Testing Professional(CPENT)
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ lineHeight: "1.2" }}
                        to="/certified-information-system"
                      >
                        Certified Information Systems Auditor(CISA)
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ lineHeight: "1.2" }}
                        to="/computer-hacking"
                      >
                        Computer Hacking Forensic Investigator(CHFI)
                      </Link>
                    </li>
                    <li>
                      <Link style={{ lineHeight: "1.2" }} to="/open-source">
                        Open Source Intelligence(OSINT)
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ lineHeight: "1.2" }}
                        to="/giac-penetration"
                      >
                        GIAC Penetration Tester(GPEN)
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ lineHeight: "1.2" }}
                        to="/giac-web-application"
                      >
                        GIAC Web Application Penetration Tester(GWAPT)
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="menu-item-has-children">
                  <Link to="/management">Management</Link>
                  <ul>
                    <li>
                      <Link to="/certified-disaster">Certified Disaster</Link>
                    </li>
                    <li>
                      <Link to="/certified-incident-handler">
                        Certified Incident Handler
                      </Link>
                    </li>
                    <li>
                      <Link to="/certified-soc-analyst">
                        Certified SOC Analyst(CSA)
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ lineHeight: "1.2" }}
                        to="/certified-threat"
                      >
                        Certified Threat Intelligence Analyst(CTIA)
                      </Link>
                    </li>

                    <li>
                      <Link
                        style={{ lineHeight: "1.2" }}
                        to="/certified-information-security"
                      >
                        Certified Information Security Manager(CISM)
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ lineHeight: "1.2" }}
                        to="/certified-information-system-security"
                      >
                        Certified Information Systems Security
                        Professional(CISSP)
                      </Link>
                    </li>
                    <li>
                      <Link to="/giac-certified-project">
                        GIAC Certified Project Manager (GCPM)
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="menu-item-has-children">
                  <Link to="customized">Customized</Link>
                  <ul>
                    <li>
                      <Link to="/basic-corporate">Basic</Link>
                    </li>
                    <li>
                      <Link to="/advance-corporate">Advance</Link>
                    </li>
                    <li>
                      <Link to="/intermidiate-corporate">Intermediate</Link>
                    </li>
                    <li>
                      <Link to="/one-to-one-training">One to One Training</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* <li className="dropdown serviceNav2">
              <Link to="/partners" className="dropbtn1">Partners</Link>
              <div  style ={{  minWidth: "600px",left:"-280px",height:"500px"}} className="dropdown-content">
                <Container className="mt-4">
                  <Row>
                    <Col style={{borderRight:"1px solid #6f42c1"}}>
                    <a  style={{fontWeight:"bold",color:"orange"}}href="/service-partners">Service Partner</a>
 
                      <a className="mt-3" href="https://www.eccouncil.org/">EC-Council (Security Training Partner)</a>
                 
                      <a className="mt-3"  href="https://home.pearsonvue.com/">Pearson Vue (Exam testing Center)</a>
                    
                      <a className="mt-3"  href="https://pecb.com/en">PECB (ISO)</a>
                   
                    
                      <a className="mt-3"  href="https://sckcerts.com/">SCK & ARS (ISO)</a>
                   
                      <a className="mt-3"  href="https://www.acnabin.com/">ACNABIN (CA Firm for Financial Control)</a>

                    </Col>

                  <Col>
                  
                  <a  style={{fontWeight:"bold",color:"orange"}}href="/solution-partners">Solution Partner</a>
                   <a className="mt-3"  href="https://www.invicti.com/">INVICTI</a>
                      <a className="mx-3" href="https://www.invicti.com/">
                      <i   className="fas fa-circle iconStyle "> </i>  Net Sparker

                      </a>
                      <a className="mx-3" href="https://www.invicti.com/">
                      <i   className="fas fa-circle iconStyle "> </i> Acunetix etc.
                      </a>


                      <a className="mt-3"  href="https://www.invicti.com/">Tenable</a>
                      <a className="mx-3" href="https://www.invicti.com/">
                      <i   className="fas fa-circle iconStyle "> </i>  Nessus Pro

                      </a>
                      <a className="mx-3" href="https://www.invicti.com/">
                      <i   className="fas fa-circle iconStyle "> </i> All Tenable Products
                      </a>

 
                      <a className="mt-3"  href="https://www.coresecurity.com/products/core-impact">
                         HelpSystems
                      </a>

                      <a className="mx-3" href="https://www.invicti.com/">
                      <i   className="fas fa-circle iconStyle "> </i>   Core Impact
                      </a>
                  
                      <a className="mt-3"  href="https://portswigger.net/burp">SCK & ARS (ISO)</a>
                      <a className="mt-3"  href="https://portswigger.net/burp">ACNABIN (CA Firm for Financial Control)</a>


                  </Col>

                  
                </Row>
              </Container>
                    

              </div>
            </li>  

            <li className="servicNav steps-sampling">
              <Link to="/partners">Partners</Link>
              <ul>
                <li>
                  <Link to="/service-partners">Service Partner</Link>
                  <ul>
                    <li>
                      <Link to="https://www.eccouncil.org/">EC Council</Link>
                    </li>
                    <li>
                      <Link to="https://home.pearsonvue.com/">Pearson Vue</Link>
                    </li>
                    <li>
                      <Link to="https://pecb.com/en">PECB ISO Certification</Link>
                    </li>
                    <li>
                      <Link to="https://arscert.com/certification/">ARS</Link>
                    </li>
                    <li>
                      <Link to="https://sckcerts.com/">SCK</Link>
                    </li>
                    <li>
                      <Link to="https://www.acnabin.com/">ACNABIN</Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link to="/solution-partners">Solution Partner</Link>
                  <ul>
                    <li>
                      <Link to="https://www.invicti.com/">INVICTI</Link>
                    </li>
                    <li>
                      <Link to="https://www.coresecurity.com/products/core-impact">
                        Core Impact
                      </Link>
                    </li>
                    <li>
                      <Link to="https://portswigger.net/burp">Burp Suite</Link>
                    </li>
                  </ul>
                </li>
                 
              </ul>
            </li>*/}

            {/* <li className="menu-item-has-children">
        <Link to="/blogs">Cyber Blog</Link>  
              <ul>
                <li>
                  <Link to="https://portswigger.net/burp">CCA, Ministry of ICT (First and 2022)</Link>
                </li>
                <li>
                  <Link to="https://portswigger.net/burp">
                  PCI SSC, USA
                  </Link>
                </li>
                <li>
                  <Link to="https://portswigger.net/burp">
                  World Bank Groups (WBGs)

                  </Link>
                </li>

                <li>
                  <Link to="https://portswigger.net/burp">
                  SWIFT

                  </Link>
                </li>

                <li>
                  <Link to="https://portswigger.net/burp">
                  BASIS

                  </Link>
                </li>

                <li>
                  <Link to="https://portswigger.net/burp">
                  E-Cab


                  </Link>
                </li>
                <li>
                  <Link to="https://portswigger.net/burp">
                  BCS

                  </Link>
                </li>
              </ul>
            </li> */}

            {/* 
            <li className="menu-item-has-children">
            <Link to="/blogs">Resources</Link>  
              <ul>
                <li>
                  <Link to="/about-us">Event</Link>
                </li>
                <li>
                  <Link to="/careers">
                  News
                  </Link>
                </li>
                <li>
                  <Link to="about-us">
                  Webinars
                  </Link>
                </li>

                <li>
                  <Link to="/about-us">Event</Link>
                </li>
                <li>
                  <Link to="/careers">
                  Courses
                  </Link>
                </li>
                <li>
                  <Link to="about-us">
                  Newsletters
                  </Link>
                </li>
                <li>
                  <Link to="about-us">
                  Blog  </Link>
                </li>
                <li>
                  <Link to="about-us">
                  Useful Links  </Link>
                </li>
              </ul>
            </li> */}

          <li className="menu-item-has-children">
              <Link to="/industries">Resources</Link>
              <ul>
                <li>
                  <Link to="/blogs">	Blogs</Link>
                </li>
                <li>
                  <Link style={{ lineHeight: "1.2" }} to="/Case Studies">
                 Case Studies
                  </Link>
                </li>
                <li>
                  <Link style={{ lineHeight: "1.2" }} to=" Checklists">
                  Checklists
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ lineHeight: "1.2" }}
                    to="/  	WhitePapers"
                  >
                    	WhitePapers
                  </Link>
                </li>
                <li>
                  <Link style={{ lineHeight: "1.2" }} to="/ 	Infographics">
                  	Infographics
                  </Link>
                </li>
                <li>
                  <Link to="/ 	DataSheets"> 	DataSheets</Link>
                </li>
                <li>
                  <Link to="/ecommerce-retail"> 	Webinars</Link>
                </li>
                {/* <li>
                  <Link to="/health-care">Health Care</Link>
                </li> */}
               
              </ul>
            </li>

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

              {/* <!-- /.main-menu__cta__text --> */}
            </Link>
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
            <h5>Select Country</h5>
            {/* <li><Link to="/"><img src="/assets/images/flag/usa.png" width="40px"/></Link></li>
          <li><Link to="/"><img src="/assets/images/flag/aus.png" width="40px"/></Link></li>
          <li><Link to="/"><img src="/assets/images/flag/de.png" width="40px"/></Link></li>  */}
            <select
              className="mobileTopbar text-light"
              onChange={(event) => {
                setShow(event.target.value);
              }}
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

          <ul className="mobile-nav__contact list-unstyled">
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
                  5669 N Fresno St, Apt 232
Fresno, CA 93710      </li>
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
          <ul className="mobile-nav__social">
            <li>
              <Link to="/">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fab fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fab fa-pinterest-p"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
