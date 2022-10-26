<?php

namespace App\Http\Controllers\Frontend\DE;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ServicesController extends Controller
{

    public function services(){
        return view('frontend.de.services.services');
    }


    public function consultation(){
        return view('frontend.de.services.consultation.consultation');
    }
    public function InformationSecurity(){
        return view('frontend.de.services.consultation.InformationSecurity');
    }
    public function ProjectManagement(){
        return view('frontend.de.services.consultation.ProjectManagement');
    }
    public function ProvidingSecurity(){
        return view('frontend.de.services.consultation.ProvidingSecurity');
    }
    public function DC_DRS(){
        return view('frontend.de.services.consultation.DC_DRS');
    }
    public function scsc(){
        return view('frontend.de.services.consultation.scsc');
    }
    public function tdi(){
        return view('frontend.de.services.consultation.tdi');
    }



    public function auditing(){
        return view('frontend.de.services.auditing.auditing');
    }
    public function isa(){
        return view('frontend.de.services.auditing.isa');
    }
    public function ita(){
        return view('frontend.de.services.auditing.ita');
    }
    public function isga(){
        return view('frontend.de.services.auditing.isga');
    }
    public function DC_DRS_a(){
        return view('frontend.de.services.auditing.DC_DRS_a');
    }



    public function vapt(){
        return view('frontend.de.services.sat.vapt');
    }
    public function df(){
        return view('frontend.de.services.sat.df');
    }
    public function cr(){
        return view('frontend.de.services.sat.cr');
    }



    public function sic(){
        return view('frontend.de.services.sic.sic');
    }
    public function pci_dss(){
        return view('frontend.de.services.sic.pci_dss');
    }
    public function iso(){
        return view('frontend.de.services.sic.iso');
    }
    public function CMMI(){
        return view('frontend.de.services.sic.CMMI');
    }
    public function SCIA(){
        return view('frontend.de.services.sic.SCIA');
    }
    public function dc(){
        return view('frontend.de.services.sic.dc');
    }




    public function st(){
        return view('frontend.de.services.st.st');
    }
    public function it(){
        return view('frontend.de.services.st.it');
    }
    public function cs(){
        return view('frontend.de.services.st.cs');
    }
    public function pt(){
        return view('frontend.de.services.st.pt');
    }
    public function CHFI(){
        return view('frontend.de.services.st.CHFI');
    }
    public function CTIA(){
        return view('frontend.de.services.st.CTIA');
    }
    public function CSA(){
        return view('frontend.de.services.st.CSA');
    }
    public function OSINT(){
        return view('frontend.de.services.st.OSINT');
    }
    public function eh(){
        return view('frontend.de.services.st.eh');
    }
    public function CPENT(){
        return view('frontend.de.services.st.CPENT');
    }
    public function ISACA(){
        return view('frontend.de.services.st.ISACA');
    }
    public function CISSP(){
        return view('frontend.de.services.st.CISSP');
    }
    public function p_t(){
        return view('frontend.de.services.st.p_t');
    }











    public function assessment(){
        return view('frontend.de.services.st.assessment.assessment');
    }
    public function CHFI_as(){
        return view('frontend.de.services.st.assessment.CHFI');
    }
    public function OSINT_as(){
        return view('frontend.de.services.st.assessment.OSINT');
    }

    public function eh_as(){
        return view('frontend.de.services.st.assessment.eh');
    }
    public function CPENT_as(){
        return view('frontend.de.services.st.assessment.CPENT');
    }
    public function GPEN_as(){
        return view('frontend.de.services.st.assessment.GPEN_as');
    }
    public function GWAPT_as(){
        return view('frontend.de.services.st.assessment.GWAPT_as');
    }







    public function management(){
        return view('frontend.de.services.st.management.management');
    }
    public function CDRP_mn(){
        return view('frontend.de.services.st.management.CDRP_mn');
    }
    public function CIH_mn(){
        return view('frontend.de.services.st.management.CIH_mn');
    }
    public function CSA_mn(){
        return view('frontend.de.services.st.management.CSA');
    }
    public function CTIA_mn(){
        return view('frontend.de.services.st.management.CTIA');
    }
    public function CISA_mn(){
        return view('frontend.de.services.st.management.CISA_mn');
    }
    public function CISM_mn(){
        return view('frontend.de.services.st.management.CISM_mn');
    }
    public function CISSP_mn(){
        return view('frontend.de.services.st.management.CISSP');
    }
    public function GCPM_mn(){
        return view('frontend.de.services.st.management.GCPM_mn');
    }






    public function rtc(){
        return view('frontend.de.services.st.rtc.rtc');
    }
    public function basic(){
        return view('frontend.de.services.st.rtc.basic');
    }
    public function advanced(){
        return view('frontend.de.services.st.rtc.advanced');
    }
    public function intermediate(){
        return view('frontend.de.services.st.rtc.intermediate');
    }
    public function otot(){
        return view('frontend.de.services.st.rtc.otot');
    }









    public function solutions(){
        return view('frontend.de.services.solutions.solutions');
    }
    public function BURP_s(){
        return view('frontend.de.services.solutions.BURP_s');
    }
    public function acunetix(){
        return view('frontend.de.services.solutions.acunetix');
    }
    public function ns(){
        return view('frontend.de.services.solutions.ns');
    }
    public function ci(){
        return view('frontend.de.services.solutions.ci');
    }
    public function ssl(){
        return view('frontend.de.services.solutions.ssl');
    }
    public function firewall(){
        return view('frontend.de.services.solutions.firewall');
    }
    public function bulk_sms(){
        return view('frontend.de.services.solutions.bulk_sms');
    }
    public function Smart_Contract(){
        return view('frontend.de.services.solutions.Smart_Contract');
    }

}
