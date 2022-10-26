@extends('frontend.bd.main_master')
@section('content')
@section('title')
    Certified SOC Analyst(CSA)
@endsection

<div class="page-header">
    <div class="page-header__bg"
         style="background-image: url({{ asset('https://professionaled.harrisburgu.edu/wp-content/plugins/files/civicrm/persist/contribute/images/cisa%281%29.PNG') }});"></div>
    <!-- /.page-header__bg -->
    <div class="container">
        <ul class="thm-breadcrumb list-unstyled">
            <li><a href="{{ url('/') }}">Home</a></li>
            <li><a href="{{ url('/services/security-training') }}">Training</a></li>
            <li><a href="{{ url('/services/security-training/management') }}">Management</a></li>
            <li>Certified Information Systems Auditor (CISA)</li>
        </ul>
        <h2 class="page-header__title">Certified Information Systems Auditor (CISA)</h2><!-- /.page-header__title -->
    </div><!-- /.container -->
</div><!-- /.page-header -->

<section class="section-padding--bottom section-padding--top">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">


                <h3 class="blog-card-one__title blog-details__title">Certified Information Systems Auditor (CISA)</h3>
                <div class="blog-details__content">
                    <p>Validate your expertise and get the leverage you need to move up in your career. With ISACA’s Certified Information Systems Auditor (CISA) certification, you can do just that. CISA is world-renowned as the standard of achievement for those who audit, control, monitor and assess an organization’s information technology and business systems.<br><br>

                    <h5>Is CISA Right for You?</h5>
                    CISA certification is foundational to a successful IT career. If you are an entry-level to mid-career professional, CISA can showcase your expertise and assert your ability to apply a risk-based approach to planning, executing and reporting on audit engagements. Gain instant credibility in your interactions with internal stakeholders, regulators, external auditors, and customers.
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
