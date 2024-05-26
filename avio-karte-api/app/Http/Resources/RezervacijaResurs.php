<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RezervacijaResurs extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        //return array with all fields from the database

        return [
            'id' => $this->id,
            'user' => new UserResurs($this->user),
            'vreme_rezervacije' => $this->vreme_rezervacije,
            'let' => new LetResurs($this->let),
            'status' => $this->status,
        ];
    }
}
