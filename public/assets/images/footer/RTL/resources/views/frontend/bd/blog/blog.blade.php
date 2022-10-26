@extends('frontend.bd.main_master')
@section('content')
    @section('title')
        Careers
    @endsection

    <div class="page-header">
        <div class="page-header__bg"
             style="background-image: url({{ asset('https://www.krg.ca/en-CA/assets/Careers-new.jpg') }});"></div>
        <!-- /.page-header__bg -->
        <div class="container">
            <ul class="thm-breadcrumb list-unstyled">
                <li><a href="{{ url('/') }}">Home</a></li>
                <li>Careers</li>
            </ul>
            <h2 class="page-header__title">Careers</h2><!-- /.page-header__title -->
        </div><!-- /.container -->
    </div><!-- /.page-header -->
<br><br><br>
<p>
No jobs available right now.
</p>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

@endsection
