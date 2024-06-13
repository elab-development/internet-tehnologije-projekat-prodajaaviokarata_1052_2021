<?php

namespace App\Http\Controllers;

use App\Http\Resources\RezervacijaResurs;
use App\Models\Rezervacija;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RezervacijaController extends AbstractController
{
    //index

    public function index()
    {
        $rezervacije = Rezervacija::all();
        return $this->uspesanOdgovor(RezervacijaResurs::collection($rezervacije));
    }

    //show

    public function show($id)
    {
        $rezervacija = Rezervacija::find($id);
        if ($rezervacija == null) {
            return $this->neuspesanOdgovor("Rezervacija nije pronadjena");
        }
        return $this->uspesanOdgovor(new RezervacijaResurs($rezervacija));
    }

    //store

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'vreme_rezervacije' => 'required',
            'user_id' => 'required|numeric',
            'let_id' => 'required|numeric',
        ]);

        if ($validator->fails()) {
            return $this->neuspesanOdgovor('Greska pri validaciji',$validator->errors());
        }

        $rezervacija = new Rezervacija();
        $rezervacija->vreme_rezervacije = $request->vreme_rezervacije;
        $rezervacija->user_id = $request->user_id;
        $rezervacija->let_id = $request->let_id;
        $rezervacija->status = Rezervacija::STATUS_NOVO;
        $rezervacija->save();

        return $this->uspesanOdgovor(new RezervacijaResurs($rezervacija));
    }

    //update

    public function update(Request $request, $id)
    {
        $rezervacija = Rezervacija::find($id);
        if ($rezervacija == null) {
            return $this->neuspesanOdgovor("Rezervacija nije pronadjena");
        }

        $validator = Validator::make($request->all(), [
            'vreme_rezervacije' => 'required',
            'user_id' => 'required|numeric',
            'let_id' => 'required|numeric',
            'status' => 'required'
        ]);

        if ($validator->fails()) {
            return $this->neuspesanOdgovor('Greska pri validaciji',$validator->errors());
        }

        $rezervacija->vreme_rezervacije = $request->vreme_rezervacije;
        $rezervacija->user_id = $request->user_id;
        $rezervacija->let_id = $request->let_id;
        $rezervacija->status = $request->status;
        $rezervacija->save();

        return $this->uspesanOdgovor(new RezervacijaResurs($rezervacija));
    }

    //destroy

    public function destroy($id)
    {
        $rezervacija = Rezervacija::find($id);
        if ($rezervacija == null) {
            return $this->neuspesanOdgovor("Rezervacija nije pronadjena");
        }
        $rezervacija->delete();
        return $this->uspesanOdgovor(new RezervacijaResurs($rezervacija));
    }

    public function otkaziRezervaciju($id)
    {
        $rezervacija = Rezervacija::find($id);
        if ($rezervacija == null) {
            return $this->neuspesanOdgovor("Rezervacija nije pronadjena");
        }
        $rezervacija->status = Rezervacija::STATUS_OTKAZANO;
        $rezervacija->save();
        return $this->uspesanOdgovor(new RezervacijaResurs($rezervacija));
    }
    //potvrdi rezervaciju
    public function rezervisiRezervaciju($id)
    {
        $rezervacija = Rezervacija::find($id);
        if ($rezervacija == null) {
            return $this->neuspesanOdgovor("Rezervacija nije pronadjena");
        }
        $rezervacija->status = Rezervacija::STATUS_REZERVISANO;
        $rezervacija->save();
        return $this->uspesanOdgovor(new RezervacijaResurs($rezervacija));
    }
    
    public function rezervacijeKorisnika($id)
    {
        $rezervacije = Rezervacija::where('user_id', $id)->get();
        return $this->uspesanOdgovor(RezervacijaResurs::collection($rezervacije));
    }
    
    //paginate
    
    public function paginate(Request $request)
    {
        $perPage = $request->perPage ?? 10;
        
        $rezervacije = Rezervacija::paginate($perPage);
        return $this->uspesanOdgovor($rezervacije);
    }

}
