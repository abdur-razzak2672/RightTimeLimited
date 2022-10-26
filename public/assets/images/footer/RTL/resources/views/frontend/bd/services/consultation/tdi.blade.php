@extends('frontend.bd.main_master')
@section('content')
    @section('title')
        Technical Documentation on ICT
    @endsection

    <div class="page-header">
        <div class="page-header__bg"
             style="background-image: url({{ asset('https://thumbs.dreamstime.com/b/ict-information-communications-technology-modern-server-room-background-virtual-screen-141876739.jpg') }});"></div>
        <!-- /.page-header__bg -->
        <div class="container">
            <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/') }}">Home</a></li>a
                <li><a href="{{ url('/services') }}">Services</a></li>
                <li><a href="{{ url('/services/consultation') }}">Consultation</a></li>
                <li>Technical Documentation on ICT</li>
            </ul>
            <h2 class="page-header__title">Technical Documentation on ICT</h2><!-- /.page-header__title -->
        </div><!-- /.container -->
    </div><!-- /.page-header -->

    <section class="section-padding--bottom section-padding--top">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">


                    <h3 style="color:orange";class="blog-card-one__title blog-details__title">Technical Documentation on ICT</h3>
                    <div class="blog-details__content">
                        <p>We have practical experience on developing IT Security Apex level policy, IT Sub-policies like Network Policy, Backup Policy, Password Policy, Email Policy, Firewall & Router Policies, Business Continuity Plan (BCP) and Disaster Recovery Plan (DRP) etc.</p>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    </div><!-- /.blog-details__content -->


                </div><!-- /.col-lg-8 -->
                <div class="col-lg-4">
                    <div class="sidebar">
                        <div class="sidebar__item sidebar__item--category">
                            @include('frontend.bd.services.consultation.common')
                        </div><!-- /.sidebar__item -->
                    </div><!-- /.sidebar -->
                </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section><br>



@endsection
