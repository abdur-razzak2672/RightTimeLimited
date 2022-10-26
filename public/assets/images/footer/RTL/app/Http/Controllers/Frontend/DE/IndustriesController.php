<?php

namespace App\Http\Controllers\Frontend\DE;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IndustriesController extends Controller
{
    public function industries(){
        return view('frontend.de.industries.industries');
    }

    public function bank_nbfi(){
        return view('frontend.de.industries.bank_nbfi.bank_nbfi');
    }

    public function telecommunications(){
        return view('frontend.de.industries.telecommunications.telecommunications');
    }

    public function pci(){
        return view('frontend.de.industries.pci.pci');
    }

    public function ei(){
        return view('frontend.de.industries.ei.ei');
    }

    public function erm(){
        return view('frontend.de.industries.erm.erm');
    }

    public function hc(){
        return view('frontend.de.industries.hc.hc');
    }
}
