<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title')</title>
    <!-- google font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
        rel="stylesheet">
    <!-- favicons Icons -->
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('frontend/assets/images/favicons/apple-touch-icon.png') }}" />
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('frontend/assets/images/favicons/favicon-32x32.png') }}" />
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('frontend/assets/images/favicons/favicon-16x16.png') }}" />
    <link rel="manifest" href="{{ asset('frontend/assets/images/favicons/site.webmanifest') }}" />
    <!-- plugins css -->
    <link rel="stylesheet" href="{{ asset('frontend/assets/vendors/bootstrap/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('frontend/assets/vendors/fontawesome/css/all.min.css') }}">
    <link rel="stylesheet" href="{{ asset('frontend/assets/vendors/jarallax/jarallax.css') }}">
    <link rel="stylesheet" href="{{ asset('frontend/assets/vendors/animate/animate.min.css') }}">
    <link rel="stylesheet" href="{{ asset('frontend/assets/vendors/owl-carousel/assets/owl.carousel.min.css') }}">
    <link rel="stylesheet" href="{{ asset('frontend/assets/vendors/owl-carousel/assets/owl.theme.default.min.css') }}">
    <link rel="stylesheet" href="{{ asset('frontend/assets/vendors/cretech-icons/style.css') }}">
    <link rel="stylesheet" href="{{ asset('frontend/assets/vendors/youtube-popup/youtube-popup.css') }}">
    <!-- templates css -->
    <link rel="stylesheet" href="{{ asset('frontend/assets/css/cretech.css') }}">








    @yield('css')





</head>

<body class="custom-cursor">

<div class="custom-cursor__cursor"></div>
<div class="custom-cursor__cursor-two"></div>

<div class="preloader">
    <div class="preloader__circle"></div>
</div>

<div class="page-wrapper">

    {{--header content--}}
    @include('frontend.aus.body.header')

    @yield('content')

    @include('frontend.aus.body.footer')
</div><!-- /.page-wrapper -->


<div class="mobile-nav__wrapper">
    <div class="mobile-nav__overlay mobile-nav__toggler"></div>
    <!-- /.mobile-nav__overlay -->
    <div class="mobile-nav__content">
        <a href="#" class="mobile-nav__close mobile-nav__toggler">
            <span></span>
            <span></span>
        </a>

        <div class="logo-box">
            <a href="index.html" aria-label="logo image"><img src="{{ asset('frontend/assets/images/images-removebg-preview.png') }}" width="78"
                                                              height="53" alt="Cretech"></a>
        </div>
        <!-- /.logo-box -->
        <div class="mobile-nav__container"></div>
        <!-- /.mobile-nav__container -->

        <ul class="mobile-mobile-nav__country">
            <h5>Select Country</h5>
            <li><a href="{{ url('/') }}"><img src="{{ asset('frontend/assets/images/flag/bd.png') }}" width="40px"></a></li>
            <li><a href="{{ url('/usa') }}"><img src="{{ asset('frontend/assets/images/flag/usa.png') }}" width="40px"></a></li>
            <li><a href="{{ url('/de') }}"><img src="{{ asset('frontend/assets/images/flag/de.png') }}" width="40px"></a></li>
        </ul><!-- /.mobile-nav__social -->

        <ul class="mobile-nav__contact list-unstyled">
            <li>
                <i class="fa fa-phone"></i>
                <a href="tel:+8898006802">(+61) 490517545</a>
            </li>
            <li>
                <i class="fa fa-envelope"></i>
                <a href="mailto:needhelp@company.com">coo.au@righttime.biz</a>
            </li>
            <li>
                <i class="fa fa-map-marker-alt"></i>
                11 Dahlia St. Quakers Hill,NSW 2763<br>
                Sydney,Australia.
            </li>
        </ul><!-- /.mobile-nav__contact -->
        <ul class="mobile-nav__social">
            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
        </ul><!-- /.mobile-nav__social -->



    </div>
    <!-- /.mobile-nav__content -->
</div>
<!-- /.mobile-nav__wrapper -->

<div class="search-popup">
    <div class="search-popup__overlay search-toggler"></div>
    <!-- /.search-popup__overlay -->
    <div class="search-popup__content">
        <form action="#">
            <label for="search" class="sr-only">search here</label><!-- /.sr-only -->
            <input type="text" id="search" placeholder="Search Here..." />
            <button type="submit" aria-label="search submit" class="thm-btn">
                <span><i class="icon-magnifying-glass"></i></span>
            </button>
        </form>
    </div>
    <!-- /.search-popup__content -->
</div>
<!-- /.search-popup -->

<a href="#" data-target="html" class="scroll-to-target scroll-to-top"><i class="fa fa-angle-up"></i></a>

<!-- plugins js -->
<script src="{{ asset('frontend/assets/vendors/jquery/jquery-3.6.0.min.js') }}"></script>
<script src="{{ asset('frontend/assets/vendors/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
<script src="{{ asset('frontend/assets/vendors/jquery-validation/jquery.validate.min.js') }}"></script>
<script src="{{ asset('frontend/assets/vendors/owl-carousel/owl.carousel.min.js') }}"></script>
<script src="{{ asset('frontend/assets/vendors/jquery-appear/jquery.appear.min.js') }}"></script>
<script src="{{ asset('frontend/assets/vendors/wow/wow.js') }}"></script>
<script src="{{ asset('frontend/assets/vendors/jarallax/jarallax.min.js') }}"></script>
<script src="{{ asset('frontend/assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js') }}"></script>
<script src="{{ asset('frontend/assets/vendors/lettering-js/jquery.lettering.js') }}"></script>
<script src="{{ asset('frontend/assets/vendors/youtube-popup/youtube-popup.jquery.js') }}"></script>
<!-- template js -->
<script src="{{ asset('frontend/assets/js/cretech.js') }}"></script>


<!--Start of Tawk.to Script-->
<script type="text/javascript">
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/631ecf5b37898912e9689025/1gco5jvn9';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
    })();
</script>
<!--End of Tawk.to Script-->

<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="https://unpkg.com/masonry-layout@4.0/dist/masonry.pkgd.min.js"></script>

<script src="{{ asset('frontend/external/js/jquery.material-cards.min.js') }}"></script>
<script src="{{ asset('frontend/external/js/jquery.material-cards.js') }}"></script>


<script>
    $(function() {

        var $grid = $('.grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: 390,
        });

        $('.material-card').materialCard();

        $('.material-card').on('shown.material-card hidden.material-card', function (event) {
            $grid.masonry();
        });

    });
</script>

</body>

</html>
