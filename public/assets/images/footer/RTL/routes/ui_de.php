<?php

use App\Http\Controllers\Frontend\DE\IndexController;
use App\Http\Controllers\Frontend\DE\IndustriesController;
use App\Http\Controllers\Frontend\DE\ServicesController;
use Illuminate\Support\Facades\Route;

Route::prefix('de')->group(function (){


    //services routes
    Route::prefix('services')->group(function (){
        Route::get('/',[ServicesController::class,'services']);
        Route::prefix('consultation')->group(function (){
            Route::get('/',[ServicesController::class,'consultation']);
            Route::get('/information-security',[ServicesController::class,'InformationSecurity']);
            Route::get('/partners-management',[ServicesController::class,'ProjectManagement']);
            Route::get('/providing-security',[ServicesController::class,'ProvidingSecurity']);
            Route::get('/DC-DRS',[ServicesController::class,'DC_DRS']);
            Route::get('/swift-cyber-security-consulting',[ServicesController::class,'scsc']);
            Route::get('/technical-documentation-on-ICT',[ServicesController::class,'tdi']);
        });

        Route::prefix('auditing')->group(function (){
            Route::get('/',[ServicesController::class,'auditing']);
            Route::get('/information-system-audit',[ServicesController::class,'isa']);
            Route::get('/information-technology-audit',[ServicesController::class,'ita']);
            Route::get('/information-security-graded-audit',[ServicesController::class,'isga']);
            Route::get('/DC-DRS-audit',[ServicesController::class,'DC_DRS_a']);
        });

        Route::prefix('security-assessment-testing')->group(function (){
            Route::get('/',[ServicesController::class,'vapt']);
            Route::get('/VAPT',[ServicesController::class,'vapt']);
            Route::get('/digital-forensics',[ServicesController::class,'df']);
            Route::get('/code-review',[ServicesController::class,'cr']);
        });

        Route::prefix('standard-implementation-certification')->group(function (){
            Route::get('/',[ServicesController::class,'sic']);
            Route::get('/pci-dss',[ServicesController::class,'pci_dss']);
            Route::get('/iso',[ServicesController::class,'iso']);
            Route::get('/CMMI',[ServicesController::class,'CMMI']);
            Route::get('/SCIA',[ServicesController::class,'SCIA']);
            Route::get('/data-center',[ServicesController::class,'dc']);
        });

        Route::prefix('security-training')->group(function (){
            Route::get('/',[ServicesController::class,'st']);
            Route::get('/information-technology',[ServicesController::class,'it']);
            Route::get('/cyber-security',[ServicesController::class,'cs']);
            Route::get('/penetration-testing',[ServicesController::class,'pt']);
            Route::get('/CHFI',[ServicesController::class,'CHFI']);
            Route::get('/CTIA',[ServicesController::class,'CTIA']);
            Route::get('/CSA',[ServicesController::class,'CSA']);
            Route::get('/OSINT',[ServicesController::class,'OSINT']);
            Route::get('/ethical-hacker',[ServicesController::class,'eh']);
            Route::get('/CPENT',[ServicesController::class,'CPENT']);
            Route::get('/ISACA',[ServicesController::class,'ISACA']);
            Route::get('/CISSP',[ServicesController::class,'CISSP']);
            Route::get('/professional-training',[ServicesController::class,'p_t']);




            Route::get('/assessment',[ServicesController::class,'assessment']);
            Route::get('/assessment/CHFI',[ServicesController::class,'CHFI_as']);
            Route::get('/assessment/OSINT',[ServicesController::class,'OSINT_as']);
            Route::get('/assessment/ethical-hacker',[ServicesController::class,'eh_as']);
            Route::get('/assessment/CPENT',[ServicesController::class,'CPENT_as']);
            Route::get('/assessment/GPEN',[ServicesController::class,'GPEN_as']);
            Route::get('/assessment/GWAPT',[ServicesController::class,'GWAPT_as']);






            Route::get('/management',[ServicesController::class,'management']);
            Route::get('/management/CDRP',[ServicesController::class,'CDRP_mn']);
            Route::get('/management/CIH',[ServicesController::class,'CIH_mn']);
            Route::get('/management/CSA',[ServicesController::class,'CSA_mn']);
            Route::get('/management/CTIA',[ServicesController::class,'CTIA_mn']);
            Route::get('/management/CISA',[ServicesController::class,'CISA_mn']);
            Route::get('/management/CISM',[ServicesController::class,'CISM_mn']);
            Route::get('/management/CISSP',[ServicesController::class,'CISSP_mn']);
            Route::get('/management/GCPM',[ServicesController::class,'GCPM_mn']);



            Route::get('/right-time-customized',[ServicesController::class,'rtc']);
            Route::get('/right-time-customized/basic',[ServicesController::class,'basic']);
            Route::get('/right-time-customized/advanced',[ServicesController::class,'advanced']);
            Route::get('/right-time-customized/intermediate',[ServicesController::class,'intermediate']);
            Route::get('/right-time-customized/one-to-one-training',[ServicesController::class,'otot']);





        });

        Route::prefix('solutions')->group(function (){
            Route::get('/',[ServicesController::class,'solutions']);
            Route::get('/BURP-Suite',[ServicesController::class,'BURP_s']);
            Route::get('/acunetix',[ServicesController::class,'acunetix']);
            Route::get('/net-sporker',[ServicesController::class,'ns']);
            Route::get('/core-impact',[ServicesController::class,'ci']);
            Route::get('/SIEM-solutions',[ServicesController::class,'ssl']);
            Route::get('/firewall',[ServicesController::class,'firewall']);
            Route::get('/Bulk-SMS',[ServicesController::class,'bulk_sms']);
            Route::get('/smart-contract',[ServicesController::class,'Smart_Contract']);
        });

    });

//industries routes
    Route::prefix('industries')->group(function (){
        Route::get('/',[IndustriesController::class,'industries']);
        Route::get('/bank-nbfi',[IndustriesController::class,'bank_nbfi']);
        Route::get('/telecommunications',[IndustriesController::class,'telecommunications']);
        Route::get('/pci',[IndustriesController::class,'pci']);
        Route::get('/educational-institutions',[IndustriesController::class,'ei']);
        Route::get('/erm',[IndustriesController::class,'erm']);
        Route::get('/health-care',[IndustriesController::class,'hc']);
    });

//pages routes
    Route::prefix('about-us')->group(function (){
        Route::get('/',[IndexController::class,'about']);
//    Route::get('/our-team',[IndexController::class,'team']);
    });

//partners routes

    Route::get('/partners',[IndexController::class,'partners']);


//blog routes
    Route::prefix('blog')->group(function (){
        Route::get('/',[IndexController::class,'blog']);
        Route::get('/blog-details',[IndexController::class,'b_details']);
    });

//contact routes
    Route::prefix('contact')->group(function (){
        Route::get('/',[IndexController::class,'contact']);
    });

    Route::get('/privacy-policy',[IndexController::class,'privacy']);


});




