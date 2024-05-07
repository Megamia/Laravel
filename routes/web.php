<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\PostIndexController;
// use App\Http\Controllers\RegisterController;
use Illuminate\Http\Request;
// use Illuminate\Auth\Events\Login;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:santcum')->get('/user',function(Request $request){
    return $request->user();
});
// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/login', [Login::class, 'create'])->name('login');

// Route::view('/', "App");
// Route::post('/register', [RegisterController::class, 'register'])->name('register');

// Route::view('/helloworld', 'helloworld');

Route::post('/api/login', [LoginController::class, 'login']);

Route::get('/api/posts',PostIndexController::class);
// Route::post('/api/posts',PostIndexController::class);
// Route::post('/register','RegisterController@register');
// Route::post('/login','LoginController@login');
Route::view('/{any}', "app")->where("any", ".*");
