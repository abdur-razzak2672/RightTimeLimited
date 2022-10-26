@extends('frontend.bd.main_master')
@section('content')
@section('title')
    GIAC Penetration Tester(GPEN)
@endsection

<div class="page-header">
    <div class="page-header__bg"
         style="background-image: url({{ asset('https://t3.ftcdn.net/jpg/04/52/42/28/360_F_452422858_zMeVv3oCmjujM1ktmdnNZkDZdXhBfBDC.jpg') }});"></div>
    <!-- /.page-header__bg -->
    <div class="container">
        <ul class="thm-breadcrumb list-unstyled">
            <li><a href="{{ url('/') }}">Home</a></li>
            <li><a href="{{ url('/services/security-training') }}">Security Training</a></li>
            <li><a href="{{ url('/services/security-training/assessment') }}">Assessment</a></li>
            <li>Computer Hacking Forensic Investigator(CHFI)</li>
        </ul>
        <h2 class="page-header__title"> GIAC Penetration Tester(GPEN)</h2><!-- /.page-header__title -->
    </div><!-- /.container -->
</div><!-- /.page-header -->

<section class="section-padding--bottom section-padding--top">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">


                <h3 class="blog-card-one__title blog-details__title">GIAC Penetration Tester(GPEN)</h3>
                <div class="blog-details__content">
                    <p>The GIAC Penetration Tester certification validates a practitioner's ability to properly conduct a penetration test, using best practice techniques and methodologies. GPEN certification holders have the knowledge and skills to conduct exploits and engage in detailed reconnaissance, as well as utilize a process-oriented approach to penetration testing projects.
                    </p><br><br><br><br><br>
                    <br><br><br><br><br><br><br>
                </div><!-- /.blog-details__content -->


            </div><!-- /.col-lg-8 -->
            <div class="col-lg-4">
                <div class="sidebar">
                    <div class="sidebar__item sidebar__item--category">
                        @include('frontend.bd.services.st.assessment.cmn')
                    </div><!-- /.sidebar__item -->
                </div><!-- /.sidebar -->
            </div><!-- /.col-lg-4 -->
        </div><!-- /.row -->
    </div><!-- /.container -->
</section><br>



@endsection
