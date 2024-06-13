<?php

namespace App\Http\Controllers;

use App\Http\Resources\AvioKompanijaResurs;
use App\Models\AvioKompanija;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AvioKompanijaController extends AbstractController
{
    //index

    public function index()
    {
        $aviokompanije = AvioKompanija::all();
        return $this->uspesanOdgovor(AvioKompanijaResurs::collection($aviokompanije));
    }

    //show

    public function show($id)
    {
        $aviokompanija = AvioKompanija::find($id);
        if ($aviokompanija == null) {
            return $this->neuspesanOdgovor("Aviokompanija nije pronadjena");
        }
        return $this->uspesanOdgovor(new AvioKompanijaResurs($aviokompanija));
    }

    //store

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'naziv_kompanije' => 'required'
        ]);

        if ($validator->fails()) {
            return $this->neuspesanOdgovor('Greska pri validaciji',$validator->errors());
        }

        $aviokompanija = new AvioKompanija();
        $aviokompanija->naziv_kompanije = $request->naziv_kompanije;
        $aviokompanija->save();

        return $this->uspesanOdgovor(new AvioKompanijaResurs($aviokompanija));
    }

    //update

    public function update(Request $request, $id)
    {
        $aviokompanija = AvioKompanija::find($id);
        if ($aviokompanija == null) {
            return $this->neuspesanOdgovor("Aviokompanija nije pronadjena");
        }

        $validator = Validator::make($request->all(), [
            'naziv_kompanije' => 'required'
        ]);

        if ($validator->fails()) {
            return $this->neuspesanOdgovor('Greska pri validaciji',$validator->errors());
        }

        $aviokompanija->naziv_kompanije = $request->naziv_kompanije;
        $aviokompanija->save();

        return $this->uspesanOdgovor(new AvioKompanijaResurs($aviokompanija));
    }

    //destroy

    public function destroy($id)
    {
        $aviokompanija = AvioKompanija::find($id);
        if ($aviokompanija == null) {
            return $this->neuspesanOdgovor("Aviokompanija nije pronadjena");
        }

        $aviokompanija->delete();

        return $this->uspesanOdgovor(new AvioKompanijaResurs($aviokompanija));
    }
}
