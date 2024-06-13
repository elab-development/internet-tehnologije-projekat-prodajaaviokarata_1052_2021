<?php

namespace App\Http\Controllers;

use App\Http\Resources\LetResurs;
use App\Models\Let;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LetController extends AbstractController
{

    //index

    public function index()
    {
        $letovi = Let::all();
        return $this->uspesanOdgovor(LetResurs::collection($letovi));
    }

    //show

    public function show($id)
    {
        $let = Let::find($id);
        if ($let == null) {
            return $this->neuspesanOdgovor("Let nije pronadjen");
        }
        return $this->uspesanOdgovor(new LetResurs($let));
    }

    //store

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'avio_kompanija_id' => 'required|numeric',
            'aerodrom_polazak_id' => 'required|numeric',
            'aerodrom_dolazak_id' => 'required|numeric',
            'vreme_polaska' => 'required',
            'vreme_dolaska' => 'required',
            'cena_karte' => 'required',
            'broj_karata' => 'required'
        ]);

        if ($validator->fails()) {
            return $this->neuspesanOdgovor('Greska pri validaciji',$validator->errors());
        }

        $let = new Let();
        $let->avio_kompanija_id = $request->avio_kompanija_id;
        $let->aerodrom_polazak_id = $request->aerodrom_polazak_id;
        $let->aerodrom_dolazak_id = $request->aerodrom_dolazak_id;
        $let->vreme_polaska = $request->vreme_polaska;
        $let->vreme_dolaska = $request->vreme_dolaska;
        $let->cena_karte = $request->cena_karte;
        $let->broj_karata = $request->broj_karata;
        $let->save();

        return $this->uspesanOdgovor(new LetResurs($let));
    }

    //update

    public function update(Request $request, $id)
    {
        $let = Let::find($id);
        if ($let == null) {
            return $this->neuspesanOdgovor("Let nije pronadjen");
        }

        $validator = Validator::make($request->all(), [
            'avio_kompanija_id' => 'required|numeric',
            'aerodrom_polazak_id' => 'required|numeric',
            'aerodrom_dolazak_id' => 'required|numeric',
            'vreme_polaska' => 'required',
            'vreme_dolaska' => 'required',
            'cena_karte' => 'required',
            'broj_karata' => 'required'
        ]);

        if ($validator->fails()) {
            return $this->neuspesanOdgovor('Greska pri validaciji',$validator->errors());
        }

        $let->avio_kompanija_id = $request->avio_kompanija_id;
        $let->aerodrom_polazak_id = $request->aerodrom_polazak_id;
        $let->aerodrom_dolazak_id = $request->aerodrom_dolazak_id;
        $let->vreme_polaska = $request->vreme_polaska;
        $let->vreme_dolaska = $request->vreme_dolaska;
        $let->cena_karte = $request->cena_karte;
        $let->broj_karata = $request->broj_karata;
        $let->save();

        return $this->uspesanOdgovor(new LetResurs($let));
    }

    //destroy

    public function destroy($id)
    {
        $let = Let::find($id);
        if ($let == null) {
            return $this->neuspesanOdgovor("Let nije pronadjen");
        }

        $let->delete();
        return $this->uspesanOdgovor(new LetResurs($let));
    }
}
