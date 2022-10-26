@extends('frontend.de.main_master')
@section('content')
    @section('title')
        Bank & NBFI
    @endsection

    <div class="page-header">
        <div class="page-header__bg"
             style="background-image: url({{ asset('frontend/assets/images/background/bank.png') }});"></div>
        <!-- /.page-header__bg -->
        <div class="container">
            <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/de') }}">Home</a></li>
                <li>Bank & NBFI</li>
            </ul>
            <h2 class="page-header__title" >Bank & NBFI</h2><!-- /.page-header__title -->
        </div><!-- /.container -->
    </div><!-- /.page-header -->

    <section class="section-padding--bottom section-padding--top">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">


                    <h3 class="blog-card-one__title blog-details__title" style="color:orange;">Bank and NBFI</h3>
                    <div class="blog-details__content">
                        <p>The majority of cyberattacks target financial institutions.
                        Banks are where the money is, and targeting them provides cybercriminals with several opportunities to make money through extortion, theft, and fraud.
                        Nation-states and hacktivists also target the financial industry to gain political and ideological strength. </p>
                        <p>The main goal of cybersecurity in banking is to protect user assets. As more people become cashless, additional actions or transactions go online.
                        People conduct transactions using digital payment methods like debit and credit cards, which must be protected by cyber security.</p>
                        <p>When a bank faces a cyber attack, it not only affects the bank's reputation, but also causes losses to its customers' assets.
                        When a bank's customer's data is breached, it becomes difficult for customers to trust the bank.ecimen book. It has survived not only
                            five centuries, but also the leap into unchanged.</p>
                            <br>
                            <h4 style="color:orange;" >How Can the Right Time Help?</h4>
                            <p>Right Time Limited is an authorized agency to issue PCI DSS and ISO 27001 certifications.
                            In addition, we provide consulting services for implementation of PCI DSS, PCI 3DS, SWIFT, and ISO standards.
                            Over the years we have worked closely with leading financial institutions to develop effective and long-term information security management systems. <p>

                    </div><!-- /.blog-details__content -->


                </div><!-- /.col-lg-8 -->
                <div class="col-lg-4">
                    <div class="sidebar">
                        <div class="sidebar__item sidebar__item--category">
                            @include('frontend.de.industries.common')
                        </div><!-- /.sidebar__item -->
                    </div><!-- /.sidebar -->
                </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section><br>



@endsection
