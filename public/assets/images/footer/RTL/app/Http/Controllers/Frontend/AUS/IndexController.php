<?php

namespace App\Http\Controllers\Frontend\AUS;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IndexController extends Controller
{

    //pages controllers
    public function about(){
        return view('frontend.aus.pages.about');
    }

    public function team(){
        return view('frontend.aus.pages.team');
    }


    //partners controllers
    public function partners(){
        return view('frontend.aus.partners.partners');
    }


    //blog controllers
    public function blog(){
        return view('frontend.aus.blog.blog');
    }

    public function b_details(){
        return view('frontend.aus.blog.details');
    }

    //contact controllers
    public function contact(){
        return view('frontend.aus.contact.contact');
    }

    public function privacy(){
        return view('frontend.aus.privacy');
    }
}
