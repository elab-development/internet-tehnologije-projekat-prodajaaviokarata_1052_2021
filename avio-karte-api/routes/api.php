<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::resource('avio-kompanije', 'App\Http\Controllers\AvioKompanijaController')->only(['index', 'show']);
Route::post('login', 'App\Http\Controllers\LoginController@login');
Route::post('register', 'App\Http\Controllers\LoginController@register');
Route::resource('letovi', 'App\Http\Controllers\LetController')->only(['index', 'show']);
Route::resource('rezervacije', 'App\Http\Controllers\RezervacijaController')->only(['index', 'show']);
Route::get('paginacija', 'App\Http\Controllers\RezervacijaController@paginate');

Route::resource('aerodromi', 'App\Http\Controllers\AerodromController')->only(['index', 'show']);

//sanctum group

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::resource('rezervacije', 'App\Http\Controllers\RezervacijaController')->only(['store', 'update', 'destroy']);
    Route::resource('avio-kompanije', 'App\Http\Controllers\AvioKompanijaController')->only(['store', 'update', 'destroy']);
    Route::resource('letovi', 'App\Http\Controllers\LetController')->only(['store', 'update', 'destroy']);
    Route::resource('aerodromi', 'App\Http\Controllers\AerodromController')->only(['store', 'update', 'destroy']);

    Route::get('rezervacije/{id}/otkazi', 'App\Http\Controllers\RezervacijaController@otkaziRezervaciju');
    Route::get('rezervacije/{id}/potvrdi', 'App\Http\Controllers\RezervacijaController@rezervisiRezervaciju');

    Route::get('rezervacije-korisnika/{id}', 'App\Http\Controllers\RezervacijaController@rezervacijeKorisnika');
    Route::get('grafik', 'App\Http\Controllers\LetController@grafik');
    Route::get('nove-rezervacije', 'App\Http\Controllers\RezervacijaController@vratiNoveRezervacije');


});
