<?php

namespace App\Http\Controllers\Frontend\BD;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IndustriesController extends Controller
{
    public function industries(){
        return view('frontend.bd.industries.industries');
    }

    public function bank_nbfi(){
        return view('frontend.bd.industries.bank_nbfi.bank_nbfi');
    }

    public function telecommunications(){
        return view('frontend.bd.industries.telecommunications.telecommunications');
    }

    public function pci(){
        return view('frontend.bd.industries.pci.pci');
    }

    public function ei(){
        return view('frontend.bd.industries.ei.ei');
    }

    public function erm(){
        return view('frontend.bd.industries.erm.erm');
    }

    public function hc(){
        return view('frontend.bd.industries.hc.hc');
    }
}
