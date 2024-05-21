<?php

namespace App\Http\Controllers\Action;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class PostIndexController extends Controller
{
    public function data(Request $request)
    {
        $users = User::all();
        if (count($users) > 0) {
            return response()->json(['dataUser' => $users]);
        } else {
            return response()->json(['message' => 'No users found.']);
        }
    }
}
