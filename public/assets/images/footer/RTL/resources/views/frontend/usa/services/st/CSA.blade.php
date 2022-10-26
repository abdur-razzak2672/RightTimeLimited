@extends('frontend.usa.main_master')
@section('content')
    @section('title')
        Certified SOC Analyst(CSA)
    @endsection

    <div class="page-header">
        <div class="page-header__bg"
             style="background-image: url({{ asset('frontend/assets/images/background/page-header-bg-1-1.jpg') }});"></div>
        <!-- /.page-header__bg -->
        <div class="container">
            <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/usa') }}">Home</a></li>
                <li><a href="{{ url('usa/services') }}">Services</a></li>
                <li><a href="{{ url('usa/services/security-training') }}">Security Training</a></li>
                <li>Certified SOC Analyst(CSA)</li>
            </ul>
            <h2 class="page-header__title">Certified SOC Analyst(CSA)</h2><!-- /.page-header__title -->
        </div><!-- /.container -->
    </div><!-- /.page-header -->

    <section class="section-padding--bottom section-padding--top">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">


                    <h3 class="blog-card-one__title blog-details__title">Certified SOC Analyst (CSA):</h3>
                    <div class="blog-details__content">
                        <p>The Certified SOC Analyst (CSA) program is the first step to joining a security operations
                            center (SOC). It is engineered for current and aspiring Tier I and Tier II SOC analysts
                            to achieve proficiency in performing entry-level and intermediate-level operations.<br>

                            CSA is a training and credentialing program that helps the candidate acquire trending and
                            in-demand technical skills through instruction by some of the most experienced trainers in
                            the industry. The program focuses on creating new career opportunities through extensive,
                            meticulous knowledge with enhanced level capabilities for dynamically contributing to a SOC
                            team. Being an intense 3-day program, it thoroughly covers the fundamentals of SOC operations,
                            before relaying the knowledge of log management and correlation, SIEM deployment, advanced
                            incident detection, and incident response. Additionally, the candidate will learn to manage
                            various SOC processes and collaborate with CSIRT at the time of need.<br><br>

                            <h5>Course Outline</h5>
                            Module 1 – Security Operations and Management<br>
                            Module 2 – Understanding Cyber Threats, IoCs, and Attack Methodology<br>
                            Module 3 – Incidents, Events, and Logging<br>
                            Module 4 – Incident Detection with Security Information and Event Management (SIEM)<br>
                            Module 5 – Enhanced Incident Detection with Threat Intelligence<br>
                            Module 6 – Incident Response<br>
                        </p>
                    </div><!-- /.blog-details__content -->


                </div><!-- /.col-lg-8 -->
                <div class="col-lg-4">
                    <div class="sidebar">
                        <div class="sidebar__item sidebar__item--category">
                            @include('frontend.usa.services.st.common')
                        </div><!-- /.sidebar__item -->
                    </div><!-- /.sidebar -->
                </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section><br>



@endsection
