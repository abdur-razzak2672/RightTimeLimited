@extends('frontend.bd.main_master')
@section('content')
    @section('title')
        Digital Forensics
    @endsection

    <div class="page-header">
        <div class="page-header__bg"
             style="background-image: url({{ asset('https://t3.ftcdn.net/jpg/01/14/26/82/360_F_114268216_XJtfCHC4JumLcfLg8pSaKG0nJzdISbRq.jpg') }});"></div>
        <!-- /.page-header__bg -->
        <div class="container">
            <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/') }}">Home</a></li>
                <li><a href="{{ url('/services') }}">Services</a></li>
                <li><a href="{{ url('/services/security-assessment-testing') }}">Security Assessment & Testing</a></li>
                <li>Digital Forensics</li>
            </ul>
            <h2 class="page-header__title">Digital Forensics</h2><!-- /.page-header__title -->
        </div><!-- /.container -->
    </div><!-- /.page-header -->

    <section class="section-padding--bottom section-padding--top">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">


                    <h3 style="color:orange;" class="blog-card-one__title blog-details__title">Digital Forensics</h3>
                    <div class="blog-details__content">
                        <p> <b>We provide - </b>
<ul>
<li>Computer Forensic – This Can be used to recover important data, deleted logs, any criminal activities which is deleted intentionally</li>
<li>Mobile Forensic – Mobile device forensic investigation to detect any criminal activities performed in mobile device</li>
<li>Network Forensic – monitoring and analysis of computer network traffic for the purposes of information gathering of network anomaly, legal evidence, or intrusion detection.</li>
</ul>
<br>
We use various tools such as Autopsy, FTK Imager, EnCase, etc.
</p>
<br>
<br>
                    </div><!-- /.blog-details__content -->


                </div><!-- /.col-lg-8 -->
                <div class="col-lg-4">
                    <div class="sidebar">
                        <div class="sidebar__item sidebar__item--category">
                            @include('frontend.bd.services.sat.common')
                        </div><!-- /.sidebar__item -->
                    </div><!-- /.sidebar -->
                </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section><br>



@endsection
