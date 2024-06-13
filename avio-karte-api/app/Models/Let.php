<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Let extends Model
{
    use HasFactory;

    protected $table = 'letovi';

    protected $fillable = [
        'avio_kompanija_id',
        'aerodrom_polazak_id',
        'aerodrom_dolazak_id',
        'vreme_polaska',
        'vreme_dolaska',
        'cena_karte',
        'broj_karata'
    ];

    //relationship
    public function avioKompanija()
    {
        return $this->belongsTo(AvioKompanija::class, 'avio_kompanija_id');
    }

    public function aerodromPolazak()
    {
        return $this->belongsTo(Aerodrom::class, 'aerodrom_polazak_id');
    }

    public function aerodromDolazak()
    {
        return $this->belongsTo(Aerodrom::class, 'aerodrom_dolazak_id');
    }
}
