@extends('frontend.bd.main_master')
@section('content')
    @section('title')
        Providing Security
    @endsection

    <div class="page-header">
        <div class="page-header__bg"
             style="background-image: url({{ asset('frontend/assets/images/background/cs.jpg') }});"></div>
        <!-- /.page-header__bg -->
        <div class="container">
            <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/') }}">Home</a></li>
                <li><a href="{{ url('/services') }}">Services</a></li>
                <li><a href="{{ url('/services/consultation') }}">Consultation</a></li>
                <li>Providing Security</li>
            </ul>
            <h2 class="page-header__title">Providing Security</h2><!-- /.page-header__title -->
        </div><!-- /.container -->
    </div><!-- /.page-header -->

    <section class="section-padding--bottom section-padding--top">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">


                    <h3 class="blog-card-one__title blog-details__title">Providing Security</h3>
                    <div class="blog-details__content">
                        <p>
                            We provide various security such as - <br>
                           <b> Network security                           </b>  <br>
Network security is used to prevent unauthorized or malicious users from getting inside your network. This ensures that usability, reliability, and integrity are uncompromised. This type of security is necessary to prevent a hacker from accessing data inside the network. It also prevents them from negatively affecting your users’ ability to access or use the network.

Network security has become increasingly challenging as businesses increase the number of endpoints and migrate services to public cloud. <br>
<br>
                           <b> Internet security<br>                           </b> 
Internet security involves the protection of information that is sent and received in browsers, as well as network security involving web-based applications. These protections are designed to monitor incoming internet traffic for malware as well as unwanted traffic. This protection may come in the form of firewalls, antimalware, and antispyware.
<br><br>
                           <b> Endpoint security<br>                           </b> 
Endpoint security provides protection at the device level. Devices that may be secured by endpoint security include cell phones, tablets, laptops, and desktop computers. Endpoint security will prevent your devices from accessing malicious networks that may be a threat to your organization. Advance malware protection and device management software are examples of endpoint security.
<br><br>
                           <b> Cloud security<br>                           </b> 
Applications, data, and identities are moving to the cloud, meaning users are connecting directly to the Internet and are not protected by the traditional security stack. Cloud security can help secure the usage of software-as-a-service (SaaS) applications and the public cloud.  A cloud-access security broker (CASB), secure Internet gateway (SIG), and cloud-based unified threat management (UTM) can be used for cloud security.
<br><br>
                           <b> Application security<br>                           </b> 
With application security, applications are specifically coded at the time of their creation to be as secure as possible, to help ensure they are not vulnerable to attacks. This added layer of security involves evaluating the code of an app and identifying the vulnerabilities that may exist within the software.
                        </p>
                        <br>
                        <br>
                    </div><!-- /.blog-details__content -->


                </div><!-- /.col-lg-8 -->
                <div class="col-lg-4">
                    <div class="sidebar">
                        <div class="sidebar__item sidebar__item--category">
                            @include('frontend.bd.services.consultation.common')
                        </div><!-- /.sidebar__item -->
                    </div><!-- /.sidebar -->
                </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section><br>



@endsection
