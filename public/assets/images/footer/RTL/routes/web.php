<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;


Route::get('/', function () {
    return view('frontend.bd.index');
});
//country routes
Route::get('/usa/', function () {
    return view('frontend.usa.index');
});
Route::get('/aus/', function () {
    return view('frontend.aus.index');
});
Route::get('/de/', function () {
    return view('frontend.de.index');
});

require __DIR__.'/ui.php';
require __DIR__.'/ui_us.php';
require __DIR__.'/ui_aus.php';
require __DIR__.'/ui_de.php';


Route::middleware(['auth:sanctum,admin', config('jetstream.auth_session'), 'verified'
])->group(function () {
    Route::get('/admin/dashboard', function () {
        return view('dashboard');
    })->name('dashboard')->middleware('auth:admin');
});



Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified'
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});

require __DIR__.'/admin.php';
