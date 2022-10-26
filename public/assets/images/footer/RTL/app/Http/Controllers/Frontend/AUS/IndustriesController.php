<?php

namespace App\Http\Controllers\Frontend\AUS;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IndustriesController extends Controller
{
    public function industries(){
        return view('frontend.aus.industries.industries');
    }

    public function bank_nbfi(){
        return view('frontend.aus.industries.bank_nbfi.bank_nbfi');
    }

    public function telecommunications(){
        return view('frontend.aus.industries.telecommunications.telecommunications');
    }

    public function pci(){
        return view('frontend.aus.industries.pci.pci');
    }

    public function ei(){
        return view('frontend.aus.industries.ei.ei');
    }

    public function erm(){
        return view('frontend.aus.industries.erm.erm');
    }

    public function hc(){
        return view('frontend.aus.industries.hc.hc');
    }
}
