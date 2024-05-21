<?php

use App\Http\Controllers\Action\DashBoard\DashBoardController ;
use Illuminate\Support\Facades\Route;

Route::post('adduserDashBoard',[DashBoardController::class,'addUser']);
Route::post('deluserDashBoard',[DashBoardController::class,'deleteUser']);