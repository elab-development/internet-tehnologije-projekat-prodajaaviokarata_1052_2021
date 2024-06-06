<?php

namespace App\Http\Controllers;

use App\Http\Resources\AerodromResurs;
use App\Models\Aerodrom;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AerodromController extends AbstractController
{
    //index

    public function index()
    {
        $aerodromi = Aerodrom::all();
        return $this->uspesanOdgovor(AerodromResurs::collection($aerodromi));
    }

    //show

    public function show($id)
    {
        $aerodrom = Aerodrom::find($id);
        if ($aerodrom == null) {
            return $this->neuspesanOdgovor("Aerodrom nije pronadjen");
        }
        return $this->uspesanOdgovor(new AerodromResurs($aerodrom));
    }

    //store

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'naziv' => 'required',
            'skracenica' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->neuspesanOdgovor('Greska pri validaciji',$validator->errors());
        }

        $aerodrom = new Aerodrom();
        $aerodrom->naziv = $request->naziv;
        $aerodrom->skracenica = $request->skracenica;
        $aerodrom->save();

        return $this->uspesanOdgovor(new AerodromResurs($aerodrom));
    }

    //update

    public function update(Request $request, $id)
    {
        $aerodrom = Aerodrom::find($id);
        if ($aerodrom == null) {
            return $this->neuspesanOdgovor("Aerodrom nije pronadjen");
        }

        $validator = Validator::make($request->all(), [
            'naziv' => 'required',
            'skracenica' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->neuspesanOdgovor('Greska pri validaciji',$validator->errors());
        }

        $aerodrom->naziv = $request->naziv;
        $aerodrom->skracenica = $request->skracenica;
        $aerodrom->save();

        return $this->uspesanOdgovor(new AerodromResurs($aerodrom));
    }

    //destroy

    public function destroy($id)
    {
        $aerodrom = Aerodrom::find($id);
        if ($aerodrom == null) {
            return $this->neuspesanOdgovor("Aerodrom nije pronadjen");
        }

        $aerodrom->delete();
        return $this->uspesanOdgovor(new AerodromResurs($aerodrom));
    }
}
