@extends('frontend.aus.main_master')
@section('content')
    @section('title')
        CPENT
    @endsection

    <div class="page-header">
        <div class="page-header__bg"
             style="background-image: url({{ asset('frontend/assets/images/background/page-header-bg-1-1.jpg') }});"></div>
        <!-- /.page-header__bg -->
        <div class="container">
            <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/aus') }}">Home</a></li>
                <li><a href="{{ url('aus/services') }}">Services</a></li>
                <li><a href="{{ url('aus/services/security-training') }}">Security Training</a></li>
                <li>CPENT</li>
            </ul>
            <h2 class="page-header__title">CPENT</h2><!-- /.page-header__title -->
        </div><!-- /.container -->
    </div><!-- /.page-header -->

    <section class="section-padding--bottom section-padding--top">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">


                    <h3 class="blog-card-one__title blog-details__title">Certified Penetration Tester (CPENT):</h3>
                    <div class="blog-details__content">
                        <p>EC-Council’s Certified Penetration Testing Professional (CPENT) program teaches you how to
                            perform an effective penetration test in an enterprise network environment that must be
                            attacked, exploited, evaded, and defended. If you have only been working in flat networks,
                            CPENT’s live practice range will teach you to take your skills to the next level by teaching
                            you how to pen test IoT systems, OT systems, how to write your own exploits, build your own
                            tools, conduct advanced binaries exploitation, double pivot to access hidden networks, and also
                            customize scripts/exploits to get into the innermost segments of the network.<br><br>

                            <h5>Course Outline -</h5>
                            Module 01: Introduction to Penetration Testing<br>
                            Module 02: Penetration Testing Scoping and Engagement<br>
                            Module 03: Open Source Intelligence (OSINT)<br>
                            Module 04: Social Engineering Penetration Testing<br>
                            Module 05: Network Penetration Testing – External<br>
                            Module 06: Network Penetration Testing– Internal<br>
                            Module 07: Network Penetration Testing – Perimeter Devices<br>
                            Module 08: Web Application Penetration Testing<br>
                            Module 09: Wireless Penetration Testing<br>
                            Module 10: IoT Penetration Testing<br>
                            Module 11: OT/SCADA Penetration Testing<br>
                            Module 12: Cloud Penetration Testing<br>
                            Module 13: Binary Analysis and Exploitation<br>
                            Module 14: Report Writing and Post Testing Actions<br>
                        </p>
                    </div><!-- /.blog-details__content -->


                </div><!-- /.col-lg-8 -->
                <div class="col-lg-4">
                    <div class="sidebar">
                        <div class="sidebar__item sidebar__item--category">
                            @include('frontend.aus.services.st.common')
                        </div><!-- /.sidebar__item -->
                    </div><!-- /.sidebar -->
                </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section><br>



@endsection
