@extends('frontend.bd.main_master')
@section('content')
    @section('title')
        Project Management
    @endsection

    <div class="page-header">
        <div class="page-header__bg"
             style="background-image: url({{ asset('https://media.istockphoto.com/photos/project-manager-working-on-gantt-chart-to-update-the-schedule-tasks-picture-id1317443847?b=1&k=20&m=1317443847&s=170667a&w=0&h=iQefcFXY1mvmUuiX1956GHkfwHZ-jmCup2WyzRsNDs4=') }});"></div>
        <!-- /.page-header__bg -->
        <div class="container">
            <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/') }}">Home</a></li>
                <li><a href="{{ url('/services') }}">Services</a></li>
                <li><a href="{{ url('/services/consultation') }}">Consultation</a></li>
                <li>Project Management</li>
            </ul>
            <h2 class="page-header__title">Project Management</h2><!-- /.page-header__title -->
        </div><!-- /.container -->
    </div><!-- /.page-header -->

    <section class="section-padding--bottom section-padding--top">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">


                    <h3 style="color:orange"; class="blog-card-one__title blog-details__title">Project Management</h3>
                    <div class="blog-details__content">
                        <p>When engaged to manage a project we assign a project team that consists of a tenured, experienced Project Manager, an Auditor, and an Account Manager. Our project team employs our proven project management methodology, which includes the daily audit measured results.</p>
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
