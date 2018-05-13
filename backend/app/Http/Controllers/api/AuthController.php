<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
class AuthController extends Controller
{
   
    public function index()
    {
        //
    }

  
    public function login(Request $request)
    {
        try{
            if(!$token = JWTAuth::attempt($request->only('email','password'))){
                return response()->json(['status'=> 'Invalid email/password'], 401);

            }
        }catch(JWTExceptions $err){
            return response()->json(['status'=> 'failed to login'], 500);
        }
        return response()->json([
            'access_token'=> $token,
            'token_type'=> 'morley',
            'expires_in'=> 3600
        ]);
       
    }

   
    public function store(Request $request)
    {
        $user = new User;
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = bcrypt($request->input('password'));
        $user->save();
        return response()->json(['message'=> 'success']);
    }

    

    
    public function show($id)
    {
        //
    }

   
    public function edit($id)
    {
        //
    }

   
    public function update(Request $request, $id)
    {
        //
    }

   
    public function destroy($id)
    {
        //
    }
}
