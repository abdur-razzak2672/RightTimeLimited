@extends('frontend.bd.main_master')
@section('content')
    @section('title')
        CMMI
    @endsection

    <div class="page-header">
        <div class="page-header__bg"
             style="background-image: url({{ asset('https://967092.smushcdn.com/2731202/wp-content/uploads/2022/01/cmmi-level-3.jpg?lossy=1&strip=1&webp=1') }});"></div>
        <!-- /.page-header__bg -->
        <div class="container">
            <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/') }}">Home</a></li>
                <li><a href="{{ url('/services') }}">Services</a></li>
                <li><a href="{{ url('/services/standard-implementation-certification') }}">Standard Implementation & Certification</a></li>
                <li>CMMI</li>
            </ul>
            <h2 class="page-header__title">CMMI (Capability Maturity Model Integration)
</h2><!-- /.page-header__title -->
        </div><!-- /.container -->
    </div><!-- /.page-header -->

    <section class="section-padding--bottom section-padding--top">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">


                    <h3 style="color:orange;" class="blog-card-one__title blog-details__title">CMMI (Capability Maturity Model Integration)
</h3>
                    <div class="blog-details__content">
                        <p>A process and behavior model called the Capability Maturity Model Integration (CMMI) assists organizations in streamlining process improvement and encouraging effective, efficient behaviors that lower risks in the creation of software, goods, and services.
The Software Engineering Institute at Carnegie Mellon University created the CMMI as a tool for process improvement for projects, divisions, and companies. DoD and the US Government contributed to the development of the CMMI, which is a prerequisite for DoD and US. contracting with the government to develop software. The CMMI Institute, which the ISACA acquired in 2016, currently oversees the CMMI.
</p>
                    <br>
                    <br>
                    <br>
                    <br><br><br><br><br><br><br><br>
                    
                    </div><!-- /.blog-details__content -->


                </div><!-- /.col-lg-8 -->
                <div class="col-lg-4">
                    <div class="sidebar">
                        <div class="sidebar__item sidebar__item--category">
                            @include('frontend.bd.services.sic.common')
                        </div><!-- /.sidebar__item -->
                    </div><!-- /.sidebar -->
                </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section><br>



@endsection
