@extends('frontend.bd.main_master')
@section('content')
    @section('title')
        CISSP
    @endsection

    <div class="page-header">
        <div class="page-header__bg"
             style="background-image: url({{ asset('frontend/assets/images/background/') }});"></div>
        <!-- /.page-header__bg -->
        <div class="container">
            <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/') }}">Home</a></li>
                <li><a href="{{ url('/services/security-training') }}">Training</a></li>
                <li><a href="{{ url('/services/security-training/management') }}">Management</a></li>
                <li>CISSP</li>
            </ul>
            <h2 class="page-header__title">CISSP</h2><!-- /.page-header__title -->
        </div><!-- /.container -->
    </div><!-- /.page-header -->

    <section class="section-padding--bottom section-padding--top">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">


                    <h3 class="blog-card-one__title blog-details__title">CISSP (Certified Information Systems Security Professional)</h3>
                    <div class="blog-details__content">
                        <p>CISSP (Certified Information Systems Security Professional) is an independent information
                            security certification granted by the International Information System Security Certification
                            Consortium, also known as (ISC)².<br>

                            The CISSP curriculum breaks the subject matter down into a variety of Information Security
                            topics referred to as domains. The eight domains covered are :
                            <br><br>
                            Security and Risk Management<br>
                            Asset Security<br>
                            Security Architecture and Engineering<br>
                            Communication and Network Security<br>
                            Identity and Access Management<br>
                            Security Assessment and Testing<br>
                            Security Operations<br>
                            Software Development Security<br>
                        </p>
                    </div><!-- /.blog-details__content -->


                </div><!-- /.col-lg-8 -->
                <div class="col-lg-4">
                    <div class="sidebar">
                        <div class="sidebar__item sidebar__item--category">
                            @include('frontend.bd.services.st.management.cmn')
                        </div><!-- /.sidebar__item -->
                    </div><!-- /.sidebar -->
                </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section><br>



@endsection
