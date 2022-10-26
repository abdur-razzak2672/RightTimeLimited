<?php

namespace App\Http\Controllers\Frontend\USA;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IndexController extends Controller
{

    //pages controllers
    public function about(){
        return view('frontend.usa.pages.about');
    }

    public function team(){
        return view('frontend.usa.pages.team');
    }


    //partners controllers
    public function partners(){
        return view('frontend.usa.partners.partners');
    }


    //blog controllers
    public function blog(){
        return view('frontend.usa.blog.blog');
    }

    public function b_details(){
        return view('frontend.usa.blog.details');
    }

    //contact controllers
    public function contact(){
        return view('frontend.usa.contact.contact');
    }

    public function privacy(){
        return view('frontend.usa.privacy');
    }
}
