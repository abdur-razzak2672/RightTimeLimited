@extends('frontend.bd.main_master')
@section('content')
    @section('title')
        Payment Card Industry Data Security Standards
    @endsection

    <div class="page-header">
        <div class="page-header__bg"
             style="background-image: url({{ asset('https://www.groundlabs.com/wp-content/uploads/2019/03/PCI-DSS-Compliance.png') }});"></div>
        <!-- /.page-header__bg -->
        <div class="container">
            <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/') }}">Home</a></li>
                <li><a href="{{ url('/services') }}">Services</a></li>
                <li><a href="{{ url('/services/standard-implementation-certification') }}">Standard Implementation & Certification</a></li>
                <li>Payment Card Industry Data Security Standards</li>
            </ul>
            <h2 class="page-header__title">Payment Card Industry Data Security Standards</h2><!-- /.page-header__title -->
        </div><!-- /.container -->
    </div><!-- /.page-header -->

    <section class="section-padding--bottom section-padding--top">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">


                    <h3 style="color:orange;" class="blog-card-one__title blog-details__title">Payment Card Industry Data Security Standard (PCI DSS)
                    </h3>
                    <div class="blog-details__content">
                        <p></p><br><br>
                    </div><!-- /.blog-details__content -->


                    <div class="blog-details__content">
                        <b>PCI SSC & Card Security Program:</b>
                        <p>The PCI Security Standards Council is an open global forum, launched in 2006 consisting of
                            five founding global payment brands – American Express, Discover Financial Services,
                            JCB International, MasterCard, and Visa Inc. The council is responsible for the development,
                            management, education, and awareness of the PCI Security Standards, including the Data Security
                            Standard (PCI DSS – Technical and Operational requirement), Payment Application Data Security
                            Standard (PA-DSS), and PIN Transaction Security (PTS) requirements. Each founding member also
                            recognizes the QSAs, PA-QSAs & ASVs certified by the PCI Security Standards Council.</p>
                    </div><!-- /.blog-details__content --><br>


                    <h4>PCI DSS Compliance Validation Services in Bangladesh:</h4>
                    <div class="blog-details__content">
                        <p>The PCI Security Standards Council is an open global forum, launched in 2006 consisting of
                            five founding global payment brands – American Express, Discover Financial Services, JCB
                            International, MasterCard, and Visa Inc. The council is responsible for the development,
                            management, education, and awareness of the PCI Security Standards, including the Data
                            Security Standard (PCI DSS – Technical and Operational requirement), Payment Application
                            Data Security Standard (PA-DSS), and PIN Transaction Security (PTS) requirements. Each
                            founding member also recognizes the QSAs, PA-QSAs & ASVs certified by the PCI Security
                            Standards Council.<br><br>

                            Depending on the specific client requirements this can include:<br>
                            <ul>
                            <li>Introductory awareness sessions</li>
                            <li>Gap Analysis</li>
                            <li>Remediation assistance at the mitigation stages</li>
                            <li>Compliance audits</li>
                            <li>Mapping processes to PCI DSS requirements</li>
                            <li>Compliance Report</li>
                            <li>Training, policy and strategy development/definition</li>
                           <li> Methodology</li>
                            </ul>
                        </p>
                    </div><!-- /.blog-details__content --><br>


                    <h4>Scoping:</h4>
                    <div class="blog-details__content">
                        <p>Your payment system audit project's scope must be chosen carefully. By doing this,
                            you may assure that compliance is accomplished quickly and cost-effectively.
                            In order to conduct scoping efforts, Right Time Limited is in a prime position.
                            This may occur at the start of a PCI DSS audit project or later on in the process.</p>
                    </div><!-- /.blog-details__content --><br>


                    <h4>Gap Analysis:</h4>
                    <div class="blog-details__content">
                        <p>One of the first steps toward PCI DSS compliance is offering a blueprint. Given the
                            options accessible to you, our team assists you in developing a plan for achieving
                            compliance. A gap analysis provides a more detailed and itemized report. Thereby
                            demonstrating how each control area is currently managed in comparison to the minimum standards</p>
                    </div><!-- /.blog-details__content --><br>

                    <h4>Remediation:</h4>
                    <div class="blog-details__content">
                        <p>We can act as Trusted Advisors to provide ongoing support and guidance through
                            the remediation phases of a PCI DSS compliance project.</p>
                    </div><!-- /.blog-details__content --><br>


                    <h4>Penetration Testing and Vulnerability Scanning:</h4>
                    <div class="blog-details__content">
                        <p>To assist you in meeting PCI DSS regulations and evaluating the security
                            of your networks and applications, our penetration testing and scanning team may conduct an annual
                            program of penetration testing and vulnerability assessment.</p>
                    </div><!-- /.blog-details__content --><br>


                    <h4>PCI DSS Certification Audit:</h4>
                    <div class="blog-details__content">
                        <p>With remediation complete, our PCI QSAs can prepare you for the PCI audit. We as Qualified
                            Security Assessors (PCI QSA), also complete the audit for you and liaise with your acquiring
                            bank to report your compliance status.</p>
                    </div><!-- /.blog-details__content --><br>


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
