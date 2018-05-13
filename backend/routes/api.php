<?php

use Illuminate\Http\Request;




Route::group(['prefix'=> 'user'], function(){

    Route::resource('/book', 'api\BookController');
    Route::resource('/auth', 'api\AuthController');
    Route::post('/login', 'api\AuthController@login');
});