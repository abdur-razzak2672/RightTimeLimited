@extends('frontend.de.main_master')
@section('content')
    @section('title')
        Computer Hacking Forensic Investigator(CHFI)
    @endsection

    <div class="page-header">
        <div class="page-header__bg"
             style="background-image: url({{ asset('frontend/assets/images/background/page-header-bg-1-1.jpg') }});"></div>
        <!-- /.page-header__bg -->
        <div class="container">
            <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/de') }}">Home</a></li>
                <li><a href="{{ url('de/services') }}">Services</a></li>
                <li><a href="{{ url('de/services/security-training') }}">Security Training</a></li>
                <li>Computer Hacking Forensic Investigator(CHFI)</li>
            </ul>
            <h2 class="page-header__title">Computer Hacking Forensic Investigator(CHFI)</h2><!-- /.page-header__title -->
        </div><!-- /.container -->
    </div><!-- /.page-header -->

    <section class="section-padding--bottom section-padding--top">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">


                    <h3 class="blog-card-one__title blog-details__title">Certified Hacking Forensic Investigator (CHFI):</h3>
                    <div class="blog-details__content">
                        <p>EC-Council’s Certified Hacking Forensic Investigator (CHFI) is the only comprehensive ANSI-accredited,
                            lab-focused program in the market that gives organizations vendor-neutral training in digital forensics.
                            CHFI provides its attendees with a firm grasp of digital forensics, presenting a detailed and
                            methodological approach to digital forensics and evidence analysis that also pivots around Dark Web,
                            IoT, and Cloud Forensics. The tools and techniques covered in this program will prepare the learner
                            for conducting digital investigations using groundbreaking digital forensics technologies.<br>
                            <br>
                            The program is designed for IT professionals involved with information system security, computer
                            forensics, and incident response. It will help fortify the application knowledge in digital forensics
                            for forensic analysts, cybercrime investigators, cyber defense forensic analysts, incident responders,
                            information technology auditors, malware analysts, security consultants, and chief security officers.<br>
                            <br>
                            The program equips candidates with the necessary skills to proactively investigate complex
                            security threats, allowing them to investigate, record, and report cybercrimes to prevent<br>
                            future attacks.
                        </p>
                    </div><!-- /.blog-details__content -->


                </div><!-- /.col-lg-8 -->
                <div class="col-lg-4">
                    <div class="sidebar">
                        <div class="sidebar__item sidebar__item--category">
                            @include('frontend.de.services.st.common')
                        </div><!-- /.sidebar__item -->
                    </div><!-- /.sidebar -->
                </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section><br>



@endsection
