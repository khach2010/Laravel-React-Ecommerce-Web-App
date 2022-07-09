<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use DB; //query builder to build DB or
use App\Models\User; //use Models to build DB
use App\Http\Requests\RegisterRequest;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function Login(Request $request) {

        try {
            if(Auth::attempt($request->only('email', 'password'))) {
                $user = Auth::user();
                $token = $user->createToken('app')->accessToken;

                return response ([
                    'message' => 'Successfully Login',
                    'token' => $token,
                    'user' => $user
                ], 200);

            }
        } catch(Exception $exception) {
            return response([
                'message' => $exception->getMessage()
            ], 400);
        }

        return response ([
            'message' => 'Invalid Email or Password',
        ], 401);

    } //end function

    public function Register(RegisterRequest $request) {

        try {

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);
            $token = $user->createToken('app')->accessToken;
            return response ([
                'message' => 'Successfully Register',
                'token' => $token,
                'user' => $user
            ], 200);

        } catch(Exception $exception) {
            return response([
                'message' => $exception->getMessage()
            ], 400);
        }

    } //end method
}
