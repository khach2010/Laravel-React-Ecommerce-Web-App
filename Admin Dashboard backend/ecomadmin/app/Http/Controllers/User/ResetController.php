<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Auth;
use DB; //query builder to build DB or
use App\Models\User; //use Models to build DB
use App\Http\Requests\ResetRequest;
use Illuminate\Support\Facades\Hash;

class ResetController extends Controller
{
    public function ResetPassword (ResetRequest $request) {
        $email = $request->email;
        $token = $request->token;
        $password = Hash::make($request->password);

        $emailcheck = DB::table('password_resets')->where('email', $email)->first();
        $tokencheck = DB::table('password_resets')->where('token', $token)->first();

        if(!$emailcheck) {
            return response([
               'message' => "email not found"
            ], 401);
        }
        if(!$tokencheck) {
            return response([
               'message' => "pin code not correct"
            ], 401);
        }

        DB::table('users')->where('email', $email)->update([
            'password' => $password
        ]);
        DB::table('password_resets')->where('email', $email)->delete();

        return response([
            'message' => "password has been reset successfully"
         ], 200);


    } //end method
}
