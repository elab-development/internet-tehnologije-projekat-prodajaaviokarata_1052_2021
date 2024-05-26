<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LetResurs extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

        return [
            'id' => $this->id,
            'vreme_polaska' => $this->vreme_polaska,
            'vreme_dolaska' => $this->vreme_dolaska,
            'cena_karte' => $this->cena_karte,
            'broj_karata' => $this->broj_karata,
            'avio_kompanija' => new AvioKompanijaResurs($this->avioKompanija),
            'aerodrom_polazak' => new AerodromResurs($this->aerodromPolazak),
            'aerodrom_dolazak' => new AerodromResurs($this->aerodromDolazak)
        ];
    }
}
