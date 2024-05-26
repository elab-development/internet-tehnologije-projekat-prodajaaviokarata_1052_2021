<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Aerodrom extends Model
{
    use HasFactory;

    protected $table = 'aerodromi';

    protected $fillable = [
        'naziv','skracenica'
    ];

    //relationships
    public function polasci()
    {
        return $this->hasMany(Let::class, 'aerodrom_polazak_id');
    }

    public function dolasci()
    {
        return $this->hasMany(Let::class, 'aerodrom_dolazak_id');
    }
}
