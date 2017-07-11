<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get( '/',      function() { return view( 'react' ); } );
Route::get( '/react', function() { return view( 'react' ); } );
// Route::get( '(:all?)',function() { return view( 'react' ); } );

Route::get('/{any}', function ($any) {
    // any other url, subfolders also
    return View::make('react');
})->where('any', '.*');

