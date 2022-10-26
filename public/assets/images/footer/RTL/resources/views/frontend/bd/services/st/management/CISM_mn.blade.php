@extends('frontend.bd.main_master')
@section('content')
@section('title')
    Certified Information Security Manager(CISM)
@endsection

<div class="page-header">
    <div class="page-header__bg"
         style="background-image: url({{ asset('') }});"></div>
    <!-- /.page-header__bg -->
    <div class="container">
        <ul class="thm-breadcrumb list-unstyled">
            <li><a href="{{ url('/') }}">Home</a></li>
            <li><a href="{{ url('/services/security-training') }}">Training</a></li>
            <li><a href="{{ url('/services/security-training/management') }}">Management</a></li>
            <li>Certified Information Security Manager (CISM)</li>
        </ul>
        <h2 class="page-header__title">Certified Information Security Manager (CISM)</h2><!-- /.page-header__title -->
    </div><!-- /.container -->
</div><!-- /.page-header -->

<section class="section-padding--bottom section-padding--top">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">


                <h3 class="blog-card-one__title blog-details__title">Certified Information Security Manager(CISM)</h3>
                <div class="blog-details__content">
                    <p>ISACA’s Certified Information Security Manager (CISM) certification indicates expertise in information security governance, program development and management, incident management and risk management.
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
