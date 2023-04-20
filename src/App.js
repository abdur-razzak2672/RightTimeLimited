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
import MissionStatement from "./views/About/MissionStatement";
import Testmonial from "./views/About/Rtl/Testmonial";
import Events from "./views/About/news-event/Events";
import PictureGallaries from "./views/About/news-event/PictureGallaries";
import Publication from "./views/About/news-event/Publication";
import PressRelased from "./views/About/news-event/PressRelased";
// About Section Imported Start

// Industris Section Imported Start
import IndustriesBody from "./views/Industries/IndustriusBody";
import BankNbfi from "./views/Industries/BankNbfi";
import Telecomunication from "./views/Industries/Telecomunication";
import PaymentCard from "./views/Industries/PaymentCard";
import Educational from "./views/Industries/Educational";
import EcommerceReatail from "./views/Industries/EcommerceReatail";
import Insurance from "./views/Industries/Insurance";
import BpoService from "./views/Industries/BpoService";
import PowerSector from "./views/Industries/PowerSector";

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
import PciDss from "./views/Services/Consultation/PciDss";
//auditing
import AuditingBody from "./views/Services/Auditing/AuditingBody";
import DcDrsAuditing from "./views/Services/Auditing/DcDrsAuditing";
import InformationSecurityGraded from "./views/Services/Auditing/InformationSecurityGraded";
import InformationTechnology from "./views/Services/Auditing/InformationTechnology";
import InformatonSystem from "./views/Services/Auditing/InformatonSystem";
import Soc1Audit from "./views/Services/Auditing/Soc1Audit";
import Soc2Audit from "./views/Services/Auditing/Soc2Audit";
 

 //Security testing
import SecuirityTesting from "./views/Services/SecuirityTesting/SecurityTesting";
import CodeReview from "./views/Services/SecuirityTesting/CodeReview";
import DigitalForensics from "./views/Services/SecuirityTesting/DigitalForensics";
import VulnerabilityAssesment from "./views/Services/SecuirityTesting/VulnerabilityAssesment";
import SoftwareQuality from "./views/Services/SecuirityTesting/SoftwareQuality";
 import SwiftCsp from "./views/Services/SecuirityTesting/SwiftCsp";
 import PosterAssessment from "./views/Services/SecuirityTesting/PosterAssessment";
 import BreachAttack from "./views/Services/SecuirityTesting/BreachAttack";
//certification
import CertificationBody from "./views/Services/Certification/CertificationBody";
import Cmmi from "./views/Services/Certification/Cmmi";
import IsoInternational from "./views/Services/Certification/IsoInternational";
import TiaForDataCenter from "./views/Services/Certification/TiaForDataCenter";
import PciDssPayment from "./views/Services/Certification/PciDssPayment";
import IsoStandard from "./components/services/iso/IsoStandard";
import GDPRCertification from "./views/Services/Certification/GDPRCertification";
import HippaCertification from "./views/Services/Certification/HippaCertification";
//Service Section Imported End

//Managed Service Section Imported Start
import ManagedServiceBody from "./views/ManagedServices/ManagedServiceBody";
import CloudeApp from "./views/ManagedServices/CloudeApp";
import DamAsService from "./views/ManagedServices/DamAsService";
import ManagedNextgen from "./views/ManagedServices/ManagedNextgen";
import MdrAsService from "./views/ManagedServices/MdrAsService";
import PmAsService from "./views/ManagedServices/PmAsService";
import PtAsServices from "./views/ManagedServices/PtAsServices";
import SocAsService from "./views/ManagedServices/SocAsService";
import VaAsService from "./views/ManagedServices/VaAsService";

//Managed Service Section Imported End

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
import PenetrationTesting from "./views/Training/Assesment/PenetrationTesting";
 import CertifiedPenetration from "./views/Training/Assesment/CertifiedPenetration";
import ComputerHacking from "./views/Training/Assesment/ComputerHacking";
import GiacPenetration from "./views/Training/Assesment/GiacPenetration";
import GiacWebApplication from "./views/Training/Assesment/GiacWebApplication";
import CertifiedInformation from "./views/Training/Assesment/CertifiedInformation";
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
import ApplyJob from "./views/Careers/ApplyJob";
import AllJob from "./views/Careers/AllJob";
//Careers Section Imported End

//Contact Section Imported Start
import ContactUs from "./views/Contact/ContactUs";
//Contact Section Imported End

//Footer Section Imported Start
import Footer from "./components/Footer";
//Footer Section Imported End

// blog Section Imported Start
 import BlogDetails from "./views/resource/BlogDetails";
import React,{useState} from 'react'
import blogs from "./views/resource/Blogs";

// Team section imported
import Team from "./views/Company/team/Team";
 

// Account Section Imported Start
import Login from "./views/Accounts/Login";
import LoginBody from "./views/Accounts/LoginBody";

//Incident Section Imported Start
 
import IncidentBody from "./views/incident/IncidentBody";


// cyber Defence Section Imported Start
import CyberDefenseCenter from "./views/incident/CyberDefenseCenter";
 import CyberDefenseServices from "./views/incident/CyberDefenseServices";
 import DefenceCenter from "./views/incident/DefenceCenter";
 import Services from "./views/incident/Services";
import AssociationBody from "./views/Association/AssociationBody";



//  Association Section Imported End
import Basis from "./views/Association/Basis";
import Bcs from "./views/Association/Bcs";
import Cca from "./views/Association/Cca";
import Pci from "./views/Association/Pci";
import Swift from "./views/Association/Swift";
import WorlBank from "./views/Association/WorlBank";

//  Association Section Imported End


//Service Partners Section Imported Start
import Acnabin from "./views/Partners/ServicePertner/Acnabin";
import EcCouncil from "./views/Partners/ServicePertner/EcCouncil";
import PersonView from "./views/Partners/ServicePertner/PersonView";
import Pecb from "./views/Partners/ServicePertner/Pecb";
import Sck from "./views/Partners/ServicePertner/Sck";


// Service Partners Section Imported End

// Solution Partners Section Imported Start

import Alltenable from "./views/Partners/SolutionPartner/Alltenable";
import BurpSuit from "./views/Partners/SolutionPartner/BurpSuit";
// import CoreImpact from "./views/Partners/SolutionPartner/CoreImpact";
import HelpSystem from "./views/Partners/SolutionPartner/HelpSystem";
import Invicti from "./views/Partners/SolutionPartner/Invicti";
import ManageService from "./views/Partners/SolutionPartner/ManageService";
import Nessus from "./views/Partners/SolutionPartner/Nessus";
// import NetSparker from "./views/Partners/SolutionPartner/NetSparker";
import PortSwigger from "./views/Partners/SolutionPartner/PortSwigger";
import SafeAen from "./views/Partners/SolutionPartner/SafeAen";
import Tenable from "./views/Partners/SolutionPartner/Tenable";
import Ecab from "./views/Association/Ecab";
import Industry4 from "./views/Services/Consultation/Industry4.0";
import LeanConsultation from "./views/Services/Consultation/LeanConsultation";
import SixSigma from "./views/Services/Consultation/SixSigma";
import ZeroTrust from "./views/Services/Consultation/ZeroTrust";
import PrivillegeAccess from "./views/Solutions/PrivillegeAccess";
import GIACCertifiedIncident from "./views/Training/Management/GIACCertifiedIncident";
import PracticalEthicalHacker from "./views/Training/Management/PracticalEthicalHacker";
import OpenSource from "./views/Training/Management/OpenSource";


import CaseStudies from "./views/resource/CaseStudies";
import CheckList from "./views/resource/CheckList";
 import Webinar from "./views/resource/Webinars";
import DataSheet from "./views/resource/DataSheet";
import WhitePapers from "./views/resource/WhitePapers";
import Infographics from "./views/resource/Infographics";


 

 





function App() {
  const [show, setShow] = useState("1");


  // function showCountry(e) {
  //   const num = e.target.value;
  //   console.log(num);
  //   setShow([...show, num]);
  // }


  return (
    <Router>
   <div className="custom-cursor__cursor"></div>
  <div className="custom-cursor__cursor-two"></div>
  
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
          <li><marquee style={{color:"orange"}}>together we make the world happier</marquee></li>

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
                <a href="mailto:info@righttime.biz"> coo.usa@righttime.biz</a>
            </li>
            <li>
                <i className="fa fa-map-marker"></i>
                5669 N Fresno St, Apt 232
Fresno, CA 93710   </li>
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
         <a className="px-3" href="/login-body"> <li className="px-3 text-light  " style={{border:"1px solid gray"}}>Login (Customer + Employee)</li></a>

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
                <option   value="1"><a href="/">Bangladesh</a></option>
                <option  value="2"><a href="/">USA</a></option>
                <option  value="3"><a href="/">Australia</a></option>
                <option  value="4"><a href="/">Germany</a></option>
               </select>               
              </div>
            </li>
          </ul>
        </div>
      </div>
  <Header show = {show} setShow={setShow}/>
      <div>
{/* 
      <div>
    <CookieBanner
    className="react-cookie-law-accept-selection-btn"
    styles={{
      dialog: { backgroundColor: 'gray',height:"30vh", margin:"100px 500px" },
      button:{color:"white",backgroundColor:"blue",padding:"2px", width:"120px",borderRadius:"5px",marginRight:"20px"},
      optionLabel:{color:"black",paddingLeft:"20px",marginTop:"-100px"}
      // container:{margin:"100px"}
     }}
      message=" We use cookies to enhance your user experience. By continuing to browse, you hereby agree to the use of cookies."
      onAcceptPreferences = {() => { 
       }}
      onAcceptStatistics = {() => {
        }}
      onAcceptMarketing = {() => {
       }}
    />
  </div> */}

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
        <Route path="/mission-statement" component={MissionStatement} exact />
        <Route path="/testmonial" component={Testmonial} exact />
        <Route path="/events" component={Events} exact />
        <Route path="/publication" component={Publication} exact />
        <Route path="/press-release" component={PressRelased} exact />
        <Route path="/picture-gallery" component={PictureGallaries} exact />


        {/* Association  Section Route Declaration start   */}
        <Route path="/Basis" component={Basis} exact />
        <Route path="/Bcs" component={Bcs} exact />
        <Route path="/Cca" component={Cca} exact />
         <Route path="/Ecab" component={Ecab} exact />
        <Route path="/Pci" component={Pci} exact />
        <Route path="/Swift" component={Swift} exact />
        <Route path="/WorlBank" component={WorlBank} exact />

        {/* Association  Section Route Declaration End   */}

        {/* Service Partner  Section Route Declaration start  */}

        <Route path="/Acnabin" component={Acnabin} exact />
        <Route path="/EcCouncil" component={EcCouncil} exact />
        <Route path="/Pecb" component={Pecb} exact />
        <Route path="/PersonView" component={PersonView} exact />
        <Route path="/Sck" component={Sck} exact />

        {/* Service Partner  Section Route Declaration End  */}
        {/* Slution Partner  Section Route Declaration start  */}



        <Route path="/Alltenable" component={Alltenable} exact />
        <Route path="/BurpSuit" component={BurpSuit} exact />
        <Route path="/HelpSystem" component={HelpSystem} exact />
        <Route path="/Invicti" component={Invicti} exact />
        <Route path="/ManageService" component={ManageService} exact />
        <Route path="/Nessus" component={Nessus} exact />
        <Route path="/PortSwigger" component={PortSwigger} exact />
        <Route path="/SafeAen" component={SafeAen} exact />
        <Route path="/Tenable" component={Tenable} exact />
      










         {/*AboutUs Section Route Declaration end */}

        {/*Industries Section Route Declaration start */}
        <Route path="/industries" component={IndustriesBody} exact />
        <Route path="/bank-nbfi" component={BankNbfi} exact />
        <Route path="/telecomunication" component={Telecomunication} exact />
        <Route path="/payment-card" component={PaymentCard} exact />
        <Route path="/educational-institutions" component={Educational} exact />
        <Route path="/ecommerce-retail" component={EcommerceReatail} exact />
        <Route path="/health-care" component={HealthCare} exact />
        <Route path="/insurance" component={Insurance} exact />
        <Route path="/bpo-service" component={BpoService} exact />
        <Route path="/power-sector" component={PowerSector} exact />

         
        {/*Industries Section Route Declaration End */}

        {/*PArtner Section Route Declaration Start */}
        <Route path="/partners" component={PartnerBody} exact />
        <Route path="/service-partners" component={ServicePartner} exact />
        <Route path="/solution-partners" component={SolutionPartner} exact />
        <Route path="/association-partners" component={Association} exact />
        <Route path="/association-body" component={AssociationBody} exact />

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
        <Route path="/pci-dss-consultation" component={PciDss} exact />
        <Route path="/Lean-Consultation" component={LeanConsultation} exact />
        <Route path="/Six-sigma" component={SixSigma} exact />
        <Route path="/industry-4.0" component={Industry4} exact />
        <Route path="/zero-trust" component={ZeroTrust} exact />






         {/* Auditing */}
        <Route path="/auditing" component={AuditingBody} exact />
        <Route path="/dc-drs-auditing" component={DcDrsAuditing} exact />
        <Route path="/information-security-graded" component={InformationSecurityGraded} exact />
        <Route path="/information-technology" component={InformationTechnology} exact />
        <Route path="/information-system" component={InformatonSystem} exact />
        <Route path="/swift-csp" component={SwiftCsp} exact />
        <Route path="/soc-1" component={Soc1Audit} exact />
        <Route path="/soc-2" component={Soc2Audit} exact />

        {/* Security Testing */}
        <Route path="/security-testing" component={SecuirityTesting} exact />
        <Route path="/code-review" component={CodeReview} exact />
        <Route path="/digital-forensics" component={DigitalForensics} exact />
        <Route path="/vulnerability-assessment" component={VulnerabilityAssesment} exact />
        <Route path="/software-quality" component={SoftwareQuality} exact />
        <Route path="/breach-attack" component={BreachAttack} exact />
        <Route path="/poster-assessment" component={PosterAssessment} exact />

        {/* Certification */}
        <Route path="/certification" component={CertificationBody} exact />
        <Route path="/cmmi" component={Cmmi} exact />
        <Route path="/iso-international" component={IsoInternational} exact />
        <Route path="/tia-for-data-center" component={TiaForDataCenter} exact />
        <Route path="/pci-dss-payment" component={PciDssPayment} exact />
        <Route path="/iso-standard" component={IsoStandard} exact />
        <Route path="/gdpr-certification" component={GDPRCertification} exact />
        <Route path="/hippa-certification" component={HippaCertification} exact />


        {/*Services Section Route Declaration End */}

        {/* Managed Service Section Route Declaration Start*/}
        <Route path="/managed-service" component={ManagedServiceBody} exact />
        <Route path="/cloud-app" component={CloudeApp} exact />
        <Route path="/dam-as-service" component={DamAsService} exact />
        <Route path="/managed-nextgen" component={ManagedNextgen} exact />
         <Route path="/mdr-as-service" component={MdrAsService} exact />
        <Route path="/Attact-surface" component={PmAsService} exact />
        <Route path="/pt-as-service" component={PtAsServices} exact />
        <Route path="/soc-as-service" component={SocAsService} exact />
        <Route path="/va-as-service" component={VaAsService} exact />

        {/*Solution Section Route Declaration Start */}
        <Route path="/solutions" component={SolutionBody} exact />
        <Route path="/acunetix" component={Acunetix} exact />
        <Route path="/bulk-sms" component={BulkSms} exact />
        <Route path="/burp-suite" component={BurpSuite} exact />
        <Route path="/core-impact" component={CoreImpact} exact />
        <Route path="/firewall" component={FireWall} exact />
        <Route path="/netsparker" component={NetSparker} exact />
        <Route path="/siem" component={Siem} exact />
        <Route path="/patch-management" component={SmartContact} exact />
        <Route path="/privilege-access" component={PrivillegeAccess} exact />
        {/*Solution Section Route Declaration End */}

        {/*Training Section Route Declaration Start */}
        {/* Assessment */}
        <Route path="/training" component={TrainingBody} exact />
        <Route path="/assesment" component={AssessmentBody} exact />
        <Route path="/penetration-testing" component={PenetrationTesting} exact />
        <Route path="/certified-penetration" component={CertifiedPenetration} exact />
        <Route path="/computer-hacking" component={ComputerHacking} exact />
        <Route path="/giac-penetration" component={GiacPenetration} exact />
        <Route path="/giac-web-application" component={GiacWebApplication} exact />
        <Route path="/certified-information" component={CertifiedInformation} exact />
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
        <Route path="/giac-certified-incident" component={GIACCertifiedIncident} exact />

        <Route path="/practical-hacker" component={PracticalEthicalHacker} exact />
        <Route path="/open-source" component={OpenSource} exact />

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
        <Route path="/apply-job" component={ApplyJob} exact />
        <Route path="/All-job" component={AllJob} exact />


        {/*Careers Section Route Declaration End */}

        {/*Contact Section Route Declaration start */}
        <Route path="/contact-us" component={ContactUs} exact />
        {/*Contact Section Route Declaration End */}

        {/*Blog Section Route Declaration start */}
        <Route path="/blogs" component={blogs} exact />
        <Route path="/blogs" component={BlogDetails} exact />
        <Route path="/case-studies" component={CaseStudies} exact />
        <Route path="/CheckLists" component={CheckList} exact />
        <Route path="/DataSheets" component={DataSheet} exact />
        <Route path="/Webinars" component={Webinar} exact />
        <Route path="/Infographics" component={Infographics} exact />
        <Route path="/WhitePapers" component={WhitePapers} exact />
 


        {/* Team section route declaration start */}
        <Route path="/team" component={Team} exact />


        {/*account Section Route Declaration start */}
        <Route path="/login" component={Login} exact />
        <Route path="/login-body" component={LoginBody} exact />

        {/*account Section Route Declaration End */}

        {/*Incident Section Route Declaration */}
        <Route path="/incident" component={IncidentBody} exact />
        <Route path="/cyber-defense-center" component={CyberDefenseCenter} exact />
        <Route path="/cyber-defense-services" component={CyberDefenseServices} exact />

        <Route path="/defense-center" component={DefenceCenter} exact />

        <Route path="/cyber-services" component={Services} exact />







      

      </div>
      {/* Footer Section Route Declaration */}
       <Footer show = {show} setShow={setShow}/>
<a href="javascript:void(0);" data-target="html" className="scroll-to-target scroll-to-top">
        <i className="fa fa-angle-up"></i>
      </a>
  </div>
      
      
    </Router>
  );
}

export default App;

