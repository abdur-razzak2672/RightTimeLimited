// import React from "react";
// import background from "./images/background/slider-1-2.jpg";

// function Header() {
//   return (
//     <body class="custom-cursor">
//       <nav class="main-menu sticky-header">
//         <div class="container-fluid">
//           <div class="main-menu__logo">
//             <a href="/">
//               <img
//                 src="/assets/images/images-removebg-preview.png"
//                 width="88"
//                 height="75"
//                 alt="Cretech"
//               />
//             </a>
//           </div>

//           <ul class="main-menu__list">
//             <li class="menu-item-has-children">
//               <a href="index.html">Home</a>
//               {/* <ul>
// 							<li><a href="index.html">Home One</a></li>
// 							<li><a href="index-2.html">Home Two</a></li>
// 							<li><a href="index-3.html">Home Three</a></li>
// 							<li class="menu-item-has-children"><a href="index.html">Header Styles</a>
// 								<ul>
// 									<li><a href="index.html">Header One</a></li>
// 									<li><a href="index-2.html">Header Two</a></li>
// 									<li><a href="index-3.html">Header Three</a></li>
// 								</ul>
// 							</li>
// 						</ul> */}
//             </li>
//             <li class="menu-item-has-children">
//               <a href="#">About</a>
//               {/* <ul>
// 							<li><a href="about.html">About Us</a></li>
// 							<li><a href="team.html">Our Team</a></li>
// 						</ul> */}
//             </li>
//             <li class="menu-item-has-children">
//               <a href="{{ url('/industries') }}">Industries</a>
//               <ul>
//                 <li>
//                   <a href="{{ url('/industries/bank-nbfi') }}">Bank & NBFI</a>
//                 </li>
//                 <li>
//                   <a href="{{ url('/industries/telecommunications') }}">
//                     Telecommunications
//                   </a>
//                 </li>
//                 <li>
//                   <a href="{{ url('/industries/pci') }}">
//                     Payment Card Industry
//                   </a>
//                 </li>
//                 <li>
//                   <a href="{{ url('/industries/educational-institutions') }}">
//                     Educational Institutions
//                   </a>
//                 </li>
//                 <li>
//                   <a href="{{ url('/industries/erm') }}">
//                     eCommerce & Retail Merchants
//                   </a>
//                 </li>
//                 <li>
//                   <a href="{{ url('/industries/health-care') }}">Health Care</a>
//                 </li>
//               </ul>
//             </li>
//             <li>
//               <a href="{{ url('/partners') }}">Partners</a>
//               <ul>
//                 <li>
//                   <a href="#">Service Partner</a>
//                   <ul>
//                     <li>
//                       <a href="https://www.eccouncil.org/">EC Council</a>
//                     </li>
//                     <li>
//                       <a href="https://home.pearsonvue.com/">Pearson Vue</a>
//                     </li>
//                     <li>
//                       <a href="https://pecb.com/en">PECB ISO Certification</a>
//                     </li>
//                     <li>
//                       <a href="https://arscert.com/certification/">ARS</a>
//                     </li>
//                     <li>
//                       <a href="https://sckcerts.com/">SCK</a>
//                     </li>
//                     <li>
//                       <a href="https://www.acnabin.com/">ACNABIN</a>
//                     </li>
//                   </ul>
//                 </li>

//                 <li>
//                   <a href="#">Solution Partner</a>
//                   <ul>
//                     <li>
//                       <a href="https://www.invicti.com/">INVICTI</a>
//                     </li>
//                     <li>
//                       <a href="https://www.coresecurity.com/products/core-impact">
//                         Core Impact
//                       </a>
//                     </li>
//                     <li>
//                       <a href="https://portswigger.net/burp">Burp Suite</a>
//                     </li>
//                   </ul>
//                 </li>
//                 <li>
//                   <a href="#">Association</a>
//                   <ul>
//                     <li>
//                       <a href="http://cca.gov.bd/site/office_head/5891f732-8e0f-40b0-9f85-1cb867657bfd/%E0%A6%AC%E0%A6%BF%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%A4">
//                         CCA,Ministry of ICT
//                       </a>
//                     </li>
//                     <li>
//                       <a href="https://www.pcisecuritystandards.org/">
//                         PCI SSC, USA
//                       </a>
//                     </li>
//                     <li>
//                       <a href="https://www.worldbank.org/en/home">
//                         WBGs (World Bank Group)
//                       </a>
//                     </li>
//                     <li>
//                       <a href="https://www.swift.com/">SWIFT</a>
//                     </li>
//                     <li>
//                       <a href="https://basis.org.bd/">BASIS</a>
//                     </li>
//                     <li>
//                       <a href="https://e-cab.net/">E-CAB</a>
//                     </li>
//                   </ul>
//                 </li>
//               </ul>
//             </li>
//             <li class="menu-item-has-children">
//               <a href="{{ url('/services') }}">Services</a>
//               <ul>
//                 <li class="menu-item-has-children">
//                   <a href="{{ url('/services/consultation') }}">Consultation</a>

//                   <ul>
//                     <li>
//                       <a href="{{ url('/services/consultation/information-security') }}">
//                         Information Security-Specially Cyber Security Consulting
//                       </a>
//                     </li>
//                     <li>
//                       <a href="{{ url('/services/consultation/partners-management') }}">
//                         Project Management
//                       </a>
//                     </li>
//                     <li>
//                       <a href="{{ url('/services/consultation/providing-security') }}">
//                         Providing Security
//                       </a>
//                     </li>
//                     <li>
//                       <a href="{{ url('/services/consultation/DC-DRS') }}">
//                         Consultation on Shaping the DC & DRS
//                       </a>
//                     </li>
//                     <li>
//                       <a href="{{ url('/services/consultation/swift-cyber-security-consulting') }} ">
//                         Swift Cyber Security Consulting
//                       </a>
//                     </li>
//                     <li>
//                       <a href="{{ url('/services/consultation/technical-documentation-on-ICT') }} ">
//                         Technical Documentation on ICT
//                       </a>
//                     </li>
//                   </ul>
//                 </li>

//                 <li class="menu-item-has-children">
//                   <a href="{{ url('/services/auditing') }}">Auditing</a>
//                   <ul>
//                     <li>
//                       <a href="{{ url('/services/auditing/information-system-audit') }}">
//                         Information System Audit
//                       </a>
//                     </li>
//                     <li>
//                       <a href="{{ url('/services/auditing/information-technology-audit') }}">
//                         Information Technology Audit
//                       </a>
//                     </li>
//                     <li>
//                       <a href="{{ url('/services/auditing/information-security-graded-audit') }}">
//                         Information Security Graded Audit
//                       </a>
//                     </li>
//                     <li>
//                       <a href="{{ url('/services/auditing/DC-DRS-audit') }}">
//                         DC & DRS Auditing
//                       </a>
//                     </li>
//                   </ul>
//                 </li>
//                 <li class="menu-item-has-children">
//                   <a href="{{ url('/services/security-assessment-testing') }}">
//                     Security Testing
//                   </a>
//                   <ul>
//                     <li>
//                       <a href="{{ url('/services/security-assessment-testing/VAPT') }}">
//                         Vulnerability Assessment & Presentation Testing Services
//                       </a>
//                     </li>
//                     <li>
//                       <a href="{{ url('/services/security-assessment-testing/digital-forensics') }}">
//                         Digital Forensics
//                       </a>
//                     </li>
//                     <li>
//                       <a href="{{ url('/services/security-assessment-testing/code-review') }}">
//                         Code Review
//                       </a>
//                     </li>
//                   </ul>
//                 </li>
//                 <li class="menu-item-has-children">
//                   <a href="{{ url('/services/standard-implementation-certification') }}">
//                     Certification
//                   </a>
//                   <ul>
//                     <li>
//                       {" "}
//                       <a href="{{ url('/services/standard-implementation-certification/pci-dss') }}">
//                         Payment Card Industry Data Security Standards
//                       </a>
//                     </li>
//                     <li>
//                       <a href="{{ url('/services/standard-implementation-certification/iso') }}">
//                         International Organization for Standardization-ISO
//                       </a>
//                     </li>
//                     <li>
//                       <a href="{{ url('/services/standard-implementation-certification/CMMI') }}">
//                         CMMI
//                       </a>
//                     </li>
//                     <li>
//                       <a href="{{ url('/services/standard-implementation-certification/SCIA') }}">
//                         SWIFT CSP Independent Assesment
//                       </a>
//                     </li>
//                     <li>
//                       <a href="{{ url('/services/standard-implementation-certification/') }}">
//                         TIA 942 for Data Center
//                       </a>
//                     </li>
//                   </ul>
//                 </li>
//               </ul>
//             </li>
//             <li class="menu-item-has-children">
//               <a href="{{ url('/services/solutions') }}">Solutions</a>
//               <ul>
//                 <li>
//                   <a href="{{ url('/services/solutions/BURP-Suite') }}">
//                     BURP Suite
//                   </a>
//                 </li>
//                 <li>
//                   <a href="{{ url('/services/solutions/acunetix') }}">
//                     Acunetix
//                   </a>
//                 </li>
//                 <li>
//                   <a href="{{ url('/services/solutions/net-sporker') }}">
//                     Net Sparker
//                   </a>
//                 </li>
//                 <li>
//                   <a href="{{ url('/services/solutions/core-impact') }}">
//                     Core Impact
//                   </a>
//                 </li>
//                 <li>
//                   <a href="{{ url('/services/solutions/SIEM-solutions') }}">
//                     SIEM
//                   </a>
//                 </li>
//                 <li>
//                   <a href="{{ url('/services/solutions/firewall') }}">
//                     Firewall
//                   </a>
//                 </li>
//                 <li>
//                   <a href="{{ url('/services/solutions/Bulk-SMS') }}">
//                     Bulk SMS
//                   </a>
//                 </li>
//                 <li>
//                   <a href="{{ url('/services/solutions/smart-contract') }}">
//                     Smart Contract
//                   </a>
//                 </li>
//               </ul>
//             </li>

//             <li class="menu-item-has-children">
//               <a href="{{ url('/services/security-training') }}">Training</a>
//               <ul>
//                 <li class="menu-item-has-children">
//                   <a href="{{ url('/services/security-training/assessment') }}">
//                     Assessment
//                   </a>
//                   <ul>
//                     <li>
//                       <a href="{{ url('/services/security-training/assessment/ethical-hacker') }}">
//                         Certified Ethical Hacker (CEH)
//                       </a>
//                     </li>
//                     <li>
//                       <a href="{{ url('/services/security-training/assessment/CPENT') }}">
//                         Certified Penetration Testing Professional(CPENT)
//                       </a>
//                     </li>
//                     <li>
//                       <a href="{{ url('/services/security-training/assessment/CHFI') }}">
//                         Computer Hacking Forensic Investigator(CHFI)
//                       </a>
//                     </li>
//                     <li>
//                       <a href="{{ url('/services/security-training/assessment/OSINT') }}">
//                         Open Source Intelligence(OSINT)
//                       </a>
//                     </li>
//                     <li>
//                       <a href="{{ url('/services/security-training/assessment/GPEN') }}">
//                         GIAC Penetration Tester(GPEN)
//                       </a>
//                     </li>
//                     <li>
//                       <a href="{{ url('/services/security-training/assessment/GWAPT') }}">
//                         GIAC Web Application Penetration Tester(GWAPT)
//                       </a>
//                     </li>
//                   </ul>
//                 </li>

//                 <li class="menu-item-has-children">
//                   <a href="{{ url('/services/security-training/management') }}">
//                     Management
//                   </a>
//                   <ul>
//                     <li>
//                       <a href="{{ url('/services/security-training/management/CDRP') }}">
//                         Certified Disaster Recovery Professional
//                       </a>
//                     </li>
//                     <li>
//                       <a href="{{ url('/services/security-training/management/CIH') }}">
//                         Certified Incident Handler
//                       </a>
//                     </li>
//                     <li>
//                       <a href="{{ url('/services/security-training/management/CSA') }}">
//                         Certified SOC Analyst(CSA)
//                       </a>
//                     </li>
//                     <li>
//                       <a href="{{ url('/services/security-training/management/CTIA') }}">
//                         Certified Threat Intelligence Analyst(CTIA)
//                       </a>
//                     </li>
//                     <li>
//                       <a href="{{ url('/services/security-training/management/CISA') }}">
//                         Certified Information Systems Auditor(CISA)
//                       </a>
//                     </li>
//                     <li>
//                       <a href="{{ url('/services/security-training/management/CISM') }}">
//                         Certified Information Security Manager(CISM)
//                       </a>
//                     </li>
//                     <li>
//                       <a href="{{ url('/services/security-training/management/CISSP') }}">
//                         Certified Information Systems Security
//                         Professional(CISSP)
//                       </a>
//                     </li>
//                     <li>
//                       <a href="{{ url('/services/security-training/management/GCPM') }}">
//                         GIAC Certified Project Manager (GCPM)
//                       </a>
//                     </li>
//                   </ul>
//                 </li>

//                 <li class="menu-item-has-children">
//                   <a href="{{ url('/services/security-training/right-time-customized') }}">
//                     Customized
//                   </a>
//                   <ul>
//                     <li>
//                       <a href="{{ url('/services/security-training/right-time-customized/basic') }}">
//                         Basic (Corporate)
//                       </a>
//                     </li>
//                     <li>
//                       <a href="{{ url('/services/security-training/right-time-customized/advanced') }}">
//                         Advance (Corporate)
//                       </a>
//                     </li>
//                     <li>
//                       <a href="{{ url('/services/security-training/right-time-customized/intermediate') }}">
//                         Intermediate (Corporate)
//                       </a>
//                     </li>
//                     <li>
//                       <a href="{{ url('/services/security-training/right-time-customized/one-to-one-training') }}">
//                         One to One Training
//                       </a>
//                     </li>
//                   </ul>
//                 </li>
//               </ul>
//             </li>
//             <li>
//               <a href="{{ url('/blog') }}">Careers</a>
//             </li>

//             <li>
//               <a href="contact.html">Contact</a>
//             </li>
//           </ul>

//           <div class="main-menu__right">
//             <a href="#" class="mobile-nav__toggler">
//               <span></span>
//               <span></span>
//               <span></span>
//             </a>

//             {/* <!-- /.search-toggler --> */}
//             <a href="#" class="main-menu__cta ">
//               <i class="fa fa-phone-alt"></i>
//               <span class="main-menu__cta__text">
//                 <b>(+88)-02-55012235</b>
//                 <b>(+88)-01318-013300</b>
//                 Call Anytime
//               </span>
//               {/* <!-- /.main-menu__cta__text --> */}
//             </a>
//             {/* <!-- /.main-menu__cta --> */}
//           </div>
//           {/* <!-- /.main-menu__right --> */}
//         </div>
//         {/* <!-- /.container-fluid --> */}
//       </nav>

//       <div class="custom-cursor__cursor"></div>
//       <div class="custom-cursor__cursor-two"></div>

//       <div class="preloader">
//         <div class="preloader__circle"></div>
//       </div>

//       <div class="page-wrapper">
//         <div class="topbar">
//           <div class="container-fluid">
//             <p class="topbar__text">
//               Welcome to IT Solutions & Services HTML Template
//             </p>
//             <ul class="topbar__info">
//               <li>
//                 <i class="fa fa-envelope"></i>
//                 <a href="mailto:needhelp@company.com">needhelp@company.com</a>
//               </li>
//               <li>
//                 <i class="fa fa-map-marker"></i>
//                 60 Golden Broklyn Street, New York
//               </li>
//             </ul>
//             <ul class="topbar__social">
//               <li>
//                 <a href="#">
//                   <i class="fab fa-twitter"></i>
//                 </a>
//               </li>
//               <li>
//                 <a href="#">
//                   <i class="fab fa-facebook"></i>
//                 </a>
//               </li>
//               <li>
//                 <a href="#">
//                   <i class="fab fa-pinterest-p"></i>
//                 </a>
//               </li>
//               <li>
//                 <a href="#">
//                   <i class="fab fa-instagram"></i>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <nav class="main-menu sticky-header">
//           <div class="container-fluid">
//             <div class="main-menu__logo">
//               <a href="index.html">
//                 <img
//                   src="assets/images/logo-dark.png"
//                   width="98"
//                   height="33"
//                   alt="Cretech"
//                 />
//               </a>
//             </div>

//             <ul class="main-menu__list">
//               <li class="menu-item-has-children">
//                 <a href="index.html">Home</a>
//                 <ul>
//                   <li>
//                     <a href="index.html">Home One</a>
//                   </li>
//                   <li>
//                     <a href="index-2.html">Home Two</a>
//                   </li>
//                   <li>
//                     <a href="index-3.html">Home Three</a>
//                   </li>
//                   <li class="menu-item-has-children">
//                     <a href="index.html">Header Styles</a>
//                     <ul>
//                       <li>
//                         <a href="index.html">Header One</a>
//                       </li>
//                       <li>
//                         <a href="index-2.html">Header Two</a>
//                       </li>
//                       <li>
//                         <a href="index-3.html">Header Three</a>
//                       </li>
//                     </ul>
//                   </li>
//                 </ul>
//               </li>
//               <li class="menu-item-has-children">
//                 <a href="#">Pages</a>
//                 <ul>
//                   <li>
//                     <a href="about.html">About Us</a>
//                   </li>
//                   <li>
//                     <a href="team.html">Our Team</a>
//                   </li>
//                 </ul>
//               </li>
//               <li class="menu-item-has-children">
//                 <a href="services-1.html">Services</a>
//                 <ul>
//                   <li>
//                     <a href="services-1.html">Services 01</a>
//                   </li>
//                   <li>
//                     <a href="services-2.html">Services 02</a>
//                   </li>
//                   <li>
//                     <a href="service-cyber-security.html">Cyber Security</a>
//                   </li>
//                   <li>
//                     <a href="service-it-management.html">IT Management</a>
//                   </li>
//                   <li>
//                     <a href="service-qa-testing.html">QA & Testing</a>
//                   </li>
//                   <li>
//                     <a href="service-infrastructure-plan.html">
//                       Infrastructure Plan
//                     </a>
//                   </li>
//                   <li>
//                     <a href="service-it-consultent.html">IT Consultent</a>
//                   </li>
//                 </ul>
//               </li>
//               <li class="menu-item-has-children">
//                 <a href="projects.html">Projects</a>
//                 <ul>
//                   <li>
//                     <a href="projects.html">Projects</a>
//                   </li>
//                   <li>
//                     <a href="project-details.html">Projects Details</a>
//                   </li>
//                 </ul>
//               </li>
//               <li class="menu-item-has-children">
//                 <a href="blog.html">Blog</a>
//                 <ul>
//                   <li>
//                     <a href="blog.html">Blog</a>
//                   </li>
//                   <li>
//                     <a href="blog-details.html">Blog Details</a>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <a href="contact.html">Contact</a>
//               </li>
//             </ul>

//             <div class="main-menu__right">
//               <a href="#" class="mobile-nav__toggler">
//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </a>
//               <a href="#" class="search-toggler">
//                 <i class="icon-magnifying-glass"></i>
//               </a>
//               {/* <!-- /.search-toggler --> */}
//               <a href="tel:+9288009860" class="main-menu__cta">
//                 <i class="fa fa-phone-alt"></i>
//                 <span class="main-menu__cta__text">
//                   <b>+ 92 ( 8800 ) 9860</b>
//                   Call Anytime
//                 </span>
//                 {/* <!-- /.main-menu__cta__text --> */}
//               </a>
//               {/* <!-- /.main-menu__cta --> */}
//             </div>
//             {/* <!-- /.main-menu__right --> */}
//           </div>
//           {/* <!-- /.container-fluid --> */}
//         </nav>
//         {/* <!-- /.main-menu --> */}

//         <div class="slider-one">
//           <div
//             class="slider-one__carousel owl-carousel owl-theme thm-owl__carousel"
//             data-owl-options='{"loop": true, "items": 1, "navText": ["<span class=\"fa fa-angle-left\"></span>","<span class=\"fa fa-angle-right\"></span>"], "margin": 0, "dots": true, "nav": true, "animateOut": "slideOutDown", "animateIn": "fadeIn", "active": true, "smartSpeed": 1000, "autoplay": true, "autoplayTimeout": 7000, "autoplayHoverPause": false}'
//           >
//             <div class="item slider-one__slide-1">
//               <div
//                 class="slider-one__bg"
//                 style={{
//                   backgroundImage: `url("images/background/slider-1-1.jpg" alt="")`,
//                 }}
//               ></div>

//               {/* <!-- /.slider-one__bg --> */}
//               <div class="slider-one__line"></div>
//               {/* <!-- /.slider-one__line --> */}
//               <div class="slider-one__shape-1"></div>
//               {/* /<!-- /.slider-one__shape-1 --> */}
//               <div class="slider-one__shape-2"></div>
//               {/* <!-- /.slider-one__shape-2 --> */}
//               <div class="slider-one__shape-3"></div>
//               {/* <!-- /.slider-one__shape-3 --> */}
//               <div class="container">
//                 <div class="slider-one__content ">
//                   <div class="slider-one__floated lettering-text">
//                     technology
//                   </div>
//                   {/* <!-- /.slider-one__floated --> */}
//                   <p class="slider-one__text">Welcome to best IT Solutions</p>
//                   {/* <!-- /.slider-one__text --> */}
//                   <div class="slider-one__title-wrapper">
//                     <h2 class="slider-one__title">
//                       Provide IT Solutions <br />
//                       and Services
//                     </h2>
//                     {/* <!-- /.slider-one__title --> */}
//                   </div>
//                   {/* <!-- /.slider-one__title-wrapper --> */}
//                   <div class="slider-one__btns">
//                     <a href="about.html" class="thm-btn slider-one__btn">
//                       <span>Learn More</span>
//                     </a>
//                     {/* <!-- /.thm-btn slider-one__btn --> */}
//                   </div>
//                   {/* /<!-- /.slider-one__btns --> */}
//                 </div>
//                 {/* <!-- /.slider-one__content --> */}
//               </div>
//             </div>
//             {/* <!-- /.item --> */}
//             <div class="item slider-one__slide-2">
//               <div
//                 class="slider-one__bg"
//                 style={{
//                   backgroundImage: `url("images/background/slider-1-1.jpg" alt="")`,
//                 }}
//               ></div>
//               {/* <!-- /.slider-one__bg --> */}
//               <div class="slider-one__line"></div>
//               {/* <!-- /.slider-one__line --> */}
//               <div class="slider-one__shape-1"></div>
//               {/* <!-- /.slider-one__shape-1 --> */}
//               <div class="slider-one__shape-2"></div>
//               {/* <!-- /.slider-one__shape-2 --> */}
//               <div class="slider-one__shape-3"></div>
//               {/* <!-- /.slider-one__shape-3 --> */}
//               <div class="container">
//                 <div class="slider-one__content ">
//                   <div class="slider-one__floated lettering-text">
//                     technology
//                   </div>
//                   {/* <!-- /.slider-one__floated --> */}
//                   <p class="slider-one__text">Welcome to best IT Solutions</p>
//                   {/* <!-- /.slider-one__text --> */}
//                   <div class="slider-one__title-wrapper">
//                     <h2 class="slider-one__title">
//                       Provide IT Solutions <br />
//                       and Services
//                     </h2>
//                     {/* <!-- /.slider-one__title --> */}
//                   </div>
//                   {/* <!-- /.slider-one__title-wrapper --> */}
//                   <div class="slider-one__btns">
//                     <a href="about.html" class="thm-btn slider-one__btn">
//                       <span>Learn More</span>
//                     </a>
//                     {/* <!-- /.thm-btn slider-one__btn --> */}
//                   </div>
//                   {/* <!-- /.slider-one__btns --> */}
//                 </div>
//                 {/* <!-- /.slider-one__content --> */}
//               </div>
//             </div>
//             {/* <!-- /.item --> */}
//           </div>
//           {/* <!-- /.slider-one__carousel --> */}
//         </div>
//         {/* <!-- /.slider-one --> */}

//         <section class="section-padding--bottom section-padding--top about-five">
//           <div class="container">
//             <div class="row gutter-y-60">
//               <div class="col-lg-6">
//                 <div class="about-five__images">
//                   <div class="about-five__images__shape"></div>
//                   {/* <!-- /.about-five__images__shape --> */}
//                   <img
//                     src="assets/images/resources/about-five-1-1.jpg"
//                     class="wow fadeInUp"
//                     data-wow-duration="1500ms"
//                     alt=""
//                   />
//                   <img
//                     src="assets/images/resources/about-five-1-2.jpg"
//                     alt=""
//                   />
//                   <div class="about-five__video">
//                     <a
//                       href="https://www.youtube.com/watch?v=rzfmZC3kg3M"
//                       class="video-popup"
//                     >
//                       <i class="fa fa-play"></i>
//                     </a>
//                   </div>
//                   {/* <!-- /.about-five__video --> */}
//                   <div
//                     class="about-five__images__caption count-box wow fadeInUp"
//                     data-wow-duration="1500ms"
//                   >
//                     <span class="count-text" data-stop="25" data-speed="2500">
//                       00
//                     </span>
//                     Years <br />
//                     Experience
//                   </div>
//                   {/* <!-- /.about-five__images__caption --> */}
//                 </div>
//                 {/* <!-- /.about-five__images --> */}
//               </div>
//               {/* 
					
// 					<!-- /.col-lg-6 --> */}
//               <div class="col-lg-6">
//                 <div class="about-five__content">
//                   <div class="section-title ">
//                     <p class="section-title__text">About Company</p>

//                     <h2 class="section-title__title">
//                       The World’s Networking Company
//                     </h2>
//                     {/* <!-- /.section-title__title --> */}
//                   </div>
//                   {/*  */}
//                   <div class="about-five__text">
//                     Since from 2000 Building Your Better IT Solution The
//                     definition of business is an occupation or trade & the
//                     purchase and sale of products Our Mission & Vision Voice and
//                     Data System are crucial to the success
//                   </div>
//                   {/* <!-- /.about-five__text --> */}
//                   <div class="about-five__text">
//                     System is a term used to refer to an organized collection
//                     symbols and processes that may be used to operate on such
//                     symbols.
//                   </div>
//                   {/* <!-- /.about-five__text --> */}
//                   <ul class="about-five__box">
//                     <li class="about-five__box__item gray-bg">
//                       <i class="about-five__box__icon icon-consulting"></i>
//                       <div class="about-five__box__content">
//                         <h3 class="about-five__box__title">
//                           <a href="service-it-consultent.html">IT Consultant</a>
//                         </h3>
//                         <p class="about-five__box__text">Smarter Solutions</p>
//                         {/* <!-- /.about-five__box__text --> */}
//                       </div>
//                       {/* <!-- /.about-five__box__content --> */}
//                     </li>
//                     <li class="about-five__box__item gray-bg">
//                       <i class="about-five__box__icon icon-chip"></i>
//                       <div class="about-five__box__content">
//                         <h3 class="about-five__box__title">
//                           <a href="team.html">IT Specialist</a>
//                         </h3>
//                         <p class="about-five__box__text">Faster Solutions</p>
//                         {/* <!-- /.about-five__box__text --> */}
//                       </div>
//                       {/* <!-- /.about-five__box__content --> */}
//                     </li>
//                   </ul>
//                   {/* <!-- /.about-five__box --> */}
//                   <div class="about-four__meta">
//                     <div class="about-four__author">
//                       <img
//                         src="assets/images/resources/about-four-author-1.jpg"
//                         alt=""
//                       />
//                       <div class="about-four__author__content">
//                         <h3 class="about-four__author__title">
//                           Michele Morrone
//                         </h3>
//                         {/* <!-- /.about-four__author__title --> */}
//                         <div class="about-four__author__designation">
//                           Founder CEO
//                         </div>
//                         {/* <!-- /.about-four__author__designation --> */}
//                       </div>
//                       {/* <!-- /.about-four__author__content --> */}
//                     </div>
//                     {/* <!-- /.about-four__author --> */}
//                     <a href="services-1.html" class="thm-btn about-four__btn">
//                       <span>Learn More</span>
//                     </a>
//                     {/* <!-- /.thm-btn about-four__btn --> */}
//                   </div>
//                   {/* <!-- /.about-four__meta --> */}
//                 </div>
//                 {/* <!-- /.about-five__content --> */}
//               </div>
//               {/* <!-- /.col-lg-6 --> */}
//             </div>
//             {/* <!-- /.row --> */}
//           </div>
//           {/*  */}
//         </section>

//         <section
//           class=" section-padding--top service-four gray-bg section-padding-xl--bottom section-has-bottom-margin background-repeat-no background-position-top-right"
//           style={{
//             backgroundImage: `url("images/background/slider-1-1.jpg" alt="")`,
//           }}
//         >
//           <div class="container">
//             <div class="section-title text-center">
//               <p class="section-title__text">Popular Services</p>
//               {/* <!-- /.section-title__text --> */}
//               <h2 class="section-title__title">
//                 We Provide Our Client Best <br />
//                 IT Solution Services
//               </h2>
//               {/* <!-- /.section-title__title --> */}
//             </div>
//             {/*  */}
//             <div
//               class="owl-carousel thm-owl__carousel thm-owl__carousel--with-shadow service-four__carousel"
//               data-owl-options='{"loop": false,
// 				"autoplay": false,
// 				"nav": false,
// 				"navText": ["<span class=\"fa fa-angle-left\"></span>","<span class=\"fa fa-angle-right\"></span>"],
// 				"dots": false,
// 				"margin": 0,
//                 "items": 1,
// 				"smartSpeed": 700,
// 				"responsive": {
// 					"0": {
// 						"margin": 0,
// 						"items": 1
// 					},
// 					"576": {
// 						"margin": 30,
// 						"items": 2
// 					},
// 					"768": {
// 						"margin": 30,
// 						"items": 3
// 					},
// 					"992": {
// 						"margin": 30,
// 						"items": 4
// 					},
// 					"1200": {
// 						"margin": 30,
// 						"items": 5
// 					}
// 				}}'
//             >
//               <div class="item">
//                 <div class="service-card-three">
//                   <div class="service-card-three__icon">
//                     <i class="icon-new-product"></i>
//                   </div>
//                   {/* <!-- /.service-card-three__icon --> */}
//                   <div class="service-card-three__content">
//                     <h3 class="service-card-three__title">
//                       <a href="service-infrastructure-plan.html">
//                         Product
//                         <br />
//                         Development
//                       </a>
//                     </h3>
//                     {/* <!-- /.service-card-three__title --> */}
//                     <div class="service-card-three__text">
//                       Providing the solutions for non-IT businesses.
//                     </div>
//                     {/* <!-- /.service-card-three__text --> */}
//                   </div>
//                   {/* <!-- /.service-card-three__content --> */}
//                 </div>
//                 {/* <!-- /.service-card-three --> */}
//               </div>
//               {/* <!-- /.item --> */}
//               <div class="item">
//                 <div class="service-card-three">
//                   <div class="service-card-three__icon">
//                     <i class="icon-new-product"></i>
//                   </div>
//                   {/* <!-- /.service-card-three__icon --> */}
//                   <div class="service-card-three__content">
//                     <h3 class="service-card-three__title">
//                       <a href="service-infrastructure-plan.html">
//                         Digital
//                         <br />
//                         Marketing
//                       </a>
//                     </h3>
//                     {/* <!-- /.service-card-three__title --> */}
//                     <div class="service-card-three__text">
//                       Providing the solutions for non-IT businesses.
//                     </div>
//                     {/* <!-- /.service-card-three__text --> */}
//                   </div>
//                   {/* <!-- /.service-card-three__content --> */}
//                 </div>
//                 {/* <!-- /.service-card-three --> */}
//               </div>
//               {/* <!-- /.item --> */}
//               <div class="item">
//                 <div class="service-card-three">
//                   <div class="service-card-three__icon">
//                     <i class="icon-protection"></i>
//                   </div>
//                   {/* <!-- /.service-card-three__icon --> */}
//                   <div class="service-card-three__content">
//                     <h3 class="service-card-three__title">
//                       <a href="service-infrastructure-plan.html">
//                         Security <br />
//                         System
//                       </a>
//                     </h3>
//                     {/* <!-- /.service-card-three__title --> */}
//                     <div class="service-card-three__text">
//                       Providing the solutions for non-IT businesses.
//                     </div>
//                     {/* <!-- /.service-card-three__text --> */}
//                   </div>
//                   {/* <!-- /.service-card-three__content --> */}
//                 </div>
//                 {/* <!-- /.service-card-three --> */}
//               </div>
//               {/* <!-- /.item --> */}
//               <div class="item">
//                 <div class="service-card-three">
//                   <div class="service-card-three__icon">
//                     <i class="icon-web-development"></i>
//                   </div>
//                   {/* <!-- /.service-card-three__icon --> */}
//                   <div class="service-card-three__content">
//                     <h3 class="service-card-three__title">
//                       <a href="service-infrastructure-plan.html">
//                         UI/UX
//                         <br />
//                         Designing
//                       </a>
//                     </h3>
//                     {/* <!-- /.service-card-three__title --> */}
//                     <div class="service-card-three__text">
//                       Providing the solutions for non-IT businesses.
//                     </div>
//                     {/* <!-- /.service-card-three__text --> */}
//                   </div>
//                   {/* <!-- /.service-card-three__content --> */}
//                 </div>
//                 {/* <!-- /.service-card-three --> */}
//               </div>
//               {/* <!-- /.item --> */}
//               <div class="item">
//                 <div class="service-card-three">
//                   <div class="service-card-three__icon">
//                     <i class="icon-analysis"></i>
//                   </div>
//                   {/* <!-- /.service-card-three__icon --> */}
//                   <div class="service-card-three__content">
//                     <h3 class="service-card-three__title">
//                       <a href="service-infrastructure-plan.html">
//                         Data
//                         <br />
//                         Analysis
//                       </a>
//                     </h3>
//                     {/* <!-- /.service-card-three__title --> */}
//                     <div class="service-card-three__text">
//                       Providing the solutions for non-IT businesses.
//                     </div>
//                     {/* <!-- /.service-card-three__text --> */}
//                   </div>
//                   {/* <!-- /.service-card-three__content --> */}
//                 </div>
//                 {/* <!-- /.service-card-three --> */}
//               </div>
//               {/* <!-- /.item --> */}
//             </div>
//             {/* <!-- /.owl-carousel --> */}
//           </div>
//           {/*  */}
//         </section>

//         <section class="funfact-one">
//           <div class="container">
//             <div
//               class="funfact-one__inner wow fadeInUp background-size-cover"
//               data-wow-duration="1500ms"
//               style={{
//                 backgroundImage: `url("images/background/slider-1-1.jpg" alt="")`,
//               }}
//             >
//               <ul class="funfact-one__list">
//                 <li class="funfact-one__list__item">
//                   <h3 class="funfact-one__list__title count-box">
//                     <span data-stop="255" data-speed="2500" class="count-text">
//                       00
//                     </span>
//                   </h3>
//                   {/* <!-- /.funfact-one__list__title --> */}
//                   <p class="funfact-one__list__text">Business Interogation</p>
//                   {/* <!-- /.funfact-one__list__text --> */}
//                 </li>
//                 <li class="funfact-one__list__item">
//                   <h3 class="funfact-one__list__title count-box">
//                     <span data-stop="325" data-speed="2500" class="count-text">
//                       00
//                     </span>
//                   </h3>
//                   {/* <!-- /.funfact-one__list__title --> */}
//                   <p class="funfact-one__list__text">Strategies Planned</p>
//                   {/* <!-- /.funfact-one__list__text --> */}
//                 </li>
//                 <li class="funfact-one__list__item">
//                   <h3 class="funfact-one__list__title count-box">
//                     <span data-stop="569" data-speed="2500" class="count-text">
//                       00
//                     </span>
//                   </h3>
//                   {/* <!-- /.funfact-one__list__title --> */}
//                   <p class="funfact-one__list__text">Projects Relased</p>
//                   {/* <!-- /.funfact-one__list__text --> */}
//                 </li>
//                 <li class="funfact-one__list__item">
//                   <h3 class="funfact-one__list__title count-box">
//                     <span data-stop="769" data-speed="2500" class="count-text">
//                       00
//                     </span>
//                   </h3>
//                   {/* <!-- /.funfact-one__list__title --> */}
//                   <p class="funfact-one__list__text">Satisfied Clients </p>
//                   {/* <!-- /.funfact-one__list__text --> */}
//                 </li>
//               </ul>
//               {/* <!-- /.funfact-one__list --> */}
//             </div>
//             {/* <!-- /.funfact-one__inner --> */}
//           </div>
//           {/*  */}
//         </section>

//         <section class="section-padding--bottom section-padding--top project-one">
//           <div class="container">
//             <div class="project-one__top">
//               <div class="row">
//                 <div class="col-lg-7">
//                   <div class="section-title ">
//                     <p class="section-title__text">Latest Project</p>
//                     {/* <!-- /.section-title__text --> */}
//                     <h2 class="section-title__title">
//                       Check We Have Solution <br />
//                       Done IT Project
//                     </h2>
//                     {/* <!-- /.section-title__title --> */}
//                   </div>
//                   {/*  */}
//                 </div>
//                 {/* <!-- /.col-lg-7 --> */}
//                 <div class="col-lg-5">
//                   <div class="project-one__top__content">
//                     <p class="project-one__top__text">
//                       Pellentesque Viverra Eget Velit A Tincidunt. Sed Mattis
//                       Enim Nisl, Sit Amet Malesuada Sapien Pulvinar Ut.
//                     </p>
//                     <div class="project-one__top__btns">
//                       <a
//                         href="projects.html"
//                         class="thm-btn project-one__top__btn"
//                       >
//                         <span>View All Projects</span>
//                       </a>
//                       {/* <!-- /.thm-btn project-one__top__btn --> */}
//                     </div>
//                     {/* <!-- /.project-one__top__btns --> */}
//                   </div>
//                   {/* <!-- /.project-one__top__content --> */}
//                 </div>
//                 {/* <!-- /.col-lg-5 --> */}
//               </div>
//               {/* <!-- /.row --> */}
//             </div>
//             {/* <!-- /.project-one__top --> */}
//             <div
//               class="owl-carousel thm-owl__carousel project-one__carousel thm-owl__carousel--with-shadow"
//               data-owl-options='{"loop": true,
// 				"autoplay": true,
// 				"autoplayTimeout": 5000,
// 				"autoplayHoverPause": true,
// 				"nav": true,
// 				"navText": ["<span class=\"fa fa-angle-left\"></span>","<span class=\"fa fa-angle-right\"></span>"],
// 				"dots": false,
// 				"margin": 0,
//                 "items": 1,
// 				"smartSpeed": 700,
// 				"responsive": {
// 					"0": {
// 						"margin": 0,
// 						"items": 1
// 					},
// 					"768": {
// 						"margin": 30,
// 						"items": 2
// 					},
// 					"992": {
// 						"margin": 30,
// 						"items": 3
// 					}
// 				}}'
//             >
//               <div class="item">
//                 <div class="project-card-one">
//                   <div class="project-card-one__image">
//                     <img src="assets/images/projects/project-1-1.jpg" alt="" />
//                   </div>
//                   {/* <!-- /.project-card-one__image --> */}
//                   <div class="project-card-one__content">
//                     <div class="project-card-one__content__inner">
//                       <p class="project-card-one__text">
//                         IT Technology Solution
//                       </p>
//                       <h3 class="project-card-one__title">
//                         <a href="project-details.html">
//                           Data Recovery Analysis
//                         </a>
//                       </h3>
//                       {/* <!-- /.project-card-one__title --> */}
//                       <a
//                         href="project-details.html"
//                         class="project-card-one__more"
//                       >
//                         <i class="fa fa-angle-right"></i>
//                       </a>
//                       {/* <!-- /.project-card-one__more --> */}
//                     </div>
//                     {/* <!-- /.project-card-one__content__inner --> */}
//                   </div>
//                   {/* <!-- /.project-card-one__content --> */}
//                 </div>
//                 {/* <!-- /.project-card-one --> */}
//               </div>
//               {/* <!-- /.col-lg-4 col-md-6 col-sm-12 --> */}
//               <div class="item">
//                 <div class="project-card-one">
//                   <div class="project-card-one__image">
//                     <img src="assets/images/projects/project-1-2.jpg" alt="" />
//                   </div>
//                   {/* <!-- /.project-card-one__image --> */}
//                   <div class="project-card-one__content">
//                     <div class="project-card-one__content__inner">
//                       <p class="project-card-one__text">
//                         IT Technology Solution
//                       </p>
//                       <h3 class="project-card-one__title">
//                         <a href="project-details.html">
//                           Data Recovery Analysis
//                         </a>
//                       </h3>
//                       {/* <!-- /.project-card-one__title --> */}
//                       <a
//                         href="project-details.html"
//                         class="project-card-one__more"
//                       >
//                         <i class="fa fa-angle-right"></i>
//                       </a>
//                       {/* <!-- /.project-card-one__more --> */}
//                     </div>
//                     {/* <!-- /.project-card-one__content__inner --> */}
//                   </div>
//                   {/* <!-- /.project-card-one__content --> */}
//                 </div>
//                 {/* <!-- /.project-card-one --> */}
//               </div>
//               {/* <!-- /.col-lg-4 col-md-6 col-sm-12 --> */}
//               <div class="item">
//                 <div class="project-card-one">
//                   <div class="project-card-one__image">
//                     <img src="assets/images/projects/project-1-3.jpg" alt="" />
//                   </div>
//                   {/* <!-- /.project-card-one__image --> */}
//                   <div class="project-card-one__content">
//                     <div class="project-card-one__content__inner">
//                       <p class="project-card-one__text">
//                         IT Technology Solution
//                       </p>
//                       <h3 class="project-card-one__title">
//                         <a href="project-details.html">
//                           Data Recovery Analysis
//                         </a>
//                       </h3>
//                       {/* <!-- /.project-card-one__title --> */}
//                       <a
//                         href="project-details.html"
//                         class="project-card-one__more"
//                       >
//                         <i class="fa fa-angle-right"></i>
//                       </a>
//                       {/* <!-- /.project-card-one__more --> */}
//                     </div>
//                     {/* <!-- /.project-card-one__content__inner --> */}
//                   </div>
//                   {/* <!-- /.project-card-one__content --> */}
//                 </div>
//                 {/* <!-- /.project-card-one --> */}
//               </div>
//               {/* <!-- /.col-lg-4 col-md-6 col-sm-12 --> */}
//               <div class="item">
//                 <div class="project-card-one">
//                   <div class="project-card-one__image">
//                     <img src="assets/images/projects/project-1-4.jpg" alt="" />
//                   </div>
//                   {/* <!-- /.project-card-one__image --> */}
//                   <div class="project-card-one__content">
//                     <div class="project-card-one__content__inner">
//                       <p class="project-card-one__text">
//                         IT Technology Solution
//                       </p>
//                       <h3 class="project-card-one__title">
//                         <a href="project-details.html">
//                           Data Recovery Analysis
//                         </a>
//                       </h3>
//                       {/* <!-- /.project-card-one__title --> */}
//                       <a
//                         href="project-details.html"
//                         class="project-card-one__more"
//                       >
//                         <i class="fa fa-angle-right"></i>
//                       </a>
//                       {/* <!-- /.project-card-one__more --> */}
//                     </div>
//                     {/* <!-- /.project-card-one__content__inner --> */}
//                   </div>
//                   {/* <!-- /.project-card-one__content --> */}
//                 </div>
//                 {/* <!-- /.project-card-one --> */}
//               </div>
//               {/* <!-- /.col-lg-4 col-md-6 col-sm-12 --> */}
//               <div class="item">
//                 <div class="project-card-one">
//                   <div class="project-card-one__image">
//                     <img src="assets/images/projects/project-1-5.jpg" alt="" />
//                   </div>
//                   {/* <!-- /.project-card-one__image --> */}
//                   <div class="project-card-one__content">
//                     <div class="project-card-one__content__inner">
//                       <p class="project-card-one__text">
//                         IT Technology Solution
//                       </p>
//                       <h3 class="project-card-one__title">
//                         <a href="project-details.html">
//                           Data Recovery Analysis
//                         </a>
//                       </h3>
//                       {/* <!-- /.project-card-one__title --> */}
//                       <a
//                         href="project-details.html"
//                         class="project-card-one__more"
//                       >
//                         <i class="fa fa-angle-right"></i>
//                       </a>
//                       {/* <!-- /.project-card-one__more --> */}
//                     </div>
//                     {/* <!-- /.project-card-one__content__inner --> */}
//                   </div>
//                   {/* <!-- /.project-card-one__content --> */}
//                 </div>
//                 {/* <!-- /.project-card-one --> */}
//               </div>
//               {/* <!-- /.col-lg-4 col-md-6 col-sm-12 --> */}
//               <div class="item">
//                 <div class="project-card-one">
//                   <div class="project-card-one__image">
//                     <img src="assets/images/projects/project-1-6.jpg" alt="" />
//                   </div>
//                   {/* <!-- /.project-card-one__image --> */}
//                   <div class="project-card-one__content">
//                     <div class="project-card-one__content__inner">
//                       <p class="project-card-one__text">
//                         IT Technology Solution
//                       </p>
//                       <h3 class="project-card-one__title">
//                         <a href="project-details.html">
//                           Data Recovery Analysis
//                         </a>
//                       </h3>
//                       {/* <!-- /.project-card-one__title --> */}
//                       <a
//                         href="project-details.html"
//                         class="project-card-one__more"
//                       >
//                         <i class="fa fa-angle-right"></i>
//                       </a>
//                       {/* <!-- /.project-card-one__more --> */}
//                     </div>
//                     {/* <!-- /.project-card-one__content__inner --> */}
//                   </div>
//                   {/* <!-- /.project-card-one__content --> */}
//                 </div>
//                 {/* <!-- /.project-card-one --> */}
//               </div>
//               {/* <!-- /.col-lg-4 col-md-6 col-sm-12 --> */}
//             </div>
//             {/* <!-- /.owl-carousel --> */}
//           </div>
//           {/*  */}
//         </section>

//         <section class="black-bg section-padding-lg--top section-padding-lg--bottom cta-two">
//           <div
//             class="cta-two__bg jarallax"
//             data-jarallax
//             data-speed="0.2"
//             data-imgPosition="50% 0%"
//             style={{
//               backgroundImage: `url("images/background/slider-1-1.jpg" alt="")`,
//             }}
//           ></div>
//           <div class="container">
//             <div class="cta-two__inner">
//               <h3 class="cta-two__title">
//                 Better IT Solutions And Services At Your <span>Fingertips</span>
//               </h3>
//               {/* <!-- /.cta-two__title --> */}
//               <a href="contact.html" class="thm-btn cta-two__btn">
//                 <span>LEarn More</span>
//               </a>
//               {/* <!-- /.thm-btn cta-two__btn --> */}
//             </div>
//             {/* <!-- /.cta-two__inner --> */}
//           </div>
//           {/*  */}
//         </section>
//         <section
//           class="section-padding--bottom section-padding--top testimonials-two background-repeat-no background-position-top-center"
//           style={{
//             backgroundImage: `url("images/background/slider-1-1.jpg" alt="")`,
//           }}
//         >
//           <div class="container">
//             <div class="row gutter-y-60">
//               <div class="col-lg-5">
//                 <div class="testimonials-two__content">
//                   <div class="section-title ">
//                     <p class="section-title__text">Our clients</p>
//                     {/* // ><!-- /.section-title__text --> */}
//                     <h2 class="section-title__title">
//                       We Are Trusted Worldwide Peoples
//                     </h2>
//                     {/* <!-- /.section-title__title --> */}
//                   </div>
//                   {/*  */}
//                   <div class="testimonials-two__content__text">
//                     Sed ut perspiciatis unde omnis natus error sit voluptatem
//                     accusa ntium doloremque laudantium totam rem aperiamea
//                     queipsa quae abillo inventore veritatis et quasi architecto
//                     beatae vitae dicta sunt explicabo.
//                   </div>
//                   {/* <!-- /.testimonials-two__content__text --> */}
//                   <div class="testimonials-two__content__text">
//                     Pellentesque gravida lectus vitae nisi luctus, Finibus
//                     aliquet ligula ultrices.
//                   </div>
//                   {/* <!-- /.testimonials-two__content__text --> */}
//                   <a
//                     href="about.html"
//                     class="thm-btn testimonials-two__content__btn"
//                   >
//                     <span>View All feedbacks</span>
//                   </a>
//                   {/* <!-- /.thm-btn testimonials-two__content__btn --> */}
//                 </div>
//                 {/* <!-- /.testimonials-two__content --> */}
//               </div>
//               {/* <!-- /.col-lg-5 --> */}
//               <div class="col-lg-7">
//                 <div class="testimonials-two__items">
//                   <div class="row gutter-y-30">
//                     <div class="col-lg-12">
//                       <div class="testimonials-one-card">
//                         <div class="testimonials-one-card__image">
//                           <img
//                             src="assets/images/resources/testi-1-1.jpg"
//                             alt=""
//                           />
//                         </div>
//                         {/* <!-- /.testimonials-one-card__image --> */}
//                         <div class="testimonials-one-card__content">
//                           <div class="testimonials-one-card__text">
//                             On the other hand denounc with ghteo indignation and
//                             dislike men who so beguiled and demoralized the
//                             charms of pleasure the momen blinded by desire
//                             cannot foresee the pain and trouble.
//                           </div>
//                           {/* <!-- /.testimonials-one-card__text --> */}
//                           <h3 class="testimonials-one-card__title">
//                             Michal Rahul
//                           </h3>
//                           {/* <!-- /.testimonials-one-card__title --> */}
//                           <p class="testimonials-one-card__designation">
//                             Ul - UX Designer
//                           </p>
//                           {/* <!-- /.testimonials-one-card__designation --> */}
//                           <i class="icon-right-quote testimonials-one-card__icon"></i>
//                         </div>
//                         {/* <!-- /.testimonials-one-card__content --> */}
//                       </div>
//                       {/* <!-- /.testimonials-one-card --> */}
//                     </div>
//                     {/* <!-- /.col-lg-6 --> */}
//                     <div class="col-lg-12">
//                       <div class="testimonials-one-card">
//                         <div class="testimonials-one-card__image">
//                           <img
//                             src="assets/images/resources/testi-1-2.jpg"
//                             alt=""
//                           />
//                         </div>
//                         {/* <!-- /.testimonials-one-card__image --> */}
//                         <div class="testimonials-one-card__content">
//                           <div class="testimonials-one-card__text">
//                             On the other hand denounc with ghteo indignation and
//                             dislike men who so beguiled and demoralized the
//                             charms of pleasure the momen blinded by desire
//                             cannot foresee the pain and trouble.
//                           </div>
//                           {/* <!-- /.testimonials-one-card__text --> */}
//                           <h3 class="testimonials-one-card__title">
//                             Jessica Brown
//                           </h3>
//                           {/* <!-- /.testimonials-one-card__title --> */}
//                           <p class="testimonials-one-card__designation">
//                             Ul - UX Designer
//                           </p>
//                           {/* <!-- /.testimonials-one-card__designation --> */}
//                           <i class="icon-right-quote testimonials-one-card__icon"></i>
//                         </div>
//                         {/* <!-- /.testimonials-one-card__content --> */}
//                       </div>
//                       {/* /<!-- /.testimonials-one-card --> */}
//                     </div>
//                     {/* <!-- /.col-lg-6 --> */}
//                   </div>
//                   {/* <!-- /.row --> */}
//                 </div>
//                 {/* <!-- /.testimonials-two__items --> */}
//               </div>
//               {/* <!-- /.col-lg-7 --> */}
//             </div>
//             {/* <!-- /.row --> */}
//           </div>
//           {/*  */}
//         </section>
//         <div class="client-carousel client-carousel--two">
//           <div class="container">
//             <div
//               class="owl-carousel thm-owl__carousel"
//               data-owl-options='{"loop": true,
// 				"autoplay": true,
// 				"autoplayTimeout": 5000,
// 				"autoplayHoverPause": true,
// 				"nav": true,
// 				"navText": ["<span class=\"fa fa-angle-left\"></span>","<span class=\"fa fa-angle-right\"></span>"],
// 				"dots": false,
// 				"margin": 30,
//                 "items": 2,
// 				"smartSpeed": 700,
// 				"responsive": {
// 					"0": {
// 						"margin": 30,
// 						"items": 2
// 					},
// 					"375": {
// 						"margin": 30,
// 						"items": 2
// 					},
// 					"575": {
// 						"margin": 30,
// 						"items": 3
// 					},
// 					"767": {
// 						"margin": 50,
// 						"items": 4
// 					},
// 					"991": {
// 						"margin": 40,
// 						"items": 5
// 					},
// 					"1199": {
// 						"margin": 80,
// 						"items": 5
// 					}
// 				}}'
//             >
//               <div class="item">
//                 <img src="assets/images/resources/client-1-1.png" alt="" />
//               </div>
//               {/* <!-- /.item --> */}
//               <div class="item">
//                 <img src="assets/images/resources/client-1-1.png" alt="" />
//               </div>
//               {/* <!-- /.item --> */}
//               <div class="item">
//                 <img src="assets/images/resources/client-1-1.png" alt="" />
//               </div>
//               {/*  */}
//               <div class="item">
//                 <img src="assets/images/resources/client-1-1.png" alt="" />
//               </div>
//               {/*  */}
//               <div class="item">
//                 <img src="assets/images/resources/client-1-1.png" alt="" />
//               </div>
//               {/*  */}
//               <div class="item">
//                 <img src="assets/images/resources/client-1-1.png" alt="" />
//               </div>
//               {/*  */}
//               <div class="item">
//                 <img src="assets/images/resources/client-1-1.png" alt="" />
//               </div>
//               {/*  */}
//               <div class="item">
//                 <img src="assets/images/resources/client-1-1.png" alt="" />
//               </div>
//               {/*  */}
//               <div class="item">
//                 <img src="assets/images/resources/client-1-1.png" alt="" />
//               </div>
//               {/*  */}
//               <div class="item">
//                 <img src="assets/images/resources/client-1-1.png" alt="" />
//               </div>
//               {/*  */}
//               <div class="item">
//                 <img src="assets/images/resources/client-1-1.png" alt="" />
//               </div>
//               {/*  */}
//               <div class="item">
//                 <img src="assets/images/resources/client-1-1.png" alt="" />
//               </div>
//               {/*  */}
//               <div class="item">
//                 <img src="assets/images/resources/client-1-1.png" alt="" />
//               </div>
//               {/*  */}
//               <div class="item">
//                 <img src="assets/images/resources/client-1-1.png" alt="" />
//               </div>
//               {/*  */}
//               <div class="item">
//                 <img src="assets/images/resources/client-1-1.png" alt="" />
//               </div>
//               {/*  */}
//               <div class="item">
//                 <img src="assets/images/resources/client-1-1.png" alt="" />
//               </div>
//               {/*  */}
//               <div class="item">
//                 <img src="assets/images/resources/client-1-1.png" alt="" />
//               </div>
//               {/*  */}
//               <div class="item">
//                 <img src="assets/images/resources/client-1-1.png" alt="" />
//               </div>
//               {/*  */}
//               <div class="item">
//                 <img src="assets/images/resources/client-1-1.png" alt="" />
//               </div>
//               {/*  */}
//               <div class="item">
//                 <img src="assets/images/resources/client-1-1.png" alt="" />
//               </div>
//               {/*  */}
//             </div>
//             {/* <!-- /.thm-owl__carousel --> */}
//           </div>
//           {/*  */}
//         </div>
//         {/* <!-- /.client-carousel --> */}
//         <section
//           class="section-padding--bottom section-padding--top gray-bg background-size-cover"
//           style={{
//             backgroundImage: `url("images/background/slider-1-1.jpg" alt="")`,
//           }}
//         >
//           <div class="container">
//             <div class="section-title text-center">
//               <p class="section-title__text">Our Team members</p>
//               {/* /<!-- /.section-title__text --> */}
//               <h2 class="section-title__title">
//                 Our Expert Person to Provide <br /> IT Solution Services
//               </h2>
//               {/* <!-- /.section-title__title --> */}
//             </div>
//             {/*  */}
//             <div class="row gutter-y-30">
//               <div class="col-lg-3 col-md-6 col-sm-12">
//                 <div
//                   class="team-card-one wow fadeInUp"
//                   data-wow-duration="1500ms"
//                   data-wow-delay="000ms"
//                 >
//                   <div class="team-card-one__image">
//                     <img src="assets/images/team/team-2-1.jpg" alt="" />
//                     <div class="team-card-one__social">
//                       <ul class="team-card-one__social__links">
//                         <li>
//                           <a href="#">
//                             <i class="fab fa-twitter"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#">
//                             <i class="fab fa-facebook"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#">
//                             <i class="fab fa-pinterest-p"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#">
//                             <i class="fab fa-instagram"></i>
//                           </a>
//                         </li>
//                       </ul>
//                       {/* <!-- /.team-card-one__social__links --> */}
//                       <div class="team-card-one__social__icon">
//                         <i class="fa fa-share-alt"></i>
//                       </div>
//                       {/* <!-- /.team-card-one__social__icon --> */}
//                     </div>
//                     {/* <!-- /.team-card-one__social --> */}
//                   </div>
//                   {/* <!-- /.team-card-one__image --> */}
//                   <div class="team-card-one__content">
//                     <h3 class="team-card-one__title">
//                       <a href="#">Michelle Monaghan</a>
//                     </h3>
//                     {/* <!-- /.team-card-one__title --> */}
//                     <p class="team-card-one__designation">Designer</p>
//                     {/* <!-- /.team-card-one__designation --> */}
//                   </div>
//                   {/* <!-- /.team-card-one__content --> */}
//                 </div>
//                 {/* <!-- /.team-card-one --> */}
//               </div>
//               {/* <!-- /.col-lg-3 col-md-6 col-sm-12 --> */}
//               <div class="col-lg-3 col-md-6 col-sm-12">
//                 <div
//                   class="team-card-one wow fadeInUp"
//                   data-wow-duration="1500ms"
//                   data-wow-delay="100ms"
//                 >
//                   <div class="team-card-one__image">
//                     <img src="assets/images/team/team-2-2.jpg" alt="" />
//                     <div class="team-card-one__social">
//                       <ul class="team-card-one__social__links">
//                         <li>
//                           <a href="#">
//                             <i class="fab fa-twitter"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#">
//                             <i class="fab fa-facebook"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#">
//                             <i class="fab fa-pinterest-p"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#">
//                             <i class="fab fa-instagram"></i>
//                           </a>
//                         </li>
//                       </ul>
//                       {/* <!-- /.team-card-one__social__links --> */}
//                       <div class="team-card-one__social__icon">
//                         <i class="fa fa-share-alt"></i>
//                       </div>
//                       {/* <!-- /.team-card-one__social__icon --> */}
//                     </div>
//                     {/* <!-- /.team-card-one__social --> */}
//                   </div>
//                   {/* <!-- /.team-card-one__image --> */}
//                   <div class="team-card-one__content">
//                     <h3 class="team-card-one__title">
//                       <a href="#">Jessica Brown</a>
//                     </h3>
//                     {/* <!-- /.team-card-one__title --> */}
//                     <p class="team-card-one__designation">Manager</p>
//                     {/* <!-- /.team-card-one__designation --> */}
//                   </div>
//                   {/* <!-- /.team-card-one__content --> */}
//                 </div>
//                 {/* <!-- /.team-card-one --> */}
//               </div>
//               {/* <!-- /.col-lg-3 col-md-6 col-sm-12 --> */}
//               <div class="col-lg-3 col-md-6 col-sm-12">
//                 <div
//                   class="team-card-one wow fadeInUp"
//                   data-wow-duration="1500ms"
//                   data-wow-delay="200ms"
//                 >
//                   <div class="team-card-one__image">
//                     <img src="assets/images/team/team-2-3.jpg" alt="" />
//                     <div class="team-card-one__social">
//                       <ul class="team-card-one__social__links">
//                         <li>
//                           <a href="#">
//                             <i class="fab fa-twitter"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#">
//                             <i class="fab fa-facebook"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#">
//                             <i class="fab fa-pinterest-p"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#">
//                             <i class="fab fa-instagram"></i>
//                           </a>
//                         </li>
//                       </ul>
//                       {/* <!-- /.team-card-one__social__links --> */}
//                       <div class="team-card-one__social__icon">
//                         <i class="fa fa-share-alt"></i>
//                       </div>
//                       {/* <!-- /.team-card-one__social__icon --> */}
//                     </div>
//                     {/* <!-- /.team-card-one__social --> */}
//                   </div>
//                   {/* <!-- /.team-card-one__image --> */}
//                   <div class="team-card-one__content">
//                     <h3 class="team-card-one__title">
//                       <a href="#">Kevin Martin</a>
//                     </h3>
//                     {/* <!-- /.team-card-one__title --> */}
//                     <p class="team-card-one__designation">Developer</p>
//                     {/* <!-- /.team-card-one__designation --> */}
//                   </div>
//                   {/* <!-- /.team-card-one__content --> */}
//                 </div>
//                 {/* <!-- /.team-card-one --> */}
//               </div>
//               {/* <!-- /.col-lg-3 col-md-6 col-sm-12 --> */}
//               <div class="col-lg-3 col-md-6 col-sm-12">
//                 <div
//                   class="team-card-one wow fadeInUp"
//                   data-wow-duration="1500ms"
//                   data-wow-delay="300ms"
//                 >
//                   <div class="team-card-one__image">
//                     <img src="assets/images/team/team-2-4.jpg" alt="" />
//                     <div class="team-card-one__social">
//                       <ul class="team-card-one__social__links">
//                         <li>
//                           <a href="#">
//                             <i class="fab fa-twitter"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#">
//                             <i class="fab fa-facebook"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#">
//                             <i class="fab fa-pinterest-p"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#">
//                             <i class="fab fa-instagram"></i>
//                           </a>
//                         </li>
//                       </ul>
//                       {/* <!-- /.team-card-one__social__links --> */}
//                       <div class="team-card-one__social__icon">
//                         <i class="fa fa-share-alt"></i>
//                       </div>
//                       {/* <!-- /.team-card-one__social__icon --> */}
//                     </div>
//                     {/* <!-- /.team-card-one__social --> */}
//                   </div>
//                   {/* <!-- /.team-card-one__image --> */}
//                   <div class="team-card-one__content">
//                     <h3 class="team-card-one__title">
//                       <a href="#">Sarah Albert</a>
//                     </h3>
//                     {/* <!-- /.team-card-one__title --> */}
//                     <p class="team-card-one__designation">Director</p>
//                     {/* <!-- /.team-card-one__designation --> */}
//                   </div>
//                   {/* /	/<!-- /.team-card-one__content --> */}
//                 </div>
//                 {/* <!-- /.team-card-one --> */}
//               </div>
//               {/* <!-- /.col-lg-3 col-md-6 col-sm-12 --> */}
//             </div>
//             {/* <!-- /.row --> */}
//           </div>
//           {/*  */}
//         </section>

//         <section class=" section-padding--top about-three about-three--home-one">
//           <div
//             class="about-three__shape wow fadeInRight"
//             data-wow-duration="1500ms"
//             style={{
//               backgroundImage: `url("images/background/slider-1-1.jpg" alt="")`,
//             }}
//           ></div>
//           {/* <!-- /.about-three__shape --> */}
//           <div class="container">
//             <div class="row gutter-y-60">
//               <div class="col-lg-6">
//                 <div class="about-three__image">
//                   <img
//                     src="assets/images/resources/about-three-1-1.png"
//                     class="wow fadeInUp"
//                     data-wow-duration="1500ms"
//                     alt=""
//                   />
//                 </div>
//                 {/* <!-- /.about-three__image --> */}
//               </div>
//               {/* <!-- /.col-lg-6 --> */}
//               <div class="col-lg-6">
//                 <div class="about-three__content">
//                   <div class="section-title ">
//                     <p class="section-title__text">Company Benefits</p>
//                     {/* <!-- /.section-title__text --> */}
//                     <h2 class="section-title__title">
//                       Why You Should Choose Our Services
//                     </h2>
//                     {/* <!-- /.section-title__title --> */}
//                   </div>
//                   {/*  */}
//                   <div class="about-three__text">
//                     Choose Infetech to have custom software solutions for your
//                     business with the most reasonable price.
//                   </div>
//                   {/* <!-- /.about-three__text --> */}
//                   <ul class="about-three__list">
//                     <li class="about-three__list__item">
//                       <div class="about-three__list__icon">
//                         <i class="icon-cloud"></i>
//                       </div>
//                       {/* <!-- /.about-three__list__icon --> */}
//                       <div class="about-three__list__content">
//                         <h3 class="about-three__list__title">
//                           <a href="service-cyber-security.html">
//                             Cloud Based Services
//                           </a>
//                         </h3>
//                         {/* <!-- /.about-three__list__title --> */}
//                         <p class="about-three__list__text">
//                           Services address a range of simply free text
//                           application and infrastructure needs.
//                         </p>
//                         {/* <!-- /.about-three__list__text --> */}
//                       </div>
//                       {/* <!-- /.about-three__list__content --> */}
//                     </li>
//                     <li class="about-three__list__item">
//                       <div class="about-three__list__icon">
//                         <i class="icon-group"></i>
//                       </div>
//                       {/* <!-- /.about-three__list__icon --> */}
//                       <div class="about-three__list__content">
//                         <h3 class="about-three__list__title">
//                           <a href="team.html">Expert Team Members</a>
//                         </h3>
//                         {/* <!-- /.about-three__list__title --> */}
//                         <p class="about-three__list__text">
//                           Services address a range of simply free text
//                           application and infrastructure needs.
//                         </p>
//                         {/* <!-- /.about-three__list__text --> */}
//                       </div>
//                       {/* <!-- /.about-three__list__content --> */}
//                     </li>
//                   </ul>
//                   {/* <!-- /.about-three__list --> */}
//                 </div>
//                 {/* <!-- /.about-three__content --> */}
//               </div>
//               {/* <!-- /.col-lg-6 --> */}
//             </div>
//             {/* <!-- /.row --> */}
//           </div>
//           {/*  */}
//         </section>

//         <section class="section-padding--top section-padding--bottom">
//           <div class="container">
//             <div class="section-title text-center">
//               <p class="section-title__text">Direct from the Blog Posts</p>
//               {/* <!-- /.section-title__text --> */}
//               <h2 class="section-title__title">
//                 Checkout Our Latest <br />
//                 News & Articles
//               </h2>
//               {/* <!-- /.section-title__title --> */}
//             </div>
//             {/*  */}
//             <div class="row gutter-y-30">
//               <div
//                 class="col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
//                 data-wow-duration="1500ms"
//                 data-wow-delay="000ms"
//               >
//                 <div class="blog-card-one">
//                   <div class="blog-card-one__image">
//                     <img src="assets/images/blog/blog-1-1.jpg" alt="" />
//                     <a href="blog-details.html"></a>
//                   </div>
//                   {/* <!-- /.blog-card-one__image --> */}
//                   <div class="blog-card-one__content">
//                     <div class="blog-card-one__meta">
//                       <div class="blog-card-one__date">
//                         <i class="fa fa-calendar-alt" aria-hidden="true"></i>
//                         July, 25, 2022
//                       </div>
//                       {/* <!-- /.blog-card-one__date --> */}
//                       <a href="blog.html" class="blog-card-one__category">
//                         Designer
//                       </a>
//                       {/* <!-- /.blog-card-one__category --> */}
//                     </div>
//                     {/* <!-- /.blog-card-one__meta --> */}
//                     <h3 class="blog-card-one__title">
//                       <a href="blog-details.html">
//                         Web design done Delightful Visualization Examples
//                       </a>
//                     </h3>
//                     <a href="blog-details.html" class="blog-card-one__more">
//                       Read More
//                       <i class="fa fa-arrow-right"></i>
//                     </a>
//                     {/* <!-- /.blog-card-one__more --> */}
//                   </div>
//                   {/* <!-- /.blog-card-one__content --> */}
//                 </div>
//                 {/* <!-- /.blog-card-one --> */}
//               </div>
//               {/* <!-- /.col-lg-4 col-md-6 col-sm-12 --> */}
//               <div
//                 class="col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
//                 data-wow-duration="1500ms"
//                 data-wow-delay="100ms"
//               >
//                 <div class="blog-card-one">
//                   <div class="blog-card-one__image">
//                     <img src="assets/images/blog/blog-1-2.jpg" alt="" />
//                     <a href="blog-details.html"></a>
//                   </div>
//                   {/* <!-- /.blog-card-one__image --> */}
//                   <div class="blog-card-one__content">
//                     <div class="blog-card-one__meta">
//                       <div class="blog-card-one__date">
//                         <i class="fa fa-calendar-alt" aria-hidden="true"></i>
//                         July, 25, 2022
//                       </div>
//                       {/* <!-- /.blog-card-one__date --> */}
//                       <a href="blog.html" class="blog-card-one__category">
//                         Graphic
//                       </a>
//                       {/* <!-- /.blog-card-one__category --> */}
//                     </div>
//                     {/* <!-- /.blog-card-one__meta --> */}
//                     <h3 class="blog-card-one__title">
//                       <a href="blog-details.html">
//                         Technology Support Allows Erie non-profit to Serve
//                       </a>
//                     </h3>
//                     <a href="blog-details.html" class="blog-card-one__more">
//                       Read More
//                       <i class="fa fa-arrow-right"></i>
//                     </a>
//                     {/* <!-- /.blog-card-one__more --> */}
//                   </div>
//                   {/* //  /.blog-card-one__content --> */}
//                 </div>
//                 {/* <!-- /.blog-card-one --> */}
//               </div>
//               {/* <!-- /.col-lg-4 col-md-6 col-sm-12 --> */}
//               <div
//                 class="col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
//                 data-wow-duration="1500ms"
//                 data-wow-delay="200ms"
//               >
//                 <div class="blog-card-one">
//                   <div class="blog-card-one__image">
//                     <img src="assets/images/blog/blog-1-3.jpg" alt="" />
//                     <a href="blog-details.html"></a>
//                   </div>
//                   {/* <!-- /.blog-card-one__image --> */}
//                   <div class="blog-card-one__content">
//                     <div class="blog-card-one__meta">
//                       <div class="blog-card-one__date">
//                         <i class="fa fa-calendar-alt" aria-hidden="true"></i>
//                         July, 25, 2022
//                       </div>
//                       {/* <!-- /.blog-card-one__date --> */}
//                       <a href="blog.html" class="blog-card-one__category">
//                         SEO
//                       </a>
//                       {/* <!-- /.blog-card-one__category --> */}
//                     </div>
//                     {/* <!-- /.blog-card-one__meta --> */}
//                     <h3 class="blog-card-one__title">
//                       <a href="blog-details.html">
//                         Software Makes Your Profit Double if You Scale Properly
//                       </a>
//                     </h3>
//                     <a href="blog-details.html" class="blog-card-one__more">
//                       Read More
//                       <i class="fa fa-arrow-right"></i>
//                     </a>
//                     {/* <!-- /.blog-card-one__more --> */}
//                   </div>
//                   {/* <!-- /.blog-card-one__content --> */}
//                 </div>
//                 {/* /<!-- /.blog-card-one --> */}
//               </div>
//               {/* <!-- /.col-lg-4 col-md-6 col-sm-12 --> */}
//             </div>
//             {/* <!-- /.row gutter-y-30 --> */}
//           </div>
//           {/*  */}
//         </section>

//         <section class="cta-one">
//           <div class="container">
//             <div
//               class="cta-one__inner text-center wow fadeInUp"
//               data-wow-duration="1500ms"
//             >
//               <div class="cta-one__circle"></div>
//               {/* //  /.cta-one__circle --> */}
//               <div class="section-title ">
//                 <p class="section-title__text">Need Any Technology Solution</p>
//                 {/* <!-- /.section-title__text --> */}
//                 <h2 class="section-title__title section-title__title--light">
//                   Let’s Work Togather on Project
//                 </h2>
//                 {/* <!-- /.section-title__title --> */}
//               </div>
//               {/*  */}
//               <a
//                 href="contact.html"
//                 class="thm-btn thm-btn--light cta-one__btn"
//               >
//                 <span>Start Now</span>
//               </a>
//               {/*  */}
//             </div>
//             {/*  */}
//           </div>
//           {/*  */}
//         </section>
//         {/* <!-- /.cta-one --> */}

//         <div class="footer-main section-padding--bottom footer-main--top-padding">
//           <div class="container">
//             <div class="row gutter-y-30">
//               <div class="col-lg-3 col-md-6 col-sm-12">
//                 <div class="footer-widget footer-widget--about">
//                   <a href="index.html" class="footer-widget__logo">
//                     <img
//                       src="assets/images/logo-light.png"
//                       width="119"
//                       height="40"
//                       alt="Cretech"
//                     />
//                   </a>
//                   <p class="footer-widget__text">
//                     We work with a passion of taking challenges and creating new
//                     ones in advertising sector.
//                   </p>
//                   {/* <!-- /.footer-widget__text --> */}
//                   <ul class="footer-widget__social">
//                     <li>
//                       <a href="#">
//                         <i class="fab fa-twitter"></i>
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#">
//                         <i class="fab fa-facebook-f"></i>
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#">
//                         <i class="fab fa-pinterest-p"></i>
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#">
//                         <i class="fab fa-instagram"></i>
//                       </a>
//                     </li>
//                   </ul>
//                   {/* <!-- /.footer-widget__social --> */}
//                 </div>
//                 {/* <!-- /.footer-widget --> */}
//               </div>
//               {/* <!-- /.col-lg-3 col-md-6 col-sm-12 --> */}
//               <div class="col-lg-3 col-md-6 col-sm-12">
//                 <div class="footer-widget footer-widget--links">
//                   <h3 class="footer-widget__title">Services</h3>
//                   {/* <!-- /.footer-widget__title --> */}
//                   <ul class="footer-widget__links">
//                     <li>
//                       <a href="service-cyber-security.html">Cyber Security</a>
//                     </li>
//                     <li>
//                       <a href="service-it-management.html">IT Management</a>
//                     </li>
//                     <li>
//                       <a href="service-qa-testing.html">QA & Testing</a>
//                     </li>
//                     <li>
//                       <a href="service-infrastructure-plan.html">
//                         Infrastructure Plan
//                       </a>
//                     </li>
//                     <li>
//                       <a href="service-it-consultent.html">IT Consultent</a>
//                     </li>
//                   </ul>
//                   {/* <!-- /.footer-widget__links --> */}
//                 </div>
//                 {/* <!-- /.footer-widget --> */}
//               </div>
//               {/* <!-- /.col-lg-3 col-md-6 col-sm-12 --> */}
//               <div class="col-lg-3 col-md-6 col-sm-12">
//                 <div class="footer-widget footer-widget--newsletter">
//                   <h3 class="footer-widget__title">Subscribe</h3>
//                   {/* <!-- /.footer-widget__title --> */}
//                   <p class="footer-widget__text">
//                     Sign up to receive the latest articles
//                   </p>
//                   {/* <!-- /.footer-widget__text --> */}
//                   <form
//                     action="#"
//                     class="footer-widget__newsletter mc-form"
//                     data-url="ADD_YOUR_MAILCHIMP_FORM_URL_HERE"
//                   >
//                     <input
//                       type="email"
//                       name="EMAIL"
//                       placeholder="Enter Your Email"
//                     />
//                     <button class="thm-btn footer-widget__newsletter__btn">
//                       <span>Register</span>
//                     </button>
//                   </form>
//                   <div class="mc-form__response"></div>
//                   {/* <!-- /.mc-form__response --> */}
//                 </div>
//                 {/* <!-- /.footer-widget --> */}
//               </div>
//               {/* <!-- /.col-lg-3 col-md-6 col-sm-12 --> */}
//               <div class="col-lg-3 col-md-6 col-sm-12">
//                 <div class="footer-widget footer-widget--contact">
//                   <h3 class="footer-widget__title">Contact</h3>
//                   {/* <!-- /.footer-widget__title --> */}
//                   <ul class="footer-widget__contact">
//                     <li>
//                       <i class="fa fa-phone"></i>
//                       <a href="tel:+8898006802">+ 88 ( 9800 ) 6802</a>
//                     </li>
//                     <li>
//                       <i class="fa fa-envelope"></i>
//                       <a href="mailto:needhelp@company.com">
//                         needhelp@company.com
//                       </a>
//                     </li>
//                     <li>
//                       <i class="fa fa-map-marker-alt"></i>
//                       88 Broklyn Golden Road Street <br /> New York. USA
//                     </li>
//                   </ul>
//                   {/* /<!-- /.footer-widget__contact --> */}
//                 </div>
//                 {/* <!-- /.footer-widget --> */}
//               </div>
//               {/* <!-- /.col-lg-3 col-md-6 col-sm-12 --> */}
//             </div>
//             {/* <!-- /.row --> */}
//           </div>
//           {/*  */}
//         </div>
//         {/* <!-- /.footer-main --> */}
//         <div class="footer-bottom">
//           <div class="container">
//             <p>
//               &copy; All Copyright <span class="dynamic-year"></span> by Cretech
//             </p>
//           </div>
//           {/*  */}
//         </div>
//         {/* <!-- /.footer-bottom --> */}
//       </div>
//       {/* <!-- /.page-wrapper --> */}

//       <div class="mobile-nav__wrapper">
//         <div class="mobile-nav__overlay mobile-nav__toggler"></div>
//         {/* <!-- /.mobile-nav__overlay --> */}
//         <div class="mobile-nav__content">
//           <a href="#" class="mobile-nav__close mobile-nav__toggler">
//             <span></span>
//             <span></span>
//           </a>

//           <div class="logo-box">
//             <a href="index.html" aria-label="logo image">
//               <img
//                 src="assets/images/logo-light.png"
//                 width="98"
//                 height="33"
//                 alt="Cretech"
//               />
//             </a>
//           </div>
//           {/* <!-- /.logo-box --> */}
//           <div class="mobile-nav__container"></div>
//           {/* <!-- /.mobile-nav__container --> */}

//           <ul class="mobile-nav__contact list-unstyled">
//             <li>
//               <i class="fa fa-phone"></i>
//               <a href="tel:+8898006802">+ 88 ( 9800 ) 6802</a>
//             </li>
//             <li>
//               <i class="fa fa-envelope"></i>
//               <a href="mailto:needhelp@company.com">needhelp@company.com</a>
//             </li>
//             <li>
//               <i class="fa fa-map-marker-alt"></i>
//               88 Broklyn Golden Road Street <br /> New York. USA
//             </li>
//           </ul>
//           {/* <!-- /.mobile-nav__contact --> */}
//           <ul class="mobile-nav__social">
//             <li>
//               <a href="#">
//                 <i class="fab fa-twitter"></i>
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <i class="fab fa-facebook-f"></i>
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <i class="fab fa-pinterest-p"></i>
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <i class="fab fa-instagram"></i>
//               </a>
//             </li>
//           </ul>
//           {/* <!-- /.mobile-nav__social --> */}
//         </div>
//       </div>

//       <div class="search-popup">
//         <div class="search-popup__overlay search-toggler"></div>

//         <div class="search-popup__content">
//           <form action="#">
//             <label for="search" class="sr-only">
//               search here
//             </label>
//             {/* <!-- /.sr-only --> */}
//             <input type="text" id="search" placeholder="Search Here..." />
//             <button type="submit" aria-label="search submit" class="thm-btn">
//               <span>
//                 <i class="icon-magnifying-glass"></i>
//               </span>
//             </button>
//           </form>
//         </div>
//         {/* -- /.search-popup__content --> */}
//       </div>
//       {/* <!-- /.search-popup --> */}

//       <a href="#" data-target="html" class="scroll-to-target scroll-to-top">
//         <i class="fa fa-angle-up"></i>
//       </a>
//     </body>
//   );
// }

// export default Header;
