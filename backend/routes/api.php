<?php

use Illuminate\Http\Request;




Route::group(['prefix'=> 'user'], function(){

    Route::resource('/book', 'api\BookController');
});