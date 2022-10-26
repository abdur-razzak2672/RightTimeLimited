@extends('frontend.bd.main_master')
@section('content')
    @section('title')
        TIA 942 for Data Center
    @endsection

    <div class="page-header">
        <div class="page-header__bg"
             style="background-image: url({{ asset('https://c4.wallpaperflare.com/wallpaper/135/165/230/data-center-server-technology-wallpaper-preview.jpg') }});"></div>
        <!-- /.page-header__bg -->
        <div class="container">
            <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/') }}">Home</a></li>
                <li><a href="{{ url('/services') }}">Services</a></li>
                <li><a href="{{ url('/services/standard-implementation-certification') }}">Standard Implementation & Certification</a></li>
                <li>TIA 942 for Data Center</li>
            </ul>
            <h2 class="page-header__title">TIA 942 for Data Center</h2><!-- /.page-header__title -->
        </div><!-- /.container -->
    </div><!-- /.page-header -->

    <section class="section-padding--bottom section-padding--top">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">


                    <h3 style="color:orange;" class="blog-card-one__title blog-details__title">TIA 942 for Data Center</h3>
                    <div class="blog-details__content">
                        <p>Audit and certification are important steps for data centers to validate that the design and build meet the requirements laid down in the ANSI/TIA-942 standard. Audits are conducted by appropriately qualified and certified auditors of companies that have been licensed by TIA as a TIA-licensed Certification Body (CB). </p>
                        <p>The ANSI/TIA-942 Standard covers the telecommunications infrastructure and all other aspects of a mission-critical data center, such as the site location, architectural and physical structure of the building, electrical and mechanical infrastructure, fire safety, and physical security.</p>
                        <p>The TIA-942 certification scheme establishes Licensed Certification Bodies (CBs) deemed competent to verify data center conformity with the standard.</p>
                        <p>Within the TIA-942 certification scheme, CBS will be licensed following an evaluation of an organization against recognized standards to ensure its impartiality, competence, and consistency. The licensing process established for this scheme relies on a uniform approach accepted and implemented around the world to determine the competence of an audit organization.</p>
                    <br>
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
