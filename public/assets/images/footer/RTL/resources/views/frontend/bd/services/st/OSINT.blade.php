@extends('frontend.bd.main_master')
@section('content')
    @section('title')
        Open Source Intelligence(OSINT)
    @endsection

    <div class="page-header">
        <div class="page-header__bg"
             style="background-image: url({{ asset('frontend/assets/images/background/page-header-bg-1-1.jpg') }});"></div>
        <!-- /.page-header__bg -->
        <div class="container">
            <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/') }}">Home</a></li>
                <li><a href="{{ url('/services') }}">Services</a></li>
                <li><a href="{{ url('/services/security-training') }}">Security Training</a></li>
                <li>Open Source Intelligence(OSINT)</li>
            </ul>
            <h2 class="page-header__title">Open Source Intelligence(OSINT)</h2><!-- /.page-header__title -->
        </div><!-- /.container -->
    </div><!-- /.page-header -->

    <section class="section-padding--bottom section-padding--top">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">


                    <h3 class="blog-card-one__title blog-details__title">Open-Source Intelligence (OSINT) :</h3>
                    <div class="blog-details__content">
                        <p>This course focuses on Open Source Intelligence (OSINT) tactics and techniques designed to
                            help you improve your investigative game. Students should take this course if they are interested in:
                            <br><br>
                            Gaining a better understanding of OSINT techniques<br>
                            Improving investigative skillset<br>
                            Improving overall research methodology<br>
                            Improving Personal OPSEC<br><br>
                            Open-source intelligence (OSINT) is the practice of collecting information
                            from published or otherwise publicly available sources.
                        </p>
                    </div><!-- /.blog-details__content -->


                </div><!-- /.col-lg-8 -->
                <div class="col-lg-4">
                    <div class="sidebar">
                        <div class="sidebar__item sidebar__item--category">
                            @include('frontend.bd.services.st.common')
                        </div><!-- /.sidebar__item -->
                    </div><!-- /.sidebar -->
                </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section><br>



@endsection
