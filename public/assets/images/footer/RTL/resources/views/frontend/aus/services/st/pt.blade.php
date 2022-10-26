@extends('frontend.aus.main_master')
@section('content')
    @section('title')
        Vulnerability Assessment & Presentation Testing Services
    @endsection

    @section('css')
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500&family=Jost:ital,wght@0,200;0,400;0,700;1,800&family=Roboto&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"><meta name="description" content="sara mazal lessons">


        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Aboreto&family=Ubuntu+Mono&family=Ubuntu:wght@300&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="{{ asset('frontend/external/pt/style.css') }}">
    @stop



    <div class="page-header" style="height: 700px;min-width: 100%">
        <div class="slider-one__bg"
             style="background-image: url({{ asset('frontend/assets/images/background/1.png') }});"></div>
        <!-- /.page-header__bg -->
        <div class="container">

            <h1 class="page-header-v">Vulnerability Assessment & Presentation Testing Services</h1>
            <h3 class="page-header-t">
                Our team will attempt to hack your system using the same techniques
                used by black-hat hackers and give you a detailed report of all the weaknesses they find.
            </h3>
            <!-- /.page-header__title -->
        </div><!-- /.container -->
    </div><!-- /.page-header -->

    <section style="background-color: black" class="section-padding--top section-padding--bottom about-one-associate">
        <div class="section-title text-center">

            <h1 style="color: white" class="section-title__title">Why get a pentest ?</h1>
            <div class="container">
                <hr>
            </div>
            <!-- /.section-title__title -->
        </div><!-- /.section-title -->

        <div class="client-carousel client-carousel--two">
            <div class="container pantest">
                <h4>
                    A lot is lost when a system is breached or hacked. Systems go down, data gets leaked,
                    customer trust is lost…etc, this adds up to a huge cost.<br>

                    All this can be avoided by getting a team of professionals to test the security of
                    your system(s). We don’t want to scare you but here are some statistics from 2019:
                </h4>
                <!-- /.item -->
                <!-- /.thm-owl__carousel -->
            </div><!-- /.container -->
        </div><!-- /.client-carousel -->

    </section>
    <section style="background-color: black" class="funfact-one">
        <div class="container">
            <div class="funfact-one__inner wow fadeInUp background-size-cover" data-wow-duration="1500ms"
                 style="background-color: black">
                <ul class="funfact-one__list">
                    <li class="funfact-one__list__item">
                        <h3 class="funfact-one__list__title count-box">
                            <span data-stop="255" data-speed="2500" class="count-text">00</span>
                        </h3><!-- /.funfact-one__list__title -->
                        <p class="funfact-one__list__text">Business Interogation</p>
                        <!-- /.funfact-one__list__text -->
                    </li>
                    <li class="funfact-one__list__item">
                        <h3 class="funfact-one__list__title count-box">
                            <span data-stop="325" data-speed="2500" class="count-text">00</span>
                        </h3><!-- /.funfact-one__list__title -->
                        <p class="funfact-one__list__text">Strategies Planned</p>
                        <!-- /.funfact-one__list__text -->
                    </li>
                    <li class="funfact-one__list__item">
                        <h3 class="funfact-one__list__title count-box">
                            <span data-stop="569" data-speed="2500" class="count-text">00</span>
                        </h3><!-- /.funfact-one__list__title -->
                        <p class="funfact-one__list__text">Projects Relased</p>
                        <!-- /.funfact-one__list__text -->
                    </li>
                    <li class="funfact-one__list__item">
                        <h3 class="funfact-one__list__title count-box">
                            <span data-stop="769" data-speed="2500" class="count-text">00</span>
                        </h3><!-- /.funfact-one__list__title -->
                        <p class="funfact-one__list__text">Satisfied Clients </p>
                        <!-- /.funfact-one__list__text -->
                    </li>
                </ul><!-- /.funfact-one__list -->
            </div><!-- /.funfact-one__inner -->
        </div><!-- /.container -->
    </section>




    <section style="background-color: black" class="section-padding--top section-padding--bottom about-one-associate">
        <div class="section-title text-center">

            <h2 style="color: white" class="section-title__title">Why Right Time Limited ?</h2>
            <div class="container">
                <hr>
            </div>
            <!-- /.section-title__title -->
        </div><!-- /.section-title -->

        <div class="wrapper">

            <div class="card tryhackme">
                <div class="content"><a class="a1" href="https://tryhackme.com">
                        <h2 class="tryhackme-heading h21">TryHackMe</h2></a>
                    <p class="p1">
                        Cyber Security is a huge topic. This path will give you a hands-on introduction to different areas within cyber.
                        Completing this learning path will give you the knowledge to kick start your cyber journey.
                    </p>
                    <ul class="list ul1">
                        <li class="li1"><a class="a1" href="https://tryhackme.com/" target="_blank"><i class="fab fa-leanpub tr i1"></i></a></li>
                        <li class="li1"><a class="a1" href="https://tryhackme.com/leaderboards"><i class="fas fa-trophy tr i1"></i></a></li>
                        <li class="li1"><a class="a1" href="https://tryhackme.com/develop-rooms"><i class="fas fa-university tr i1"></i></a></li>
                    </ul>
                </div>
            </div>

            <div class="card tryhackme">
                <div class="content"><a class="a1" href="https://tryhackme.com">
                        <h2 class="tryhackme-heading h21">TryHackMe</h2></a>
                    <p class="p1">
                        Cyber Security is a huge topic. This path will give you a hands-on introduction to different areas within cyber.
                        Completing this learning path will give you the knowledge to kick start your cyber journey.
                    </p>
                    <ul class="list ul1">
                        <li class="li1"><a class="a1" href="https://tryhackme.com/" target="_blank"><i class="fab fa-leanpub tr i1"></i></a></li>
                        <li class="li1"><a class="a1" href="https://tryhackme.com/leaderboards"><i class="fas fa-trophy tr i1"></i></a></li>
                        <li class="li1"><a class="a1" href="https://tryhackme.com/develop-rooms"><i class="fas fa-university tr i1"></i></a></li>
                    </ul>
                </div>
            </div>

            <div class="card tryhackme">
                <div class="content"><a class="a1" href="https://tryhackme.com">
                        <h2 class="tryhackme-heading h21">TryHackMe</h2></a>
                    <p class="p1">
                        Cyber Security is a huge topic. This path will give you a hands-on introduction to different areas within cyber.
                        Completing this learning path will give you the knowledge to kick start your cyber journey.
                    </p>
                    <ul class="list ul1">
                        <li class="li1"><a class="a1" href="https://tryhackme.com/" target="_blank"><i class="fab fa-leanpub tr i1"></i></a></li>
                        <li class="li1"><a class="a1" href="https://tryhackme.com/leaderboards"><i class="fas fa-trophy tr i1"></i></a></li>
                        <li class="li1"><a class="a1" href="https://tryhackme.com/develop-rooms"><i class="fas fa-university tr i1"></i></a></li>
                    </ul>
                </div>
            </div>


        </div><!-- /.client-carousel -->


        <div class="wrapper">


            <div class="card tryhackme">
                <div class="content"><a class="a1" href="https://tryhackme.com">
                        <h2 class="tryhackme-heading h21">TryHackMe</h2></a>
                    <p class="p1">
                        Cyber Security is a huge topic. This path will give you a hands-on introduction to different areas within cyber.
                        Completing this learning path will give you the knowledge to kick start your cyber journey.
                    </p>
                    <ul class="list ul1">
                        <li class="li1"><a class="a1" href="https://tryhackme.com/" target="_blank"><i class="fab fa-leanpub tr i1"></i></a></li>
                        <li class="li1"><a class="a1" href="https://tryhackme.com/leaderboards"><i class="fas fa-trophy tr i1"></i></a></li>
                        <li class="li1"><a class="a1" href="https://tryhackme.com/develop-rooms"><i class="fas fa-university tr i1"></i></a></li>
                    </ul>
                </div>
            </div>

            <div class="card tryhackme">
                <div class="content"><a class="a1" href="https://tryhackme.com">
                        <h2 class="tryhackme-heading h21">TryHackMe</h2></a>
                    <p class="p1">
                        Cyber Security is a huge topic. This path will give you a hands-on introduction to different areas within cyber.
                        Completing this learning path will give you the knowledge to kick start your cyber journey.
                    </p>
                    <ul class="list ul1">
                        <li class="li1"><a class="a1" href="https://tryhackme.com/" target="_blank"><i class="fab fa-leanpub tr i1"></i></a></li>
                        <li class="li1"><a class="a1" href="https://tryhackme.com/leaderboards"><i class="fas fa-trophy tr i1"></i></a></li>
                        <li class="li1"><a class="a1" href="https://tryhackme.com/develop-rooms"><i class="fas fa-university tr i1"></i></a></li>
                    </ul>
                </div>
            </div>

            <div class="card tryhackme">
                <div class="content"><a class="a1" href="https://tryhackme.com">
                        <h2 class="tryhackme-heading h21">TryHackMe</h2></a>
                    <p class="p1">
                        Cyber Security is a huge topic. This path will give you a hands-on introduction to different areas within cyber.
                        Completing this learning path will give you the knowledge to kick start your cyber journey.
                    </p>
                    <ul class="list ul1">
                        <li class="li1"><a class="a1" href="https://tryhackme.com/" target="_blank"><i class="fab fa-leanpub tr i1"></i></a></li>
                        <li class="li1"><a class="a1" href="https://tryhackme.com/leaderboards"><i class="fas fa-trophy tr i1"></i></a></li>
                        <li class="li1"><a class="a1" href="https://tryhackme.com/develop-rooms"><i class="fas fa-university tr i1"></i></a></li>
                    </ul>
                </div>
            </div>

        </div><!-- /.client-carousel -->




    </section>


    <br> <br> <br>









    <script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.0/vanilla-tilt.min.js"></script>
    <!-- partial -->
    <script  src="{{ asset('frontend/external/pt/script.js') }}"></script>

@endsection
