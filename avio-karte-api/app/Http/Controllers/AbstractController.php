<?php

namespace App\Http\Controllers;

class AbstractController
{
    public function uspesanOdgovor($data, $status = 200)
    {
        return response()->json([
            'uspesno' => true,
            'podaci' => $data
        ], $status);
    }

    public function neuspesanOdgovor(string $poruka, $greske = [], $status = 400)
    {
        return response()->json([
            'uspesno' => false,
            'poruka' => $poruka,
            'greske' => $greske
        ], $status);
    }
}
