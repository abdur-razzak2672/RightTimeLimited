<?php

namespace App\Http\Controllers\Frontend\USA;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IndustriesController extends Controller
{
    public function industries(){
        return view('frontend.usa.industries.industries');
    }

    public function bank_nbfi(){
        return view('frontend.usa.industries.bank_nbfi.bank_nbfi');
    }

    public function telecommunications(){
        return view('frontend.usa.industries.telecommunications.telecommunications');
    }

    public function pci(){
        return view('frontend.usa.industries.pci.pci');
    }

    public function ei(){
        return view('frontend.usa.industries.ei.ei');
    }

    public function erm(){
        return view('frontend.usa.industries.erm.erm');
    }

    public function hc(){
        return view('frontend.usa.industries.hc.hc');
    }
}
