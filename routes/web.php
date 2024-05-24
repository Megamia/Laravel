<?php


// use App\Http\Controllers\RegisterController;

use App\Http\Controllers\Action\DashBoard\DashBoardController;
use App\Http\Controllers\Action\LoginController;
use App\Http\Controllers\Action\PostIndexController;
use App\Http\Controllers\Action\RegisterController;
use Illuminate\Http\Request;
// use Illuminate\Auth\Events\Login;
use Illuminate\Support\Facades\Route;

Route::prefix('/api')->group(function () {
    include_once __DIR__.'/api.php';
});

Route::middleware('auth:santcum')->get('/user', function (Request $request) {
    return $request->user();
});
// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/login', [Login::class, 'create'])->name('login');

Route::view('/', "App");
// Route::post('/register', [RegisterController::class, 'register'])->name('register');

// Route::view('/helloworld', 'helloworld');

Route::post('/api/login', [LoginController::class, 'login']);
Route::get('/api/logout', [LoginController::class, 'logout']);
Route::post('/api/register', [RegisterController::class, 'register']);

Route::get('/api/users', [PostIndexController::class, 'data']);
Route::get('/api/users/{id}', [PostIndexController::class, 'showData']);
Route::get('/api/dashboard', [LoginController::class, 'dashboard']);
// Route::post('api/deleteuserDashBoard',[DashBoardController::class,'deleteUser']);
Route::get('api/data',[DashBoardController::class,'data']);

// Route::post('/api/posts',PostIndexController::class);
// Route::post('/register','RegisterController@register');
// Route::post('/login','LoginController@login');

Route::view('/{any}', "app")->where("any", ".*");
