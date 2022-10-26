<?php

namespace App\Http\Controllers\Frontend\DE;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IndexController extends Controller
{

    //pages controllers
    public function about(){
        return view('frontend.de.pages.about');
    }

    public function team(){
        return view('frontend.de.pages.team');
    }


    //partners controllers
    public function partners(){
        return view('frontend.de.partners.partners');
    }


    //blog controllers
    public function blog(){
        return view('frontend.de.blog.blog');
    }

    public function b_details(){
        return view('frontend.de.blog.details');
    }

    //contact controllers
    public function contact(){
        return view('frontend.de.contact.contact');
    }


    public function privacy(){
        return view('frontend.de.privacy');
    }
}
