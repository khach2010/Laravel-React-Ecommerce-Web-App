<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use DB; //query builder to build DB or
use App\Models\User; //use Models to build DB
use App\Http\Requests\ForgetRequest;
use Illuminate\Support\Facades\Hash;
use Mail;
use App\Mail\ForgetMail;

class ForgetController extends Controller
{
    public function ForgetPassword(ForgetRequest $request) {
        $email = $request->email;

        if(User::where('email', $email)->doesntExist()) {
            return response([
                'message' => 'Email Invalid - Email Not Exist'
            ],401);
        }

        $token = rand(10, 100000);

        try {
            DB::table('password_resets')->insert([
                'email' => $email,
                'token' => $token
            ]);
            //Mail send to User
            Mail::to($email)->send(new ForgetMail($token));
            return response([
                'message' => 'Reset password have sent to your email'
            ], 200);

        } catch(Exception $exception) {
            return response([
                'message' => $exception->getMessage()
            ], 400);
        }

    }
}
