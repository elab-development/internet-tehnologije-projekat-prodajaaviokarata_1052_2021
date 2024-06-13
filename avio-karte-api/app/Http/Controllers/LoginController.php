<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResurs;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class LoginController extends AbstractController
{

    public function login(Request $request)
    {
        if (Auth::attempt($request->only('email', 'password'))){
            $user = Auth::user();
            $token = $user->createToken('token')->plainTextToken;
            return $this->uspesanOdgovor([
                'token' => $token,
                'user' => new UserResurs($user)
            ]);
        } else {
            return $this->neuspesanOdgovor('Neuspesna prijava. Proverite podatke.');
        }
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()){
            return $this->neuspesanOdgovor('Greska pri validaciji', $validator->errors());
        }

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->role = 'user';
        $user->save();

       return $this->uspesanOdgovor([
            'user' => new UserResurs($user),
            'poruka' => 'Uspesno ste se registrovali. Sada se mozete prijaviti.'
        ]);

    }

}
