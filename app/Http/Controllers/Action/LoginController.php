<?php

namespace App\Http\Controllers\Action;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class LoginController extends Controller
{



    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', '=', $request->email)->first();

        if ($user) {
            if (Hash::check($request->password, $user->password)) {
                $request->session()->put('LoginId', $user->id);
                $request->session()->put('LoginExpires', now()->addMinutes(60));
                return response()->json(['message' => 'Success', 'data' => $user], 200);
            } else {
                return response()->json(['message' => 'Fail'], 201);
            }
        } else {
            return response()->json(['message' => 'This user doesn\'t exist'], 201);
        }
    }

    public function logout(Request $request)
    {
        $request->session()->forget('LoginId');
        // $request->session()->flush();
        return response()->json(['message' => 'Logged out'], 200);
    }

    public function dashboard(Request $request)
    {
        // $data = [];

        if ($request->session()->has('LoginId')) {
            $user = User::find($request->session()->get('LoginId'));

            if ($user) {
                return response()->json(['message' => 'Success', 'dataUser' => $user], 200);
            } else {
                return response()->json(['message' => 'Fail', 'dataUser' => 'Admin'], 201);
            }
        } else {
            return response()->json(['message' => 'This user doesn\'t exist'], 201);
        }
    }
}
