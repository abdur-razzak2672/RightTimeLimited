@extends('frontend.usa.main_master')
@section('content')
    @section('title')
        Certified Ethical Hacker
    @endsection

    <div class="page-header">
        <div class="page-header__bg"
             style="background-image: url({{ asset('frontend/assets/images/resources/CEv12.webp') }});"></div>
        <!-- /.page-header__bg -->
        <div class="container">
            <!--<ul class="thm-breadcrumb list-unstyled">-->
            <!--    <li><a href="{{ url('/usa') }}">Home</a></li>-->
            <!--    <li><a href="{{ url('usa/services') }}">Services</a></li>-->
            <!--    <li><a href="{{ url('usa/services/security-training') }}">Security Training</a></li>-->
            <!--    <li>Certified Ethical Hacker</li>-->
            <!--</ul>-->
            <h2 class="page-header__title">Certified Ethical Hacker</h2>
            <!-- /.page-header__title -->
        </div><!-- /.container -->
    </div><!-- /.page-header -->

    <section class="section-padding--bottom section-padding--top">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">


                    <h3 class="blog-card-one__title blog-details__title">Certified Ethical Hacker (CEH)</h3>
                    <div class="blog-details__content">
                        <p>Knowledge, skills, opportunity, respect, proof… These are all words that circle the C|EH for
                            many of our certified members. The knowledge and Skills attained through the program are
                            second to none covering the widest possible set of domains in cybersecurity, while the
                            Certification itself shows employers you are qualified for the job and serious about proving it.
                            Holding Industry recognized ANSI accredited Certifications proves to your current or prospective
                            employer that a third party (EC-Council) has evaluated your knowledge and skills and conferred
                            a certification to you based on your accomplishments in the program. C|EH opens many doors as
                            the practice of Ethical Hacking serves as the backbone to a variety of specialized roles in
                            cybersecurity. With very reasonably priced training and certification, available globally,
                            C|EH is a small, short-term investment of your time and money with the potential of a
                            lifetime of high-value returns.<br><br>

                            <h5>Course Outline -</h5>
                            Module 01: Introduction to Ethical Hacking<br>
                            Module 02: Foot Printing and Reconnaissance<br>
                            Module 03: Scanning Networks<br>
                            Module 04: Enumeration<br>
                            Module 05: Vulnerability Analysis<br>
                            Module 06: System Hacking<br>
                            Module 07: Malware Threats<br>
                            Module 08: Sniffing<br>
                            Module 09: Social Engineering<br>
                            Module 10: Denial-of-Service<br>
                            Module 11: Session Hijacking<br>
                            Module 12: Evading IDS, Firewalls, and Honeypots<br>
                            Module 13: Hacking Web Servers<br>
                            Module 14: Hacking Web Applications<br>
                            Module 15: SQL Injection<br>
                            Module 16: Hacking Wireless Networks<br>
                            Module 17: Hacking Mobile Platforms<br>
                            Module 18: IoT and OT Hacking<br>
                            Module 19: Cloud Computing<br>
                            Module 20: Cryptography<br>
                        </p>

                        <br>
                        <br>
                        <br>
                    </div><!-- /.blog-details__content -->


                </div><!-- /.col-lg-8 -->
                <div class="col-lg-4">
                    <div class="sidebar">
                        <div class="sidebar__item sidebar__item--category">
                            @include('frontend.usa.services.st.assessment.cmn')
                        </div><!-- /.sidebar__item -->
                    </div><!-- /.sidebar -->
                </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section><br>



@endsection
