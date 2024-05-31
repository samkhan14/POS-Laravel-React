<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
    // user login
    public function login(Request $request)
    {
        //  dd($request);
        if (Auth::attempt(['username' => $request->username, 'password' => $request->password])) {
            $user = Auth::user();
            //  dd($user);

            $success['token'] = $user->createToken('userPos')->plainTextToken;
            $success['username'] = $user->username;
            // dd($success['token']);

            return response()->json([
                'success' => true,
                'data' => $success,
                'message' => 'User is logged in successfully'
            ], 200);
        } else {
            return response()->json(['success' => false, 'message' => 'User is unauthorized'], 401);
        }
    }

    // user logout
    public function logout(Request $request)
    {
        if (Auth::check()) {
            // Revoke all tokens...
            $user = $request->user();
            $user->tokens()->delete();

            return response()->json(['success' => true, 'message' => 'User is logged out successfully'], 200);
        }

        return response()->json(['success' => false, 'message' => 'User is not authenticated'], 401);
    }

}
