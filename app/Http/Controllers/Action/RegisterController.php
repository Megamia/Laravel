<?php

namespace App\Http\Controllers\Action;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function __construct()
    {
    }
    public function register(Request $request)
    {
        $data = $request->only(['name', 'email', 'password']);

        $existingUser = User::where('email', $data['email'])->first();
        if ($existingUser) {
            return response()->json(['message' => 'User already exists'], 201);
        }

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        return response()->json([
            'message' => 'User registered successfully'
            // , 'data' => $user
        ], 200);
    }
}
