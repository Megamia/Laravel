<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class LoginController extends Controller
{

    public function __construct()
    {
    }
    // public function login(Request $request)
    // {
    //     $email = $request->input('email');
    //     $password = $request->input('password');

    //     echo ("Email riel: " . $email . ", " ."Password riel: " . $password . "\n");

    //     die();
    //     // echo "Success cc";
    //     // die();
    // }
    public function login(Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');

        $users = User::all();
        // echo "User: " . $users;
        foreach ($users as $user) {
            if ($email === $user->email  && $password === $user->password) {
                return response()->json(['message' => 'Success', 'data' => $user], 200);
            }
        }

        return response()->json(['message' => 'Fail'], 201);
    }
}
