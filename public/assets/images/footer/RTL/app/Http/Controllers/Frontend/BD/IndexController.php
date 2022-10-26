<?php

namespace App\Http\Controllers\Frontend\BD;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IndexController extends Controller
{

    //pages controllers
    public function about(){
        return view('frontend.bd.pages.about');
    }

    public function team(){
        return view('frontend.bd.pages.team');
    }


    //partners controllers
    public function partners(){
        return view('frontend.bd.partners.partners');
    }


    //blog controllers
    public function blog(){
        return view('frontend.bd.blog.blog');
    }

    public function b_details(){
        return view('frontend.bd.blog.details');
    }

    //contact controllers
    public function contact(){
        return view('frontend.bd.contact.contact');
    }

    public function privacy(){
        return view('frontend.bd.privacy');
    }
}
