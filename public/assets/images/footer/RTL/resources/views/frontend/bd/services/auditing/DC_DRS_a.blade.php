@extends('frontend.bd.main_master')
@section('content')
    @section('title')
        DC & DRS Auditing
    @endsection

    <div class="page-header">
        <div class="page-header__bg"
             style="background-image: url({{ asset('frontend/assets/images/background/auditor_pro.png') }});"></div>
        <!-- /.page-header__bg -->
        <div class="container">
            <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/') }}">Home</a></li>
                <li><a href="{{ url('/services') }}">Services</a></li>
                <li><a href="{{ url('/services/auditing') }}">Auditing</a></li>
                <li>DC & DRS Auditing</li>
            </ul>
            <h2 class="page-header__title">DC & DRS Auditing</h2><!-- /.page-header__title -->
        </div><!-- /.container -->
    </div><!-- /.page-header -->

    <section class="section-padding--bottom section-padding--top">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">


                    <h3 class="blog-card-one__title blog-details__title">DC & DRS Auditing</h3>
                    <div class="blog-details__content">
                        <p>  The Data Center is an integral and essential part of an organization’s IT infrastructure because the Data Center houses all IT infrastructures and support equipment. To ensure the safety, effectiveness, and efficiency of a Data Center, periodic security assessment or auditing of physical IT hardware, peripheral and security equipment, and supporting gear such as power and cooling is required.

The internal audit team or department with assurance or oversight responsibilities is accountable for doing a Data Center audit as needed. The scope of the data center audit should reasonably cover all business aspects such as Data Center Operations, infrastructures, management, and human capacity. It should be part of the audit work program for the Data Center.</p>
                    <p>The primary purpose of data center audits is to evaluate the adequacy, effectiveness, and efficiency of the controls in place to minimize risks such as unauthorized access to the data center, business interruptions, theft of information assets, security, emergency, and environmental hazards.</p>
                    
                    <br>
                    <br>
                    </div><!-- /.blog-details__content -->


                </div><!-- /.col-lg-8 -->
                <div class="col-lg-4">
                    <div class="sidebar">
                        <div class="sidebar__item sidebar__item--category">
                            @include('frontend.bd.services.auditing.common')
                        </div><!-- /.sidebar__item -->
                    </div><!-- /.sidebar -->
                </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section><br>



@endsection
