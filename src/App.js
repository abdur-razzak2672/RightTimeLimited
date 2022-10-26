import { BrowserRouter as Router, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import CookieConsent from "react-cookie-consent";
// Header Section Imported Start
import Header from "./components/Header";
// Header Section Imported End

// Dashboard Section Imported Start
import Dashboard from "./dashboard/Dashboard";
// Dashboard Section Imported End

// About Section Imported Start
import AboutUs from "./views/About/AboutUs";
// About Section Imported Start

// Industris Section Imported Start
import IndustriesBody from "./views/Industries/IndustriusBody";
import BankNbfi from "./views/Industries/BankNbfi";
import Telecomunication from "./views/Industries/Telecomunication";
import PaymentCard from "./views/Industries/PaymentCard";
import Educational from "./views/Industries/Educational";
import EcommerceReatail from "./views/Industries/EcommerceReatail";
import HealthCare from "./views/Industries/HealthCare";
// Industris Section Imported End

// Partner Section Imported start
import PartnerBody from "./views/Partners/PartnerBody";
import ServicePartner from "./views/Partners/ServicePartner";
import SolutionPartner from "./views/Partners/SolutionPartner";
import Association from "./views/Partners/Association";
// Partner Section Imported End


//Service Section Imported Start
import ServiceBody from "./views/Services/ServiceBody";
//Consultation
import ConsultationBody from "./views/Services/Consultation/ConsultationBody";
import ConsultationOnShaping from "./views/Services/Consultation/ConsultationOnShaping";
import InformationSecuritySpecial from "./views/Services/Consultation/InformationSecuritySpecial";
import ProjectManagement from "./views/Services/Consultation/ProjectManagement";
import ProvidingSecurity from "./views/Services/Consultation/ProvidingSecurity";
import SwiftCyberSecurity from "./views/Services/Consultation/SwiftCyberSecurity";
import TechnicalDoccumentation from "./views/Services/Consultation/TechnicalDoccumentation";
//auditing
import AuditingBody from "./views/Services/Auditing/AuditingBody";
import DcDrsAuditing from "./views/Services/Auditing/DcDrsAuditing";
import InformationSecurityGraded from "./views/Services/Auditing/InformationSecurityGraded";
import InformationTechnology from "./views/Services/Auditing/InformationTechnology";
import InformatonSystem from "./views/Services/Auditing/InformatonSystem";
import SwiftCsp from "./views/Services/Auditing/SwiftCsp";
//Security testing
import SecuirityTesting from "./views/Services/SecuirityTesting/SecurityTesting";
import CodeReview from "./views/Services/SecuirityTesting/CodeReview";
import DigitalForensics from "./views/Services/SecuirityTesting/DigitalForensics";
import VulnerabilityAssesment from "./views/Services/SecuirityTesting/VulnerabilityAssesment";
import SoftwareQuality from "./views/Services/SecuirityTesting/SoftwareQuality";
//certification
import CertificationBody from "./views/Services/Certification/CertificationBody";
import Cmmi from "./views/Services/Certification/Cmmi";
import IsoInternational from "./views/Services/Certification/IsoInternational";
import TiaForDataCenter from "./views/Services/Certification/TiaForDataCenter";
import PciDssPayment from "./views/Services/Certification/PciDssPayment";
//Service Section Imported End

//Solution Section Imported Start
import SolutionBody from "./views/Solutions/SolutionBody";
import Acunetix from "./views/Solutions/Acunetix";
import BulkSms from "./views/Solutions/BulkSms";
import BurpSuite from "./views/Solutions/BurpSuite";
import CoreImpact from "./views/Solutions/CoreImpact";
import FireWall from "./views/Solutions/FireWall";
import NetSparker from "./views/Solutions/NetSparker";
import Siem from "./views/Solutions/Siem";
import SmartContact from "./views/Solutions/SmartContact";
//Solution Section Imported End

//Trainig Section Imported Start
import TrainingBody from "./views/Training/TrainingBody";
//Assessment
import AssessmentBody from "./views/Training/Assesment/AssessmentBody";
import CertifiedEthicalHacker from "./views/Training/Assesment/CertifiedEthicalHacker";
import CertifiedPenetration from "./views/Training/Assesment/CertifiedPenetration";
import ComputerHacking from "./views/Training/Assesment/ComputerHacking";
import GiacPenetration from "./views/Training/Assesment/GiacPenetration";
import GiacWebApplication from "./views/Training/Assesment/GiacWebApplication";
import OpenSource from "./views/Training/Assesment/OpenSource";
//Management
import ManagementBody from "./views/Training/Management/ManagementBody";
import CertifiedDisaster from "./views/Training/Management/CertifiedDisaster";
import CertifiedIncidentHandler from "./views/Training/Management/CertifiedIncidentHandler";
import CertifiedInformationSystem from "./views/Training/Management/CertifiedInformationSystem";
import CertifiedInformationSecurity from "./views/Training/Management/CertifiedInformationSecurity";
import CertifiedInformationSystemSecurity from "./views/Training/Management/CertifiedInformationSystemSecurity";
import CertifiedSocAnalyst from "./views/Training/Management/CertifiedSocAnalyst";
import CertifiedThreat from "./views/Training/Management/CertifiedThreat";
import GiacCertifiedProject from "./views/Training/Management/GiacCertifiedProject";
//Customizes
import CustomizedBody from "./views/Training/Customized/CustomizedBody";
import AdvanceCorporate from "./views/Training/Customized/AdvanceCorporate";
import BasisCorporate from "./views/Training/Customized/BasisCorporate";
import IntermidiateCorporate from "./views/Training/Customized/IntermidiateCorporate";
import OneToOneTraining from "./views/Training/Customized/OneToOneTraining";
// Trainig Section Imported End

//Careers Section Imported Start
import CareersBody from "./views/Careers/CareersBody";
import ViewJob from "./views/Careers/ViewJob";
import StartProject from "./views/Careers/StartProject";
//Careers Section Imported End

//Contact Section Imported Start
import ContactUs from "./views/Contact/ContactUs";
//Contact Section Imported End

//Footer Section Imported Start
import Footer from "./components/Footer";
//Footer Section Imported End

// blog Section Imported Start
import Blogs from "./views/blogs/Blogs";
import BlogDetails from "./views/blogs/BlogDetails";

import React,{useState} from 'react'
import blogs from "./views/blogs/Blogs";

function App() {
  const [show, setShow] = useState("1");


  function showCountry(e) {
    const num = e.target.value;
    console.log(num);
    setShow([...show, num]);
  }


  return (
    <Router>
       <div className="custom-cursor__cursor"></div>
  <div className="custom-cursor__cursor-two"></div>
  <div className="preloader">
    <div className="preloader__circle"></div>
  </div>
  <div className="page-wrapper">
  <div className="topbar">
        <div className="container-fluid">
          <p className="topbar__text">Welcome to Right Time Limited</p>
          {
            show === '1' ?
              <img className="m-2" width = "30px" src = "assets/images/flag/bd.png" alt=""/>
            
            :show==='2'?
              <img className="m-2" width = "30px" src = "assets/images/flag/usa.png" alt=""/>
            :show==='3'?
              <img className="m-2" width = "30px" src = "assets/images/flag/aus.png" alt=""/>
              :<img className="m-2" width = "30px" src = "assets/images/flag/de.png" alt=""/>

            
           
          }
         

          <ul className="topbar__info">
          {
            show === '1' ?(
            <>
                <li>
                <i className="fa fa-envelope"></i>
                <a href="/">info@righttime.biz</a>
              </li>
              <li>
                <i className="fa fa-map-marker"></i>
                Level: 06 & 14 (west), BDBL Bhaban, 12, Karwan Bazar, Tejgaon
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

            <li>
              <div className="dropdown">
                <div className="dropbtn">
                  {/* Countrie
                  <i
                    className="fa fa-solid fa-square-caret-down"
                    style={{ paddingTop: "10px" }}
                  ></i> */}
                </div>
                {/* <select className="dropdown-content">
                  <option>USA</option>
                  <a href="/">Australia</a>
                  <a href="/">Germany</a>
                </select> */}
                    <select className="topbar text-light"
                onChange={(event) => {
                  setShow(event.target.value);
                }}
                >
                <option onClick={showCountry} value="1"><a href="/">BD</a></option>
                <option onClick={showCountry}value="2"><a href="/">USA</a></option>
                <option onClick={showCountry}value="3"><a href="/">Australia</a></option>
                <option onClick={showCountry} value="4"><a href="/">Germany</a></option>
               </select>               
              </div>
            </li>
          </ul>
        </div>
      </div>
  <Header show = {show} setShow={setShow}/>
      <div>

        <CookieConsent
          location="bottom"
          buttonclassNamees="rounded-pill"
          
          buttonText="Accepted Cookies"
          cookieName="myAwesomeCookieName2"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px",borderReidus:"60px", textAlign: "center", alignItem:"center" ,marginRight:"150px" }}
          expires={350}

        >
         We use cookies to enhance your user experience. By continuing to browse, you hereby agree to the use of cookies. To know more; visit our <a href="/">Privacy Policy</a> & <a href="/">Cookies Policy.</a>  
        </CookieConsent>

        {/*Dashboard Section Route Declaration start */}
        <Route path="/" component={Dashboard} exact />
        {/*Dashboard Section Route Declaration end */}

        {/*AboutUs Section Route Declaration start */}
        <Route path="/about-us" component={AboutUs} exact />
         {/*AboutUs Section Route Declaration end */}

        {/*Industries Section Route Declaration start */}
        <Route path="/industries" component={IndustriesBody} exact />
        <Route path="/bank-nbfi" component={BankNbfi} exact />
        <Route path="/telecomunication" component={Telecomunication} exact />
        <Route path="/payment-card" component={PaymentCard} exact />
        <Route path="/educational-institutions" component={Educational} exact />
        <Route path="/ecommerce-retail" component={EcommerceReatail} exact />
        <Route path="/health-care" component={HealthCare} exact />
        {/*Industries Section Route Declaration End */}

        {/*PArtner Section Route Declaration Start */}
        <Route path="/partners" component={PartnerBody} exact />
        <Route path="/service-partners" component={ServicePartner} exact />
        <Route path="/solution-partners" component={SolutionPartner} exact />
        <Route path="/association-partners" component={Association} exact />
         {/*Partner Section Route Declaration End */}

        {/*Services Section Route Declaration Start */}
        {/* Consultation */}
        <Route path="/services" component={ServiceBody} exact />
        <Route path="/consultation" component={ConsultationBody} exact />
        <Route path="/consultation-on-shaping" component={ConsultationOnShaping} exact />
        <Route path="/information-security-Special" component={InformationSecuritySpecial} exact />
        <Route path="/project-management" component={ProjectManagement} exact />
        <Route path="/providing-security" component={ProvidingSecurity} exact />
        <Route path="/swift-cyber-security" component={SwiftCyberSecurity} exact />
        <Route path="/technical-documentation" component={TechnicalDoccumentation} exact />
         {/* Auditing */}
        <Route path="/auditing" component={AuditingBody} exact />
        <Route path="/dc-drs-auditing" component={DcDrsAuditing} exact />
        <Route path="/information-security-graded" component={InformationSecurityGraded} exact />
        <Route path="/information-technology" component={InformationTechnology} exact />
        <Route path="/information-system" component={InformatonSystem} exact />
        <Route path="/swift-csp" component={SwiftCsp} exact />
        {/* Security Testing */}
        <Route path="/security-testing" component={SecuirityTesting} exact />
        <Route path="/code-review" component={CodeReview} exact />
        <Route path="/digital-forensics" component={DigitalForensics} exact />
        <Route path="/vulnerability-assessment" component={VulnerabilityAssesment} exact />
        <Route path="/software-quality" component={SoftwareQuality} exact />
        {/* Certification */}
        <Route path="/certification" component={CertificationBody} exact />
        <Route path="/cmmi" component={Cmmi} exact />
        <Route path="/iso-international" component={IsoInternational} exact />
        <Route path="/tia-for-data-center" component={TiaForDataCenter} exact />
        <Route path="/pci-dss-payment" component={PciDssPayment} exact />
        {/*Services Section Route Declaration End */}

        {/*Solution Section Route Declaration Start */}
        <Route path="/solutions" component={SolutionBody} exact />
        <Route path="/acunetix" component={Acunetix} exact />
        <Route path="/bulk-sms" component={BulkSms} exact />
        <Route path="/burp-suite" component={BurpSuite} exact />
        <Route path="/core-impact" component={CoreImpact} exact />
        <Route path="/firewall" component={FireWall} exact />
        <Route path="/netsparker" component={NetSparker} exact />
        <Route path="/siem" component={Siem} exact />
        <Route path="/smart-contact" component={SmartContact} exact />
        {/*Solution Section Route Declaration End */}

        {/*Training Section Route Declaration Start */}
        {/* Assessment */}
        <Route path="/training" component={TrainingBody} exact />
        <Route path="/assesment" component={AssessmentBody} exact />
        <Route path="/certified-ethical-hacker" component={CertifiedEthicalHacker} exact />
        <Route path="/certified-penetration" component={CertifiedPenetration} exact />
        <Route path="/computer-hacking" component={ComputerHacking} exact />
        <Route path="/giac-penetration" component={GiacPenetration} exact />
        <Route path="/giac-web-application" component={GiacWebApplication} exact />
        <Route path="/open-source" component={OpenSource} exact />
        {/*Management */}
        <Route path="/management" component={ManagementBody} exact />
        <Route path="/certified-disaster" component={CertifiedDisaster} exact />
        <Route path="/certified-incident-handler" component={CertifiedIncidentHandler} exact />
        <Route path="/certified-information-system" component={CertifiedInformationSystem} exact />
        <Route path="/certified-information-security" component={CertifiedInformationSecurity} exact />
        <Route path="/certified-information-system-security" component={CertifiedInformationSystemSecurity} exact />
        <Route path="/certified-soc-analyst" component={CertifiedSocAnalyst} exact />
        <Route path="/certified-threat" component={CertifiedThreat} exact />
        <Route path="/giac-certified-project" component={GiacCertifiedProject} exact />
        {/*Customized */}
        <Route path="/customized" component={CustomizedBody} exact />
        <Route path="/advance-corporate" component={AdvanceCorporate} exact />
        <Route path="/basic-corporate" component={BasisCorporate} exact />
        <Route path="/intermidiate-corporate" component={IntermidiateCorporate} exact />
        <Route path="/one-to-one-training" component={OneToOneTraining} exact />
        {/*Trainig Section Route Declaration End */}

        {/*Careers Section Route Declaration start */}
        <Route path="/careers" component={CareersBody} exact />
        <Route path="/view-job" component={ViewJob} exact />
        <Route path="/contact" component={StartProject} exact />

        {/*Careers Section Route Declaration End */}

        {/*Contact Section Route Declaration start */}
        <Route path="/contact-us" component={ContactUs} exact />
        {/*Contact Section Route Declaration End */}

        {/*Blog Section Route Declaration start */}
        <Route path="/blogs" component={blogs} exact />
        <Route path="/blog-details" component={BlogDetails} exact />

      

      </div>
      {/* Footer Section Route Declaration */}
       <Footer show = {show} setShow={setShow}/>
<a href="#" data-target="html" className="scroll-to-target scroll-to-top">
        <i className="fa fa-angle-up"></i>
      </a>
  </div>
      
      
    </Router>
  );
}

export default App;
