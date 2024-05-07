<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class PostIndexController extends Controller
{
    public function __invoke(Request $request)
    {
        $users = User::all();
        return response()->json($users);
    }
}
