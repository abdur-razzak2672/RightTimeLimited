<div class="topbar">
    <div class="container-fluid">
        <p class="topbar__text">Welcome to Right Time Limited  </p><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" zoomAndPan="magnify" viewBox="0 0 30 30.000001" height="40" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 2.613281 18 L 27.292969 18 L 27.292969 23.722656 L 2.613281 23.722656 Z M 2.613281 18 " clip-rule="nonzero"/></clipPath><clipPath id="id2"><path d="M 2.613281 11 L 27.292969 11 L 27.292969 19 L 2.613281 19 Z M 2.613281 11 " clip-rule="nonzero"/></clipPath><clipPath id="id3"><path d="M 2.613281 5.578125 L 27.292969 5.578125 L 27.292969 12 L 2.613281 12 Z M 2.613281 5.578125 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="rgb(100%, 80.389404%, 1.959229%)" d="M 2.625 20.929688 C 2.625 22.472656 3.851562 23.722656 5.363281 23.722656 L 24.542969 23.722656 C 26.054688 23.722656 27.28125 22.472656 27.28125 20.929688 L 27.28125 18.136719 L 2.625 18.136719 Z M 2.625 20.929688 " fill-opacity="1" fill-rule="nonzero"/></g><g clip-path="url(#id2)"><path fill="rgb(92.939758%, 12.159729%, 14.118958%)" d="M 2.625 11.855469 L 27.28125 11.855469 L 27.28125 18.136719 L 2.625 18.136719 Z M 2.625 11.855469 " fill-opacity="1" fill-rule="nonzero"/></g><g clip-path="url(#id3)"><path fill="rgb(7.839966%, 7.839966%, 7.839966%)" d="M 24.542969 5.578125 L 5.363281 5.578125 C 3.851562 5.578125 2.625 6.828125 2.625 8.367188 L 2.625 11.855469 L 27.28125 11.855469 L 27.28125 8.367188 C 27.28125 6.828125 26.054688 5.578125 24.542969 5.578125 Z M 24.542969 5.578125 " fill-opacity="1" fill-rule="nonzero"/>
        <ul class="topbar__info">




                <li>
                    <i class="fa fa-envelope"></i>
                    <a href="mailto:info@righttime.biz">coo.de@righttime.biz</a>
                </li>
                <li>
                    <i class="fa fa-map-marker"></i>
                    Hausmann str-1.44139,Dortmund. Germany
                </li>



            <li>
                <div class="dropdown">
                    <div class="dropbtn">Countries <i class="fa fa-solid fa-square-caret-down" style="padding-top: 10px"></i></div>
                    <div class="dropdown-content">
                        <a href="{{ url('/') }}">Bangladesh</a>
                        <a href="{{ url('/usa/') }}">USA</a>
                        <a href="{{ url('/aus/') }}">Australia</a>
                    </div>
                </div>
            </li>

        </ul><!-- /.topbar__info -->

    </div><!-- /.container-fluid -->
</div><!-- /.topbar -->




<nav class="main-menu sticky-header">
    <div class="container-fluid">
        <div class="main-menu__logo">
            <a href="{{ url('/de') }}">
                <img src="{{ asset('frontend/assets/images/images-removebg-preview.png') }}" width="88" height="75" alt="Cretech">
            </a>
        </div><!-- /.main-menu__logo -->

        <ul class="main-menu__list">
            <li>
                <a href="{{ url('/de') }}">Home</a>
            </li>
            <li >
                <a href="{{ url('de/about-us') }}">About Us</a>
                {{--                <ul>--}}
                {{--                    <li><a href="{{ url('/about-us') }}">About Us</a></li>--}}
                {{--                    <li><a href="{{ url('/pages/our-team') }}">Our Team</a></li>--}}
                {{--                </ul>--}}
            </li>

            <li class="menu-item-has-children">
                <a href="{{ url('de/industries') }}">Industries</a>
                <ul>
                    <li><a href="{{ url('de/industries/bank-nbfi') }}">Bank & NBFI</a></li>
                    <li><a href="{{ url('de/industries/telecommunications') }}">Telecommunications</a></li>
                    <li><a href="{{ url('de/industries/pci') }}">Payment Card Industry</a></li>
                    <li><a href="{{ url('de/industries/educational-institutions') }}">Educational Institutions</a></li>
                    <li><a href="{{ url('de/industries/erm') }}">eCommerce & Retail Merchants</a></li>
                    <li><a href="{{ url('de/industries/health-care') }}">Health Care</a></li>
                </ul>
            </li>

            <li>
                <a href="{{ url('de/partners') }}">Partners</a>
                <ul>
                    <li><a href="#">Service Partner</a>
                        <ul>
                            <li><a href="https://www.eccouncil.org/">EC Council</a></li>
                            <li><a href="https://home.pearsonvue.com/" >Pearson Vue</a></li>
                            <li><a href="https://pecb.com/en">PECB ISO Certification</a></li>
                            <li><a href="https://arscert.com/certification/">ARS</a></li>
                            <li><a href="https://sckcerts.com/">SCK</a></li>
                            <li><a href="https://www.acnabin.com/">ACNABIN</a></li>
                        </ul>
                    </li>

                    <li><a href="#">Solution Partner</a>
                        <ul>
                            <li><a href="https://www.invicti.com/">INVICTI</a></li>
                            <li><a href="https://www.coresecurity.com/products/core-impact" >Core Impact</a></li>
                            <li><a href="https://portswigger.net/burp">Burp Suite</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Association</a>
                        <ul>
                            <li><a href="http://cca.gov.bd/site/office_head/5891f732-8e0f-40b0-9f85-1cb867657bfd/%E0%A6%AC%E0%A6%BF%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%A4">CCA,Ministry of ICT</a></li>
                            <li><a href="https://www.pcisecuritystandards.org/">PCI SSC, USA</a></li>
                            <li><a href="https://www.worldbank.org/en/home">WBGs (World Bank Group)</a></li>
                            <li><a href="https://www.swift.com/">SWIFT</a></li>
                            <li><a href="https://basis.org.bd/">BASIS</a></li>
                            <li><a href="https://e-cab.net/">E-CAB</a></li>
                        </ul>
                    </li>
                </ul>
            </li>





            <li class="menu-item-has-children">
                <a href="{{ url('de/services') }}">Services</a>
                <ul>
                    <li class="menu-item-has-children"><a href="{{ url('de/services/consultation') }}">Consultation</a>

                        <ul>
                            <li><a href="{{ url('de/services/consultation/information-security') }}">Information Security-Specially Cyber Security Consulting</a></li>
                            <li><a href="{{ url('de/services/consultation/partners-management') }}" >Project Management</a></li>
                            <li><a href="{{ url('de/services/consultation/providing-security') }}">Providing Security</a></li>
                            <li><a href="{{ url('de/services/consultation/DC-DRS') }}">Consultation on Shaping the DC & DRS</a></li>
                            <li><a href="{{ url('de/services/consultation/swift-cyber-security-consulting') }} ">Swift Cyber Security Consulting</a></li>
                            <li><a href="{{ url('de/services/consultation/technical-documentation-on-ICT') }} ">Technical Documentation on ICT</a></li>
                        </ul>
                    </li>

                    <li class="menu-item-has-children"><a href="{{ url('de/services/auditing') }}">Auditing</a>
                        <ul>
                            <li><a href="{{ url('de/services/auditing/information-system-audit') }}">Information System Audit</a></li>
                            <li><a href="{{ url('de/services/auditing/information-technology-audit') }}">Information Technology Audit</a></li>
                            <li><a href="{{ url('de/services/auditing/information-security-graded-audit') }}">Information Security Graded Audit</a></li>
                            <li><a href="{{ url('de/services/auditing/DC-DRS-audit') }}">DC & DRS Auditing</a></li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children"><a href="{{ url('de/services/security-assessment-testing') }}" >Security Testing</a>
                        <ul>
                            <li><a href="{{ url('de/services/security-assessment-testing/VAPT') }}">Vulnerability Assessment & Presentation Testing Services</a></li>
                            <li><a href="{{ url('de/services/security-assessment-testing/digital-forensics') }}">Digital Forensics</a></li>
                            <li><a href="{{ url('de/services/security-assessment-testing/code-review') }}">Code Review</a></li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children"><a href="{{ url('de/services/standard-implementation-certification') }}">Certification</a>
                        <ul>
                            <li> <a href="{{ url('de/services/standard-implementation-certification/pci-dss') }}" >Payment Card Industry Data Security Standards</a></li>
                            <li><a href="{{ url('de/services/standard-implementation-certification/iso') }}" >International Organization for Standardization-ISO</a></li>
                            <li><a href="{{ url('de/services/standard-implementation-certification/CMMI') }}">CMMI</a></li>
                            <li><a href="{{ url('de/services/standard-implementation-certification/SCIA') }}" >SWIFT CSP Independent Assesment</a></li>
                            <li><a href="{{ url('de/services/standard-implementation-certification/') }}" >TIA 942 for Data Center</a></li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children"><a href="{{ url('de/services/solutions') }}">Solutions</a>
                        <ul>
                            <li><a href="{{ url('de/services/solutions/BURP-Suite') }}">BURP Suite</a></li>
                            <li><a href="{{ url('de/services/solutions/acunetix') }}" >Acunetix</a></li>
                            <li><a href="{{ url('de/services/solutions/net-sporker') }}">Net Sporker</a></li>
                            <li><a href="{{ url('de/services/solutions/core-impact') }}" >Core Impact</a></li>
                            <li><a href="{{ url('de/services/solutions/SIEM-solutions') }}" >Core Impact</a></li>
                            <li><a href="{{ url('de/services/solutions/firewall') }}" >Firewall</a></li>
                            <li><a href="{{ url('de/services/solutions/Bulk-SMS') }}" >Bulk SMS</a></li>
                            <li><a href="{{ url('de/services/solutions/smart-contract') }}" >Smart Contract</a></li>
                        </ul>
                    </li>

                </ul>
            </li>













            <li class="menu-item-has-children">
                <a href="{{ url('de/services/security-training') }}">Training</a>
                <ul>
                    <li class="menu-item-has-children"><a href="{{ url('de/services/security-training/assessment') }}">Assessment</a>
                        <ul>
                            <li><a href="{{ url('de/services/security-training/assessment/ethical-hacker') }}">Certified Ethical Hacker (CEH)</a></li>
                            <li><a href="{{ url('de/services/security-training/assessment/CPENT') }}">Certified Penetration Testing Professional(CPENT)</a></li>
                            <li><a href="{{ url('de/services/security-training/assessment/CHFI') }}">Computer Hacking Forensic Investigator(CHFI)</a></li>
                            <li><a href="{{ url('de/services/security-training/assessment/OSINT') }}">Open Source Intelligence(OSINT)</a></li>
                            <li><a href="{{ url('de/services/security-training/assessment/GPEN') }}">GIAC Penetration Tester(GPEN)</a></li>
                            <li><a href="{{ url('de/services/security-training/assessment/GWAPT') }}">GIAC Web Application Penetration Tester(GWAPT)</a></li>

                        </ul>
                    </li>

                    <li class="menu-item-has-children"><a href="{{ url('de/services/security-training/management') }}">Management</a>
                        <ul>
                            <li><a href="{{ url('de/services/security-training/management/CDRP') }}">Certified Disaster Recovery Professional</a></li>
                            <li><a href="{{ url('de/services/security-training/management/CIH') }}">Certified Incident Handler</a></li>
                            <li><a href="{{ url('de/services/security-training/management/CSA') }}">Certified SOC Analyst(CSA)</a></li>
                            <li><a href="{{ url('de/services/security-training/management/CTIA') }}">Certified Threat Intelligence Analyst(CTIA)</a></li>
                            <li><a href="{{ url('de/services/security-training/management/CISA') }}">Certified Information Systems Auditor(CISA)</a></li>
                            <li><a href="{{ url('de/services/security-training/management/CISM') }}">Certified Information Security Manager(CISM)</a></li>
                            <li><a href="{{ url('de/services/security-training/management/CISSP') }}">Certified Information Systems Security Professional(CISSP)</a></li>
                            <li><a href="{{ url('de/services/security-training/management/GCPM') }}">GIAC Certified Project Manager (GCPM)</a></li>
                        </ul>
                    </li>

                    <li class="menu-item-has-children"><a href="{{ url('de/services/security-training/right-time-customized') }}">Customized</a>
                        <ul>
                            <li><a href="{{ url('de/services/security-training/right-time-customized/basic') }}">Basic (Corporate)</a></li>
                            <li><a href="{{ url('de/services/security-training/right-time-customized/advanced') }}">Advance (Corporate)</a></li>
                            <li><a href="{{ url('de/services/security-training/right-time-customized/intermediate') }}">Intermediate (Corporate)</a></li>
                            <li><a href="{{ url('de/services/security-training/right-time-customized/one-to-one-training') }}">One to One Training</a></li>

                        </ul>
                    </li>

                </ul>
            </li>












            <li >
                <a href="{{ url('de/blog') }}">Careers</a>
            </li>

            {{--            <li class="menu-item-has-children">--}}
            {{--                <a href="{{ url('/blog') }}">Careers</a>--}}
            {{--                <ul>--}}
            {{--                    <li><a href="{{ url('/blog') }}">Solution</a></li>--}}
            {{--                    <li><a href="{{ url('/blog/blog-details') }}">Blog Details</a></li>--}}
            {{--                </ul>--}}
            {{--            </li>--}}

            <li><a href="{{ url('de/contact') }}">Contact Us</a></li>
        </ul><!-- /.main-menu__list -->

        <div class="main-menu__right">
            <a href="#" class="mobile-nav__toggler">
                <span></span>
                <span></span>
                <span></span>
            </a>
            {{--            <a href="#" class="search-toggler">--}}
            {{--                <i class="icon-magnifying-glass"></i>--}}
            {{--            </a><!-- /.search-toggler -->--}}



            <a href="tel:+4901624069887" class="main-menu__cta">
                <i class="fa fa-phone-alt"></i>
                <span class="main-menu__cta__text">
							<b>(+49)-01624069887</b>
							Call Anytime
						</span><!-- /.main-menu__cta__text -->
            </a><!-- /.main-menu__cta -->








        </div><!-- /.main-menu__right -->

    </div><!-- /.container-fluid -->
</nav><!-- /.main-menu -->
