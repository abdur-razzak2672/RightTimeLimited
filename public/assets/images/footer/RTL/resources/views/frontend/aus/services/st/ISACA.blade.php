@extends('frontend.aus.main_master')
@section('content')
    @section('title')
        ISACA-Curriculam->Cisa,CISM
    @endsection

    <div class="page-header">
        <div class="page-header__bg"
             style="background-image: url({{ asset('frontend/assets/images/background/page-header-bg-1-1.jpg') }});"></div>
        <!-- /.page-header__bg -->
        <div class="container">
            <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/aus') }}">Home</a></li>
                <li><a href="{{ url('aus/services') }}">Services</a></li>
                <li><a href="{{ url('aus/services/security-training') }}">Security Training</a></li>
                <li>ISACA-Curriculam->Cisa,CISM</li>
            </ul>
            <h2 class="page-header__title">ISACA-Curriculam->Cisa,CISM</h2><!-- /.page-header__title -->
        </div><!-- /.container -->
    </div><!-- /.page-header -->

    <section class="section-padding--bottom section-padding--top">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">


                    <h3 class="blog-card-one__title blog-details__title">ISACA Curricular (CISA, CISM)</h3>
                    <div class="blog-details__content">
                        <p>Identify your options. Go from wherever you are now to where you wish to go in IT. ISACA®’s
                            IT Audit Pathways Tool provides recommendations, resources and insights that will help you map your
                            steps and move ahead to the IT audit career you really want.
                        </p>
                    </div><!-- /.blog-details__content -->

                    <h3 class="blog-card-one__title blog-details__title">CISA—Certified Information Systems Auditor</h3>
                    <div class="blog-details__content">
                        <p>The CISA certification is world-renowned as the standard of achievement for those who audit,
                            control, monitor and assess an organization’s information technology and business systems.
                            The recent quarterly IT Skills and Certifications Pay Index (ITSCPI) from Foote Partners ranked
                            CISA among the most sought-after and highest-paying IT certifications. This certification is a must
                            have for entry to mid-career IT professionals looking for leverage in career growth.
                        </p>
                    </div><!-- /.blog-details__content -->

                    <h3 class="blog-card-one__title blog-details__title">CISM—Certified Information Security Manager</h3>
                    <div class="blog-details__content">
                        <p>ISACA’s Certified Information Security Manager® (CISM®) certification indicates expertise in
                            information security governance, program development and management, incident management and risk
                            management. If you are a mid-career IT professional aspiring to senior management roles in IT security
                            and control, CISM can get you the visibility you need.
                        </p>
                    </div><!-- /.blog-details__content -->


                </div><!-- /.col-lg-8 -->
                <div class="col-lg-4">
                    <div class="sidebar">
                        <div class="sidebar__item sidebar__item--category">
                            @include('frontend.aus.services.st.common')
                        </div><!-- /.sidebar__item -->
                    </div><!-- /.sidebar -->
                </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section><br>



@endsection
