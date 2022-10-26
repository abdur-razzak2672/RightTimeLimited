<div class="topbar">
    <div class="container-fluid">
        <p class="topbar__text">Welcome to Right Time Limited <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" zoomAndPan="magnify" viewBox="0 0 30 30.000001" height="30" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 2.878906 5.769531 L 26.832031 5.769531 L 26.832031 23.1875 L 2.878906 23.1875 Z M 2.878906 5.769531 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="rgb(0%, 41.569519%, 30.198669%)" d="M 26.820312 20.507812 C 26.820312 21.988281 25.632812 23.1875 24.164062 23.1875 L 5.550781 23.1875 C 4.082031 23.1875 2.890625 21.988281 2.890625 20.507812 L 2.890625 8.449219 C 2.890625 6.96875 4.082031 5.769531 5.550781 5.769531 L 24.164062 5.769531 C 25.632812 5.769531 26.820312 6.96875 26.820312 8.449219 Z M 26.820312 20.507812 " fill-opacity="1" fill-rule="nonzero"/></g><path fill="rgb(95.689392%, 16.468811%, 25.489807%)" d="M 18.179688 14.144531 C 18.179688 14.449219 18.152344 14.757812 18.089844 15.058594 C 18.03125 15.359375 17.941406 15.652344 17.824219 15.9375 C 17.710938 16.222656 17.566406 16.492188 17.394531 16.75 C 17.226562 17.003906 17.035156 17.242188 16.816406 17.460938 C 16.601562 17.675781 16.367188 17.871094 16.113281 18.042969 C 15.859375 18.214844 15.589844 18.359375 15.308594 18.476562 C 15.027344 18.59375 14.734375 18.683594 14.433594 18.742188 C 14.136719 18.804688 13.832031 18.832031 13.527344 18.832031 C 13.222656 18.832031 12.917969 18.804688 12.621094 18.742188 C 12.320312 18.683594 12.027344 18.59375 11.746094 18.476562 C 11.464844 18.359375 11.195312 18.214844 10.941406 18.042969 C 10.6875 17.871094 10.453125 17.675781 10.238281 17.460938 C 10.019531 17.242188 9.828125 17.003906 9.660156 16.75 C 9.488281 16.492188 9.34375 16.222656 9.226562 15.9375 C 9.113281 15.652344 9.023438 15.359375 8.964844 15.058594 C 8.902344 14.757812 8.875 14.449219 8.875 14.144531 C 8.875 13.835938 8.902344 13.53125 8.964844 13.226562 C 9.023438 12.925781 9.113281 12.632812 9.226562 12.347656 C 9.34375 12.0625 9.488281 11.792969 9.660156 11.539062 C 9.828125 11.28125 10.019531 11.042969 10.238281 10.828125 C 10.453125 10.609375 10.6875 10.414062 10.941406 10.242188 C 11.195312 10.074219 11.464844 9.929688 11.746094 9.808594 C 12.027344 9.691406 12.320312 9.601562 12.621094 9.542969 C 12.917969 9.484375 13.222656 9.453125 13.527344 9.453125 C 13.832031 9.453125 14.136719 9.484375 14.433594 9.542969 C 14.734375 9.601562 15.027344 9.691406 15.308594 9.808594 C 15.589844 9.929688 15.859375 10.074219 16.113281 10.242188 C 16.367188 10.414062 16.601562 10.609375 16.816406 10.828125 C 17.035156 11.042969 17.226562 11.28125 17.394531 11.539062 C 17.566406 11.792969 17.710938 12.0625 17.824219 12.347656 C 17.941406 12.632812 18.03125 12.925781 18.089844 13.226562 C 18.152344 13.53125 18.179688 13.835938 18.179688 14.144531 Z M 18.179688 14.144531 " fill-opacity="1" fill-rule="nonzero"/></svg></p>
        <ul class="topbar__info">
                <li>
                    <i class="fa fa-envelope"></i>
                    <a href="mailto:info@righttime.biz">info@righttime.biz</a>
                </li>
                <li>
                    <i class="fa fa-map-marker"></i>
                    Level: 06 & 14 (west), BDBL Bhaban, 12, Karwan Bazar, Tejgaon
                </li>

            <li>
                <div class="dropdown">
                    <div class="dropbtn">Countries <i class="fa fa-solid fa-square-caret-down" style="padding-top: 10px"></i></div>
                    <div class="dropdown-content">
                        <a href="{{ url('/usa') }}">USA</a>
                        <a href="{{ url('/aus') }}">Australia</a>
                        <a href="{{ url('/de') }}">Germany</a>
                    </div>
                </div>
            </li>

        </ul><!-- /.topbar__info -->

    </div><!-- /.container-fluid -->
</div><!-- /.topbar -->
<nav class="main-menu sticky-header">
    <div class="container-fluid">
        <div class="main-menu__logo">
            <a href="{{ url('/') }}">
                <img src="{{ asset('frontend/assets/images/images-removebg-preview.png') }}" width="88" height="75" alt="Cretech">
            </a>
        </div><!-- /.main-menu__logo -->

        <ul class="main-menu__list">
            <li>
                <a href="{{ url('/') }}">Home</a>
            </li>
            <li >
                <a href="{{ url('/about-us') }}">About Us</a>
{{--                <ul>--}}
{{--                    <li><a href="{{ url('/about-us') }}">About Us</a></li>--}}
{{--                    <li><a href="{{ url('/pages/our-team') }}">Our Team</a></li>--}}
{{--                </ul>--}}
            </li>

            <li class="menu-item-has-children">
                <a href="{{ url('/industries') }}">Industries</a>
                <ul>
                    <li><a href="{{ url('/industries/bank-nbfi') }}">Bank & NBFI</a></li>
                    <li><a href="{{ url('/industries/telecommunications') }}">Telecommunications</a></li>
                    <li><a href="{{ url('/industries/pci') }}">Payment Card Industry</a></li>
                    <li><a href="{{ url('/industries/educational-institutions') }}">Educational Institutions</a></li>
                    <li><a href="{{ url('/industries/erm') }}">eCommerce & Retail Merchants</a></li>
                    <li><a href="{{ url('/industries/health-care') }}">Health Care</a></li>
                </ul>
            </li>

            <li>
                <a href="{{ url('/partners') }}">Partners</a>
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
                <a href="{{ url('/services') }}">Services</a>
                <ul>
                    <li class="menu-item-has-children"><a href="{{ url('/services/consultation') }}">Consultation</a>

                        <ul>
                            <li><a href="{{ url('/services/consultation/information-security') }}">Information Security-Specially Cyber Security Consulting</a></li>
                            <li><a href="{{ url('/services/consultation/partners-management') }}" >Project Management</a></li>
                            <li><a href="{{ url('/services/consultation/providing-security') }}">Providing Security</a></li>
                            <li><a href="{{ url('/services/consultation/DC-DRS') }}">Consultation on Shaping the DC & DRS</a></li>
                            <li><a href="{{ url('/services/consultation/swift-cyber-security-consulting') }} ">Swift Cyber Security Consulting</a></li>
                            <li><a href="{{ url('/services/consultation/technical-documentation-on-ICT') }} ">Technical Documentation on ICT</a></li>
                        </ul>
                    </li>

                        <li class="menu-item-has-children"><a href="{{ url('/services/auditing') }}">Auditing</a>
                            <ul>
                                <li><a href="{{ url('/services/auditing/information-system-audit') }}">Information System Audit</a></li>
                                <li><a href="{{ url('/services/auditing/information-technology-audit') }}">Information Technology Audit</a></li>
                                <li><a href="{{ url('/services/auditing/information-security-graded-audit') }}">Information Security Graded Audit</a></li>
                                <li><a href="{{ url('/services/auditing/DC-DRS-audit') }}">DC & DRS Auditing</a></li>
                            </ul>
                        </li>
                            <li class="menu-item-has-children"><a href="{{ url('/services/security-assessment-testing') }}" >Security Testing</a>
                                <ul>
                                    <li><a href="{{ url('/services/security-assessment-testing/VAPT') }}">Vulnerability Assessment & Presentation Testing Services</a></li>
                                    <li><a href="{{ url('/services/security-assessment-testing/digital-forensics') }}">Digital Forensics</a></li>
                                    <li><a href="{{ url('/services/security-assessment-testing/code-review') }}">Code Review</a></li>
                                </ul>
                            </li>
                            <li class="menu-item-has-children"><a href="{{ url('/services/standard-implementation-certification') }}">Certification</a>
                                <ul>
                                    <li> <a href="{{ url('/services/standard-implementation-certification/pci-dss') }}" >Payment Card Industry Data Security Standards</a></li>
                                    <li><a href="{{ url('/services/standard-implementation-certification/iso') }}" >International Organization for Standardization-ISO</a></li>
                                    <li><a href="{{ url('/services/standard-implementation-certification/CMMI') }}">CMMI</a></li>
                                    <li><a href="{{ url('/services/standard-implementation-certification/SCIA') }}" >SWIFT CSP Independent Assesment</a></li>
                                    <li><a href="{{ url('/services/standard-implementation-certification/') }}" >TIA 942 for Data Center</a></li>
                                </ul>
                            </li>
                            <li class="menu-item-has-children"><a href="{{ url('/services/solutions') }}">Solutions</a>
                                <ul>
                                    <li><a href="{{ url('/services/solutions/BURP-Suite') }}">BURP Suite</a></li>
                                    <li><a href="{{ url('/services/solutions/acunetix') }}" >Acunetix</a></li>
                                    <li><a href="{{ url('/services/solutions/net-sporker') }}">Net Sparker</a></li>
                                    <li><a href="{{ url('/services/solutions/core-impact') }}" >Core Impact</a></li>
                                    <li><a href="{{ url('/services/solutions/SIEM-solutions') }}" >SIEM</a></li>
                                    <li><a href="{{ url('/services/solutions/firewall') }}" >Firewall</a></li>
                                    <li><a href="{{ url('/services/solutions/Bulk-SMS') }}" >Bulk SMS</a></li>
                                    <li><a href="{{ url('/services/solutions/smart-contract') }}" >Smart Contract</a></li>
                                </ul>
                            </li>

                </ul>
            </li>













            <li class="menu-item-has-children">
                <a href="{{ url('/services/security-training') }}">Training</a>
                <ul>
                    <li class="menu-item-has-children"><a href="{{ url('/services/security-training/assessment') }}">Assessment</a>
                        <ul>
                            <li><a href="{{ url('/services/security-training/assessment/ethical-hacker') }}">Certified Ethical Hacker (CEH)</a></li>
                            <li><a href="{{ url('/services/security-training/assessment/CPENT') }}">Certified Penetration Testing Professional(CPENT)</a></li>
                            <li><a href="{{ url('/services/security-training/assessment/CHFI') }}">Computer Hacking Forensic Investigator(CHFI)</a></li>
                            <li><a href="{{ url('/services/security-training/assessment/OSINT') }}">Open Source Intelligence(OSINT)</a></li>
                            <li><a href="{{ url('/services/security-training/assessment/GPEN') }}">GIAC Penetration Tester(GPEN)</a></li>
                            <li><a href="{{ url('/services/security-training/assessment/GWAPT') }}">GIAC Web Application Penetration Tester(GWAPT)</a></li>

                        </ul>
                    </li>

                    <li class="menu-item-has-children"><a href="{{ url('/services/security-training/management') }}">Management</a>
                        <ul>
                            <li><a href="{{ url('/services/security-training/management/CDRP') }}">Certified Disaster Recovery Professional</a></li>
                            <li><a href="{{ url('/services/security-training/management/CIH') }}">Certified Incident Handler</a></li>
                            <li><a href="{{ url('/services/security-training/management/CSA') }}">Certified SOC Analyst(CSA)</a></li>
                            <li><a href="{{ url('/services/security-training/management/CTIA') }}">Certified Threat Intelligence Analyst(CTIA)</a></li>
                            <li><a href="{{ url('/services/security-training/management/CISA') }}">Certified Information Systems Auditor(CISA)</a></li>
                            <li><a href="{{ url('/services/security-training/management/CISM') }}">Certified Information Security Manager(CISM)</a></li>
                            <li><a href="{{ url('/services/security-training/management/CISSP') }}">Certified Information Systems Security Professional(CISSP)</a></li>
                            <li><a href="{{ url('/services/security-training/management/GCPM') }}">GIAC Certified Project Manager (GCPM)</a></li>
                        </ul>
                    </li>

                     <li class="menu-item-has-children"><a href="{{ url('/services/security-training/right-time-customized') }}">Customized</a>
                        <ul>
                            <li><a href="{{ url('/services/security-training/right-time-customized/basic') }}">Basic (Corporate)</a></li>
                            <li><a href="{{ url('/services/security-training/right-time-customized/advanced') }}">Advance (Corporate)</a></li>
                            <li><a href="{{ url('/services/security-training/right-time-customized/intermediate') }}">Intermediate (Corporate)</a></li>
                            <li><a href="{{ url('/services/security-training/right-time-customized/one-to-one-training') }}">One to One Training</a></li>

                        </ul>
                    </li>

                </ul>
            </li>












            <li >
                <a href="{{ url('/blog') }}">Careers</a>
            </li>

{{--            <li class="menu-item-has-children">--}}
{{--                <a href="{{ url('/blog') }}">Careers</a>--}}
{{--                <ul>--}}
{{--                    <li><a href="{{ url('/blog') }}">Solution</a></li>--}}
{{--                    <li><a href="{{ url('/blog/blog-details') }}">Blog Details</a></li>--}}
{{--                </ul>--}}
{{--            </li>--}}

            <li><a href="{{ url('/contact') }}">Contact Us</a></li>
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



                <a href="#" class="main-menu__cta">
                    <i class="fa fa-phone-alt"></i>
                    <span class="main-menu__cta__text">
							<b>(+88)-02-55012235</b>
							<b>(+88)-01318-013300</b>
							Call Anytime
						</span><!-- /.main-menu__cta__text -->
                </a><!-- /.main-menu__cta -->








        </div><!-- /.main-menu__right -->

    </div><!-- /.container-fluid -->
</nav><!-- /.main-menu -->
